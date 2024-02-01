import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { error, pending, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      signup(email, password, userName);
    } else {
      alert("Şifreler Eşleşmedi");
    }
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>TYA NOTE-APP ÜYELİK SAYFASI</h3>

      <label>Kullanıcı Adınız : </label>
      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />

      <label>Email Adresinizi Giriniz :</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

      <label>Şifrenizi Giriniz: :</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <label>Şifre Tekrarınız: :</label>
      <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

      {!pending && <button>Üye Ol</button>}
      {pending && <button disabled>İşlemi Devam Ediyor</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Signup;
