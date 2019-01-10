import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProjectCard extends Component {
    render() {
      return (
          <div className="projects-grid">
        {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static-news.moneycontrol.com/static-mcnews/2018/01/BSE_Sensex_Budget_2017_volatile1-770x433.jpg) center / cover'}} >Stock Dashboard</CardTitle>
            <CardText>
            A user inputs a stock ticker symbol on our custom HTML page, and the program will then fetch, clean, and display the relvant stock data. The program will also save past user searches in a databse.
            </CardText>
            <CardActions border>
              <Button colored><a href={this.props.github}>GitHub</a></Button> 
              <Button colored><a href={this.props.demo}>Live Demo</a></Button>
              <Button colored onClick = {this.props.id}>More Info</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
       </div>


      );
    }
  }
  export default ProjectCard;
  