import React, { useState } from "react";
import ModalDelete from "../View/ListRegisterGlobal/ModalDelete";
import ModalEdit from "../View/ListRegisterGlobal/ModalEdit";

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
  updateRegistro: any;
}

const TableComponent: React.FC<Props> = ({
  columns,
  data,
  deleteRegistro,
  updateRegistro,
}) => {
  const [registro, setRegistro] = useState<any>();
  const [isActiveModalDelete, setIsActiveModalDelete] =
    useState<boolean>(false);
  const [isActiveModalEdit, setIsActiveModalEdit] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const handleEditForm = (row: TableData) => {
    setRegistro(row);
    setIsActiveModalEdit(true);
  };

  const confirmEditModal = (values: any) => {
    let newFilds = {
      name: values.name,
      dateOfBirth: values.dateOfBirth,
      creditCardNumber: values.creditCardNumber,
      youtubeChannel: values.youtubeChannel,
    };
    updateRegistro(values.id, newFilds);
    setIsActiveModalEdit(false);
  };

  const cancelEditModal = () => {
    setIsActiveModalEdit(false);
  };

  const handleDeleteForm = (row: TableData) => {
    setRegistro(row);
    setIsActiveModalDelete(true);
  };

  const confirmDeleteModal = (values: any) => {
    deleteRegistro(values.id);
    setIsActiveModalDelete(false);
  };

  const cancelDeleteModal = () => {
    setIsActiveModalDelete(false);
    setRegistro({});
  };

  // Calcula el índice del último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcula el índice del primer elemento de la página actual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Obtiene los elementos de la página actual
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Genera los números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Cambia la página actual
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        height: "70vh",
        backgroundColor: "white",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          height: "100%",
          overflowY: "scroll",
          padding: "0 1rem 0 1rem",
        }}
      >
        <table className="table table-hover">
          <thead>
            <tr
              style={{
                position: "sticky",
                top: 0,
                background: "#f8f9fa",
                zIndex: 1,
              }}
            >
              {columns.map((column, index) => (
                <th key={index} scope="col">
                  {column.label}
                </th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row: TableData, rowIndex: number) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{row[column.dataKey]}</td>
                ))}
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditForm(row)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteForm(row)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Renderiza los modales */}
        {isActiveModalDelete && (
          <ModalDelete
            titleModal="El elemento se eliminará para siempre. ¿Estás seguro?"
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
      {/* Renderiza los números de página */}
      <nav
        style={{
          marginLeft: "1rem",
        }}
      >
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <button
                className="page-link"
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableComponent;
