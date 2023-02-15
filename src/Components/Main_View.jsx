import React from "react";
import LeftBar from "./Left_Bar";
import RightBar from "./Right_Bar";
import "./CSS/main_view.css";
import { useDispatch, useSelector } from "react-redux";
import TopView from "./TopView";

const Main_View = () => {
  const { data: products } = useSelector((state) => state.product);

  const [products_Data, setproducts_Data] = React.useState(products);

  const scrollContainer = document.getElementById("scrollContainer");

  const idProduct = products_Data.map((_, idx) => {
    const selectedDiv = document.getElementById(`product-container-${idx}`);
    return selectedDiv
      ? selectedDiv.offsetTop +
          selectedDiv.clientHeight -
          (window.innerHeight * 15) / 100
      : 0;
  });

  const idProductHeight = products_Data.map((_, idx) => {
    const selectedDiv = document.getElementById(`product-container-${idx}`);
    return selectedDiv
      ? 
        selectedDiv.offsetTop - (window.innerHeight * 15) / 100
      : 0;
  });

  const [scrolled, setScrolled] = React.useState(false);
  const [sectionActive, setSectionActive] = React.useState(0);
  React.useEffect(() => {
    setScrolled(!scrolled);
  }, []);

  React.useEffect(() => {
    console.log(idProduct);
  }, [scrolled]);

  const toggleVisibility = (scrolledHeight) => {
    setScrolled(!scrolled);
    const ActiveArray = idProduct.map((item, idx) => {
      var activeIdx = 0;
      if (idx <= 0) {
        if (scrolledHeight < idProduct[0]) {
          activeIdx = 0;
        }
      } else {
        if (
          scrolledHeight < idProduct[idx] &&
          scrolledHeight > idProduct[idx - 1]
        ) {
          activeIdx = idx;
        }
      }
      return activeIdx;
    });
    const activeIndex = ActiveArray.filter(function (x) {
      return x !== 0;
    });

    if (activeIndex[0] === undefined) {
      setSectionActive(0);
    } else {
      setSectionActive(activeIndex[0]);
    }
  };

  const [sectionActiveRes, setSectionActiveRes] = React.useState(0);
  const toggleVisibilityRes = (scrolledHeight) => {
    setScrolled(!scrolled);
    const ActiveArray = idProduct.map((item, idx) => {
      var activeIdx = 0;
      if (idx <= 0) {
        if (scrolledHeight +126 < idProduct[0]) {
          activeIdx = 0;
        }
      } else {
        if (
          scrolledHeight +126 < idProduct[idx] &&
          scrolledHeight +126 > idProduct[idx - 1]
        ) {
          activeIdx = idx;
        }
      }
      return activeIdx;
    });
    const activeIndex = ActiveArray.filter(function (x) {
      return x !== 0;
    });

    if (activeIndex[0] === undefined) {
      setSectionActiveRes(0);
    } else {
      setSectionActiveRes(activeIndex[0]);
    }
  };

  const handleScroll = () => {
    const scrolledHeight = scrollContainer && scrollContainer.scrollTop;
    toggleVisibility(scrolledHeight);
    toggleVisibilityRes(scrolledHeight);
  };

  const scrollToDiv = (idx) => {
    scrollContainer && scrollContainer.scrollTo({top: idProductHeight[idx]+16,behavior: "smooth"});
    console.log('runned')
  }
  const scrollToDivRes = (idx) => {
    scrollContainer && scrollContainer.scrollTo({top: idProductHeight[idx]+16-126.8,behavior: "smooth"});
    console.log('runned')
  }
  return (
    <>
      <div className="main_container">
        <div className="parent_container">
          <div className="first_child">
            <TopView sectionActive={sectionActiveRes} onClick={scrollToDivRes}></TopView>
          </div>
          <div className="second_child">
            <div className="left_container">
        <LeftBar sectionActive={sectionActive} onClick={scrollToDiv}></LeftBar>
        </div>
            <div
              id="scrollContainer"
              onScroll={handleScroll}
              className="right_container"
            >
              <RightBar></RightBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_View;
