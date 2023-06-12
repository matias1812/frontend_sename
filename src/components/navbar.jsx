import Nav from 'react-bootstrap/Nav';

import './navbar.css'

import logo from '/logo.png'

function Navbar() {
  return (    
<div className='container-fluid' >
  <div className='menu' >
      <img className='logo' src={logo} alt="" />
    <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/signup">Sign up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/loading">Loading</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Mas informacion</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
</div>
  );
}

export default Navbar;