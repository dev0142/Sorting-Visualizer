var c_delay;
export const Insertion=(div_sizes, divs,dt, w_size)=>{
    c_delay=0;
    insertionSort(div_sizes, divs,dt, w_size);
}
// 2,4,5,3,6,5
//
const insertionSort=(div_sizes, divs,dt, w_size)=>{
    let i;
    for(i=1;i<div_sizes.length;i++){
        let key=div_sizes[i];
        div_update(divs[i], div_sizes[i], "blue", dt, w_size);
        let j;
        for(j=i-1;(j>=0 && key<div_sizes[j]);j--){
            div_update(divs[j], div_sizes[j], "red", dt, w_size);
            div_update(divs[j+1], div_sizes[j+1], "red", dt, w_size);

                div_sizes[j+1]=div_sizes[j]; 
                // div_update(divs[j], div_sizes[j], "red", dt, w_size);
                div_update(divs[j+1], div_sizes[j+1], "red", dt, w_size);
                div_update(divs[j], div_sizes[j], "black", dt, w_size);
                if(j==(i-1))
            {
                div_update(divs[j+1],div_sizes[j+1],"yellow",dt,w_size);//Color update
            }
                else
            {
                div_update(divs[j+1],div_sizes[j+1],"black",dt,w_size);//Color update
            }

            }

            div_sizes[j+1] =key;
            for(var t=0;t<i;t++)
                {
                    div_update(divs[t],div_sizes[t],"green",dt,w_size);//Color update
                }
            }
            div_update(divs[i-1],div_sizes[i-1],"green",dt,w_size);//Color update
        
    
    console.log(div_sizes);
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

export default Insertion