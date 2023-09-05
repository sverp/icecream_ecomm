
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom";

export default function Cart(){

    const { CartArray } = useContext(ShopContext);
    console.log(CartArray);

    if(CartArray.length === 2){
        return <h1 className="is-center">Cart is empty!</h1>;
        
    }

    return (
        <div className="container">  
            
            <table className="striped">
                <tr>
                    <th>Flavour</th>
                    <th>base</th>
                    <th>scoops</th>
                    <th>cost</th>
                </tr>
                {CartArray.map(element => {
                    if(element.title === ""){
                        return null;
                    }
                    
                    return (
                        <tr>
                            <td>{element.title}</td>
                            <td>{element.base}</td>
                            <td>{element.scoop}</td>
                            <td>{element.cost}</td>
                        </tr>
                    
                    ) 
                    })
                }
            </table>
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2">
                <a className="button text-center is-full-width">Continue</a>
                </div>
                
            </div>
        </div>
    )
}