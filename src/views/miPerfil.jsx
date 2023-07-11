import PerfilUsuario from '../components/perfilUsuario';'../'
import '../views/miPerfil.css'
import Footer from "../components/footer";
import NavbarHome from "../components/NavbarHome"

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