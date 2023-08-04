import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { LoginData } from '../models/Login';
import useLogin from '../hooks/useLogin';
import { useAuth } from '../hooks/useAuth';

export default function Login () {

  const form = useForm<LoginData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const {register, handleSubmit} = form;

  const {loading, login, error} = useLogin();

  const {user} = useAuth();

  return (
    <div>
      <h1>Login Form</h1>
      <input {...register('email')} placeholder='email' />
      <input {...register('password')} placeholder='password' type='password' />
      <button onClick={handleSubmit(login)}>login</button>
      <pre>{JSON.stringify({user, error, loading}, null, 2)}</pre>
      <button >
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};
