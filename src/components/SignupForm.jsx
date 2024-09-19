import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstname:"",lastname:"",email:"",password:"",confirmPassword:""
    })
    function changeHandler(event) {
        setFormData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value
        }));
      }
      function submitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
          toast.error("password match nahi ho rha hai");
          return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
       
          ...formData
        }
        const finalData = {
        ...accountData,
        accountType
        }
        console.log("printing Final account data");
        console.log(finalData);
        navigate("/dashboard");
      }
      const [showPassword,setShowPassword] = useState(false);
      const [showConfirmPassword,setShowConfirmPassword] = useState(false);
      const [accountType,setAccountType] = useState("Student");
  return (
    <div>
      {/* student instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button onClick={()=>setAccountType("Student")}
             className={`${
              accountType === "Student"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
          >Student</button>
        <button onClick={()=>setAccountType("Instructor")}
             className={`${
              accountType === "Instructor"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all`}
          >Instructor</button>
        </div>
        
        <form onSubmit={submitHandler}>
          {/* first name and last name */}
          <div className="flex gap-x-4">
            <label  className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name
                <sup className="text-pink-200">*</sup>
              </p>
              <input
              required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter first name"
                value={formData.firstname}
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
            </label>

            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name
                <sup className="text-pink-200">*</sup>
              </p>
              <input
              required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter last name"
                value={formData.lastname}
                  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
            </label>
          </div>
          {/* email address */}
        <div className='mt-[20px]'>
        <label className="w-full">
                <p  className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder='Enter email address'
                value={formData.email}
                  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
        </div>
            
            <div className="flex gap-x-4 mt-[20px]">
            <label className='w-full relative'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type={showPassword?("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder='Enter password'
                value={formData.password}
                 className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                     <span onClick={()=>setShowPassword((prev)=>!prev)}
                       className="absolute right-3 top-[38px] cursor-pointer z-10">
                {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />):(<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                    </span>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                type={showConfirmPassword?("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder='Enter confirm Password '
                value={formData.confirmPassword}
                  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                     <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                         className="absolute right-3 top-[38px] cursor-pointer z-10">
                {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
            </label>
            </div>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                Create Account
            </button>
        </form>
      </div>
    
  );
}

export default SignupForm
