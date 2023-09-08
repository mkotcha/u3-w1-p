import { Component } from "react";

// let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
let cardWidth = 345;
// console.log(carouselWidth, cardWidth);

let scrollPosition = 0;

const prevScroll = event => {
  if (scrollPosition < 0) {
    scrollPosition += cardWidth;
    console.log(scrollPosition);
    // document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
    event.target.closest("div").querySelector(".carousel-inner").style.left = scrollPosition + "px";
  }
};

const nextScroll = event => {
  scrollPosition -= cardWidth;
  console.log(scrollPosition);
  // document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
  event.target.closest("div").querySelector(".carousel-inner").style.left = scrollPosition + "px";
};

window.onload = () => {};

class Gallery extends Component {
  state = {
    isLoading: true,
    hasError: false,
  };

  fetchShow = async query => {
    const url = new URL("https://www.omdbapi.com/?apikey=468924f2&s=" + query);
    console.log(url.href);
  };

  componentDidMount = () => {
    console.log("COMPONENT DID MOUNT");
    this.fetchShow(this.props.show);
    // document.querySelector(".carousel-control-next").addEventListener("click", nextScroll);
    // document.querySelector(".carousel-control-prev").addEventListener("click", prevScroll);
  };

  render() {
    return (
      <>
        <h5 className="fw-bold mb-3 ps-md-5">Trending Now</h5>
        <div id="carouselExample" className="carousel slide ps-md-5 mb-5 d-relative" data-ride="carousel">
          <div className="carousel-inner d-flex preview-container2 d-relative">
            <img src="assets/imgs/media/media0.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media1.jpg" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media2.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media3.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media4.jpg" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media5.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media6.jpg" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media7.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media8.webp" className="carousel-item d-block me-1" alt="" />
            <img src="assets/imgs/media/media9.jpg" className="carousel-item d-block me-1" alt="" />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampl"
            data-bs-slide="prev"
            onClick={prevScroll}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampl"
            data-bs-slide="next"
            onClick={nextScroll}>
            <span className="carousel-control-next-icon text-white" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Gallery;
