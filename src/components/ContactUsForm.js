import { hideContactAlert, postContactusForm } from "@/store/slices/global";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall, FiClock } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { ReCAPTCHA } from "react-google-recaptcha";

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const alertStatus = useSelector((state) => state.globalItem?.contactAlert);
  const [submitted, setSubmitted] = useState(alertStatus);
  

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length > 25) {
      errors.name = 'Name should not be greater than 25 characters';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      errors.name = 'Name should not contain numbers';
      isValid = false;
    }

     if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
      isValid = false;
    } 
    // else if (!/^\d{11}$/.test(formData.phone)) {
    //   errors.phone = 'Number must be 11 digits';
    //   isValid = false;
    // }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };
  useEffect(() => {
    setSubmitted(alertStatus)
    if (submitted) {
      const timer = setTimeout(() => {
       dispatch(hideContactAlert())
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted , alertStatus]);

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(postContactusForm(formData))  
      setFormData({ ...initialFormData });
    }
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

              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><GoLocation className="text-xl text-primary-color sm:mb-0 mb-2" />72, Khursheed Alam Road, Westridge I, Opposite McDonald's, 46000, Rawalpindi</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><FiPhoneCall className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Telephone: </b>+92 51 8448182</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><AiOutlineMail className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Email: </b>info@quaidtech.com</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><BsWhatsapp className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Whatsapp: </b>+92 3000 66 2512</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><FaViber className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Viber: </b>+92 3000 66 2512</span>
            </div>

            <div>
              <b className="block mb-3">HR</b>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><FiPhoneCall className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Phone: </b>+92 3000 66 2512 | +92 51 271 5101</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><AiOutlineMail className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Email: </b>hr@quaidtech.com</span>
            </div>

            <div>
              <b className="block mb-3">Accounts</b>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><FiPhoneCall className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Phone: </b>+92 51 2715101</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><AiOutlineMail className="text-xl text-primary-color sm:mb-0 mb-2" /><b>Email: </b>accounts@quaidtech.com</span>
              <span className="sm:flex gap-2 block sm:mb-2 mb-4 sm:text-base text-sm"><FiClock className="text-xl text-primary-color sm:mb-0 mb-2" /><b>0ffice Timings: </b>7:00am - 8:00pm PKT (In Two Shifts)</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {formErrors.name && (
            <p className="text-red-500 ml-[14px] mt-2">{formErrors.name}</p>
          )}

          <input
            type="mail"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {formErrors.email && (
            <p className="text-red-500 ml-[14px] mt-2">{formErrors.email}</p>
          )}

          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {formErrors.phone && (
            <p className="text-red-500 ml-[14px] mt-2">{formErrors.phone}</p>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
            className="p-3.5 mt-6 bg-light-gray-color h-fit text-gray-900-important text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          {formErrors.message && (
            <p className="text-red-500 ml-[14px] mt-2">{formErrors.message}</p>
          )}

          <ReCAPTCHA
            size="normal"
            sitekey="6Lc6qvsoAAAAAOpO_53Biuilg57Vgm23f9a7zh2s" // Replace with your reCAPTCHA site key
            onChange={(value) => setRecaptchaValue(value)}
          />
          <Button variant="primary" classes="w-full mt-6" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      {submitted && (
            <div className="bg-green-500 text-white py-2 px-4 rounded-lg fixed bottom-16 left-9 transform translate-x-2 translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Email sent successfully
            </div>
          )}
    </div>
    
  );
};

export default ContactUsForm;
