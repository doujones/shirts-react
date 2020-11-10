import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Sale = ({ service }) => {
    return (
        <Card style={{width: '20rem'}}>
          <a href={`/service/${service.id}`}>
            <Card.Img variant="top" src={service.images}/>
          </a>
             <Card.Body>
             <a href={`/service/${service.id}`}>
               <Card.Title><strong>{service.name}</strong></Card.Title> 
             </a>
               <Card.Text as="h2">
                    {service.description}
                </Card.Text>  
                <Card.Text>
                    <div className="my-4">
                      {service.numReviews} reviews
                    </div>    
                </Card.Text>  
                 <Button variant="primary"></Button>
            </Card.Body>           
        </Card>
    )
}

export default Sale
