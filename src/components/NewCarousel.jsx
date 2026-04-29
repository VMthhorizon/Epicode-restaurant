import pastasciutte from "../data/menu.json";
import { Component } from "react";
import { ListGroup, Carousel } from "react-bootstrap";

class NewCarousel extends Component {
  state = {
    activePasta: pastasciutte[0],
  };
  render() {
    return (
      <>
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
                <Carousel.Caption className="text-center">
                  <h3>{pasta.name}</h3>
                  <p className="fs-6 w-50 mx-auto">{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <ListGroup className="my-3">
          {this.state.activePasta.comments.map((comment) => {
            return (
              <ListGroup.Item key={comment.id}>
                {comment.author} : {comment.comment} - {comment.rating}/5
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    );
  }
}

export default NewCarousel;
