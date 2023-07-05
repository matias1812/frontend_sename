import Button from 'react-bootstrap/Button';
import './bodyHome.css'

function BodyHome() {
    return(
        <div className='introduccion'>
            <h1>Creemos nuestra carta de presentacion</h1>
            <h4>Esto ayudara a que las empresas te contacten</h4>
            <p>El propocito de esta pagina es que puedas crear tu carta de presentacion (CV o mas conocido como curriculum) solo depositando la informacion para que las empresas que requieran de tus habilidades y tiempo te puedan contactar facilmente sin la necesidad de que tu busques empleos, No obstante tu tambien podras ver y postular a empleos publicados enviando la carta de presentacion ya antes mensionada, ademas esta estara publicada em tu perfil </p>
            <Button variant="outline-primary" href='/perfil'>Comenzemos a crearla</Button>
        </div>  
        )
}

export default BodyHome