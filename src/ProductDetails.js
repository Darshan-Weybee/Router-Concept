import React from "react";
import { useParams } from "react-router-dom";

const product = [
    {
        name : "burger1",
        price : "60",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYQjN4gCJE7JB3Q2ZtMO1pHoKhnrFGi15aMM6ewBh-dU8SqfHDyzK-MP8dXsg-JkF7_0&usqp=CAU"
    },
    {
        name : "burger1",
        price : "90",
        img : "https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?k=20&m=1254672762&s=170667a&w=0&h=aNzUqoy9KLWAz2TslF11kvRYzX1pGOs9dgkxeHH5lvU="
    },
    {
        name : "burger2",
        price : "70",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg"
    },
    {
        name : "sandwitch1",
        price : "60",
        img : "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/sandwich-recipes.jpg"
    },
    {
        name : "sandwitch2",
        price : "70",
        img : "https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900"
    },
    {
        name : "sandwitch3",
        price : "80",
        img : "https://static.toiimg.com/thumb/60072777.cms?imgsize=574678&width=800&height=800"
    },
]

function display(params){
    const name  = params.name;
    const price  = params.price;

    if(price){
        return product.map((pdt,index) => {
            if(pdt.name === name && pdt.price === price) 
            return <img src={pdt.img} alt={name} key={index}/>
        return null;
        })
    }
    else{
        return product.map((pdt,index) =>{
            if(pdt.name === name) 
                return <img src={pdt.img} alt={name} key={index}/>
            return null;
        })
    }

}

function ProductDetails(){
    const params = useParams();
    return(
        <div>
            {display(params)}
        </div>
    )
}

export default ProductDetails