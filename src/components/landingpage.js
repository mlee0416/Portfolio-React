import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Animation, MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

    const Landing = () =>{
    return(
      <div className="background-photo">
      <MDBContainer className="mt-5 text-center" style={{marginTop:'0px'}}>
      <MDBRow>
        <MDBCol >
          <MDBJumbotron >
            <h2 className="h1 display-3" style={{fontFamily:"Trebuchet MS"}}>Hello Potential Employer!</h2>
            <p className="lead" style={{fontFamily:"Trebuchet MS"}}>
              My name is Michael Lee and I want to use my skills to create web applications that will help you achieve your goals.
            </p>
            <hr className="my-2" />
            <p style={{fontFamily:"Trebuchet MS"}}>
              Here is a sample of what I can bring to your company from JavaScript to SQL.
            </p>
            <p className="lead">
              <MDBBtn color="primary" ><a href="/projects" style={{color:"white"}}>Go Straight To Projects</a></MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    )
  }


export default Landing;