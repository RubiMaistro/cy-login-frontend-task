import { Link } from 'react-router-dom';
import { RegisterData } from '../models/Register';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import useLogin from '../hooks/useLogin';
import { TextField, Box } from '@mui/material';
import '../css/Register.css'
import PasswordStrength from '../components/PasswordStrength';
import usePasswordStrengthChecker from '../hooks/usePasswordStrengthChecker';
import { useState } from 'react';

export default function Register () {

  const form = useForm<RegisterData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {register, getValues, handleSubmit} = form;
  const {loading, login, error} = useLogin();
  const {user, clearUser} = useAuth();

  const {strength, strengthChecker} = usePasswordStrengthChecker();
  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    strengthChecker(event.target.value);
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className='Register-Container'>
      <div className='Register-Form'>
        <div className='Register-Form-Header'>
          <div className='Form-Title'>Welcome to Acme.</div>
          <div className='Form-Subtitle'>Create your account by filling the form bellow.</div>
        </div>
        <div className='Register-Form-Main'>
          <Box className='Input-Container'>
          <TextField 
            {...register('email')} 
            className='Input-Field'
            id="standard-basic" 
            label="Email" 
            type='text'
            placeholder='test@codeyard.eu'
            variant="standard" />
            <div className='Input-Field-Container'>
              <TextField
              {...register('password')}
              className='Input-Field'
              id="standard-password-input"
              label="Password"
              type={passwordShown ? "text" : "password"}
              placeholder='letmein'
              autoComplete="current-password"
              variant="standard"
              onChange={passwordChangeHandler} />
              <div className='Input-Field-Float-Actions'>
                <img className={passwordShown ? "Show-Password-Toggle" : "Hide-Password-Toggle"} 
                onClick={togglePassword}
                alt="fa-eye-slash"/>
                <div className={"Password-Strength " + strength}></div>
              </div>
            </div>
          </Box>
          <div className='Remember-Me'>
            <input type="checkbox" />
            <span>Remember me.</span>
          </div>
          <div className='Button-Container'>
            <button className='Sign-Up-Btn' onClick={handleSubmit(login)}>Sign Up</button>
            <Link className='Go-Home-Btn' to="/">Go Home</Link>
          </div>
          
        </div>
      </div>
      {
        (loading !== false || user !== undefined || error !== undefined) 
        ? 
          <div className='Register-Footer'>
              <pre>{JSON.stringify({user, error}, null, 2)}</pre> 
            </div> 
        : null
      } 
    </div>
  );
};
