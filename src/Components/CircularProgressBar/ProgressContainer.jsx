import React, { useRef, useState, useEffect } from 'react'
import Container from '../Container'
import ProgressBar from './ProgressBar'

function ProgressContainer() {

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <div  ref={containerRef} className={`py-20 flex flex-wrap justify-center items-center gap-10 md:gap-20 ${isVisible ? "progress-animation" : ""}`}>
        <ProgressBar progressPercentage={83} title="Hard Work" isVisible={isVisible} />
        <ProgressBar progressPercentage={100} title="Pure Love" isVisible={isVisible} />
        <ProgressBar progressPercentage={75} title="Smart Ideas" isVisible={isVisible} />
        <ProgressBar progressPercentage={80} title="Strategic Planning" isVisible={isVisible} />
      </div>
    </Container>
  )
}

export default ProgressContainer