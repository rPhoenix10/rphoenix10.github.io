import React, { useRef, useEffect } from 'react';

const Collapse = ({ isOpen, children, className, width = 'auto' }) => {
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      if (isOpen) {
        wrapper.style.maxWidth = `${contentRef.current.scrollWidth}px`;
      } else {
        wrapper.style.maxWidth = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className={`collapsible-wrapper ${className}`}>
      <div ref={contentRef} className="collapsible-content" style={{ width }}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
