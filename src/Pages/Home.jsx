// import React, { useState, useEffect } from "react";
// import mergeSort from "../Components/MergeSort";

// function Home(props) {
//   var slider=parseInt(props.range);
//   console.log(slider)
//     // const [slide, setslide] = useState(slider);
//     // console.log(props.range);
//     // const [state,setState]=useState(props.range);
//     // console.log(state);
//     // setState(state);
  
    
//     // var slide1=parseInt(props.range);
//     // console.log(slide1);
//     // useEffect(()=>{
//     //   setslide(slider);
//     // })
//   var div_sizes = [];
//   var cont;
//   var arraygen, speedslider, inp_speed;
//   var mergebutton;
//   var divs = [];
//   var dt;
  

//   // var maincont;
//   window.onload=function main(){
//     cont = document.getElementById("array-cont");
//     cont.style = "flex-direction:row";
    
//     arraygen = document.getElementById("agenerate");
//     arraygen.addEventListener("click", click1);
   
//     // arraygen.addEventListener("click",speedAlgo);

//     mergebutton = document.getElementById("merge");
//     // console.log(mergebutton);
    
   
//     console.log(dt);
//     mergebutton.addEventListener("click",()=>mergeSort(div_sizes, divs, 0, div_sizes.length - 1,slider));
//     // speedslider=document.getElementById("slider-1");
//     // console.log(speedslider);
//     // speedslider.addEventListener("onChange",((event) => setRange(event.target.value)));
    
// };

// // const speedAlgo=()=>{
// //     if(slide === 1){
// //       console.log("yes i ma here");
// //         dt=1000;
// //     }
// //     else if(slide === 2){
// //         return 500;
// //     }
// //     else if(slide === 3){
      
// //         dt= 100;
// //     }
// //     else if(slide === 4){
// //         dt= 50;
// //     }
// //     else if(slide === 5){
// //         dt= 10;
// //     }
// //     console.log(dt);
// // }

//     // console.log(rangeval);

//   const click1 = () => {
//     cont.innerHTML = "";

//     for (let i = 0; i < 45; i++) {
//       let rand = randomInt(30, 500);
//       div_sizes[i] = rand;
//       divs[i] = document.createElement("div");
//       cont.appendChild(divs[i]);
//       // divs[i].setAttribute("className","array-bar");

//       divs[i].style =
//         "border:2px solid black; margin:2px ;background:black; width:20px; height:" +
//         div_sizes[i] +
//         "px;";
//     }

//     // setdivs(divs => [...divs]);
//   };
//   const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   //merge sort algorithm

//   //     var delay_time=1000      //Decrease numerator to increase speed.
//   // var c_delay=0;//This is updated ov every div change so that visualization is visible.

//   // function div_update(array,height,color)
//   // {
//   //     window.setTimeout(function(){
//   //         array[height].style="width:" + (100/height) + "%; height:" + height + "%; background-color:" + color + ";";
//   //     },c_delay+=delay_time);
//   // }
//   return <></>;
// }

// export default Home;
