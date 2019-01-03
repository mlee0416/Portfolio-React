import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Michael Lee</h2>
            <img
              alt="avatar"
              style={{ height: "250px", borderRadius: "50%" }}
              src="./profile.jpg"
            />
            <p>
              You're welcome to contact me at any time to discuss about my qualifications as a full stack web developer.
            </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{margin:"auto", fontFamily:'Anton', fontSize:'20px'}}>
                      <i className="fa fa-phone-square" area-hidden="true" />
                    (909) 525 - 2015
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{margin:"auto", fontFamily:'Anton', fontSize:'20px' }}>
                      <i className="fa fa-envelope-square" area-hidden="true" />
                    mlee0416@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{margin:"auto", fontFamily:'Anton', fontSize:'20px' }}>
                      <i className="fa fa-linkedin-square" area-hidden="true" />
                      https://www.linkedin.com/in/mlee0416/
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{margin:"auto", fontFamily:'Anton', fontSize:'20px' }}>
                      <i className="fa fa-github-square" area-hidden="true" />
                      https://github.com/mlee0416
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
