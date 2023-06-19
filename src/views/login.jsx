import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import useFetch from "../hooks/useFetch";
import styles from './Login.module.css'
import { Button, Modal, Form } from 'react-bootstrap';

function Login() {
  const { post } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = Object.fromEntries(new FormData(e.target));
    console.log(credentials);
    const { data } = await post({ url: "/auth/login", body: credentials });
    if (data) return navigate("/joblist");
  };

  return (
    <>
      <div className={styles.container}>
          
      </div>
    </>
  );
}

export default Login;
