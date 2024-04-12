"use client"
import React from 'react';
import { useFormik } from 'formik';
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Button, Input } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { ReactTyped } from 'react-typed';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


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

  isMobile && console.log("mobile")
  isBrowser && console.log("laptop")

  

  return (
    <div className='w-[40vw] max-lg:w-[70vw] max-sm:w[90vw] rounded p-5 lg:ml-[8vw] flex flex-col gap-10'>
      <ToastContainer />
      <p className='text-cyan text-center text-4xl font-semibold'>Login to <ReactTyped strings={["DevSync"]} typeSpeed={300} loop backSpeed={30} /></p>

      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
        <Input
          variant='underlined'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          onChange={formik.handleChange}
          value={formik.values.username}
          color='primary'
          classNames={{
            input: [
              "placeholder:text-white text-white bg-black",
            ],
          }}
        />
        {formik.errors.username && <div className='text-white text-xs'>{formik.errors.username}</div>}

        <Input
          variant='underlined'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          color='primary'
          classNames={{
            input: [
              "placeholder:text-white text-white bg-black",
            ],
          }}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div className='text-white text-xs'>{formik.errors.password}</div>}
        <div className='flex flex-col w-full gap-3'>
          <Button type='submit' className='bg-cyan rounded-sm text-black text-lg font-medium '>
            Login
          </Button>
        </div>
      </form>
      <p className='text-white lg:hidden text-center'>
        Do not have an account? <a href='/'>Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
