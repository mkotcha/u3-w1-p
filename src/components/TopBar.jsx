import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const TopBar = () => {
  return (
    <header>
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
              <i className="bi bi-search me-4 me-lg-0"></i>
            </Nav.Link>
            <Nav.Link className="d-none d-sm-block me-4 me-lg-0 fs-7 fw-bold" href="index.html">
              KIDS
            </Nav.Link>
            <Nav.Link>
              <i className="bi bi-bell-fill me-4 me-lg-0 "></i>
            </Nav.Link>

            <NavDropdown
              direction="start"
              href="index.html"
              aria-expanded="false"
              title={<img src="assets/imgs/avatar.png" alt="" width="32px" />}>
              <NavDropdown.Item href="profile.html">Edit profile</NavDropdown.Item>
              <NavDropdown.Item href="settings.html">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="index.html">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Toggle
            variant="secondary"
            aria-controls="right-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </Container>
      </Navbar>
    </header>
  );
};
export default TopBar;
