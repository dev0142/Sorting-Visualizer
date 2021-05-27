var c_delay;
var button_algo;
var slider_algo;
export const Merge=(div_sizes, divs, l, r, dt, w_size)=>
{ 
  c_delay=0;
  disable_butt();  
  mergeSort(div_sizes, divs, l, r, dt, w_size);
  enable_butt(dt);

}
// 

const mergeSort = (div_sizes, divs, l, r, dt, w_size) => {

  if (r > l) {
    let m = Math.floor((l + r) / 2);

    div_update(divs[m], div_sizes[m], "yellow", dt, w_size); //color updatae
    //console.log(array[m]);
    mergeSort(div_sizes, divs, l, m, dt, w_size);
    mergeSort(div_sizes, divs, m + 1, r, dt, w_size);
    merge(div_sizes, divs, l, m, r, dt, w_size);

  }
};

function merge(div_sizes, divs, l, m, r, dt, w_size) {
  //l=0 m=1 r=2

  // let left = array.slice(l, m + 1);
  // let right = array.slice(m + 1, r + 1);
  var p = l;
  var q = m + 1;
  var Arr = [];
  var k = 0;
  for (var i = l; i <= r; i++) {
    if (p > m) {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red", dt, w_size); //Color update
    } else if (q > r) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red", dt, w_size); //Color update
    } else if (div_sizes[p] < div_sizes[q]) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red", dt, w_size); //Color update
    } else {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red", dt, w_size); //Color update
    }
  }

  for (let t = 0; t < k; t++) {
    div_sizes[l++] = Arr[t];
    div_update(divs[l - 1], div_sizes[l - 1], "green", dt, w_size); //Color update
  }
  // console.log(div_sizes);
  // console.log(div_sizes);
}

function div_update(cont, height, color, dt, w_size) {

  window.setTimeout(function () {
    cont.style =
      " margin:1px; width:" +
      800 / w_size +
      "px; height:" +
      height +
      "px; background-color:" +
      color +
      ";border-end-end-radius:4px;border-end-start-radius: 4px;"
  }, (c_delay += dt));
 

}
const disable_butt=()=>{
  button_algo=document.getElementsByTagName("button");
  slider_algo=document.getElementsByClassName("Mui-disabled")
  slider_algo.disabled=true;
  console.log(slider_algo);
  for(let i=0;i<button_algo.length;i++)
  {
    button_algo[i].disabled=true;
  }
  // for(let i=0;i<slider_algo.length;i++)
  // {
  //   slider_algo[i].disabled=true;
  // }
  // console.log(slider_algo);
 

}
const enable_butt=(dt)=>{
  window.setTimeout(function(){
  button_algo=document.getElementsByTagName("button");
  
  // console.log(button_algo.length);
  
  for(let i=0;i<button_algo.length;i++)
  {
    button_algo[i].disabled=false;
  }
},c_delay+=dt);
}

export default Merge;
// export defaul c_delay;

