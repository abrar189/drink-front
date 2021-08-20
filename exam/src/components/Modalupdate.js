import React, { Component } from 'react'
import { Modal,Form,Button } from 'react-bootstrap'

export class Modalupdate extends Component {
    render() {
        return (
            <div>
                 <>
                    <Button variant="primary" onClick={this.props.handleShow}>
                       
                    </Button>

                    <Modal show={this.props.show} onHide={this.props.handleClose}>

                        <Modal.Body >
                            <Form onSubmit={this.props.updateFav}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="text" defaultValue={this.props.selectData.strDrink} name='strDrink' />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                   
                                    <Form.Control type="text" defaultValue={this.props.selectData.strDrinkThumb}  name='strDrinkThumb' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                   
                                    <Form.Control type="text" defaultValue={this.props.selectData.idDrink} name='idDrink' />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>
                                Close
                            </Button>
                        
                        </Modal.Footer>


                    </Modal>
                </> 
            </div>
        )
    }
}

export default Modalupdate
