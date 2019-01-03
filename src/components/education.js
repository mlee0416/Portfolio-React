import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:"20px"}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0px'}}>{this.props.schoolName} | {this.props.schoolDescription}</h5>
          <ul>
              <li>
              {this.props.description1}
              </li>
              <li>
              {this.props.description2}  
              </li>
          </ul>
        </Cell>
      </Grid>
    )
  }
}

export default Education;