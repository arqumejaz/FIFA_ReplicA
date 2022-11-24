import {useState} from "react";
import CardLower from "./CardLower";

function Men() {
    const[mendata,setHordata]=useState(
        [
            {title:"Brazil", rating:"5.2", imgsrc:"https://i.pinimg.com/564x/df/02/0a/df020ab5fc06f4f3b49747a1643b019a.jpg"},
            {title:"Belgium", rating:"5.1", imgsrc:"https://i.pinimg.com/600x315/00/ec/36/00ec36156f9c45c22ab437397903fbaa.jpg"},
            {title:"Argentina", rating:"4.9", imgsrc:"https://i.pinimg.com/736x/45/21/18/45211855727fee27d4e075dca8a56bc2.jpg"},
            {title:"france", rating:"4.6", imgsrc:"https://i.pinimg.com/564x/09/a7/91/09a791be0aa03e3b35933c12cbf618f8--flag-of-france-learn-languages.jpg"}
        ]
    );
    return (  
        <div>
            {
                mendata.map((country)=>(
                    <div style={{display:"inline-block"}}>
                        <CardLower title={country.title} rating={country.rating} 
                        imgsrc={country.imgsrc}/>
                    </div>

                ))
            }
        </div>
    );
}

export default Men;