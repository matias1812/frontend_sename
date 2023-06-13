import Button from 'react-bootstrap/Button';
import '../views/home.css'

function Home(){
    return (
        <div className="boar">
            <div className="home">
                <p className='parrafo'>Reinsercion Juvenil</p>
                <h2 >Postula por un mejor mañana registrate <br/> y aca las empresas te contactan</h2>
                <p >Somos una pagina web del sename que te proporcionara una variada cantidad de empleos <br className='espacio'/> en todo Chile en la cual solo debes dejarnos tus mejores habilidades <br /> y postular a tu empleo soñado, que esperas registrate ahora.</p>
                <Button className='boton' variant="outline-secondary">Registrate aqui</Button>
            </div>
        </div>
    )
    }
    export default Home;