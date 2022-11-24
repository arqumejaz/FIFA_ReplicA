function CardLower(props) {
    return (  
        <div>
            
  <div className="card" style={{width:"25vw", height:"70px"}}>
    <div className="row g-0">
      <div className="col-sm-4 position-relative" style={{width:"70px", height:"70px"}}>
        <img src={props.imgsrc} className="card-img fit-cover w-100 h-100" alt="..."
        style={{width:"50px"}}/>
      </div>

      <div className="col-sm-8">
        <div className="card-body"style={{display:"inline-block", width:"100%"}}>
          <h5 className="card-title" style={{display:"inline-block"}}>
          {props.title}
          </h5>
          <h5 style={{marginLeft:"100%", display:"inline-block"}}>{props.rating}</h5>
        </div>

        
      </div>
    </div>
  </div>
</div>
        
    );
}

export default CardLower;