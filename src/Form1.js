import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
  Radio,
  FieldGroup,
  Grid,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
  Modal,
} from 'react-bootstrap';
import './App.css';

class Form1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      marital_status: '',
      age: '',
      qualification: [],
      show: false,
    }

    this.updatefirstname = this.updatefirstname.bind(this);
    this.updatelastname = this.updatelastname.bind(this);
    this.updateemail = this.updateemail.bind(this);
    this.updategender = this.updategender.bind(this);
    this.updatemarital_status = this.updatemarital_status.bind(this);
    this.updateage = this.updateage.bind(this);
    this.updatequalification = this.updatequalification.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  updatefirstname(event) {
    this.setState({ firstname: event.target.value })
  }
  updatelastname(event) {
    this.setState({ lastname: event.target.value })
  }
  updateemail(event) {
    this.setState({ email: event.target.value })
  }
  updategender(event) {
    this.setState({ gender: event.target.value })
  }
  updatemarital_status(event) {
    this.setState({ marital_status: event.target.value })
  }
  updateage(event) {
    this.setState({ age: event.target.value })
  }
  updatequalification(event) {

    this.setState({ qualification: [...this.state.qualification, event.target.value] })
    // this.setState({ qualification: event.target.value})
  }

  handleClose() {
    this.setState({ show: false });
  }

  // handleShow() {
  //   this.setState({ show: true });
  // }

  handleSubmit() {
    this.setState({ show: true });
    console.log('First Name: ' + this.state.firstname)
    console.log('Last Name: ' + this.state.lastname)
    console.log('Email: ' + this.state.email)
    console.log('Gender: ' + this.state.gender)
    console.log('Age: ' + this.state.age)
    console.log('Marital Status: ' + this.state.marital_status)
    console.log('Qualification: ' + this.state.qualification)
    //Send state to the server code
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText" >
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter First Name"
              onChange={this.updatefirstname}
            />
          </FormGroup>
          <FormGroup controlId="formBasicText" >
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Last Name"
              onChange={this.updatelastname}
            />
          </FormGroup>
          <FormGroup controlId="formBasicText" >
            <ControlLabel>EmailID</ControlLabel>
            <FormControl
              type="email"
              placeholder="Enter Email"
              onChange={this.updateemail}
            />
          </FormGroup>


          <FormGroup>
            <ControlLabel>Gender</ControlLabel>
            <Radio name="radioGroup" inline onChange={this.updategender} value="Male" name="Gender">Male</Radio>
            <Radio name="radioGroup" inline onChange={this.updategender} value="Female" name="Gender">Female</Radio>
          </FormGroup>
          <FormGroup controlId="formBasicText" >
            <ControlLabel>Enter Age</ControlLabel>
            <FormControl
              min="10"
              max="100"
              type="number"
              placeholder="Enter Age"
              onChange={this.updateage}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Marital Status  </ControlLabel>{' '}
            <Radio name="radioGroup" inline onChange={this.updatemarital_status} value="Married" name="Marital"> Yes</Radio>
            <Radio name="radioGroup" inline onChange={this.updatemarital_status} value="Not Married" name="Marital"> No</Radio>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Select Qualification   </ControlLabel>{' '}
            <Checkbox inline onChange={this.updatequalification} value=" 10 ">10</Checkbox>
            <Checkbox inline onChange={this.updatequalification} value=" 12 ">12</Checkbox>
            <Checkbox inline onChange={this.updatequalification} value=" B Tech ">BTech</Checkbox>
          </FormGroup>
          <Button onClick={this.handleSubmit} >Submit</Button>
        </form>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>First Name = {this.state.firstname}</p>
          <p>Last Name = {this.state.lastname}</p>
          <p>Email = {this.state.email}</p>
          <p>Gender = {this.state.gender}</p>
          <p>Age  = {this.state.age}</p>
          <p>Marital Status = {this.state.marital_status}</p>
          <p>Qualification = {this.state.qualification}</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Form1; 