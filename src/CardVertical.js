function CardVertical(props) {
    return (  
        <div>
            <div className="cards">
            <div className="card" style={{width:"20.6rem",backgroundColor:"white",marginLeft:20}} >
<img className="card-img-top"  style={{width:330,height:190}} src={props.imgsrc} alt="Card image cap"/>
<div className="card-body">
    
    <h2 style={{marginLeft:"2%" ,fontFamily:"Serif"}}>{props.name}</h2>
    <p className="card-text" style={{marginLeft:"2%",fontFamily:"serif"}}>{props.description}</p>
    
    <button type="button" className="btn btn-primary">See More About this</button>
  </div> 
</div>
</div>
        </div>
    );
}

export default CardVertical;