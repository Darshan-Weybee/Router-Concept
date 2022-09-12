import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Welcome To Home Page</h1>
            <button style = {{fontSize : "1.2rem", padding : "1rem"}} onClick={() => navigate("/product", {replace : true})}>See Products</button>
        </div>
    )
}

export default Home;