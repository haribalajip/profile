import React, { useEffect, useState, useRef } from "react";

const LazyImage: React.FC<{ src: string; className: string }> = (props) => {
  const [intersected, setIntersected] = useState(false);

const imageRef = useRef(null);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        timeout = setTimeout(() => setIntersected(true), 500);
      }
    };
    let observer: IntersectionObserver = new IntersectionObserver(
      handleIntersect
    );
    let currentElement = imageRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => clearTimeout(timeout);
  }, []);
  const getImageConfig = () => {
    let config = {
      class: props.className,
      src: props.src,
    };
    if (!intersected) {
      config.class += " blur";
      // config.src = props.lowResImage // Fake blur for now
    }
    return config;
  };

  return (
    <div ref={imageRef} className="lazy-image">
      <img
        className={getImageConfig().class}
        src={getImageConfig().src}
        alt=""
      />
    </div>
  );
};

export default LazyImage;
