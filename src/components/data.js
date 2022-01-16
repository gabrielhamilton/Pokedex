import React from "react";
import { Container, Row, Col, Card,ProgressBar } from 'react-bootstrap';


export default function PokeData(props){
    
    return(
        <Container className="mt-2">
            <Row>
                <Col xs={5} md={3}>
                    <div class="card bg-light mb-3">
                        <Card.Header>
                            <h5>{props.name}</h5>
                            <img src={props.sprite} alt = {props.name}></img>
                            <h5>Altura: {props.weight} cm</h5>
                            <h5>Peso: {props.height} Kg</h5>
                        </Card.Header>
                    </div>
                </Col>
                <Col xs={5} md={3}>
                <div class="card text-white bg-warning mb-3">
                    <Card.Body>
                       <h5>Tipo</h5> 
                       {props.types.map((type,key)=>(
                           <div key={key}>
                               <span>{type.type.name}</span>
                           </div>
                       ))}    
                    </Card.Body>
                    </div>
                    <div class="card bg-light mb-3">
                    <Card.Body>
                       <h5>Habilidades</h5> 
                       {props.abilities.map((ability,key)=>(
                           <div key={key}>
                               <span>{ability.ability.name}</span>
                           </div>
                       ))}        
                    </Card.Body>
                    </div>
                </Col>
                <Col xs={5} md={5}>
                    <div class="card text-white bg-danger mb-3">
                    <Card.Body>
                       <h4>Status do Pokemon</h4>
                       {props.stats.map((stat,key)=>(
                           <div key={key}>
                               <span>{stat.stat.name}</span>
                               <ProgressBar now={stat.base_stat} max={100} label={stat.base_stat} />
                           </div>
                       ))}     
                    </Card.Body>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
