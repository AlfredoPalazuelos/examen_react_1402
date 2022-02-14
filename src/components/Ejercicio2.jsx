import React from 'react';
import { Form, Button, Table, Container, Card } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marca: '',
      tableData: [],
      listaOpciones: [],
      trajetaDatos: []
    };

    
  }


  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
    );
    const responseData = await response.json();
    this.setState({ tableData: responseData });

    const lista = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    const listaresponse = await lista.json();
    this.setState({ listaOpciones: listaresponse })
  }
  async cambiarmovil(item) {
    const tarjeta = await fetch(
      'http://api-mobilespecs.azharimm.site/v2/search?query= ' + { item }
    );
    const tarjetadata = await tarjeta.json();
    this.setState({ trajetaDatos: tarjetadata });
    const movil = item.phone_name;
    this.setState({ marca: movil });
  }


  componentWillUnmount(){

    localStorage.setItem('movil',this.state.marca);


  }

  render() {
    return (
      <Container id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Utiliza la API REST de{' '}
            <a href="https://github.com/azharimm/phone-specs-api">
              Phone Specifications API
            </a>{' '}
            para rellenar una tabla con datos de teléfonos mediante un
            formulario. Ten en cuenta las siguientes indicaciones:
          </li>
          <li>
            El formulario será un componente que a su vez estará formado por dos
            componentes <b>(1 punto)</b>:
          </li>
          <ul>
            <li>
              Lista desplegable con marcas de teléfono, la cual se ha de
              rellenar llamando a la API (List Brands)
            </li>
            <li>
              Botón de búsqueda, que rellenará la tabla llamando a la API (List
              Phones) con el parámetro indicado en la lista desplegable
            </li>
          </ul>
          <li>
            La tabla tendrá los campos Marca y Modelo, y al cargar la página se
            rellenará con los datos de los últimos modelos (Top by Fans)
            <b> - 1,5 puntos</b>
          </li>
          <li>
            Al hacer click sobre una fila de la tabla, se mostrará en un
            elemento de tipo{' '}
            <a href="https://react-bootstrap.github.io/components/cards/">
              Card
            </a>{' '}
            de React-Bootstrap con el detalle del modelo en concreto, con los
            siguientes campos separados al estilo "Kitchen Sink"
            <b> (1,5 puntos)</b>:
            <ul>
              <li>Imagen</li>
              <li>Marca - Modelo</li>
              <li>Sistema operativo</li>
              <li>Dimensión</li>
              <li>Almacenamiento</li>
            </ul>
            Salvo la imagen, marca y modelo, para recuperar el resto de
            elementos tenéis que llamar a la API (Phone Specifications) usando
            el campo <i>detail</i> o <i>slug</i> de las consultas de listado de
            elementos
          </li>
          <li>
            Añade un botón al Card que permita añadir un teléfono a una lista de
            favoritos, de modo que almacene su información en localStorage al ir
            a otra página<b> - 1 punto</b>
          </li>
        </ul>
        <Form.Group className="mb-3">
          <Form.Label>Marcas</Form.Label>
          <Form.Select>
            {this.state.listaOpciones.map((item) => {
              return <option>{item.brand_name}</option>
            })}
          </Form.Select>
        </Form.Group>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((item) => {
              return (
                <tr onClick={() => this.cambiarmovil(item)}>
                  <td>{item.phone_name}</td>
                  <td>{item.slug}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.state.phone_name}</Card.Title>
            <Card.Text>Descripcion: {this.state.slug}</Card.Text>
            <Button variant="primary" type="button" onClick={this.guardar}>Guardar</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Ejercicio2;

