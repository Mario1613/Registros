import React from 'react';
import ModalDelete from '../View/ListRegisterGlobal/ModalDelete';
import { useState } from 'react';
import ModalEdit from '../View/ListRegisterGlobal/ModalEdit';

type TableColumn = {
    label: string;
    dataKey: string;
};

type TableData = {
    [key: string]: string | number;
};

interface Props {
    columns: TableColumn[];
    data: any;
    deleteRegistro: (e: string) => void;
    updateRegistro: any

}

const TableComponent: React.FC<Props> = ({ columns, data, deleteRegistro, updateRegistro }) => {

    const [registro, setRegistro] = useState<any>()
    const [isActiveModalDelete, setIsActiveModalDelete] = useState<boolean>(false)
    const [isActiveModalEdit, setIsActiveModalEdit] = useState<boolean>(false)
    const handleEditForm = (row: TableData) => {
        setRegistro(row)
        setIsActiveModalEdit(true)
    };
    const confirmEditModal = (values: any) => {
        let newFilds = {
            name: values.name,
            dateOfBirth: values.dateOfBirth,
            creditCardNumber: values.creditCardNumber,
            youtubeChannel: values.youtubeChannel
        }
        updateRegistro(values.id, newFilds)
        setIsActiveModalEdit(false)
    }
    const cancelEditModal = () => {
        setIsActiveModalEdit(false)

    }







    //Funcion que activa el modal, el el boton que aparece de eliminar en la tabla
    const handleDeleteForm = (row: TableData) => {
        // Lógica para eliminar el elemento
        setRegistro(row)
        setIsActiveModalDelete(true)
    };
    //Funciones del Modal
    const confirmDeleteModal = (values: any) => {
        deleteRegistro(values.id)
        setIsActiveModalDelete(false)

    }
    const cancelDeleteModal = () => {
        setIsActiveModalDelete(false)
        setRegistro({})
    }

    return (
        <div style={{ maxHeight: '100%', overflowY: 'auto' }}>
            <table className="table table-hover">
                <thead>
                    <tr style={{ position: 'sticky', top: 0, background: '#f8f9fa', zIndex: 1 }}>
                        {columns.map((column, index) => (
                            <th key={index} scope="col">
                                {column.label}
                            </th>
                        ))}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: TableData, rowIndex: number) => (
                        <tr key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <td key={columnIndex}>{row[column.dataKey]}</td>
                            ))}
                            <td>
                                <button className="btn btn-primary" onClick={() => handleEditForm(row)}>
                                    Editar
                                </button>
                                <button className="btn btn-danger ms-2" onClick={() => handleDeleteForm(row)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isActiveModalDelete && (
                <ModalDelete
                    titleModal="El elemento se eliminara para siempre, Estas seguro?"
                    confirmDeleteModal={confirmDeleteModal}
                    cancelDeleteModal={cancelDeleteModal}
                    isActiveModalDelete={isActiveModalDelete}
                    registro={registro}
                />
            )}
            {isActiveModalEdit && (
                <ModalEdit
                    titleModal="Verifique los datos antes de guardar"
                    isActiveModalEdit={isActiveModalEdit}
                    confirmEditModal={confirmEditModal}
                    cancelEditModal={cancelEditModal}
                    registro={registro}
                />
            )}
        </div>
    );
};

export default TableComponent;
