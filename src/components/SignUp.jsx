// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const [setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Call API or handle signup logic here
    console.log('User data submitted:', formData);
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
          Sing up
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto'>
        <form onSubmit={handleSubmit} className='space-y-2'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm/6 font-medium text-gray-900'
            >
              Username:
            </label>
            <input
              type='username'
              className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2 border-black-300'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <div>
            <label className='block text-sm/6 font-medium text-gray-900'>
              Confirm Password:
            </label>
            <input
              type='password'
              className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-1 border-black-300'
              name='confirm password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type='submit'
            className='button-class border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2'
          >
            <span onClick={() => navigate('/login')}>Sign up</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
