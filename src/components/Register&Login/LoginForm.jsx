import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import * as YUP from 'yup'

export default function LoginForm() {
  let emailInput = useRef();
  let passInput = useRef();

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(values) {
    console.log(values)

   let loginData={
    email:values.email,
    password:values.password
   }
     axios.post ('http://localhost:1337/api/auth/local', loginData).then((res)=>{
        console.log(res)
        toast.success('successfully registered')

       }).catch((err)=>{
        console.log(err)
        toast.error(`${err.response.data.error.message}`)
    })
  }
  let loginFormSchema = YUP.object ({
       email : YUP.string().email('Invalid email form'),
       password : YUP.string().required('Password is required'),
    })
   

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-5">
        <Formik initialValues={{email:'' , password: ''}} onSubmit={(values)=>{handleLogin(values)}} validationSchema={loginFormSchema}>
          <Form 
          className=" shadow-2xl w-130 px-6 pt-6 pb-8 flex flex-col items-center"
        >
          {/* header */}

          <h2 className="font-Inter font-semibold text-Darkbrown capitalize text-[32px] mb-5">
            sign in
          </h2>

          {/* inputs */}

          <div className="w-full">
            <div className="w-full ">
              <Field name ={'email'}
                type="email"
                placeholder="email"
                className="w-full mb-3 py-4 px-3.5 border border-Darkbrown rounded-md capitalize font-Inter text-[16px] font-normal"
              ></Field>
            </div>

            <div className=" w-full relative">
              <Field name ={'password'}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="w-full mb-4 py-4 px-3.5 border border-Darkbrown rounded-md capitalize font-Inter text-[16px] font-normal"
              ></Field>
              <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <FaEyeSlash className="absolute top-5 right-4" />
                ) : (
                  <FaEye className="absolute top-5 right-4" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-1.5">
                <input
                  type="checkbox"
                  className="w-5 h-5 border border-Darkbrown rounded-[3px]"
                ></input>
                <span className="capitalize font-Inter font-normal text-[14px] text-Darkbrown">
                  remember me
                </span>
              </div>
              <a className="capitalize font-Inter font-normal text-[14px] text-Darkbrown">
                forget password
              </a>
            </div>

            {/* login */}

            <button
              type="submit"
              className="py-4.5 px-54.25 bg-Darkbrown rounded-full mb-5 text-white font-Inter font-semibold text-[14px]"
            >
              login
            </button>

            <div className="w-full flex items-center justify-center gap-1">
              <p className="font-Inter text-[14px] font-normal text-Darkbrown capitalize">
                Don’t have account?
              </p>
              <a className=" capitalize text-[14px] font-Inter font-medium text-Darkbrown">
                Register
              </a>
            </div>
          </div>
        </Form>
        </Formik>
      </div>
    </>
  );
}
