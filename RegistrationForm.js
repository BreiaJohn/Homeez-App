import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
   
    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const payload = object.formEntries(formData)
        console.log(formData)
    }
    
    return (
        <>
        <h2>Registration Form</h2>
<form onSubmit={submitForm}>
    <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <form.Control  type="text" name="firstName" placeholder="Enter First Name"/>  
</Form.Group>
<Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <form.Control type="text" name="lastName" placeholder="Enter Last Name"/>  
</Form.Group>

<Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <form.Control type="email" name="email" placeholder="Enter Email"/> 
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text> 
</Form.Group>

<Button variant="primary" type="submit">
    Submit
        </Button>
    </form>
  </>
  )
}

export default RegistrationForm