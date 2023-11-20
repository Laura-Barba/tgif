"use client";
import { useState } from 'react'

export default function BookTechMentorForm({ component, fields }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errorName, setErrorName] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)


  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     console.log('Sending')
  //     let data = {
  //         name,
  //         email,
  //         message
  //     }
  //     fetch('/api/contact', {
  //         method: 'POST',
  //         headers: {
  //             'Accept': 'application/json, text/plain, */*',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //     }).then((res) => {
  //         console.log('res', res)
  //         console.log('Response received')
  //         if (res.status === 200) {
  //             console.log('Response succeeded!')
  //             setSubmitted(true)
  //             setName('')
  //             setEmail('')
  //             setMessage('')
  //         }

  //     })
  // }
  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message
  //       })
  //     })
  //     debugger
  //     console.log(await response.json())
  //   }

//   const isValidEmail = (email) => (
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email)
// )
const validateField = (name, message, setFieldError) => {

  // setFieldError(value === '');
 
  if(message === "")
  {
    setErrorMessage(true)
  }
};

const validateName = () => {

  // validateField(name, setError);
  // validateField(name)
  if(name === "")
  {
    setErrorName(true)
    return true
  }
  else
  {
    setErrorName(false)
    return false
  }
};



































































































































const validateMessage = () => {
  // validateField(message, setError);
  // validateField(message)
  if(message === "")
  {
    setErrorMessage(true)
    return true
  }
  else
  {
    setErrorMessage(false)
    return false
  }
};

const validateInputFields = () => {

  validateName();
  validateMessage();

  if (validateName === false && validateMessage === false) {
    handleSubmit();
  }
};

const handleSubmit = () => {
  // Your submit logic here
  console.log('Form submitted');
};
  // const validateName = () => {

  //   if (name ==="")
  //   {
  //     setError(true)
  //   }
  //   else {
  //     setError(false)
  //   }
  // }

  // const validateMessage = () => {
  //   if (message === "")
  //   {
  //     setError(true)
  //   }
  //   else{
  //     setError(false)
  //   }

  // }

  // const validateInputFields = () => {

  //   if(validateName && validateMessage) {
  //     handleSubmit()
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //     });
  //     console.log('res', response)
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const responseData = await response.json();
  //     setSubmitted(true)
  //     console.log(responseData);
  //   } catch (error) {
  //     console.error('Error submitting form:', error.message);
  //   }
  // };

  return (
    <>
      <div>
        <h1 className="text-darkGreen font-bold text-3xl md:text-6xl ">{fields.title}</h1>
      </div>
      <div className="text-brown py-2.5">
        {fields.description}
      </div>
      <div className="bg-white p-8 rounded-2xl my-6">
        <div className="">
          <h2 className="font-bold text-brown">
            {fields.formHeading}
          </h2>
          <div className="flex flex-col py-2">
            <label className='pb-1'>{fields.formName}</label>
            <input type='text' name='name' value={name} onChange={(e) => { setName(e.target.value) }} className='w-full md:w-6/12 border border-gray rounded-lg h-10 indent-3' />

            {errorName && <p className="text-red-500">Du måste ange ditt namn.</p>}

          </div>
          {/* <div className="flex flex-col py-2">
            <label className='pb-1'>{fields.formEmail}</label>
            <input type='text' name='email' onChange={(e) => { setEmail(e.target.value) }} className='w-full md:w-6/12 border border-gray rounded-lg h-10 indent-3' />
            {error && <p className="text-red-500">Du måste ange din mailaddress.</p>}
          </div> */}
          <div className="flex flex-col py-2">
            <label className='pb-1'>{fields.formMessage}</label>
            <textarea type='text' name='message' value={message} onChange={(e) => { setMessage(e.target.value) }} className='border border-gray rounded-lg h-40 p-3' />
            {errorMessage && <p className="text-red-500">Du måste ange meddelande.</p>}
          </div>
        </div>
        <button type="submit" onClick={(e) => { validateInputFields(e) }} className="bg-darkGreen text-white font-bold py-3 rounded-3xl text-base px-8 mt-2 w-32 md:text-xl md:px-8 md:mt-6 md:w-44">{fields.button}</button>
      </div>
    </>
  )
}