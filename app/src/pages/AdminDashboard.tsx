import {RouteComponentProps} from '@reach/router';
import {Form, Formik, FormikActions} from 'formik';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';
import {TextInput} from '../components';
import {SelectInput} from '../components/forms/SelectInput';
import {ProductTypeType, useAddProductMutation} from '../generated/graphql';

interface AddProductFormValues {
  name: string;
  type: ProductTypeType;
}

const AdminDashboard: React.SFC<RouteComponentProps> = () => {
  const [t] = useTranslation('translation');
  const addProductMutation = useAddProductMutation();
  return (
    <>
      <Helmet>
        <title>Admin {t('dashboard')}</title>
      </Helmet>
      <h1 data-testid='dashboard'>Admin {t('dashboard')}</h1>
      <h2>Product(s)</h2>
      <ul>
        <li>Product Name</li>
      </ul>

      <h3>Add Product</h3>
      <Formik<AddProductFormValues>
        initialValues={{
          name: '',
          type: ProductTypeType.Service,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          type: Yup.string().required('Type is required'),
        })}
        onSubmit={async (
          values: AddProductFormValues,
          {resetForm, setSubmitting}: FormikActions<AddProductFormValues>,
        ) => {
          try {
            const result = await addProductMutation({
              variables: {name: values.name, type: values.type},
            });
            console.log('result: ', result);
          } catch (error) {
            console.error(error);
          }
        }}
        render={() => (
          <Form data-testid='product-form'>
            <TextInput name='name' label='Name' data-testid='name-input' />
            <SelectInput name='type' label='Type' data-testid='service-input'>
              <option value={ProductTypeType.Good}>Good</option>
              <option value={ProductTypeType.Service}>Service</option>
            </SelectInput>
            <button data-testid='product-button'>Submit</button>
          </Form>
        )}
      />
    </>
  );
};

export default AdminDashboard;
