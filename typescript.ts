   import './styles.scss';

   const framework = document.getElementById( 'tsapp' );

   interface Data
   {
	  framework: string;
	  packager: string;
   }

   function getData(): Data
   {
	  return {
		 framework: 'Typescript',
		 packager: 'Parcel',
	  };
   }

   window.addEventListener(
	  'load',
	  () =>
	  {
		 framework.style.color = '#ff3e96';
		 framework.style.fontSize = '2rem';
		 framework.style.fontWeight = 'bold';
		 const data = getData();
		 framework.innerHTML = `Hello from ${data.framework} and ${data.packager}!`;
	  } );
