import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const createObserver = () => {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(ReactDOM.findDOMNode(this).querySelector('.lazy-image'));
}

const handleIntersect = () => {
  console.log('intersected');
}

const LazyImage = (props) => {
  useEffect(() => {
    alert();
  });
  return (
    <div className='lazy-image'>
      {props.children}
    </div>
  )
};


export default LazyImage;