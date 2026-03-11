import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as YUP from 'yup'


export default function Registerform() {
  let emailInput = useRef();
  let userNameInput = useRef();
  let passInput = useRef();
  let confirmPassInput = useRef();


  let navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  function handleRegister(values) {
    console.log(values)

    if (values.password === values.confirmPassword){
        let registerData = {
          email : values.email,
          username : values.username,
          password : values.password,
          confirmPassword : values.confirmPassword
        }
        axios.post ('http://localhost:1337/api/auth/local', registerData).then((res)=>{
        console.log(res)
        toast.success('successfully registered')
        navigate('/login')

       }).catch((err)=>{
        console.log(err)
        toast.error(`${err.response.data.error.message}`)
    })
    }else{
      toast.error('password & confirmpassword not matching')
    }
  }
  let registerFormSchema = YUP.object ({
     email : YUP.string().email('Invalid email form'),
     username : YUP.string().required('Username is required'),
     password : YUP.string().required('Password is required'),
     confirmPassword : YUP.string().required('Confirm password is required')
  })

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Formik initialValues={{email:'',username:'',password:'',confirmPassword:''}} onSubmit={(values)=>{handleRegister(values)}} validationSchema={registerFormSchema}>
          <Form
            className="w-130 shadow-2xl flex flex-col px-6 pt-6 pb-8"
          >
            {/* header */}

            <h2 className="font-Inter font-semibold text-[32px] text-Darkbrown mb-5 text-center">
              Create Account
            </h2>

            {/* inputs */}
            <div className="flex flex-col gap-3">
              <div>
                <Field name ={"username"}
                  type="text"
                  placeholder="User Name"
                  className="  border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal">
                 </Field>
                 <ErrorMessage className="text-red-600" component="div" name="username" />
              </div>

              <div>
                <Field name ={"email"}
                  type="email"
                  placeholder="email"
                  className="  border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
                ></Field>
                <ErrorMessage className="text-red-600" component="div" name="email" />
              </div>

              <div className="w-full relative">
                <Field name = {"password"}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
                > </Field>
                <ErrorMessage className="text-red-600" component="div" name="paswword" />
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

              <div className="w-full relative">
                <Field name={"confirmpassword"}
                  ref={confirmPassInput}
                  type={confirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className=" mb-3 border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
                ></Field>
                <ErrorMessage className="text-red-600" component="div" name="confirmpassword" />
                <div
                  onClick={() => {
                    setConfirmPassword(!confirmPassword);
                  }}
                >
                  {confirmPassword ? (
                    <FaEyeSlash className="absolute top-5 right-4" />
                  ) : (
                    <FaEye className="absolute top-5 right-4" />
                  )}
                </div>
              </div>
            </div>

            {/* cheakbox */}
            <div className="flex items-center mb-5 gap-1">
              <input
                type="checkbox"
                className="w-5 h-5 border border-Darkbrown rounded-[3px]  "
              ></input>
              <span className="font-Inter text-Darkbrown font-normal ml-0.5 ">
                Accept all terms & Conditions
              </span>
            </div>

            {/* login */}
            <button
               type="submit"
              className="w-full bg-Darkbrown rounded-full py-3.5 text-white font-Inter font-semibold mb-5"
            >
              Create Account
            </button>
            <div className="flex items-center justify-center gap-1">
              <p className="font-Inter text-Darkbrown capitalize font-medium">
                Already have account
              </p>
              <a className="font-Inter text-Darkbrown font-medium underline">
                login
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
