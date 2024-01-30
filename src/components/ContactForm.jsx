import { Github, Heading, Instagram, LinkedinIcon, Locate, LocateFixedIcon, LocateIcon, Mail, MapPin, MessageSquare, Phone, PhoneCall, Send, User } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
  return (
<div className="max-w-6xl mx-auto bg-cream my-6 text-[#011c2b] font-jost pb-8">

            <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8">
                <div className="bg-white rounded-lg p-6 max-lg:text-center">
                    <h2 className="text-xl font-bold text-black">Contact Information</h2>
                    <p className="text-sm text-black mt-3">Have some big idea or brand to develop and need help?</p>
                    <ul className="mt-16 space-y-10">
                        <li className="flex items-center max-lg:justify-center">
                        <Mail size={16}/>
                            <a href="!" className="black text-sm ml-3">
                                <strong>sayedpeters00@gmail.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center max-lg:justify-center">
                            <Phone size={16}/>
                            <a href="!" className=" text-sm ml-3">
                                <strong>+27 62 617 3179</strong>
                            </a>
                        </li>
                        <li className="flex items-center max-lg:justify-center">
                        <MapPin size={16}/>
                            <a href="!" className="text-sm ml-3">
                                <strong>Cape Town</strong>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex max-lg:justify-center mt-16 space-x-4">
                        <li className="bg-emerald-600 hover:bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href='https://www.github.com/Sayed-Snow' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'>
                                    <Github className='text-white' size={18}/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-emerald-600 hover:bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href='https://www.linkedin.com/in/sayed-peters/' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'>
                                    <LinkedinIcon className='text-white' size={18}/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-emerald-600 hover:bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href='https://www.instagram.com/sayed_snow/' target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='#fff'>
                                    <Instagram className='text-white' size={18}/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl lg:col-span-2">
                    <form>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Name"
                                    className="px-2 py-3 bg-white w-full text-sm rounded-full border-2 border-[#011c2b] outline-none" />
                                <svg className="w-[18px] h-[18px] absolute right-2">
                                    <User className=' text-gray-500' size={16}/>

                                </svg>
                            </div>
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Email"
                                    className="px-2 py-3 bg-white w-full text-sm rounded-full border-2 border-[#011c2b] outline-none" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2">
                                <Mail className=' text-gray-500' size={16}/>

                                </svg>
                            </div>
                            <div className="relative flex items-center sm:col-span-2">
                                <input type='text' placeholder="Subject"
                                    className="px-2 py-3 bg-white text-black w-full text-sm rounded-full border-2 border-[#011c2b] outline-none"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2">
                            <Heading className=' text-gray-500' size={16}/>
                                </svg>
                            </div>
                            <div className="relative flex items-center sm:col-span-2">
                                <textarea placeholder="Write Message"
                                    className="px-2 pt-3 bg-white text-black w-full text-sm rounded-xl border-2 border-[#011c2b] outline-none"></textarea>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2">
                                <MessageSquare className=' text-gray-500' size={16}/>
                                </svg>
                            </div>
                        </div>
                        <button type="button"
                            className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 text-white font-bold border-black p-3 bg-emerald-600 hover:bg-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" >
                                <Send className=' text-white' size={16}/>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm
