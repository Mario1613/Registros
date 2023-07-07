import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import fondoImg from '../../assets/fondo.jpg';
import TableComponent from '../../Component/TableComponent';
import { onGetRegistros, deleteRegistro } from '../../Firebase/Credencials';
import { useState, useEffect } from 'react';
import { Registro } from '../../models/GlobalTypes';



const Main = () => {
    // Arreglo de objetos, esto podría ser desde un enpoint o algo similar
    const [registros, setRegistros] = useState<Registro[]>([]);
    const columns = [
        { label: 'Nombre', dataKey: 'name' },
        { label: 'Fecha de Nacimiento', dataKey: 'dateOfBirth' },
        { label: 'Numero de Tarjeta', dataKey: 'creditCardNumber' },
        { label: 'URL', dataKey: 'youtubeChannel' }
    ];

    useEffect(() => {
        const unsubscribe = onGetRegistros((snapshot: any) => {
            const nuevosRegistros = snapshot.docs.map((doc: any) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRegistros(nuevosRegistros);
        });

        return () => unsubscribe(); // Limpia el listener cuando el componente se desmonta
    }, []);


    return (
        <BackgroundWrapper style={{ backgroundImage: `url(${fondoImg})`, width: '100%' }}>
            <ContainerWrapper>
                <Row className="justify-content-center flex-md-row-reverse">
                    <Col xs={12} md={12} lg={12} className='mt-4' style={{ maxHeight: '70vh' }} >
                        <TableContainer>
                            <TableComponent columns={columns} data={registros} deleteRegistro={deleteRegistro} />
                        </TableContainer>
                    </Col>
                </Row>
            </ContainerWrapper>
        </BackgroundWrapper>
    );
};

const BackgroundWrapper = styled.div`
  height: 100%;
  @media(min-width: 900px){
    height: 100vh;
  }
  width: 100%;
   background-size: cover;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 11%;
  @media(max-width: 768px){
    margin-top: 32%;
  }
`;

const TableContainer = styled.div`
  height: 100%;
`;

export default Main;
