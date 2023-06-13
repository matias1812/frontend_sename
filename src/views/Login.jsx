import { useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from './Login.module.css'


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
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="correo">Usuario:</label>
          <input type="text" name="correo" id="inpUser" />
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="text" name="contrasena" id="inpPass" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
