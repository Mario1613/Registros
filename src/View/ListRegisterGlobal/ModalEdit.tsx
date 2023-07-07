import React, { useState } from 'react';
import { Registro } from '../../models/GlobalTypes';

interface Props {
    titleModal: string;
    confirmEditModal: (e: any) => void;
    cancelEditModal: (e: any) => void;
    registro: Registro | undefined;
    isActiveModalEdit: boolean;
}

const ModalEdit = ({ titleModal, confirmEditModal, cancelEditModal, registro, isActiveModalEdit }: Props) => {
    const [editedRegistro, setEditedRegistro] = useState<Registro | undefined>(registro);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof Registro) => {
        if (editedRegistro) {
            setEditedRegistro({ ...editedRegistro, [key]: event.target.value });
        }
    };

    return (
        <div className={`modal fade ${isActiveModalEdit ? 'show d-block' : ''}`} id="exampleModal" data-bs-toggle="modal" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert alert-success">
                        <h5 className="modal-title" id="exampleModalLabel">{titleModal}</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedRegistro?.id || ''}
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedRegistro?.name || ''}
                                    onChange={(event) => handleInputChange(event, 'name')}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={editedRegistro?.dateOfBirth || ''}
                                    onChange={(event) => handleInputChange(event, 'dateOfBirth')}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Credit Card Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedRegistro?.creditCardNumber || ''}
                                    onChange={(event) => handleInputChange(event, 'creditCardNumber')}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">YouTube Channel</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editedRegistro?.youtubeChannel || ''}
                                    onChange={(event) => handleInputChange(event, 'youtubeChannel')}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => cancelEditModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" onClick={() => confirmEditModal(editedRegistro)} className="btn btn-primary">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEdit;
