import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = " " + date;
    return <footer>
        <Container>
          <Row>
            <Col className="py-3 text-center">
            Copyright &copy; <span>
            {currDate}
            </span>
            </Col>
          </Row>
        </Container>
     </footer>
}

export default Footer
