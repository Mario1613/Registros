import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormRegister from './RegisterComponent';
import { ContactoComponent } from '../../Component/Contacto';
import styled from "styled-components";
import fondoImg from '../../assets/fondo.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Main = () => {
    const tamanio = useSelector((state: RootState) => state.context.sidebar.tamanio)
    //Arreglo de objetos, esto podria ser desde un enpoint o algo similar
    let lists = [
        { id: 1, text: 'Acapulco (744) 484 16 05, (744) 484 72 72' },
        { id: 2, text: 'Cancún (998) 886 24 28' },
        { id: 3, text: 'León (477) 311 81 62' },
        { id: 4, text: 'Puerto Vallarta (322) 221 30 66' },
        { id: 5, text: 'ventas@standex.com.mx' }
    ];

    return (
        <BackgroundWrapper style={{ backgroundImage: `url(${fondoImg})`, marginLeft: `${tamanio}`, width: `calc(100% - ${tamanio})` }}>
            <ContainerWrapper>
                <Row className="justify-content-center flex-md-row-reverse">
                    <Col xs={12} md={8} lg={6} className='mt-4' >
                        <FormRegister />
                    </Col>
                    <Col className='mt-4'>
                        <ContactoComponent
                            title="Contáctenos"
                            paragraph="Para mayor información respecto a línea de stands y displays; o bien, a cualquiera de nuestros servicios."
                            lists={lists}
                        />
                    </Col>
                </Row>
            </ContainerWrapper>
        </BackgroundWrapper>
    );
};

const BackgroundWrapper = styled.div`
    height:100%;
    @media(min-width:900px){
        height:100vh;
    }
    width:100%;
    background-size: cover;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 11%;
  @media(max-width:768px){
    margin-top:32%;
  }
`;

export default Main;
