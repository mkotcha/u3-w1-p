import { Component } from "react";
import { Alert, Spinner, Container } from "react-bootstrap";

const cardWidth = 254;

const normalize = position => {
  if (!isNaN(position)) {
    position = 0;
  } else {
    position = parseInt(position);
  }
  return position;
};

const prevScroll = event => {
  const container = event.target.closest("div").querySelector(".carousel-inner");
  let left = normalize(container.style.left);
  if (left < 0) {
    let pos = left + cardWidth;
    container.style.left = pos + "px";
  }
};

const nextScroll = event => {
  const parentContainer = event.target.closest("div");
  const container = parentContainer.querySelector(".carousel-inner");
  const numCard = parentContainer.querySelectorAll("img").length;
  const width = parentContainer.offsetWidth;
  let left = normalize(container.style.left);
  if (Math.abs(left) < numCard * cardWidth - width) {
    let pos = left - cardWidth;
    parentContainer.querySelector(".carousel-inner").style.left = pos + "px";
  }
};

class Gallery extends Component {
  state = {
    isLoading: true,
    hasError: false,
    error: "",
    shows: [],
  };

  fetchShow = async query => {
    const url = new URL("https://www.omdbapi.com/?apikey=468924f2&s=" + query);

    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        if (data.Search) {
          this.setState({ shows: data.Search });
        } else {
          this.setState({ hasError: true, error: data.Error });
          this.setState({ shows: [] });
        }
      } else {
        this.setState({ hasError: true, error: response.status });
      }
    } catch (error) {
      this.setState({ hasError: true, error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchShow(this.props.show);
  };

  render() {
    return (
      <>
        <Container fluid className="ps-md-5 mb-3">
          <h5 className="fw-bold">{this.props.show}</h5>
        </Container>
        <div id="carouselExample" className="carousel slide ps-md-5 mb-5 d-relative" data-ride="carousel">
          {this.state.isLoading && <Spinner animation="border" variant="danger" />}

          {this.state.hasError && <Alert variant="danger">Error: {this.state.error}</Alert>}

          <div className="carousel-inner d-flex preview-container2 d-relative">
            {this.state.shows.map(show => (
              <img src={show.Poster} className="carousel-item d-block me-1" alt={show.Title} key={show.imdbID} />
            ))}
          </div>

          {!this.state.isLoading && !this.state.hasError && (
            <>
              <button variant="secondary" className="carousel-control-prev" onClick={prevScroll}>
                <span className="carousel-control-prev-icon bg-secondary h-25" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" onClick={nextScroll}>
                <span className="carousel-control-next-icon bg-secondary h-25" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Gallery;
