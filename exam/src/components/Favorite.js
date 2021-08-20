import React, { Component } from 'react'
import axios from 'axios';
import CardFav from './CardFav';
import { Card, Row, Col, Button } from 'react-bootstrap'
import Modalupdate from './Modalupdate';


export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkData: [],
            show: false,
            idx: '',
            selectData:{},
        }
    }

    componentDidMount = async () => {
        // http://localhost:8000/datadb?email=algourabrar@gmail.com
        let result = await axios.get(`http://localhost:8000/datadb`);
        this.setState({
            drinkData: result.data
        })
        // console.log(this.state.drinkData);

    }

    deletFun = async (index) => {
        // axios.delete(`http://localhost:8000/delete/${index}`).then(response => {
        //     this.setState({
        //         drinkData: response.data
        //     })
        // }
        // ).catch(error => console.log(error));
        // // console.log(this.state.drinkData);
        let result = await axios.delete(`http://localhost:8000/delete/${index}`);
        this.setState({
            drinkData: result.data
        })

    }
    handleClose = () => {
        this.setState({
            show: false
        })
    };
    handleShow = (idx) => {
        this.setState({
            show: true,
            idx: idx,
            selectData: {
                strDrink: this.state.drinkData[idx].strDrink,
                strDrinkThumb: this.state.drinkData[idx].strDrinkThumb,
                idDrink: this.state.drinkData[idx].idDrink

        
              }
        })
    };


    updateFav = (e, item) => {

        e.preventDefault();
        const reqbody = {
            strDrink: e.target.strDrink.value,
            strDrinkThumb: e.target.strDrinkThumb.value,
            idDrink:e.target.idDrink.value,

        };
        axios.put(`http://localhost:8000/update/${this.state.idx}`, reqbody).then(response => {
            this.setState({
                drinkData: response.data
            })
        }).catch(error => console.log(error));
    }
    render() {
        return (
            <div>       {console.log(this.state.drinkData)}

                <h1> HIIIIII</h1>
                <Row xs={1} md={4} className="g-4">
                    {this.state.drinkData.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.strDrinkThumb} />

                                <Card.Body>
                                    <Card.Title>{item.strDrink}
                                        {/* {console.log(this.state.drinkData)} */}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { this.deletFun(idx) }}>
                                        delete          </Button>
                                </Card.Body>
                                <Button onClick={(e) => this.handleShow(idx)} variant="primary">Update</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* <CardFav drinkData={this.state.drinkData} deletFun={this.deletFun} /> */}
                <Modalupdate
                    handleShow={this.handleShow}
                    handleClose={this.handleClose}
                    updateFav={this.updateFav}
                    show={this.state.show}
                    selectData={this.state.selectData}
                />
            </div>
        )
    }
}

export default Favorite
