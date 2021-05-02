import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalArea = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Modal(props) {

    const handleBackgroundClick = () => {
        props.setVisible(false);
    }

    return(
      <>
        {props.visible && 
             <ModalBackground onClick= {handleBackgroundClick}>
             <ModalArea>
                 {props.children}
             </ModalArea>
         </ModalBackground>
        }
      </>
    );

}

export default Modal;