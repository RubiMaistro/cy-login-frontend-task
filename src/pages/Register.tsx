import { Link } from 'react-router-dom';
import { RegisterData } from '../models/Register';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import useLogin from '../hooks/useLogin';
import { TextField, Box } from '@mui/material';
import '../css/Register.css'

export default function Register () {

  const form = useForm<RegisterData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {register, handleSubmit} = form;

  const {loading, login, error} = useLogin();

  const {user, clearUser} = useAuth();

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
          <TextField
            {...register('password')}
            className='Input-Field'
            id="standard-password-input"
            label="Password"
            type="password"
            placeholder='letmein'
            autoComplete="current-password"
            variant="standard"
            />
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
