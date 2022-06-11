import React, { useEffect, useState, createRef } from "react";

const LazyImage = (props) => {
  const [intersected, setIntersected] = useState(false);
  
  let timeout;
  const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      timeout = setTimeout(() => setIntersected(true), 500);
    }
  }
  
  let observer = new IntersectionObserver(handleIntersect);
  const imageRef = createRef();

  useEffect(() => {
    observer.observe(imageRef.current);
    return () => clearTimeout(timeout);
  }, [imageRef, observer, timeout]); // no dependencies to run only once

  const getImageConfig = () => {
    let config = {
      class: props.className,
      src: props.src
    }
    if (!intersected) {
      config.class += ' blur';
      // config.src = props.lowResImage // Fake blur for now
    }
    return config;
  }

  return (
    <div ref={imageRef} className='lazy-image'>
      <img className={getImageConfig().class} src={getImageConfig().src} alt=''/>
    </div>
  )
};


export default LazyImage;