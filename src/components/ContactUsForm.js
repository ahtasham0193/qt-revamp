import { postContactusForm } from "@/store/slices/global";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button"; 
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall , FiClock} from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(postContactusForm(formData))
  };
  return (
    <div className="w-full p-8 px-6 mt-8 bg-white max-w-[1200px] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <h2 className="section-heading text-4xl font-bold">Let’s talk to our experts</h2>
          <p className="mt-6">We are proud of contributing to the success of the world's leading brands.</p>

          <div className="grid gap-6">
            <div className="mt-5">
              <b className="block mb-3">Address</b>
              
              <span className="flex gap-2 mb-2"><GoLocation className="text-xl text-primary-color"/> House# 72, Khursheed Alam Road, Westridge I, Opposite McDonald's, 46000, Rawalpindi</span>
              <span className="flex gap-2 mb-2"><FiPhoneCall className="text-xl text-primary-color"/><b>Telephone: </b>+92 51 8448182</span>
              <span className="flex gap-2 mb-2"><AiOutlineMail className="text-xl text-primary-color"/><b>Email: </b>info@quaidtech.com</span>
              <span className="flex gap-2 mb-2"><BsWhatsapp className="text-xl text-primary-color"/><b>Whatsapp: </b>+92 3000 66 2512</span>
              <span className="flex gap-2 mb-2"><FaViber className="text-xl text-primary-color"/><b>Viber: </b>+92 3000 66 2512</span>
            </div>

            <div>
              <b className="block mb-3">HR</b>
              <span className="flex gap-2 mb-2"><FiPhoneCall className="text-xl text-primary-color"/><b>Phone: </b>+92 3000 66 2512 | +92 51 271 5101</span>
              <span className="flex gap-2 mb-2"><AiOutlineMail className="text-xl text-primary-color"/><b>Email: </b>hr@quaidtech.com</span>
            </div>

            <div>
              <b className="block mb-3">Accounts</b>
              <span className="flex gap-2 mb-2"><FiPhoneCall className="text-xl text-primary-color"/><b>Phone: </b>+92 51 2715101</span>
              <span className="flex gap-2 mb-2"><AiOutlineMail className="text-xl text-primary-color"/><b>Email: </b>accounts@quaidtech.com</span>
              <span className="flex gap-2 mb-2"><FiClock className="text-xl text-primary-color"/><b>0ffice Timings: </b>7:00am - 8:00pm PKT (In Two Shifts)</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} className="mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
          <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} className="mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
          <input type="number" placeholder="Phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
          <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" id="" cols="30" rows="10" className="p-3.5 mb-6 bg-light-gray-color  h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"></textarea>
          <Button variant="primary" classes="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
