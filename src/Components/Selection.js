var c_delay;
export const Selection = (div_sizes, divs, dt, w_size)=>
{
    c_delay=0;
    // disable_butt();
    selectionSort(div_sizes, divs, dt, w_size);
    // enable_butt(dt);

}   

const selectionSort=(div_sizes, divs, dt, w_size)=>
{
    for(let i=0;i<div_sizes.length;i++){
        
        let temp=0;
        let min=i;
        div_update(divs[i],div_sizes[i],'red',dt,w_size);
        for(let j=i+1;j<div_sizes.length;j++){
            
            div_update(divs[j],div_sizes[j],'yellow',dt,w_size);
            if(div_sizes[min]>div_sizes[j]){
                
                if(min!=i)
                {
                    div_update(divs[min],div_sizes[min],"black",dt,w_size);//Color update
                }
                
                min=j;   
                div_update(divs[min],div_sizes[min],'red',dt,w_size);
            }else
            {
                div_update(divs[j],div_sizes[j],"black",dt,w_size);//Color update
            }
        }
        if(min!=i)
        {
            temp = div_sizes[min];
            div_sizes[min]=div_sizes[i];
            div_sizes[i]=temp;


            div_update(divs[min],div_sizes[min],"red",dt,w_size);//Height update
            div_update(divs[i],div_sizes[i],"red",dt,w_size);//Height update
            div_update(divs[min],div_sizes[min],"Black",dt,w_size);//Color update
        }
        div_update(divs[i],div_sizes[i],'green',dt,w_size);
    }
    

   

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

export default Selection;