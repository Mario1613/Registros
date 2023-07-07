import { number as validateCreditCardNumber } from 'card-validator';


const validateCreditCard = (value: string) => {
    const validation = validateCreditCardNumber(value);

    if (!validation.isValid) {
        return 'Por favor, ingresa un número de tarjeta de crédito válido';
    }

    return undefined;
};

const validateYouTubeUrl = (value: string) => {
    // Expresión regular para validar la URL de YouTube
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    if (!value || !youtubeRegex.test(value)) {
        return 'Por favor, ingresa una URL de YouTube válida';
    }
    return undefined;
}
const validateName = (value: string) => {
    let errorMessage = '';
    if (value.length <= 4) {
        errorMessage = 'Este campo es requerido';
    }
    return errorMessage;
};

const validateDateOfBirth = (value: string) => {
    let errorMessage = '';
    if (!value) {
        errorMessage = 'Este campo es requerido';
    } else {
        // Validar la fecha de nacimiento aquí según tus criterios específicos
        const dateOfBirth = new Date(value);
        if (isNaN(dateOfBirth.getTime())) {
            errorMessage = 'Fecha de nacimiento inválida';
        }
    }
    return errorMessage;
};

export { validateCreditCard, validateYouTubeUrl, validateName, validateDateOfBirth }