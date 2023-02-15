import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../Redux/CartSlice"

const Right_Bar = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  const CartItem = useSelector((state) => state.cart);
  const addItem = (obj) => {
    dispatch(add(obj.id));
   
  };

  const removeItem = (obj1) => {
    dispatch(remove(obj1.id));
  };
  
  const [products_Data, setproducts_Data] = React.useState(products);

  const myRefs = React.useRef([]);
  myRefs.current = products_Data.map((element, i) => myRefs.current[i] ?? React.createRef());

  return (
    <>
      {products_Data?.map((item, idx) => (
        <div key={idx} ref={myRefs[idx]} id={`product-container-${idx}`} >
          <h3 className="heading">{item.category_name} </h3>
          <div style={{ display: "flex", overflowX: "scroll" }}>
            {item?.products.map((pp, kk) => {
              return(
                
              <div
                key={kk}
                style={{
                  margin: ".5em 1em .5em 1em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.3em",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10vw",
                    height: "10vh",
                    position: "relative",
                  }}
                >
                  <img
                    src={pp.Image}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
{CartItem.includes(pp.id)?<button
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: " rgba(64, 213, 137, 1)",
                      position: "absolute",
                      bottom: "0%",
                      left: "50%",
                      border: "none",
                      cursor:"pointer"
                    }}
                    onClick={() => {
                      removeItem(pp);
                    }}
                  >
                    -
                  </button>:<button
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: " rgba(64, 213, 137, 1)",
                      position: "absolute",
                      bottom: "0%",
                      left: "50%",
                      border: "none",
                      cursor:"pointer"
                    }}
                    onClick={() => {
                    addItem(pp);
                    }}
                  >
                    +
                  </button> }
                  
                 
                </div>
                <h3>Rs:{pp.prize}</h3>
                <h4>{pp.name}</h4>
                <h5>{pp.quantity}</h5>
              </div>
              )
             
                  })}
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "grey",
              height: "1px",
              margin: "1em 0 1em 0",
              border: "1px solid rgba(237, 237, 237, 1)",
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Right_Bar;
