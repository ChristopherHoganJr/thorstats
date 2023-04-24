import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// context
import { UserContext } from "../../contexts/UserContext";

const LoginAccount = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });

  const loginAccount = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", accountInfo, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setCurrentUser(res.data);
        navigate("/");
      })
      .catch((error) => setErrors(error.response));
  };
  return (
    <>
      <h1 className='text-center font-bold text-3xl'>Login Account</h1>
      <form
        action=''
        className='py-3 flex flex-col justify-center items-center gap-3'>
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

        <button
          type='submit'
          className='border-2 border-black bg-green-300 py-2 px-6 rounded-md'
          onClick={(e) => loginAccount(e)}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginAccount;
