import NavbarHome from "../components/NavbarHome";
import Aviso from "../components/Aviso";
import Encabezado from "../components/Encabezado";
import Pagination from "react-bootstrap/Pagination";
import Footer from "../components/footer";
import './Home.css'

function Home() {
  return (
    <>
      <NavbarHome />
      <Encabezado />
      <Aviso />
     <div className="pagination">
        <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
     </div>
    <Footer/>
    </>
  );
}
export default Home;
