import React from 'react';
import {
  // Form,
  FormGroup,
  ControlLabel,
  FormControl,
  // HelpBlock,
  Checkbox,
  Radio,
  // FieldGroup,
  // Grid,
  // Row,
  // Col,
  Button,
  // OverlayTrigger,
  // Popover,
  // Modal,
} from 'react-bootstrap';
import './App.css';

class Form1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstname : '',
      lastname : '',
      email : '',
      gender : '',
      marital_status : '',
      age : '',
      qualification : ''
    }
    
    this.updatefirstname = this.updatefirstname.bind(this);
    this.updatelastname = this.updatelastname.bind(this);
    this.updateemail = this.updateemail.bind(this);
    this.updategender = this.updategender.bind(this);
    this.updatemarital_status = this.updatemarital_status.bind(this);
    this.updateage = this.updateage.bind(this);
    this.updatequalification = this.updatequalification.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    updatefirstname(event){
    this.setState({firstname : event.target.value})
    }
    updatelastname(event){
      this.setState({lastname : event.target.value})
      }
      updateemail(event){
        this.setState({email : event.target.value})
        }
        updategender(event){
          this.setState({gender : event.target.value})
          }
          updatemarital_status(event){
            this.setState({marital_status : event.target.value})
            }
            updateage(event){
              this.setState({age : event.target.value})
              }
              updatequalification(event){
                this.setState({qualification : event.target.value})
                }
                                          
  handleSubmit(){
    console.log('First Name: ' + this.state.firstname)
    console.log('Last Name: ' + this.state.lastname)
    console.log('Email Name: ' + this.state.email)
    console.log('Gender: ' + this.state.gender)
    console.log('Age: ' + this.state.age)
    console.log('Marital Status: ' + this.state.marital_status)
    console.log('Qualification: ' + this.state.qualification)
    //Send state to the server code
    }

  render() {
    return (
            
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
    <Radio name="radioGroup" inline >Male</Radio>
    <Radio name="radioGroup" inline>Female</Radio>
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
    <Radio name="radioGroup" inline>Yes</Radio>
    <Radio name="radioGroup" inline>No</Radio>
    </FormGroup>
    <FormGroup>
      <ControlLabel>Select Qualification   </ControlLabel>{' '}
      <Checkbox inline>10</Checkbox> 
      <Checkbox inline>12</Checkbox>
      <Checkbox inline>BTech</Checkbox>
    </FormGroup>
    <Button onClick={this.handleSubmit} >Submit</Button>
      </form>
    );
  }
}
export default Form1; 