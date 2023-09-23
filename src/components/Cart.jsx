import { Container, Table, Button, Form } from "react-bootstrap"
import { useContext, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../contexts/CartContext"


export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const { cartList, removeItem, clear } = useContext(CartContext)

  const total = () =>
    cartList.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price, 0
    )
    const handleCharge = ev =>{
      setFormValues(prev =>({
        ...prev, [ev.target.name]: ev.target.value,
      }))
    }
  const sendOrder = () => {
    const order = {
      buyer: formValues,
      cartList: cartList,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        })
        clear()
        alert("Su orden: " + id + " ha sido completada!")
      }
    })
  }
  if (cartList.length === 0){
    return (
      <Container>
      <h1>
        No Hay Productos En Carrito
      </h1>
      </Container>
    )
  }
  else{
  return (
    
    <Container>
      <h1>Carrito de compras</h1>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <th> <Button
                onClick={() => removeItem(item.id)}
              >
                Delete
              </ Button> </th>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total()}</td>
          </tr>
        </tfoot>
      </Table>
      <h1>Ingrese sus Datos</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            onChange={handleCharge}
            value={formValues.name}
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={handleCharge}
            value={formValues.email}
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            onChange={handleCharge}
            value={formValues.phone}
            name="phone"
          />
        </Form.Group>
      </Form>
      <Button onClick={sendOrder}> Finalizar Compra </ Button>
    </Container>
  )
}}







