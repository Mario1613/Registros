import React from 'react';
import { Registro } from '../models/GlobalTypes';



interface Props {
    titleModal: string;
    saveButton: (e: any) => void;
    closeModal: (e: any) => void;
    props: Registro | string;
    isActiveModal: Boolean;
}
/**
 * 
 * @param titleModal como su nombre lo indica es el titulo principal del modal
 * @param saveButton si deseamos aceptar algo debemos de parar por este prop 
 * @param closeModal si deseamos cancelar algo debemos de parar por este prop
 * @param props por aqui debemos parar un array de objetos o bien un string
 * @param isActiveModal dato de tipo boolean que si esta en true se muestra el modal
 * @returns 
 */
const ModalComponent = ({ titleModal, saveButton, closeModal, props, isActiveModal }: Props) => {
    let content: React.ReactNode;

    if (typeof props === 'string') {
        // Si props es un string, muestra el texto directamente
        content = <p>{props}</p>;
    } else {
        // Si props es un objeto, muestra los valores de los campos
        content = (
            <ul>
                {Object.entries(props).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}: </strong>
                        {value}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className={`modal fade ${isActiveModal ? 'show d-block' : ''}`} id="exampleModal" data-bs-toggle="modal" aria-labelledby="exampleModalLabel" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{titleModal}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={closeModal} className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" onClick={saveButton} className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;

