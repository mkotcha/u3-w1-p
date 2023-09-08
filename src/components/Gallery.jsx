import { Component } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";

// let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
let cardWidth = 305;
// console.log(carouselWidth, cardWidth);

let scrollPosition = 0;

const prevScroll = event => {
  let left = event.target.closest("div").querySelector(".carousel-inner").style.left;
  if (!isNaN(left)) left = 0;
  else left = parseInt(left);
  console.log(left);
  if (left < 0) {
    let pos = left + cardWidth;
    event.target.closest("div").querySelector(".carousel-inner").style.left = pos + "px";
  }
};

const nextScroll = event => {
  const numCard = event.target.closest("div").querySelectorAll("img").length;
  const width = event.target.closest("div").offsetWidth;
  let left = event.target.closest("div").querySelector(".carousel-inner").style.left;
  if (!isNaN(left)) left = 0;
  else left = parseInt(left);
  console.log(event.target.closest("div").querySelectorAll("img").length);
  console.log(Math.abs(left));
  if (Math.abs(left) < numCard * cardWidth - width) {
    let pos = left - cardWidth;
    event.target.closest("div").querySelector(".carousel-inner").style.left = pos + "px";
  }
};

window.onload = () => {};

class Gallery extends Component {
  state = {
    isLoading: true,
    hasError: false,
    error: "",
    shows: [],
  };

  fetchShow = async query => {
    const url = new URL("https://www.omdbapi.com/?apikey=468924f2&s=" + query);
    // console.log(url.href);

    this.setState({ isLoading: true });
    console.log("FETCH shows");
    try {
      const response = await fetch(url);
      console.log(response.ok);
      if (response.ok) {
        const data = await response.json();

        if (data.Search) {
          this.setState({ shows: data.Search });
        } else {
          this.setState({ hasError: true, error: data.Error });
          this.setState({ shows: [] });
        }
      } else {
        console.log("setState hasError: true");
        this.setState({ hasError: true, error: response.status });
      }
    } catch (error) {
      console.log("erroraccio: ", error);
      this.setState({ hasError: true, error: { error } });
    } finally {
      // il metodo finally verrà eseguito SEMPRE e IN OGNI CASO, torna utile per qualcosa che debba avvenire sempre e comunque (sia in condizioni positive che negative)
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    // console.log("COMPONENT DID MOUNT");
    this.fetchShow(this.props.show);
    // document.querySelector(".carousel-control-next").addEventListener("click", nextScroll);
    // document.querySelector(".carousel-control-prev").addEventListener("click", prevScroll);
  };

  render() {
    return (
      <>
        <h5 className="fw-bold mb-3 ps-md-5">{this.props.show}</h5>
        <div id="carouselExample" className="carousel slide ps-md-5 mb-5 d-relative" data-ride="carousel">
          {this.state.isLoading && <Spinner animation="border" variant="danger" />}

          {this.state.hasError && <Alert variant="danger">Error: {this.state.error}</Alert>}

          <div className="carousel-inner d-flex preview-container2 d-relative">
            {this.state.shows.map(show => (
              <img src={show.Poster} className="carousel-item d-block me-1" alt={show.Title} key={show.imdbID} />
            ))}
          </div>
          <button as="a" variant="secondary" className="carousel-control-prev" onClick={prevScroll}>
            <span className="carousel-control-prev-icon bg-secondary h-25" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={nextScroll}>
            <span className="carousel-control-next-icon bg-secondary h-25" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Gallery;
