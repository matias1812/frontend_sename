import PerfilUsuario from '../components/perfiles/perfilUsuario';
import '../views/miPerfil.css'
import Footer from "../components/footer";
import NavbarHome from "../components/navs/NavbarHome"

function MiPerfil(){
    return (
        <>
        <NavbarHome/>
        <PerfilUsuario/>
        <Footer/>         
        </>
    )
}
export default MiPerfil;