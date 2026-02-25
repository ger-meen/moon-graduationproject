import axios from "axios";
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Registerform() {
  let emailInput = useRef();
  let userNameInput = useRef();
  let passInput = useRef();
  let confirmPassInput = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  function handleRegister() {
    let registerData = {
      email: emailInput.current.value,
      username: userNameInput.current.value,
      password: passInput.current.value,
    };
    axios
      .post("http://localhost:1337/api/auth/local/register", registerData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-130 shadow-2xl flex flex-col px-6 pt-6 pb-8"
        >
          {/* header */}

          <h2 className="font-Inter font-semibold text-[32px] text-Darkbrown mb-5 text-center">
            Create Account
          </h2>

          {/* inputs */}
          <div className="flex flex-col gap-3">

            <div>
              <input
                ref={userNameInput}
                type="text"
                placeholder="User Name"
                className="  border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
              ></input>
            </div>
                       
            <div>
              <input
                ref={emailInput}
                type="email"
                placeholder="email"
                className="  border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
              ></input>
            </div>

            <div className="w-full relative">
              <input
                ref={passInput}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
              ></input>
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
              <input
                ref={confirmPassInput}
                type={confirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className=" mb-3 border border-Darkbrown rounded-md w-full font-Inter capitalize px-3.5 py-4 text-[14px] font-normal"
              ></input>
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
            onClick={() => {
              handleRegister()
            }}
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
        </form>
      </div>
    </>
  );
}
