import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import NewNavbar from "./components/NewNavbar";
import SectionTitle from "./components/SectionTitle";
import NewCarousel from "./components/NewCarousel";
import NewForm from "./components/NewForm";

function App() {
  return (
    <>
      <section className="d-flex flex-column justify-content-between vh-100">
        <header>
          <NewNavbar></NewNavbar>
        </header>
        <main className="flex-grow-1">
          <Container>
            <Row className="d-flex justify-content-center">
              <Col xs={7} className="my-4">
                <NewForm></NewForm>
              </Col>
              <Col xs={12}>
                <SectionTitle title="SPECIALITA' DEL GIORNO"></SectionTitle>
              </Col>
              <Col xs={7} className="text-center">
                <NewCarousel></NewCarousel>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="text-center bg-dark fs-4 text-light align-middle">
          <p className="mb-0">EPICODE - {new Date().getFullYear()}</p>
        </footer>
      </section>
    </>
  );
}

export default App;
