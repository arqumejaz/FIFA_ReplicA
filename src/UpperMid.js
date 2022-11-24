import CardVertical from './CardVertical';
import CR7 from './images/CR7.jpg';
import {useState} from "react";
import CardHorizontal from './CardHorizontal';
function UpperMid() {

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
    const[horData,setHordata]=useState(
        [
            {title:"Qatar", detail:"Football World Cup 2022 to be held in Qatar, Entire world is desperate", picture:"https://i.pinimg.com/736x/df/a4/d8/dfa4d855985684690eb5c689ce6847b8--doha-qatar.jpg"},
            {title:"World Cup 2022", detail:"Most astonishing event ever arranged for a football World Cup", picture:"https://i.pinimg.com/474x/8b/fd/c0/8bfdc0caa9db3d0bed87a4a51e197ea2.jpg"},
            {title:"Saudi Arabia", detail:"Saudi Arabia announces one day official leave to celebrate victory", picture:"https://www.worldbank.org/content/dam/photos/780x439/2022/feb-3/Saudi-Arabia-Riyadh.jpg"},
            {title:"Elon Musk", detail:"Elon Musk wishes to buy Ronaldo's club", picture:"https://i.pinimg.com/736x/80/35/03/80350376d5c7b9aedd97e813e8de6c4c.jpg"}
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
            <br></br>
            <br></br>
            <h4 style={{marginLeft:"2%", fontFamily:"Times New Roman", color:"color: rgb(12, 68, 114)"}}>
                <strong>MORE</strong> 
            </h4>
            <hr></hr>
            {
                horData.map((cup)=>(
                    <div style={{display:"inline-block"}}>
                        <CardHorizontal name={cup.title} description={cup.detail} 
                        imgsrc={cup.picture}/>
                    </div>

                ))
            }


        </div>
    );
}

export default UpperMid;