import React from 'react'
import "./CSS/leftBar.css"
import { useDispatch, useSelector } from 'react-redux';

const Left_Bar = ({sectionActive,onClick}) => {
  const { data: products } = useSelector((state) => state.product);
 const [products_Data, setproducts_Data] = React.useState(products)
 console.log(products_Data[0].products[0].Image);
  return (
   <>
   <div className="leftBar">
    {
      products_Data.map((index,idx)=>{
        return(
                    <div className="leftbarContent" onClick={()=>onClick(idx)} style={{background:sectionActive===idx?'#5da9e9':'',color:sectionActive===idx?'#fff':'#737d94'}} key={"CardBox" + idx}>
                      {index.category_name}
                    </div>
        )
      })
    }
   </div>
   </>
  )
}

export default Left_Bar