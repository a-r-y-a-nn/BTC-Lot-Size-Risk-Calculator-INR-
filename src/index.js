import React from 'react';
//import react from react , index.js hamri bhot important file hai
import ReactDOM from 'react-dom/client';
//react dom ko import kar rhe hai, matlab , matlab react dom koi dependency hai
//jo ki react-dom/client main padi hai

import App from './App'; //mobile list import kar li hamne
import Mobile from './Mobile'; //mobile list import kar li hamne

const root = ReactDOM.createRoot(document.getElementById('root'));
//ReactDOM 

root.render(//sabse main file hamari index.js hai, yeah index.js yeahi harmi jeezon ko render karti hai
  // ab yeah render kese kar rahi hai, root.render() 
  // yeah render karta hai, yeah index.js main jo code hai, yeahi render karta hai
  // yeah render karta hai, yeah App.js main jo code hai, yeahi render karta hai
  // yeah render karta hai, yeah index.css main jo code hai, yeahi render karta hai



  //React.Strict_Mode isse kya, hoga Error pata chale ga,
  //hmane hello world print kar diya 
  <React.StrictMode> 
    Hello World      
          <App/> 
          <App/>
          <App/>
      
          <Mobile/>
  </React.StrictMode>
);

//App Component:
          //<App1/> ab yeah baar baar print kar ga
          //<App2/> ab yaeh bhi baar baar print kar ga


//Mobile Componnet:
            //Mobile Componnet ko import kar li hamne
            //<Mobile/>ham show karna chahte hai
//Benifit :
          //1. hame kisi component ko multiple baar use karna padta hai
          //2. hame kisi component ko multiple baar use karna padta hai
          //3. hame kisi component ko multiple baar use karna padta hai
          //4. hame kisi component ko multiple baar use karna padta hai
          //5. hame kisi component ko multiple baar use karna padta hai
          //6. hame kisi component ko multiple baar use karna padta hai
          //7. hame kisi component ko multiple baar use karna padta hai
          //8. hame kisi component ko multiple baar use karna padta hai
          //9. hame kisi component ko multiple baar use karna padta hai
          //10. hame kisi component ko multiple baar use karna padta hai
          //11. hame kisi component ko multiple baar use karna padta hai
          //12. hame kisi component ko multiple baar use karna padta hai

   

