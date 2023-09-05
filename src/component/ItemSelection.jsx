import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";

export function ItemSelection(data){
    
    const { pushData } = useContext(ShopContext);

    const {title,img} = data;
    const [base,setBase] = useState("cone");
    const [scoop,setScoop] = useState(0);
    const [cost,setCost] = useState(0);

    function decrement(){
        if(scoop >= 1){
            setScoop(prev => prev - 1)
        }
    }

    function increment(){
        setScoop(prev => prev + 1)
    }

    function valueChange(e){
        setBase(e.target.value)
    }

    useEffect(() => {
        let baseCost = 0;
        if(base === "cone") {
            baseCost = 10;
        }
        else if(base === "cup") {
            baseCost = 5;
        }
        else{
            baseCost = 15;
        }

        let ScoopCost = scoop * 5;

        setCost(ScoopCost + baseCost);
    },[scoop,base])
    

    return (
        <div >
            <h3 className="text-center">{title ? `You selected ${title}` : "No flavour selected"} </h3>

            <div className="row">
                <h3 className="col-2">Choose Base :</h3>
                <select className=" col-3 dropdown" value = {base} onChange={valueChange}>
                    <option value="cone" >Cone</option>
                    <option value="cup" >Cup</option>
                    <option value="waffle" >Waffle</option>
                </select>
            </div>
            
            
            <div className="row">
                <h3 className="col-2">Scoops :</h3> 
                <button className="button col-1" onClick={() => decrement()}>-</button>
                <h4 className="col-1 text-center">{scoop}</h4>
                <button className="button col-1" onClick={() => increment()}>+</button>
            </div>

            <div className="row">
                <h3 className="col-2">Cost :</h3>
                <h3 className="col-3">₹{cost}</h3>
            </div>
            
            <button className="btn btn-lg btn-primary" onClick={ () => pushData(base,scoop,cost,img,title)}>Add this!</button>
        
        </div>
    )
}