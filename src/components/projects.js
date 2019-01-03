import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import {Animation} from 'mdbreact';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <Animation type="fadeInLeft" >
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static-news.moneycontrol.com/static-mcnews/2018/01/BSE_Sensex_Budget_2017_volatile1-770x433.jpg) center / cover'}} >Stock Dashboard</CardTitle>
            <CardText>
            A user inputs a stock ticker symbol on our custom HTML page, and the program will then fetch, clean, and display the relvant stock data. The program will also save past user searches in a databse.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/mlee0416/Stock">GitHub</a></Button>
              <Button colored><a href="https://stock123.herokuapp.com/">Live Demo</a></Button>
              <Button colored><a href="/stock">More Info</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.picks.org/wp-content/uploads/2014/10/img_0439.jpg) center / cover'}} >NFL AI Prediction Dashbaord</CardTitle>
            <CardText>
            Collaborated with a team to develop a dashboard which represents NFL predictions by web scraping NFL statistic and running the data through Scikit-Learn which is Python AI library
            </CardText>
            <CardActions border>
              <Button colored><a href="https://nfl-dashboard.herokuapp.com/">GitHub</a></Button>
              <Button colored><a href="https://nfl-dashboard.herokuapp.com/">Live Demo</a></Button>
              <Button colored><a href="/nfl">More Info</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://icdn3.digitaltrends.com/image/avengers-11.jpg?ver=1) center / cover'}} >React Movie Searcher</CardTitle>
            <CardText>
              Check out a simpile application built with React to scroll through any movie using The Movie DB API. This is a dynamic site that shows the movie poster, description, and links reviews.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/mlee0416/Movie-Search">GitHub</a></Button>
              <Button colored><a href="https://github.com/mlee0416/Movie-Search">Live Demo</a></Button>
              <Button colored><a href="/movie">More Info</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
        </Animation>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is JavaScript</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Python</h1></div>
      )
    }else if(this.state.activeTab === 4) {
        return (
          <div><h1>This is Tableau</h1></div>
        )
      }else if(this.state.activeTab === 5) {
        return (
          <div><h1>This is MySQL</h1></div>
        )
      }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Featured Projects</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>Tableau</Tab>
          <Tab>MySQL</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;