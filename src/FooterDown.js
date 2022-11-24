function FooterDown() {
    return (  
        <div>
            <hr></hr>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"5%"}}>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Disabled</a>
      </li>
    </ul>

  </div>
  <div classname="btn-group dropup">
  <button type="button" classname="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Language EN
  </button>
  <div classname="dropdown-menu">
    
  </div>
</div>
</nav>
<p style={{marginLeft:"5%"}}><strong>Copyright 1994 -2022 FIFA. All rights reserved.</strong></p>
        </div>
    );
}

export default FooterDown;