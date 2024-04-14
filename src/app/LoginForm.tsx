"use client"
import React from 'react';
import { useFormik } from 'formik';
import { object, string, TypeOf } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Input } from '@nextui-org/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { ReactTyped } from 'react-typed';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { setToken } from '@/redux/authSlice';
import axios from 'axios';
import { setUser } from '@/redux/userSlice';

interface LoginSchema {
  username: string;
  password: string;
}

const LoginSchema = object({
  username: string().max(50),
  password: string(),
});

const LoginForm: React.FC = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleOpen = () => {
    onOpen();
  }
  const formik = useFormik<LoginSchema>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: toFormikValidationSchema(LoginSchema),
    onSubmit: async (values) => {
      try {
        console.log(values);
        const url = process.env.NEXT_PUBLIC_PRODUCT_API_URL;
        const response = await axios.post(`${url}/login`, values);
        const { token, userData } = response.data;
        dispatch(setToken(token))
        dispatch(setUser(userData));

        router.push("/dashboard")
      } catch (error) {
        console.error('Error logging in:', error);
        toast.error("Error logging in")
      }
    },
  });

  isMobile && console.log("mobile")
  isBrowser && console.log()



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

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalContent>
          {(onClose) => (
            <div className='bg-cyan '>
              <ModalHeader className="flex flex-col gap-1 text-3xl">Welcome to DevSync</ModalHeader>
              <ModalBody>
                <p className='text-justify'>
                  Boost your coding experience with remote terminal access, smooth video streaming, efficient directory management, and more. Dive into a world of productivity tools designed to enhance your development workflow effortlessly.
                </p>

              </ModalBody>
              <ModalFooter className='flex flex-col justify-center items-center'>
                <div className='flex flex-col w-full gap-5 text-white'>
                  <Button className='bg-black text-white py-6  rounded-md'>
                    Create Session
                  </Button>
                  <Button className='bg-black text-white py-6  rounded-md'>
                    Join Session
                  </Button>
                  <Button className='bg-white text-black py-6  rounded-md'>
                    My Session
                  </Button>

                </div>
                <div className='self-end'>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </div>

              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginForm;
