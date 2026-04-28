import Carousel from "react-bootstrap/Carousel";
import pastasciutte from "../data/menu.json";
import { Component } from "react";

class NewCarousel extends Component {
  state = {
    activePasta: pastasciutte[0],
  };
  render() {
    return (
      <Carousel
        onSlide={(i) => {
          this.setState({
            activePasta: pastasciutte[i],
          });
        }}
      >
        {pastasciutte.map((pasta) => {
          return (
            <Carousel.Item key={pasta.id}>
              <img src={pasta.image}></img>
              <Carousel.Caption>
                <h3>{pasta.name}</h3>
                <p className="bg-dark">{pasta.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default NewCarousel;
