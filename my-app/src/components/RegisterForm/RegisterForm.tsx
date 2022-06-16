import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import './registerForm.css'

type Inputs = {
    email: string,
    password: string,
    confirmPassword: string
  };

function RegisterForm () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const password = useRef({})
  password.current = watch("password", "");

  
    return <div className='registerForm'>
    <p>Register Form</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("email", {required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
        placeholder='Your email'
        className={`registerForm_input ${errors.email && 'error_field'}`}
      />
      <input 
        {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ })}
        placeholder='Your password'
        type="password"
        className={`registerForm_input ${errors.password && 'error_field'}`}   
      />
      <input 
        {...register("confirmPassword", { required: true, validate: value =>
          value === password.current || "The passwords do not match" })}
        placeholder='Confirm your password'
        type="password"
        className={`registerForm_input ${errors.confirmPassword && 'error_field'}`}  
      />
      <input 
        type="submit"
        className='registerForm_button'  
      />
    </form>
  </div> 
}

export default RegisterForm