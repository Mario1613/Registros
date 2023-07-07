import React from 'react';
import { Registro } from '../../models/GlobalTypes';

interface Props {
    userInfo: Registro;
}

const Registrado = ({ userInfo }: Props) => {
    return (
        <div className="card p-4">
            <h1 className="text-success fw-bold fs-1">Información Registrada:</h1>
            <p className="fs-5 text-black"><b className='text-success'>Nombre:</b> {userInfo?.name}</p>
            <p className="fs-5 text-black"><b className='text-success'>Fecha de Nacimiento:</b> {userInfo?.dateOfBirth}</p>
            <p className="fs-5 text-black"><b className='text-success'>Número de Tarjeta de Crédito:</b> {userInfo?.creditCardNumber}</p>
            <p className="fs-5 text-black"><b className='text-success'>Canal de YouTube:</b> {userInfo?.youtubeChannel}</p>
        </div>
    );
};

export default Registrado;


