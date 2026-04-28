import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import NewNavbar from "./components/NewNavbar";

function App() {
  return (
    <>
      <header>
        <NewNavbar></NewNavbar>
      </header>
      <main>
        <Container>
          <Row>
            <Col className="text-end" xs={6} md={4}>
              <h1>PROVA 1</h1>
            </Col>
            <Col xs={6} md={4}>
              <h1>PROVA 2</h1>
            </Col>
            <Col xs={6} md={4}>
              <h1>PROVA 3</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
