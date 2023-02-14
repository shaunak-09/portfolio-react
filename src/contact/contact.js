import React,{useRef}from 'react'
import './contact.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();
  

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

function Contact() {
    const form = useRef();
    const sendEmail = ({object,e}) => {
            e.preventDefault();
        
            emailjs.sendForm('gmail', 'template_ms1u4dt', object, 'okUb34bCgDl5sfjYS')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };
    const Formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            number:"",
            organization:"",
            domain:"",
            projectdetails:"",

        },
        validationSchema:Yup.object({
            email:Yup.string().email("invalid email").required("required"),
            name:Yup.string().required("required"),
            number:Yup.number()
                   . min(1000000000,"Enter a valid number")
                   .max(9999999999,"Enter a valid number")
                   .typeError("That doesn't look like a phone number")
                   .integer("A phone number can't include a decimal point")
                   .required("required"),
            // organization:Yup.string().required("required"),
            // domain:Yup.string().required("required"),
            projectdetails:Yup.string().required("required"),
        }),
       
             onSubmit:({values,e})=>{
                  sendEmail(values,e);
                },

        });
    
  return (
    <div className='contact'>
        <div className='contact-form' data-aos="fade-up">
            <h1>CONTACT ME</h1>
            <form ref={form} onSubmit={Formik.handleSubmit} className="form">
                <div className='inputfield'>

                <input name="name"
                placeholder='Name'
                       type="name"
                       required
                       autoComplete='off'
                       value={Formik.values.name}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.name&&Formik.errors.name?
                    (<p>{Formik.errors.name}</p>):null
                }
                <div className='inputfield'>

                <input name="email"
                placeholder='Email'
                       type="email"
                       required
                       autoComplete='off'
                       value={Formik.values.email}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.email&&Formik.errors.email?
                    (<p>{Formik.errors.email}</p>):null
                }

                <div className='inputfield'>
    
                <input name="number"
                placeholder='Mobile Number'
                       type="number"
                       required
                       autoComplete='off'
                       value={Formik.values.number}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.number&&Formik.errors.number?
                    (<p>{Formik.errors.number}</p>):null
                }
                <div className='inputfield'>
                
                <input  name="organization"
                placeholder='Organization'
                       type="organization"
                       required
                       autoComplete='off'
                       value={Formik.values.organization}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.organization&&Formik.errors.organization?
                    (<p>{Formik.errors.organization}</p>):null
                }
                <div className='inputfield'>
                
                <textarea name="projectdetails"
                placeholder='Project Info'
                       type="projectdetails"
                       required
                       autoComplete='off'
                       value={Formik.values.projectdetails}
                       onChange={Formik.handleChange}
                       onBlur={Formik.handleBlur}
                />
                </div>
                {
                    Formik.touched.projectdetails&&Formik.errors.projectdetails?
                    (<p>{Formik.errors.projectdetails}</p>):null
                }
                <button className='form-sub' type='submit'>SUBMIT</button>
            </form>
        </div>
        <div className='details'></div>
    </div>
  )
}

export default Contact