//creating Componnet;
// component ka naam hamesha capital letter se start hota hai.js

// function component_name(){
//     return(  //fir hame kuch return karna padta hai,jab ham jahan bhi isse import kar rahe hai
                //to jo return main jeezen hai, vo hi use hogi
//         <h1>Hello World</h1>
//     )
// }
import './App.css';

function App(){
    //javascript yaha pe likh sakte hai
    let a=2;
    return(
        
        //<> Wrapp karte hai, isko hame wrap karna padta hai, kyunki hame multiple element return karna padta hai</>
        //H1, main likh diya , yeah component hai
        //{as a variable, return ho jaye gi javascript}

        // class: is a Reserved keyword in react
        // isliye hame className use karte hai
        <div>
            {a}
            <h1 className='main'>Hello World i am Componnet</h1>
            <p style={{backgroundColor:'red',color:'pink'}}>Hello From my side </p>
        </div>
        // {yeah to javascript ke liye use karte the na}
        // {{double curly braces}}
 
    )
}
//ab hame isko export karna pade ga;
export default App;
//export default app ka naam:   App