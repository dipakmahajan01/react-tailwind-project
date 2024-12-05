// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  console.log('formData', formData);
  console.log('setFormData', setFormData);
  // const [error] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ecom-be.buzz/api/auth/login',
        formData
      );
      console.log('response:', response);
      const data = response;
      if (response.statusText) {
        console.log('login sucessfully:', data);
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error.message);
    }
    console.log('User data submitted:', formData);
  };
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm/6 font-medium text-gray-900'
            >
              Email:
            </label>
            <input
              type='email'
              className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 border-black-300'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className='block text-sm/6 font-medium text-gray-900'>
              Password:
            </label>
            <input
              type='password'
              className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 border-black-300'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2'
          >
            Login
          </button>
        </form>
      </div>
      <p className='text-center text-gray-600 mt-4'>
        Don&apos;t have an account?{' '}
        <span
          onClick={() => navigate('/signup')}
          className='text-blue-500 hover:underline cursor-pointer'
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
