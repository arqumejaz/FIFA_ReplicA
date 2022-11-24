import FooterUp from "./Footer";
import FooterDown from "./FooterDown";
import FooterLeft from "./FooterLeft";
import FooterMid from "./FooterMid";
import LeftMid from "./LeftMid";
import Men from "./Men";
import Menu from "./Menu";
import UpperMid from "./UpperMid";
import Women from "./Women";

function Fifa() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12" style={{ backgroundColor:"grey" }}>
                    <Menu/>
                    <br></br>
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-3" style={{ border: "1px solid white", backgroundColor:"#2981d4" }}>
                    <LeftMid/>
                </div>
                <div className="col-lg-9" style={{ border: "1px solid white" }}>
                    <div className="row">
                        <div className="col-lg-12" style={{ border: "1px solid black", backgroundColor:"#2981d4"  }}>
                            <br></br>
                            <UpperMid/>
                            <br></br>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" style={{ border: "1px solid black" }}>
                            <br></br>
                            
                            <div style={{marginLeft:"10%"}}>
                            <h3>Men</h3>
                                <Men/>
                            </div>
                            <br></br>
                        </div>
                        <div className="col-lg-6" style={{ border: "1px solid black" }}>
                        <br></br>
                            
                            <div style={{marginLeft:"10%"}}>
                            <h3>Women</h3>
                                <Women/>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-12" style={{ border: "1px solid black" }}>
                    <FooterUp/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6" style={{ border: "1px solid white"}}>
                    <div className="row">
                        <div className="col-lg-6" style={{ border: "1px solid white" }}>
                        <FooterLeft/>
                        </div>
                        <div className="col-lg-6" style={{ border: "1px solid white" }}>
                        <FooterMid/>
                        </div>
            </div>
                </div>
                <div className="col-lg-6" style={{ border: "1px solid white" }}>
                    
                </div>
            </div>
            <div>
                <FooterDown/>
            </div>
    </div>
       
);
}

export default Fifa;