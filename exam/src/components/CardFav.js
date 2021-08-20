// import React, { Component } from 'react'
// import { Card,Row,Col,Button } from 'react-bootstrap'

// export class CardFav extends Component {
//     render() {
//         return (
//             <div>
//                 <Row xs={1} md={2} className="g-4">
//                     {this.props.drinkData.map((item, idx) => (
//                         <Col>
//                             <Card>
//                                 <Card.Img variant="top" src={item.strDrinkThumb} />

//                                 <Card.Body>
//                                     <Card.Title>{item.strDrink}
//                                    {console.log(this.props.drinkData)}
//                                     </Card.Title>
//                                     <Card.Text>
//                                     {item.idDrink}
//                                     </Card.Text>
//                                     <Button variant="primary" onClick={() => { this.props.deletFun(idx) }}>
//                                         delete          </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </div>
//         )
//     }
// }

// export default CardFav
