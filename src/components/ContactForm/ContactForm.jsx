import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormikForm,
  Label,
  FormikField,
  ErrorText,
  FormBtn,
} from './ContactForm.styled';
import { useContacts } from 'hooks/useContact';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const { addNewContact, fetchAllContacts } = useContacts();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const allContacts = fetchAllContacts();
    if (allContacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts list`);
      return;
    }
    addNewContact({ name, number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        <Label>
          Name
          <FormikField type="text" name="name" />
          <ErrorText name="name" component="p" />
        </Label>
        <Label>
          Number
          <FormikField type="tel" name="number" />
          <ErrorText name="number" component="p" />
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormikForm>
    </Formik>
  );
};
