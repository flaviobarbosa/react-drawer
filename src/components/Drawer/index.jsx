import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop';

const StyledDrawer = styled.div`
  background-color: #fff;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '100%')};

  position: absolute;

  top: 0;
  transition: left 0.45s cubic-bezier(0.82, 0.085, 0.395, 0.895);

  &.open {
    left: 0;
  }

  &.close {
    left: -210vw;
  }
`;

const Drawer = ({ open, onClose, children }) => {
  const [clazz, setClazz] = useState('close');

  useEffect(() => {
    console.log(clazz);
    if (open) setClazz('open');
    else setClazz('close');
  }, [open, clazz]);

  return (
    <>
      <Backdrop className={clazz} onClick={onClose} />
      <StyledDrawer className={clazz} width='10rem' height='20%' onClick={onClose}>
        {children}
      </StyledDrawer>
    </>
  );
};

export default Drawer;
