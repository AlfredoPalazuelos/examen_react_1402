import React from 'react';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movil: '',
    };
  }

  componentDidMount() {
    this.setState({
      movil: localStorage.getItem('movil'),
    });
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }

  borrar() {
    this.setState({
      movil: '',
    });
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ul>
          <li>
            Muestra los nombres de los teléfonos almacenados en la lista de
            favoritos como una unordered list<b> - 0,75 puntos</b>
          </li>
          <li>
            Haz lo mismo que en el apartado anterior, salvo que ahora has de
            rellenar una Card para cada teléfono con los mismos datos que en el
            ejercicio 2, pero en este caso el botón sirve para eliminar el
            teléfono de la lista de favoritos<b> - 1,25 puntos</b>
          </li>
        </ul>

        <ul>
          <li>{this.state.movil}</li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio3;
