import * as Yup from 'yup';
import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from 'baseui/button';
import { Cell, Grid } from 'baseui/layout-grid';
import { Form, Formik } from 'formik';
import { FormControl } from 'baseui/form-control';
import { FormInput } from '../FormInput/FormInput';
import { HeadingLarge } from 'baseui/typography';
import { Input } from 'baseui/input';
import { StyledLink } from 'baseui/link';

type LoginType = 'login' | 'register';
type Props = { type: LoginType };

const SecondaryAction: FC<{ type: LoginType }> = ({ type }) => {
  return type === 'login' ? (
    <Link href="/register">
      <StyledLink>Register</StyledLink>
    </Link>
  ) : (
    <Link href="/login">
      <StyledLink>Login</StyledLink>
    </Link>
  );
};

const LoginForm = ({ type }: Props) => {
  const title = type === 'login' ? 'Login' : 'Register';

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          /*  firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'), */
          /*  lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'), */
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(4).required('Required'),

          /*  acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
            .required('Required'), */
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <HeadingLarge>{title}</HeadingLarge>
          <FormInput label={'Input your email'} name="email" placeholder="jane@formik.com" type="email" />

          <FormInput label={'Input your password'} name="password" placeholder="********" type="password" />

          <Button type="submit">Submit!</Button>
          <SecondaryAction type={type} />
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
