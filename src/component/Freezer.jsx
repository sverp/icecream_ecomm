import { useState } from 'react'
import  Flavour  from '../myJson/flavour.json'
import { ItemSelection } from './ItemSelection';



export function Freezer(){

    const [myFlavour, setMyFlavour] = useState({title : "", img : ""});
    
    function handleClick(item ){
        setMyFlavour({ title : `${item.title}`,img : `${item.img}`})
    }

    return(
        <div className='container'>
                <h1>Select your flavour</h1>
                <div className='row'>
                    {
                        Flavour.map((i) => {
                            return (
                                <img className='col-2' src={i.img} alt={i.title} height="150px" width="150px" onClick={() => handleClick(i)}/>
                            )
                        })
                    }
                </div>
                <div className='card'>
                    <ItemSelection title ={myFlavour.title} img = {myFlavour.img} /> 
                </div>
                
        </div>
    )
}