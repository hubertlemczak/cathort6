import { keyframes } from 'styled-components';

export const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes` 
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const fadeInOut = keyframes` 
  from {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const slideRightFade = keyframes` 
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;
