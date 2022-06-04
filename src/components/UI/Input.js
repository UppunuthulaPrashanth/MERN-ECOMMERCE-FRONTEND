import React from 'react'
import { Form } from 'react-bootstrap';

const Input = (props) => {
    return (
    <div className="inputstyle">
        <Form.Group controlId="formBasicText">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type}
                placholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    </div>
    )
}

export default Input