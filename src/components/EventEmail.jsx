import {React, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import emailjs from '@emailjs/browser';



const EventEmail = () => {
  
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [event_date, setEventDate] = useState("")
  const [guests, setGuests] = useState()
  const [location, setLocation] = useState("")

  const templateParams = {
      from_name : name,
      phone : phone,
      email : email,
      event_date : event_date,
      guests : guests,
      location : location


  };
  console.log(templateParams)
   function handleSend(e){
    e.preventDefault()
     emailjs.send('service_xrgwo4i','template_saku26a', templateParams, '6E2TcKktvQuQxKAgI')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });
    
    
  }
  
 
  return (
   
    <Form onSubmit={handleSend}className='rounded p-4 p-sm-3'variant='primary'>
      <Form.Text>Let's Get in Touch! </Form.Text>
      <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type='name' onChange={(e) => setName(e.target.value)}/>
    

    
    </Form.Group>
    <Form.Group className='mb-3'>
    <Form.Label>Phone</Form.Label>

    <Form.Control type='name' onChange={(e) => setPhone(e.target.value)}/>
    </Form.Group>
    <Form.Group className='mb-3'>
    <Form.Label>Email</Form.Label>

    <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label>Event Date</Form.Label>
    <Form.Control type='text' onChange={(e) => setEventDate(e.target.value)}></Form.Control>
    
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label ># of Guests?</Form.Label>
    <Form.Control type='text' onChange={(e) => setGuests(e.target.value)}></Form.Control>
    
    </Form.Group>

    <Form.Group className='mb-3'>
    <Form.Label>Ceremony Location</Form.Label>
    <Form.Control type='text' onChange={(e) => setLocation(e.target.value)}></Form.Control>
    
    </Form.Group>

    <Button type='submit'>Send</Button>
    </Form>
    

  )
}

export default EventEmail