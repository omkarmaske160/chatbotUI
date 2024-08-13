import React from 'react'

const Footer = () => {
    return <>
        <footer className="bg-gray-800 py-6 px-6 md:py-8 md:px-12 lg:py-10 lg:px-20">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <p className="text-sm text-gray-400">&copy; 2024 Chatbot Service. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm font-medium hover:text-gray-400" prefetch={false}>
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-gray-400" prefetch={false}>
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer