import CardVertical from './CardVertical';
import CR7 from './images/CR7.jpg';
import {useState} from "react";
import CardHorizontal from './CardHorizontal';
function LeftMid() {

    // const handleDelete=(soccer)=>{
    //     const fiterdata=data.filter((se)=> se.name != soccer);
    //     setData(fiterdata);
    // }

    const[data,setData]=useState(
        [
            {name:"CR7", description:"Our top player is working hard to maintain his undefeated records", imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFHWvmLBrC789A0Cg49ONl8lE-8oAcLpHbg&usqp=CAU"},
            {name:"Injury", description:"Player injured", imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkRD1GKpepzHdaUU_Tao5a2xY2sxI7-iQYw&usqp=CAU"},
            {name:"Goalkeeper", description:"GoalKeeper to be trained", imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_QMFCXgx2cM6RkMhl5FsStImAcRd-UrYdQ&usqp=CAU"}
        ]
    );
    

    return (  
        <div>
            {
                data.map((football)=>(
                    <div style={{display:"inline-block"}}>
                        <CardVertical name={football.name} description={football.description} 
                        imgsrc={football.imgsrc}/>
                        {/* <button onClick={(se)=>handleDelete(football.name)}>Delete</button> */}
                    </div>

                ))
            }
            


        </div>
    );
}

export default LeftMid;