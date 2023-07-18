import Nav from "react-bootstrap/Nav";

import Signup from "./login.signup/signup";

import "./body.css";

function Body() {
  return (
    <div className="boar">
      <div className="home">
        <p className="parrafo">Reinsercion Juvenil</p>
        <h2>
          Postula por un mejor mañana registrate <br /> y aca las empresas te
          contactan
        </h2>
        <p>
          Somos una pagina web del sename que te proporcionara una variada
          cantidad de empleos <br className="espacio" /> en todo Chile en la
          cual solo debes dejarnos tus mejores habilidades <br /> y postular a
          tu empleo soñado, que esperas registrate ahora.
        </p>
        <Nav.Item>
          <Signup />
        </Nav.Item>
      </div>
    </div>
  );
}
export default Body;
