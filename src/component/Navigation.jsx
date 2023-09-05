import { Link } from "react-router-dom"
export default function Navigation(){
    return (
        <div className="nav">  
            
            <div className="nav-left">
                <a href="/" className="brand"><img src="src/images/logo.svg" alt="logo" height="200px" />ceCream</a>
                
            </div>
            <div className="nav-center">
            <div className="tabs">
                    <a><Link to="/">select</Link></a>
                    <a><Link to="/cart">cart</Link></a>
                </div>
            </div>
            <div className="nav-right"></div>
          
               
        </div>
        
        
    )
}