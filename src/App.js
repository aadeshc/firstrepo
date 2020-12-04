import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mohan from './Helloworld'
import Sharing from './AshutoshDemo/SharingState'
import LifeCycleMethods from './LifeCycleMethods';
import Helloworld from './Helloworld';
import { Parent } from './PerformanceOpti.js/Parent';


import { Provider } from 'react-redux'
import { store } from './Redux/store'
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Enq from './Enq';
import Riyaz from './HelloWorldRiyaz'
import { MyFunctionalComp } from './FunctionalComp.js/FunctionalComponent';
import Inputform from './Inputform';
import HelloWorldRiyaz from './HelloWorldRiyaz';

//props --> parent component to child component
// read only

//state and props -->
// props - Read Only--> you cant change
// state-> Read/Write --> You can change state
// props--> data from parent component to child component



var obj = {
  Name: "Riyaz",
  Age: 30,
  City: "Chennai"
}



// render props 
// function as argument and return a react element

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <Inputform />
      </Provider> */}

      <Parent />
    </div>
  );
}

export default App;
