import React from 'react'

const Register = () => {
    return <div className='bg-slate-800 h-screen flex flex-col items-center justify-center'>
        <div>
            <div className="space-y-1 flex flex-col items-center">
                <h1 className="text-[45px] font-bold text-white">Register for our Chatbot</h1>
                <p className="text-muted-foreground text-lg text-slate-200">Sign up to start using our powerful chatbot assistant.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-20 items-center justify-center  mx-auto max-w-7xl py-12">
            <div className="flex flex-col items-center justify-center text-center">

                <img
                    src="./chatbot.png"
                    width={400}
                    height={400}

                    className="mt-4"
                    style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
            </div>
            <div className="flex flex-col shadow-sm px-5 py-5 items-center justify-center w-full max-w-md">
                <div className="w-full">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-3">
                                <label htmlFor="name" className='text-white font-semibold text-lg'>Name :</label>
                                <input id="name" placeholder="John Doe" className='bg-slate-800  border-b text-md text-slate-200' />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="email" className='text-white font-semibold text-lg'>Email :</label>
                                <input id="email" type="email" placeholder="john@example.com" className='bg-slate-800 text-slate-200 border-b ' />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="password" className='text-white font-semibold text-lg'>Password :</label>
                            <input id="password" type="password" className='bg-slate-800 text-slate-200  border-b ml-5' placeholder='******' />
                        </div>
                        <div className="flex items-center space-x-3">
                            <input type='checkbox' id="terms" className='text-white font-semibold text-lg' />
                            <label htmlFor="terms" className="text-sm text-muted-foreground text-white font-semibold">
                                I agree to the terms of service
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full mt-5 bg-slate-600 hover:bg-slate-500 duration-200 transition-all text-lg text-white py-2 rounded-lg">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Register