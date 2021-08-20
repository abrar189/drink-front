import React, { Component } from 'react'
import axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap'



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkData: [],
        }
    }

    componentDidMount = async () => {
        // http://localhost:8000/dataApi
        let result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/dataApi`);
        this.setState({
            drinkData: result.data
        })
        console.log(this.state.drinkData);

    }
    // http://localhost:8000/addTOfav
    addTofavfun = async (index) => {
        const objData = {
            strDrink: this.state.drinkData[index].strDrink,
            strDrinkThumb: this.state.drinkData[index].strDrinkThumb,
            idDrink: this.state.drinkData[index].idDrink,

        }
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/addTOfav`, objData);
    }
    render() {
        return (
            <div>
                <h1> HELLO</h1>
                <Row xs={1} md={4} className="g-4">
                    {this.state.drinkData.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.strDrinkThumb} />

                                <Card.Body>
                                    <Card.Title>{item.strDrink}
                                        {console.log(this.state.drinkData)}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { this.addTofavfun(idx) }}>
                                        add          </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Home
