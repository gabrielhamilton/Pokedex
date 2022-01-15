import React from "react";
import { Container, Row,Col,Card } from 'react-bootstrap';

export default function PokeData(props){
    
    return(
        <Container className="mt-2">
            <Row>
                <Col xs={5} md={3}>
                    <Card>
                        <Card.Header>
                            <h5>{props.name}</h5>
                            <img src={props.sprite} alt = {props.name}></img>
                        </Card.Header>
                    </Card>
                </Col>
                <Col xs={5} md={3}>
                <Card>
                    <Card.Body>
                       <h5>Tipo</h5> 
                       {props.types.map((type,key)=>(
                           <div key={key}>
                               <span>{type.type.name}</span>
                           </div>
                       ))}    
                    </Card.Body>
                    </Card>
                    <Card>
                    <Card.Body>
                       <h5>Habilidades</h5> 
                       {props.abilities.map((ability,key)=>(
                           <div key={key}>
                               <span>{ability.ability.name}</span>
                           </div>
                       ))}        
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={5} md={5}>
                    <Card>
                    <Card.Body>
                       <h4>Status do Pokemon</h4>     
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}