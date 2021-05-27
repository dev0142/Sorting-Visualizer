import React, { useState, useEffect } from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "react-rangeslider/lib/index.css";

import Merge from "./Components/Merge";
import Selection from './Components/Selection';
import Bubble from './Components/Bubble';
import Quick from './Components/Quick';
import Insertion from './Components/Insertion';

import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function App() {
  const [val, setVal] = useState(3);
  const [size, setSize] = useState(40);

  const updateVal = (e, data) => {
    setVal(data);
  };

  
  var div_sizes = [];
  var cont;
  var divs = [];
  

  
  const speedAlgo = (val) => {
    if (val === 1) {
      return 1000; //dt=1000 delay time
    } else if (val === 2) {
      return 500;
    } else if (val === 3) {
      return 100;
    } else if (val === 4) {
      return 50;
    } else if (val === 5) {
      return 10;
    }
  };
  
  const updateSize = (e, data) => {
    setSize(data);
    // click1();
  };
  
  useEffect(()=> {
    cont = document.getElementById("array-cont");
    cont.style = "flex-direction:row";
    click1();
  });
  

 


  
  const click1 = () => {
    cont.innerHTML = "";
    
    for (let i = 0; i < size; i++) {
      let rand = randomInt(30, 500);
      div_sizes[i] = rand;
      divs[i] = document.createElement("div");
      cont.appendChild(divs[i]);
      
      divs[i].style =
      " margin:1px ;background:black; width:" +
      800 / size +
      "px; height:" +
      div_sizes[i] +
      "px;border-end-end-radius:4px;border-end-start-radius: 4px;";
    }
    
  };
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  // Calling all sorting algorithms
  const MergeSort=()=>{
    
    Merge(div_sizes,divs,0,div_sizes.length - 1,speedAlgo(val),size);
    
  }
  const SelectionSort=()=>{
    
    Selection(div_sizes,divs,speedAlgo(val),size);
    
  }
  const BubbleSort=()=>{
    
    Bubble(div_sizes,divs,speedAlgo(val),size);
    
  }
  const QuickSort=()=>{
    
    Quick(div_sizes,divs,speedAlgo(val),size);
    
  }
  const InsertionSort=()=>{
    
    Insertion(div_sizes,divs,speedAlgo(val),size);
    
  }
  
  
  
  // window.onload=update_array_size();
  // function update_array_size()
  // {
  //     click1();
  // }

  const marks1 = [
    {
      value: 1,
      label: "1s",
    },
    {
      value: 2,
      label: "500",
    },
    {
      value: 3,
      label: "100",
    },
    {
      value: 4,
      label: "50",
    },
    {
      value: 5,
      label: "10ms",
    },
  ];

  const marks2 = [
    {
      value: 10,
      label: "Min",
    },
    {
      value: 55,
      label: "Mid",
    },
    {
      value: 100,
      label: "Max",
    },
  ];

  return (
    <div className="App">
      <div className="main-heading">
        <div className="slider1">
          <Typography gutterBottom>Speed of Algorithm</Typography>
          <Slider
            id='s1'
            valueLabelDisplay="auto"
            min={1}
            max={5}
            defaultValue={3}
            marks={marks1}
            onChange={updateVal}
         
          />
        </div>
        <div className="slider2">
          <Typography gutterBottom>Size of Array</Typography>
          <Slider
            id='s2'
            min={10}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            defaultValue={40}
            marks={marks2}
            onChange={updateSize}
        
          />
        </div>

        <div className="heading">
          <h1>
            <center>Sorting Visualizer</center>
          </h1>
        </div>
      </div>

      <div className="main-container">
        <div className="container-btn-left">
          <button className="btn btn-danger" id="agenerate" onClick={click1}>
            Generate Random Array
          </button>
          <button
            className="btn btn-primary " id="merge" onClick={MergeSort}>
            Merge Sort
          </button>
          <button className="btn btn-primary" id="bubble" onClick={BubbleSort}>
            Bubble Sort
          </button>
          <button className="btn btn-primary" id="selection" onClick={SelectionSort}>
            Selection Sort
          </button>
          <button className="btn btn-primary" id="quick" onClick={QuickSort}>
            Quick Sort
          </button>
          <button className="btn btn-primary" id="insertion" onClick={InsertionSort}>
            Insertion Sort
          </button>
          <button className="btn btn-primary" id="heap" >
            Heap Sort
          </button>
        </div>

        <div className="container" id="main-cont">
          <div className="array-bar" id="array-cont"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
