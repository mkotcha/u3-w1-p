import { Button, Container } from "react-bootstrap";

const PageFooter = () => {
  return (
    <footer className="text-secondary pb-4">
      <Container className="px-lg-8 px-xxl-10">
        <div className="d-flex mb-2">
          <a href="index.html" className="text-secondary">
            <i className="bi bi-facebook fs-4 me-3"></i>
          </a>
          <a href="index.html" className="text-secondary">
            <i className="bi bi-instagram fs-4 me-3"></i>
          </a>
          <a href="index.html" className="text-secondary">
            <i className="bi bi-twitter fs-4 me-3"></i>
          </a>
          <a href="index.html" className="text-secondary">
            <i className="bi bi-youtube fs-4 me-3"></i>
          </a>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Audio and Subtitles
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Media Center
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Privacy
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Contact Us
              </a>
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Audio Description
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Investor Relations
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Legal Notices
              </a>
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Help Center
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Jobs
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Cokie preferences
              </a>
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Gift Cards
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Term of Use
              </a>
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none">
                Corporate Information
              </a>
            </p>
          </div>
        </div>
        <Button variant="outline-secondary" className="text-white fs-8 mb-2">
          Service code
        </Button>
        <p className="fs-9 text-secondary">&copy; 1997-2019 Netflix Inc.(i-ioascoiu23907321094309)</p>
      </Container>
    </footer>
  );
};

export default PageFooter;
