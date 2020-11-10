import React from 'react'
import services from '../../../public/services'

function Sales() {
    return (
        <>
           <h1>Merchandise</h1>
            <Row>
              {services.map((service) => (
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <Services service={service}/>
                  </Col>
              ))}    
            </Row> 
        </>
    )
}

export default Sales
