import React from 'react'
import Navbar from '../components/Navbar'

const ChatPage = () => {
    return <>
        <div className="flex bg-slate-800 border-slate-200 flex-col h-screen">
            <Navbar />
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="flex text-white items-start gap-3">
                    <div className="rounded-full w-10 h-10 bg-[#55efc4] text-3xl flex items-center justify-center">🤖</div>
                    <div className="max-w-[70%] bg-primary text-primary-foreground  p-3 rounded-lg rounded-tl-none">
                        <p>Hello, how can I assist you today?</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                    <div className="max-w-[70%] bg-secondary text-white p-3 rounded-lg rounded-tr-none">
                        <p>I'm looking for information on your latest product updates.</p>
                    </div>
                    <div className="rounded-full w-10 h-10 bg-[#fdcb6e] text-3xl flex items-center justify-center">👨‍💻</div>
                </div>
                <div className="flex items-start text-white gap-3">
                    <div className="rounded-full w-10 h-10 bg-[#55efc4] text-3xl flex items-center justify-center">🤖</div>
                    <div className="max-w-[70%] bg-primary text-primary-foreground p-3 rounded-lg rounded-tl-none">
                        <p>Great, let me provide you with the latest updates on our products:</p>
                        <ul className="mt-2 space-y-1 ">
                            <li>- New feature added to our flagship product</li>
                            <li>- Improved performance and stability</li>
                            <li>- Enhanced security measures</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-start text-white gap-3 justify-end">
                    <div className="max-w-[70%] bg-secondary text-secondary-foreground p-3 rounded-lg rounded-tr-none">
                        <p>That's really helpful, thank you. I'd like to learn more about the new feature.</p>
                    </div>
                    <div className="rounded-full w-10 h-10 bg-[#fdcb6e] text-3xl flex items-center justify-center">👨‍💻</div>
                </div>
            </div>
            <div className="border-t  px-10 py-3 flex items-center gap-5">
                <input
                    placeholder="Type your message..."
                    className="flex-1 bg-muted text-muted-foreground rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className='text-white '>
                    <SendIcon className="h-6 w-6" />
                    <span className="sr-only">Send</span>
                </button>
            </div>
        </div>
    </>
}

function SendIcon(props) {
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}

export default ChatPage