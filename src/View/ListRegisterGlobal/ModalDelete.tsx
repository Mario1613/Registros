import React from 'react';
import { Registro } from '../../models/GlobalTypes';

interface Props {
    titleModal: string;
    confirmDeleteModal: (e: any) => void;
    cancelDeleteModal: (e: any) => void;
    registro: Registro | undefined;
    isActiveModalDelete: boolean;
}
/**
 * 
 * @param titleModal titulo del modal 
 * @param confirmDeleteModal por aqui se para la funcion de aceptar y por prop manda los valores en forma de objeto
 * @param cancelDeleteModal por aqui se le para la funcion que servira para cerrar el modal
 * @param registro por aqui se le manda el objeto con propiedades de tipo {id,name,dateOfBirth,creditCardNumber,youtubeChannel}
 * @returns 
 */
const ModalDelete = ({ titleModal, confirmDeleteModal, cancelDeleteModal, registro, isActiveModalDelete }: Props) => {
    return (
        <div className={`modal fade ${isActiveModalDelete ? 'show d-block' : ''}`} id="exampleModal" data-bs-toggle="modal" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert alert-danger">
                        <h5 className="modal-title" id="exampleModalLabel">{titleModal}</h5>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <li><b>ID:</b> {registro?.id}</li>
                            <li><b>Name:</b> {registro?.name}</li>
                            <li><b>Date of Birth:</b> {registro?.dateOfBirth}</li>
                            <li><b>Credit Card Number:</b> {registro?.creditCardNumber}</li>
                            <li><b>YouTube Channel:</b> {registro?.youtubeChannel}</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => cancelDeleteModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" onClick={() => confirmDeleteModal(registro)} className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;
