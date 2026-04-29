import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class NewForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "",
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };

  render() {
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const response = await fetch(
              "https://striveschool-api.herokuapp.com/api/reservation",
              {
                method: "POST",
                body: JSON.stringify(this.state.reservation),
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            if (response.ok) {
              alert("Prenotazione Confermata");
              this.setState({
                reservation: {
                  name: "",
                  phone: "",
                  numberOfPeople: "",
                  smoking: false,
                  dateTime: "",
                  specialRequests: "",
                },
              });
            } else {
              throw new Error("Errore nel JSON", response.status);
            }
          } catch (err) {
            console.log("ERRORE NEL SERVER", err);
            alert("OPERAZIONE NON ANDATA A BUON FINE");
          }
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nome</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Fabrizio"
            value={this.state.reservation.name}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  name: e.target.value,
                },
              });
            }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phone">Numero di Telefono</Form.Label>
          <Form.Control
            id="phone"
            type="tel"
            placeholder="+3912121554"
            value={this.state.reservation.phone}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  phone: e.target.value,
                },
              });
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="people">Number of People</Form.Label>
          <Form.Control
            id="people"
            type="number"
            min={1}
            max={9}
            placeholder="ex. 1/2/3 ecc..."
            value={this.state.reservation.numberOfPeople}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  numberOfPeople: e.target.value,
                },
              });
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Spuntare se presenti Fumatori"
            checked={this.state.reservation.smoking}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  smoking: e.target.checked,
                },
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="date">Data e Ora</Form.Label>
          <Form.Control
            id="date"
            type="datetime-local"
            min={1}
            max={9}
            value={this.state.reservation.dateTime}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  dateTime: e.target.value,
                },
              });
            }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="people">Allergie/Malattie/Bambini</Form.Label>
          <Form.Control
            id="specialRequests"
            as="textarea"
            rows={5}
            placeholder="Scrivici se hai bisogno di altro...."
            value={this.state.reservation.specialRequests}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  specialRequests: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia Prenotazione
        </Button>
      </Form>
    );
  }
}

export default NewForm;
