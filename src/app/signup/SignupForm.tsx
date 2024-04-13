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


interface SignupSchema {
  name: string;
  email: string;
  username: string;
  password: string;
}

const SignupSchema = object({
  name: string().max(50),
  email: string().email('Invalid email format'),
  username: string().max(50),
  password: string().min(6, 'Password must be at least 6 characters'),
});
const SignupForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik<SignupSchema>({
    initialValues: {
      name: '',
      email:'',
      username: '',
      password: '',
    },
    validationSchema: toFormikValidationSchema(SignupSchema),
    onSubmit: async (values) => {
      try {
        router.push('/')
        console.log(values);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
  });

  

  return (
    <div className='w-[40vw] max-lg:w-[70vw] max-sm:w[90vw] rounded p-5 lg:mr-[8vw] flex flex-col gap-10'>
      <ToastContainer />
      <p className='text-cyan text-center text-4xl font-semibold max-sm:text-2xl'>Signup to <ReactTyped strings={["DevSync"]} typeSpeed={300} loop backSpeed={30} /></p>

      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
      <Input
          variant='underlined'
          id='name'
          name='name'
          type='text'
          placeholder='Enter your name'
          onChange={formik.handleChange}
          value={formik.values.name}
          color='primary'
          classNames={{
            input: [
              "placeholder:text-white text-white bg-black",
            ],
          }}
        />
        {formik.errors.name && <div className='text-white text-xs'>{formik.errors.name}</div>}
        <Input
          variant='underlined'
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
          color='primary'
          classNames={{
            input: [
              "placeholder:text-white text-white bg-black",
            ],
          }}
        />
        {formik.errors.email && <div className='text-white text-xs'>{formik.errors.email}</div>}

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
          <Button href='/signup' type='submit' className='bg-cyan rounded-sm text-black text-lg font-medium '>
            Sign Up
          </Button>
        </div>
      </form>
      <p className='text-white text-center'>
        Already have an account? <a href='/' className='underline'>Log in</a>
      </p>
    </div>
  );
};

export default SignupForm;
