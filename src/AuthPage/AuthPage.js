import { useState } from 'react';
import { signIn, signUp } from '../services/fetch-utils';

export default function AuthPage({ setUser }){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignIn(e){
    e.preventDefault;
    const user = await signIn(email, password);

    setUser(user);
  }

  async function handleSignUp(e){
    e.preventDefault();
    const user = await signUp(email, password);

    setUser(user);
  }

  return (
    <section className='auth'>
      <img src='/Hearthstone_logo.webp' />
      <form onSubmit={handleSignIn}>
        <label>
          Email:&nbsp;
          <input required type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:&nbsp;
          <input required type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <div className="buttons">
          <button className='sign-in login-button-style' onClick={handleSignIn}>Sign In</button>
          <button className='sign-up login-button-style' onClick={handleSignUp}>Sign Up</button>
        </div>
      </form>
    </section>
  );
}