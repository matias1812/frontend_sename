import Pagination from "react-bootstrap/Pagination";

function Paginacion({ avisosPerPage, totalAvisos, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAvisos / avisosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination >
      <Pagination.First onClick={() => paginate(1)} />
      <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      ))}{" "}
      <Pagination.Next onClick={() => paginate(currentPage + 1)}/>
      <Pagination.Last onClick={() => paginate(pageNumbers.length)}/>
    </Pagination>
  );
}

export default Paginacion;
