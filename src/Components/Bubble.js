var c_delay;
export const Bubble=(div_sizes,divs,dt,w_size)=>{
    c_delay=0;
    bubbleSort(div_sizes,divs,dt,w_size);

}
const bubbleSort=(div_sizes,divs,dt,w_size)=>{
    for(let i=0 ; i <div_sizes.length;i++){
        // let swapping=false; //*
        let j;
        for(j=0;j<div_sizes.length-i-1;j++){
            div_update(divs[j],div_sizes[j],'yellow',dt,w_size);
            
            if(div_sizes[j]>div_sizes[j+1]){

                div_update(divs[j],div_sizes[j],'red',dt,w_size);
                div_update(divs[j+1],div_sizes[j+1],'red',dt,w_size);

                let temp=0;
                temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j],'red',dt,w_size);
                div_update(divs[j+1],div_sizes[j+1],'red',dt,w_size);
                // swapping=true; //*
            }
            div_update(divs[j],div_sizes[j],'black',dt,w_size);
        }
        div_update(divs[j],div_sizes[j],'green',dt,w_size);
        // if(swapping==false)      
        // {                    //*for better optimization 
        //     break;
        // }
    }
    div_update(divs[0],div_sizes[0],'green',dt,w_size);
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
export default Bubble;