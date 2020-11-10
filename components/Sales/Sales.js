import React from 'react'
import services from '../services'
import Sale from './Sale'
import { Row, Col } from 'react-bootstrap'

function Sales() {
    return (
        <>
           <h1>Merchandise</h1>
            <Row>
              {services.map((service) => (
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <Sale service={service}/>
                  </Col>
              ))}    
            </Row> 
        </>
    )
}

export default Sales
