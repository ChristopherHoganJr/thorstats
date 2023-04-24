import React, { useState } from "react";

const RegisterAccount = () => {
  const [accountInfo, setAccountInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <>
      <h1 className='text-center font-bold text-3xl'>Create Account</h1>
      <form
        action=''
        className='py-3 flex flex-col justify-center items-center gap-3'>
        <div className='w-full'>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            id='username'
            value={accountInfo.username}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, username: e.target.value })
            }
          />
        </div>
        <div className='w-full'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            value={accountInfo.email}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, email: e.target.value })
            }
          />
        </div>
        <div className='w-full'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            id='password'
            value={accountInfo.password}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, password: e.target.value })
            }
          />
        </div>
        <div className='w-full'>
          <label htmlFor='confirmPassword'>Confirm Password: </label>
          <input
            type='password'
            id='confirmPassword'
            value={accountInfo.confirmPassword}
            onChange={(e) =>
              setAccountInfo({
                ...accountInfo,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
        <button
          type='submit'
          className='border-2 border-black bg-green-300 py-2 px-6 rounded-md'>
          Create Account
        </button>
      </form>
    </>
  );
};

export default RegisterAccount;
