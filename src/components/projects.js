import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import { Animation } from "mdbreact";
import ProjectCard from "./projectcard";
import ProjectCardNoDemo from "./projectcardnodemo";
import ProjectCardDemo from "./projectcarddemo";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
    };
  }

  toggleModal = (e) =>{
    console.log(e.target)
    this.setState({
      isOpen: !this.state.isOpen,
      whichModal: e.target.whichone
    });
    console.log(this.state.whichModal)
  }
  
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        // Project 1
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCard
              cardTitle="Stock Dashboard"
              cardText="When a user inputs a stock ticker symbol on our custom HTML page, the program will fetch, clean, and display the relvant stock data. The program will also save past user searches in a database."
              github="https://github.com/mlee0416/Stock"
              demo="https://stock123.herokuapp.com/"
              image="url(https://static-news.moneycontrol.com/static-mcnews/2018/01/BSE_Sensex_Budget_2017_volatile1-770x433.jpg) center / cover"
            />
            {/* // Project 2 */}
            <ProjectCard
              cardTitle="NFL Dashboard"
              cardText="NFL Dahsboard uses Scikit-Learn, a Python AI library, to predict NFL win/loss outcomes from scraping NFL statistics. The dahsboard predicts the Patriots to win Superbowl 2019, much to my dismay."
              github="https://github.com/mynameisjohnn/nfl_dashboard"
              demo="https://nfl-dashboard.herokuapp.com/"
              image="url(http://www.picks.org/wp-content/uploads/2014/10/img_0439.jpg) center / cover"
            />
            {/* // Project 3 */}
            <ProjectCard
              cardTitle="Movie Searcher"
              cardText="Movie Searcher is a simple application built with React to scroll through any movie using The Movie DB API. This is a dynamic site that shows the movie poster, movie description, and reviews."
              github="https://github.com/mlee0416/Movie-Search"
              demo="https://movie-searcher1.herokuapp.com/"
              image="url(https://icdn3.digitaltrends.com/image/avengers-11.jpg?ver=1) center / cover"
            />
            {/* // Project 4 */}
            <ProjectCardNoDemo
              cardTitle="Restaurant Analysis"
              cardText="Restaurant Analysis examines the impact of income and ethnicity on the types of restaurants popular in an area, using Yelp’s API, US Census Data, and Los Angeles Census Data."
              github="https://github.com/mlee0416/Restaurant-Analysis"
              image="url(http://www.capesounio.com/assets/media/PICTURES/CAPE-SOUNIO/SO-DINING/The-restaurant/the-restaurant-at-cape-sounio-offers-unique-views-of-temple-of-poseidon-18791.jpg) center / cover"
            />
          </div>
        </Animation>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCard
              cardTitle="Movie Searcher"
              cardText="Movie Searcher is a simple application built with React to scroll through any movie using The Movie DB API. This is a dynamic site that shows the movie poster, description, and reviews."
              github="https://github.com/mlee0416/Movie-Search"
              demo="https://movie-searcher1.herokuapp.com/"
              image="url(https://icdn3.digitaltrends.com/image/avengers-11.jpg?ver=1) center / cover"
            />

            <ProjectCard
              cardTitle="React Portfolio"
              cardText="Here is the code used to create this portfolio. My goal was to make a responsive, organized, and intuitive website, utilizing the most-current Javascript library. "
              github="https://github.com/mlee0416/Developer-Portfolio"
              demo="https://portfolio-react1.herokuapp.com/"
              image="url(https://www.linuxfoundation.org/wp-content/uploads/2018/03/bg_post_networking.jpg) center / cover"
            />
          </div>
        </Animation>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCardNoDemo
              cardTitle="UFO Sighting"
              cardText="Users can search for the latest UFO siting based on location, time, and shape."
              github="https://github.com/mlee0416/UFO_Sighting"
              demo="/404"
              image="url(http://www.openminds.tv/wp-content/uploads/HV-UFO-1983-ftr.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Belly Button Diversity"
              cardText="This is an interactive dashboard to display the Belly Button Biodiverstiy DataSet."
              github="https://github.com/mlee0416/Belly_Button_Biodiversity"
              demo="/404"
              image="url(http://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2017/12/DNA.png) center / cover"
            />
          </div>
        </Animation>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCardNoDemo
              cardTitle="Uber Analysis"
              cardText="This bubble plot and pie chart showcase relationships between key variables for Uber."
              github="https://github.com/mlee0416/Python-Pandas-Uber-Analysis"
              demo="/404"
              image="url(https://www.tesla.com/sites/default/files/images/software_update.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Sentiment Analysis"
              cardText="This is a visualization summary of the sentiments expressed in Twitter by popular nwews organizations."
              github="https://github.com/mlee0416/Distinguishing-Sentiments"
              demo="/404"
              image="url(https://www.howtogeek.com/wp-content/uploads/2016/11/img_58238a78b4405.png) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="WeatherPy"
              cardText="This is a scatter plot to show weather from over 500 cities around the world at different latitudes and conditions."
              github="https://github.com/mlee0416/WeatherPy"
              demo="/404"
              image="url(http://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Heroes of Pymoli"
              cardText="Using data from a fake game, this application identified popular items, player demograhics, and profitable results."
              github="https://github.com/mlee0416/Heroes-of-Pymoli"
              demo="/404"
              image="url(https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/kjffvvi4vdfcyly9a0to) center / cover"
            />
          </div>
        </Animation>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCardNoDemo
              cardTitle="MySQL"
              cardText="Using the Sakila DB, this demo showcases my ability to make MySQL query searches, including selecting rows and columns, making inner and outer joins, altering tables, and updating new data."
              github="https://github.com/mlee0416/SQL-Project"
              demo="/404"
              image="url(https://www.bleepstatic.com/images/news/u/986406/Logos/MySQL-Logo.jpg) center / cover"
            />
          </div>
        </Animation>
      );
    }
    else if (this.state.activeTab === 5) {
      return (
        <Animation type="fadeInLeft">
          {/* // Project 1 */}
          <div className="projects-grid" style={{ paddingTop: "20px" }}>
            <ProjectCardDemo
              cardTitle="Sound Speaker"
              cardText="This Wordpress site is a demo for featuring products. This WordPress site contains multiple pages, including a contact form and about us page."
              demo="http://www.soundspeakers.tech/"
              image="url(https://wallpapercave.com/wp/XxHKRfA.jpg) center / cover"
            />
          </div>
        </Animation>
      );
    }
  
  }
    
  render() {
    return (
      <div
      >
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Featured Projects</Tab>
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
          <Tab>MySQL</Tab>
          <Tab>WordPress</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;