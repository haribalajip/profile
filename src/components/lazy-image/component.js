import React, { useEffect, useState, createRef } from "react";

const LazyImage = (props) => {
  const [intersected, setIntersected] = useState(false);
  const createObserver = () => {
    let observer;
  
    let options = {
      root: document.querySelector('#root'),
      rootMargin: "0px",
      threshold: 1
    };
  
    observer = new IntersectionObserver(handleIntersect);
    return observer;
  }
  
  let timeout;
  const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      timeout = setTimeout(() => setIntersected(true), 1000);
    }
  }
  
  let observer = createObserver();
  const imageRef = createRef();

  useEffect(() => {
    observer.observe(imageRef.current);
    return () => clearTimeout(timeout);
  }, []); // no dependencies to run only once

  let children = props.children;
  return (
    <div ref={imageRef} className='lazy-image'>
      {intersected && children}
      {!intersected && <h1>Image</h1>}
    </div>
  )
};


export default LazyImage;