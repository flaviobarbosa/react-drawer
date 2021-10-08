import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;

  position: absolute;

  top: 0;
  left: 0;
  transition: opacity 0.5s;
  transition-delay: 0.2s;

  overflow: hidden;

  &.open {
    opacity: 1;
  }

  &.close {
    opacity: 0;
    z-index: -9;
  }
`;

export default Backdrop;
