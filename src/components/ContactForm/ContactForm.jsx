import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormikForm,
  Label,
  FormikField,
  ErrorText,
  FormBtn,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

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
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
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
