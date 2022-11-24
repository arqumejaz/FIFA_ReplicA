function CardHorizontal(props) {
    return (  
        <div>
            <div className="card" style={{width:"30vw",backgroundColor:"white",marginLeft:20}}>
    <div className="row g-0">
        <div className="col-sm-5">
            <img src={props.imgsrc} height={10} width={10} className="card-img-top h-100" alt="..." style={{ width:"90px"}}/>
        </div>
        <div className="col-sm-7">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary stretched-link">View Profile</a>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default CardHorizontal;