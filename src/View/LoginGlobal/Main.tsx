import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormRegister from './RegisterComponent';
import { ContactoComponent } from '../../Component/Contacto';
import styled from "styled-components";
import fondoImg from '../../assets/fondo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import Registrado from './Registrado';
import { getRegistro } from '../../Firebase/Credencials';
import { changeViewForm } from '../../store/slices/context';
import { useNavigate, useParams } from 'react-router-dom';

const Main = () => {
    const viewForm = useSelector((state: RootState) => state.context.viewForm);
    const [userInfo, setUserInfo] = useState<any>();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    //texto de contacto de la pagina de registro
    let lists = [
        { id: 1, text: 'Acapulco (744) 484 16 05, (744) 484 72 72' },
        { id: 2, text: 'Cancún (998) 886 24 28' },
        { id: 3, text: 'León (477) 311 81 62' },
        { id: 4, text: 'Puerto Vallarta (322) 221 30 66' },
        { id: 5, text: 'ventas@standex.com.mx' }
    ];
    //Verifica si existe algun dato en el localstorage
    const idStorage = localStorage.getItem('idsesion');
    const { id } = useParams();
    const LOADINFO = async () => {
        //si hay un dato redirecciona
        if (idStorage) navigate(`/registro/${idStorage}`);
        if (!id && !idStorage || id == null) dispatch(changeViewForm('registrar'))
        if (id) {
            //consulta la informacion en firebase
            const responseInfo = await getRegistro(id);
            if (responseInfo) {
                const result = responseInfo.data();
                if (result) setUserInfo(result);
                dispatch(changeViewForm('registrado'))
            }
        }
    };
    useEffect(() => {
        LOADINFO();
    }, []);
    //Dependiendo si hay o datos en el storage mostrara un componente
    const viewShow: any = {
        registrado: <Registrado userInfo={userInfo} />,
        registrar: <FormRegister LOADINFO={LOADINFO} />,
    };
    return (
        <BackgroundWrapper style={{ backgroundImage: `url(${fondoImg})`, width: '100%' }}>
            <ContainerWrapper>
                <Row className="justify-content-center flex-md-row-reverse">
                    <Col xs={12} md={8} lg={6} className='mt-4' >
                        {viewShow[viewForm]}
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
