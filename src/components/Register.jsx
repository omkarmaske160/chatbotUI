import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './Navbar';

const Register = () => {
    const [isRegister, setIsRegister] = useState(true);
    const controls = useAnimation();

    const togglePage = async () => {
        // First part of the animation: 180-degree flip
        await controls.start({ rotateY: 100, transition: { duration: 0.4 } });

        // Toggle the page after the first flip
        setIsRegister(!isRegister);

        // Second part of the animation: flip back to 0 degrees
        await controls.start({ rotateY: 0, transition: { duration: 0.6 } });
    };

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleRegisterChange = (e) => {
        const { name, value, type, checked } = e.target;
        setRegisterData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            console.log("Register Data:", registerData);
            // Handle registration logic here
        } else {
            console.log("Login Data:", loginData);
            // Handle login logic here
        }
    };

    return (
        <div className='bg-slate-800 h-screen  w-full  flex flex-col items-center justify-center'>

            <div className="space-y-1 flex flex-col items-center justify-center mt-10">
                <h1 className="text-[45px] text-center font-bold text-white">
                    {isRegister ? 'Register for our Chatbot' : 'Login to your Account'}
                </h1>
                <p className="text-muted-foreground text-center text-lg text-slate-200">
                    {isRegister ? 'Sign up to start using our powerful chatbot assistant.' : 'Sign in to continue.'}
                </p>
            </div>
            <motion.div
                className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-7xl py-16 md:py-8 -mt-10"
                animate={controls}
            >
                <div className="md:flex flex-col hidden items-center justify-center text-center">
                    <div style={{}}>
                        <img
                            src="./chatbot.png"
                            alt="Chatbot"
                            width={500}
                            height={500}
                            className="mt-4"
                            style={{ aspectRatio: "400/400", objectFit: "cover", width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                <motion.div className="flex flex-col shadow-sm px-5 py-5 items-center justify-center w-full max-w-md">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="space-y-4">
                            {isRegister && (
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-3">
                                        <label htmlFor="name" className='text-white font-semibold text-lg'>Name :</label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={registerData.name}
                                            onChange={handleRegisterChange}
                                            placeholder="John Doe"
                                            className='bg-slate-800 border-b text-md text-slate-200'
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="email" className='text-white font-semibold text-lg'>Email :</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={registerData.email}
                                            onChange={handleRegisterChange}
                                            placeholder="john@example.com"
                                            className='bg-slate-800 text-slate-200 border-b'
                                        />
                                    </div>
                                </div>
                            )}
                            {!isRegister && (
                                <div className="space-y-3">
                                    <label htmlFor="email" className='text-white font-semibold text-lg'>Email :</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={loginData.email}
                                        onChange={handleLoginChange}
                                        placeholder="john@example.com"
                                        className='bg-slate-800 text-slate-200 border-b'
                                    />
                                </div>
                            )}
                            <div className="space-y-3">
                                <label htmlFor="password" className='text-white font-semibold text-lg'>Password :</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={isRegister ? registerData.password : loginData.password}
                                    onChange={isRegister ? handleRegisterChange : handleLoginChange}
                                    className='bg-slate-800 text-slate-200 border-b ml-5'
                                    placeholder='********'
                                />
                            </div>
                            {isRegister && (
                                <div className="flex items-center space-x-3">
                                    <input
                                        type='checkbox'
                                        id="terms"
                                        name="terms"
                                        checked={registerData.terms}
                                        onChange={handleRegisterChange}
                                        className='text-white font-semibold text-lg'
                                    />
                                    <label htmlFor="terms" className="text-sm text-muted-foreground text-white font-semibold">
                                        I agree to the terms of service
                                    </label>
                                </div>
                            )}
                        </div>
                        <div>
                            <button type="submit" className="w-full mt-10 bg-slate-600 hover:bg-slate-500 duration-200 transition-all text-lg text-white py-2 rounded-lg">
                                {isRegister ? 'Register' : 'Login'}
                            </button>
                            <p className='text-center text-slate-300 mt-1'>
                                {isRegister ? 'Already Registered?' : 'Not Registered?'}
                                <button type="button" onClick={togglePage} className='underline hover:text-slate-100 text-lg ml-1'>
                                    {isRegister ? 'Click here to Login' : 'Click here to Register'}
                                </button>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Register;
