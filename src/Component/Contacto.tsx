import React from "react";

type Lists = {
    id: number;
    text: string;
};
interface Contacto {
    title: string;
    paragraph: string;
    lists?: Lists[];
}
/**
 * 
 * @param title Titulo del componente, ejemplo: Contáctenos 
 * @param paragraph Parrafo del componente, ejemplo: Para mayor información respecto a línea de stands y displays; o bien, a cualquiera de nuestros servicios. 
  * @param lists Arreglo de objetos con propiedades id y text.
  * Estos se recorreran en forma de lista desordenada 
  *Ejemplo:
  * [
  *     {
  *         id:1,
  *         text:'Acapulco (744) 484 16 05, (744) 484 72 72'
  *     }
  * 
  * ] 

 * @returns TSX
 */
const ContactoComponent = ({
    title,
    paragraph,
    lists,
}: Contacto): JSX.Element => {
    return (
        <div>
            <h1 className="text-primary fw-bold fs-1 text-white">{title}</h1>
            <p className="fs-5 text-white">{paragraph}</p>
            {lists && (
                <ul>
                    {lists.map((element: Lists) => (
                        <li key={element.id} className="fs-5 mt-2 text-white">
                            {element.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export { ContactoComponent };
