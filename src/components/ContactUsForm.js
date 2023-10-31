import { postContactusForm } from "@/store/slices/global";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button"; // ensure this import path is correct

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="w-full">
          <h2 className="section-heading text-4xl font-bold">Let’s talk to our experts</h2>
          <p className="mt-6">We are proud of contributing to the success of the world's leading brands.</p>

          <div className="grid gap-6">
            <div className="mt-10">
              <b className="block">Contact Us</b>
              <span><b>PK:</b></span> <span>+92 51 8448182</span> | <span>+92 51 2715101</span>
              <p className="mt-2"><span><b>US:</b></span> <span>+111 111 111</span> | <span>+111 111 111</span></p>
            </div>

            <div>
              <b className="block">Email</b>
              <span>hr@quaidtech.com</span> 
            </div>

            <div>
              <b className="block">Whatsapp at</b>
              <span>+92300 0662512</span> 
            </div>

            <div>
              <b className="block">Viber</b>
              <span>+92300 0662512</span> 
            </div>

            <div>
              <b className="block">Address</b>
              <span><b>PK:</b></span><span>72, Khursheed Alam Road, Westridge I, Opposite McDonald's, 46000, Rawalpindi</span> 
              <p className="mt-2"><span><b>US:</b></span><span>123 Main Street, Anytown, USA 12345</span> </p>
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
