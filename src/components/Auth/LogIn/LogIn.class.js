import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class LogInForm extends Component() {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    axios.post("../LogIn/", { username, password }).then((response) => {
      if (response.data.succes) {
        this.props.history.push("../../Inicio/");
      } else {
        this.setState({
          error: "Usuario o contraseña incorrectos",
        }).catch((error) => {
          this.setState({
            error: "Error en la conexión con el servidor",
          });
        });
      }
    });
  };

  render() {
    return (
      <div className="LogInForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre de usuario:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Iniciar Sesion</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(LogInForm);
