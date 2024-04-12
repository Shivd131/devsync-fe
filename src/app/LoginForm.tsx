"use client"
import React from 'react';
import { useFormik } from 'formik';
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Button, Input } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from "next/navigation";


interface LoginSchema {
  username: string;
  password: string;
}

const LoginSchema = object({
  username: string().max(50),
  password: string().min(6, 'Password must be at least 6 characters'),
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik<LoginSchema>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: toFormikValidationSchema(LoginSchema),
    onSubmit: async (values) => {
      try {
        router.push('/home')
        console.log(values);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  });

  return (
    <div className='w-full'>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
        <Input
          variant='underlined'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && <div>{formik.errors.username}</div>}

        <Input
          variant='underlined'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}
        <div className='flex flex-col w-full gap-3'>
          <Button type='submit' className='bg-orange rounded-sm text-white'>
            Login
          </Button>
        </div>
      </form>
      <p>
        Do not have an account? <a href='/'>Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
