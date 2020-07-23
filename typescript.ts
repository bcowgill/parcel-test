   import './styles.scss';
// sometimes this works
//import thing from './facade';
//   import { that } from './facade';
// and sometimes you have to import directly
import thing from './facade/facade';
import { that } from './facade/facade';

   console.log(`typescript. The ${thing} is, I am ${that} guy!`);

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

const data = getData();

if (typeof document !== 'undefined') {

   const framework = document.getElementById( 'tsapp' );
	const render = () =>
	  {
		 framework.style.color = '#ff3e96';
		 framework.style.fontSize = '2rem';
		 framework.style.fontWeight = 'bold';
		 framework.innerHTML = `<h1>Hello from ${data.framework} and ${data.packager}!</h1><p>The ${thing} is, I am ${that} guy!</p>`;
	  };


   window.addEventListener(
	  'load',
	  () =>
	  {
		 setTimeout(render, 1000);
	  });
}

console.log(`Hello from ${data.framework} and ${data.packager}!`);
