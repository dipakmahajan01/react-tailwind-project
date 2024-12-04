// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const Login = ()=>{
        const [formData, setFormData] = useState({
          email: '',
          password: ''
        });
        const navigate = useNavigate()
         console.log("formData",formData)
         console.log("setFormData",setFormData)
        const [error] = useState(''); 
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };

          const handleSubmit = async(e)=>{
            e.preventDefault();

            try {
              const response =  await axios.post('https://ecom-be.buzz/api/auth/login',formData
            )
            console.log("response:",response)
            const data = response;
            if(response.statusText){
              console.log("login sucessfully:",data)
              navigate('/dashboard')
            }
            } catch (error) {
             console.log(error.message)
            }
            console.log("User data submitted:", formData);
          }
      return (
        <div className="login-container">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button-class">Login</button>         
        </form>
        <p className="text-center text-gray-600 mt-4">
        Don&apos;t have an account?{' '}
        <span
          onClick={() => navigate('/signup')}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Sign up
        </span>
      </p>
      </div>
      )
}

export default Login;