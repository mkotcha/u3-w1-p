import { Container, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

const Galleries = () => {
  return (
    <>
      <Container fluid className="ps-md-5 d-flex align-items-center mb-4">
        <h3 className="fw-bold me-3 mb-0">TV Shows</h3>
        <Dropdown>
          <Dropdown.Toggle variant="border-secondary text-white btn-outline-secondary ">Genres</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="index.html">Western</Dropdown.Item>
            <Dropdown.Item href="index.html">Brutti</Dropdown.Item>
            <Dropdown.Item href="index.html">Porn</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-flex ms-auto align-items-center d-none d-sm-block">
          <a className="text-secondary view-box" href="index.html">
            <i className="bi bi-text-left border px-3 py-1"></i>
          </a>
          <a className="text-secondary view-box" href="index.html">
            <i className="bi bi-grid border border px-3 py-1"></i>
          </a>
        </div>
      </Container>
      <Gallery show="Star Trek" />
      <Gallery show="Star Wars" />
      <Gallery show="Doctor Who" />
    </>
  );
};

export default Galleries;
