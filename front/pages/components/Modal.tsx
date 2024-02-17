'use client'
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';


const Modal = ({children, stateModal, setState}) => {
    return (
        <>
            {stateModal &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <Image src="/logo.webp" alt="Hexalud" width={60} height={70} />
                        </EncabezadoModal>
                        <BotonCerrar onClick={()=>setState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>

                        {children}
                    </ContenedorModal>
                </Overlay>
            }


        </>
    )
}


export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
  
    #check {
        margin: 10px 40%;
        background-color: #ddd;
        padding: 5px 15px;
        border: 0;
        cursor: pointer;
    }
`;


const EncabezadoModal = styled.div`
display: flex;
aling-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
border-botom: 1px solid #E8E8E8;
h3{
    font-weigth: 500;
    font-size: 16px;
    color: #1766DC;
}
img{
    margin-left:auto;
    margin-right:auto;
}
`;



const BotonCerrar = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;

    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: grey;

    svg {
        width: 100%;
        height: 100%;
    }
 
`;