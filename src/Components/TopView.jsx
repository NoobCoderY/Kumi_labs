import React from 'react'
import "./CSS/TopView.css"
import { useDispatch, useSelector } from "react-redux";


const TopView = ({sectionActive,onClick}) => {
    const { data: products } = useSelector((state) => state.product);
    console.log(products)
  return (
    <>
    <div className="top_container">
    {
        products.map((index,idx)=>{
            return(
                <div className="symbol_container"onClick={()=>onClick(idx)}>
                    <div className="image_container" style={{background:sectionActive===idx?'#5DA9E9':'#ededed',color:sectionActive===idx?'#5DA9E9':''}}>
                        <img src={index.category_image} alt=""></img>
                    </div>
                    <div className='symbol_category_name'>{index.category_name}</div>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default TopView