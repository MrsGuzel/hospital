import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import { TiDelete } from "react-icons/ti"
const AppointmentList = ({apps, setApps}) => {
  console.log(apps)

  const handleDelete = (id) => {
    setApps( apps.filter( (item) => item.id !== id) )
  }
  const handleDoubleClick = (id) => {
    setApps(
      apps.map( (item) =>
        item.id == id ? {...item, consulted: !item.consulted } : item
      )
    )
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 && <img src="./img/appointment.jpg" width="70%" />}
      {apps.map(({id, patient, consulted, doctor, day}) => (
      <div 
      key={id} 
      className={consulted ? "appointments consulted" : "appointments"}
      onDoubleClick={() => handleDoubleClick(id)}
      >
      
        <Row className="justify-content-between align-item-center">
          <Col xs={12} sm={12} md={6}>
            <h4>{patient}</h4>
            <h4>{doctor}</h4>
          </Col>
          <Col>
          <h5>{day}</h5>
          </Col>
          <Col className="text-end">
          <TiDelete className="text-danger fs-1"
          type="button"
          onClick={() => handleDelete(id)} />
          </Col>
        </Row>
      </div>
      ))}
    </Container>
  )
}

export default AppointmentList
