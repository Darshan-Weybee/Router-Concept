import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";


function order(value){
    if(value === "place") return "Order Placed";
    else if(value === "cancel") return "Order Cancel";
    else return "";
}

function Product(){
    const [searchValue, setSearchParams] = useSearchParams();
    const value = searchValue.get("place");
    return(
        <div className="product">
            <h2>Products</h2>
            
            <nav className="nav">
                <NavLink to="burger">Burger</NavLink>
                <NavLink to="sandwitch">Sandwitches</NavLink>
            </nav>

            <Outlet/>

            <button style={{padding: "1rem", fontSize : "1.1rem"}} onClick={() => setSearchParams({place : "place"})}>Place_Order</button>
            <button style={{padding: "1rem", fontSize : "1.1rem"}} onClick={() => setSearchParams({place : "cancel"})}>Cancel_Order</button>
            <div>
            {
                order(value)
            }
            </div>
        </div>
    )
}

export default Product;