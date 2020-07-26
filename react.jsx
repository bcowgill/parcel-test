   import './styles.scss';
   import React from 'react';
   import ReactDOM from 'react-dom';

   // importing like this works...
   import thing from './facade/facade';
   import { that } from './facade/facade';

   // importing like this blows up at run time...
   //import thing from './facade';
   //import { that } from './facade';
   //import thing from './facade/index.js';
   //import { that } from './facade/index.js';

   console.log(`react. The ${thing} is, I am ${that} guy!`);

   const App = () => (
      <div>
        <h1 key="header">Hello ALL from React and parcel!</h1>
        <p key="para">The {thing} is, I am {that} guy!</p>
      </div>
   );
   App.displayName = 'App';

   const rootDiv = document.getElementById( 'root' );
   ReactDOM.render( <App />, rootDiv );
