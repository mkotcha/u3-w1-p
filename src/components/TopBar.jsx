import { Container, Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";

const TopBar = () => {
  return (
    <>
      <Navbar expand="lg" className="mb-4">
        <Container fluid className="ps-md-5">
          <Navbar.Brand href="index.html">
            <img src="assets/imgs/netflix_logo.png" alt="Bootstrap" width="80" />
          </Navbar.Brand>

          <Navbar.Collapse id="right-navbar-nav">
            <Nav>
              <Nav.Link aria-current="page" href="index.html">
                Home
              </Nav.Link>
              <Nav.Link href="index.html" active>
                Tv Shows
              </Nav.Link>
              <Nav.Link href="index.html">Movies</Nav.Link>
              <Nav.Link href="index.html">Recently Added</Nav.Link>
              <Nav.Link href="index.html">My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="ms-auto me-2 d-flex flex-row flex-nowrap align-items-center  ">
            <Nav.Link href="index.html">
              <i className="bi bi-search me-4"></i>
            </Nav.Link>
            <Nav.Link className="me-4 fs-7 fw-bold" href="index.html">
              KIDS
            </Nav.Link>
            <Nav.Link>
              <i className="bi bi-bell-fill me-4"></i>
            </Nav.Link>

            <NavDropdown
              href="index.html"
              aria-expanded="false"
              title={<img src="assets/imgs/avatar.png" alt="" width="32px" />}>
              <NavDropdown.Item href="profile.html">Edit profile</NavDropdown.Item>
              <NavDropdown.Item href="settings.html">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="index.html">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Toggle aria-controls="right-navbar-nav" aria-expanded="false" aria-label="Toggle navigation" />
        </Container>
      </Navbar>

      <Container fluid className="ps-md-5 d-flex mb-4">
        <h3 className="fw-bold me-3">TV Shows</h3>
        <Dropdown>
          <Dropdown.Toggle variant="border-secondary text-white btn-outline-secondary ">Genres</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="index.html">Western</Dropdown.Item>
            <Dropdown.Item href="index.html">Brutti</Dropdown.Item>
            <Dropdown.Item href="index.html">Porn</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-flex ms-auto align-items-center">
          <a className="text-secondary view-box" href="index.html">
            <i className="bi bi-text-left border px-3 py-1"></i>
          </a>
          <a className="text-secondary view-box" href="index.html">
            <i className="bi bi-grid border border px-3 py-1"></i>
          </a>
        </div>
      </Container>
    </>
  );
};
export default TopBar;
