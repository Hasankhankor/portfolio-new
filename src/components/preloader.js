import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { gsap } from 'gsap';

function LinearProgressWithLabel(props) {
  const el = useRef();
  const tl = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(q('.square'), { opacity: 0.7 })
      .to(q('.square'), {
        duration: 1.5,
        ease: 'powerInOut',
        opacity: 1,
        repeat: -1,
        yoyo: true,
      });
  }, []);

  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const text = document.getElementById('loadingText');
    gsap.fromTo(text, { fontSize: '0px', opacity: 0 }, { duration: 1, fontSize: '48px', opacity: 1, repeat: -1, yoyo: true });
  }, []);

  return (
    <Box>
      <div className="anime">
        <div className="load">
          <svg height="100%" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" version="1.1" viewBox="0 0 857 151" id="lo">
            <text x="50%" y="50%" textAnchor="middle" stroke="#10e956" strokeWidth="1px" dy=".4em" id="loadingText">HASAN</text>
          </svg>
          <LinearProgressWithLabel value={progress} sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#006400' } }} />
        </div>
      </div>
    </Box>
  );
}
