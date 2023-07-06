import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { validateCreditCard, validateDateOfBirth, validateName, validateYouTubeUrl } from '../../utils/validators';

interface FormValues {
    name: string;
    dateOfBirth: string;
    creditCardNumber: string;
    youtubeChannel: string;
}

const RegisterComponent = () => {
    const [hasEmptyFields, setHasEmptyFields] = useState(false);

    const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        console.log('hello');
        console.log(values);
        resetForm();
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputs = form.getElementsByTagName('input');

        let emptyFields = false;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                emptyFields = true;
                break;
            }
        }

        setHasEmptyFields(emptyFields);

        if (!emptyFields) {
            // handleSubmit(form,);
        }
    };

    return (
        <>
            <Card.Title as="h2" className="text-white fs-1 fw-bold">
                Registro
            </Card.Title>

            <Formik
                initialValues={{
                    name: '',
                    dateOfBirth: '',
                    creditCardNumber: '',
                    youtubeChannel: '',
                }}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-white">
                                Nombre
                            </label>
                            <Field
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                validate={validateName}
                            />
                            <ErrorMessage name="name" component={CustomErrorMessage} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label text-white">
                                Fecha de nacimiento
                            </label>
                            <Field
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                className="form-control"
                                validate={validateDateOfBirth}
                            />
                            <ErrorMessage name="dateOfBirth" component={CustomErrorMessage} />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="creditCardNumber"
                                className="form-label text-white"
                            >
                                Número de tarjeta de crédito
                            </label>
                            <Field
                                type="text"
                                name="creditCardNumber"
                                id="creditCardNumber"
                                className="form-control"
                                validate={validateCreditCard}
                            />
                            <ErrorMessage name="creditCardNumber" component={CustomErrorMessage} className="mt-2" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="youtubeChannel" className="form-label text-white">
                                Canal de YouTube
                            </label>
                            <Field
                                type="text"
                                name="youtubeChannel"
                                id="youtubeChannel"
                                className="form-control"
                                validate={validateYouTubeUrl}
                            />
                            <ErrorMessage name="youtubeChannel" component={CustomErrorMessage} className="mt-1" />
                        </div>
                        {hasEmptyFields && (
                            <Alert variant="danger" className="mt-1">
                                Por favor, completa todos los campos.
                            </Alert>
                        )}

                        <Button className="btn btn-primary fw-bold px-3 py-2" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

const CustomErrorMessage: React.FC = ({ children }: any) => (
    <div className="error-message">
        <Alert variant="danger">{children}</Alert>
    </div>
);

export default RegisterComponent;
