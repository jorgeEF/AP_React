// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikForm = () => (
  <div>
    <h1>Formulario Formik</h1>
    <Formik
      initialValues={{ nombre: '', direccion: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Requerido';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'email inválido';
        }
        if (values.nombre.length < 3) {
            errors.nombre = 'nombre inválido';
        }
        if (values.direccion.length < 3) {
            errors.direccion = 'dirección inválida';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            Nombre: <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="div" />
            <br />
            Dirección: <Field type="text" name="direccion" />
            <ErrorMessage name="direccion" component="div" />
            <br />
            Email: <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            Contraseña: <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
                Enviar
            </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikForm;