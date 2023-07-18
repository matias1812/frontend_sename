import Nav from 'react-bootstrap/Nav';
import logo from '/logo.png'
import Login from '../login.signup/Login';
import Signup from '../login.signup/signup';

import './navbar.css'

function Navbar() {
  return (    
<div className='container-fluid' >
  <div className='menu' >
      <img className='logo' src={logo} alt="" />
    <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
    <div className='item'>      
        <Nav.Link eventKey="link-2">Mas informacion</Nav.Link>
      <Nav.Item>
        <Signup />
      </Nav.Item>
      <Nav.Item>
        <Login/>
      </Nav.Item>
         <Nav.Item>
      </Nav.Item>
    </div>  
    </Nav>
  </div>
</div>
  );
}

export default Navbar;