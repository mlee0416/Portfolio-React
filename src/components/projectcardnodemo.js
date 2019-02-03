import React, { Component } from "react";
import {Card,CardTitle,CardText,CardActions,Button,CardMenu} from "react-mdl";

class ProjectCardNoDemo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="projects-grid">
        {/* Project */}
        <Card shadow={5} style = {{ minWidth: "450", margin: "auto" }}>
          <CardTitle style={{color: "#fff", height: "176px", background:this.props.image}}>
          {this.props.cardTitle}
          </CardTitle>
          <CardText>{this.props.cardText} </CardText>
          <CardActions border>
            <Button colored> <a href={this.props.github}>GitHub</a> </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </div>
    );
  }
}

export default ProjectCardNoDemo;
