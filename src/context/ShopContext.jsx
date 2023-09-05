import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const [CartArray,setCartArray] = useState([]);
    const [Cart,setCart] = useState({title : "", img : "", base : "", scoop : "" , cost : ""});

    function pushData (base,scoop,cost,img,title) {
        setCart({title : `${title}`, img : `${img}`, base : `${base}`, scoop : `${scoop}` , cost : `${cost}` })
    }

    useEffect(()=> {
        setCartArray((prev) => [...prev,Cart]);
    },[Cart])

    const contextValue = {
        pushData,
        CartArray
    }
    
    console.log(CartArray);
    //console.log(cart)
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}