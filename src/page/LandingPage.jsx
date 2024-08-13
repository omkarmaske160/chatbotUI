import React from 'react'

const LandingPage = () => {
    return <>




        <div className=" bg-gray-900 text-gray-200">
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
                <a href="#" prefetch={false} className='flex gap-2 items-center'>
                    <BotIcon className="h-8 w-8 text-white" />
                    <span className=" text-white text-lg">CHATBOT</span>
                </a>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm font-medium hover:text-gray-400" prefetch={false}>
                        Login
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-gray-400" prefetch={false}>
                        Register
                    </a>
                    <a href="#" className="text-sm font-medium hover:text-gray-400" prefetch={false}>
                        <SettingsIcon className="h-5 w-5 text-white" />
                        <span className="sr-only">Settings</span>
                    </a>
                </div>
            </header>

            <main>

                <section className="w-full py-12 md:p-y24 lg:py-32">
                    <div className="container space-y-10 xl:space-y-16">
                        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Unlock the Power of Conversational AI
                                </h1>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <p className="mx-auto mb-5 max-w-[700px] text-muted-foreground md:text-xl">
                                    Our advanced chatbot is here to provide you with code, information, and answers to all your questions.
                                    Start your journey today.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary  w-full py-2 text-xl bg-slate-500 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Start Chatting
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-800 py-16 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Chatbot Features</h2>
                            <ContactIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <ContactIcon className="h-6 w-6 text-white" />
                                    Natural Language Processing
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Our chatbot uses advanced NLP algorithms to understand and respond to your queries in a natural,
                                    conversational way.
                                </p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <BotIcon className="h-6 w-6 text-white" />
                                    Automated Workflows
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Streamline your tasks with our chatbot's ability to automate repetitive workflows and provide instant
                                    responses.
                                </p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <UserPlusIcon className="h-6 w-6 text-white" />
                                    Personalized Assistance
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Get tailored support and recommendations based on your unique needs and preferences.
                                </p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <LanguagesIcon className="h-6 w-6 text-white" />
                                    Multiple Languages
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Our chatbot is available in multiple languages to serve a global audience.
                                </p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <LockIcon className="h-6 w-6 text-white" />
                                    Secure Conversations
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Your data is protected with our robust security measures, ensuring your conversations remain
                                    confidential.
                                </p>
                            </div>
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h3 className="flex items-center gap-2 text-xl font-bold">
                                    <ScalingIcon className="h-6 w-6 text-white" />
                                    Scalable Infrastructure
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    Our chatbot service is built on a scalable infrastructure, allowing it to handle increasing demand and
                                    traffic with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Benefits of Using Our Chatbot</h2>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center gap-2">
                                    <TimerIcon className="h-6 w-6 text-white" />
                                    <h3 className="text-xl font-bold">Save Time</h3>
                                </div>
                                <p className="mt-2 text-gray-400">
                                    Our chatbot provides instant responses and automates repetitive tasks, allowing you to focus on more
                                    important matters.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center gap-2">
                                    <MaximizeIcon className="h-6 w-6 text-white" />
                                    <h3 className="text-xl font-bold">Increased Efficiency</h3>
                                </div>
                                <p className="mt-2 text-gray-400">
                                    With our chatbot's advanced capabilities, you can streamline your workflows and improve overall
                                    productivity.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center gap-2">
                                    <PowerIcon className="h-6 w-6 text-white" />
                                    <h3 className="text-xl font-bold">24/7 Support</h3>
                                </div>
                                <p className="mt-2 text-gray-400">
                                    Our chatbot is available around the clock to provide you with the assistance you need, whenever you
                                    need it.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex items-center gap-2">
                                    <UserPlusIcon className="h-6 w-6 text-white" />
                                    <h3 className="text-xl font-bold">Personalized Experience</h3>
                                </div>
                                <p className="mt-2 text-gray-400">
                                    Get tailored support and recommendations that cater to your unique needs and preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Elevate Your Workflow with Conversational AI
                            </h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-muted-foreground">
                                Our advanced chatbot is here to assist you with code, information, and answers to all your questions.
                                Start your journey today.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-xl bg-slate-500 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                        >
                            Start Chatting
                        </a>
                    </div>
                </section>
            </main>
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
        </div>


    </>
}


function BotIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}


function ContactIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
    )
}


function LanguagesIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}


function LockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}


function MaximizeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
    )
}


function PowerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v10" />
            <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
        </svg>
    )
}


function ScalingIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M14 15H9v-5" />
            <path d="M16 3h5v5" />
            <path d="M21 3 9 15" />
        </svg>
    )
}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function TimerIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="10" x2="14" y1="2" y2="2" />
            <line x1="12" x2="15" y1="14" y2="11" />
            <circle cx="12" cy="14" r="8" />
        </svg>
    )
}


function UserPlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
        </svg>
    )
}

export default LandingPage