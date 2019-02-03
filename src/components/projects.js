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
              cardText="A user inputs a stock ticker symbol on our custom HTML page, and the program will then fetch, clean, and display the relvant stock data. The program will also save past user searches in a database."
              github="https://github.com/mlee0416/Stock"
              demo="https://stock123.herokuapp.com/"
              image="url(https://static-news.moneycontrol.com/static-mcnews/2018/01/BSE_Sensex_Budget_2017_volatile1-770x433.jpg) center / cover"
            />
            {/* // Project 2 */}
            <ProjectCard
              cardTitle="NFL Dashboard"
              cardText="Collaborated with a team to develop a dashboard which represents NFL predictions by web scraping NFL statistic and running the data through Scikit-Learn which is Python AI library"
              github="https://github.com/mynameisjohnn/nfl_dashboard"
              demo="https://nfl-dashboard.herokuapp.com/"
              image="url(http://www.picks.org/wp-content/uploads/2014/10/img_0439.jpg) center / cover"
            />
            {/* // Project 3 */}
            <ProjectCard
              cardTitle="Movie Searcher"
              cardText="Check out a simpile application built with React to scroll through any movie using The Movie DB API. This is a dynamic site that shows the movie poster, description, and links reviews."
              github="https://github.com/mlee0416/Movie-Search"
              demo="https://movie-searcher1.herokuapp.com/"
              image="url(https://icdn3.digitaltrends.com/image/avengers-11.jpg?ver=1) center / cover"
            />
            {/* // Project 4 */}
            <ProjectCardNoDemo
              cardTitle="Restaurant Analysis"
              cardText="We explored the impact of income and ethnicity on the types of the restaurants popular in an area. Using Yelp’s API, US Census Data, and LA Census Data, we were able to provide amazing findings."
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
              cardText="Check out a simpile application built with React to scroll through any movie using The Movie DB API. This is a dynamic site that shows the movie poster, description, and links reviews."
              github="https://github.com/mlee0416/Movie-Search"
              demo="https://movie-searcher1.herokuapp.com/"
              image="url(https://icdn3.digitaltrends.com/image/avengers-11.jpg?ver=1) center / cover"
            />

            <ProjectCard
              cardTitle="React Portfolio"
              cardText="This is my personal portfolio to feature all of my projects throughout the course of my coding career. Using ReactJS, this application shows my knowledge of my drive to learn."
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
              cardText="A user inputs a stock ticker symbol on our custom HTML page, and the program will then fetch, clean, and display the relvant stock data. The program will also save past user searches in a database."
              github="https://github.com/mlee0416/UFO_Sighting"
              demo="/404"
              image="url(http://www.openminds.tv/wp-content/uploads/HV-UFO-1983-ftr.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Belly Button Diversity"
              cardText="This is my personal portfolio to feature all of my projects throughout the course of my coding career. Using ReactJS, this application shows my knowledge of my drive to learn."
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
              cardText="I took what you've learned about Python Matplotlib and applied it to some real-world situations. Using previous Uber data, I was able to make some comparisons and conclusions."
              github="https://github.com/mlee0416/Python-Pandas-Uber-Analysis"
              demo="/404"
              image="url(https://www.tesla.com/sites/default/files/images/software_update.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Sentiment Analysis"
              cardText="Created a Python script to perform a sentiment analysis of the Twitter activity of various news oulets, and to present findings visually. Take a look at some findings by clicking below."
              github="https://github.com/mlee0416/Distinguishing-Sentiments"
              demo="/404"
              image="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWTkz2gQvwxLfbac8a8Cx6e65Iex60qYZa-OyyF5FGILys4xk) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="WeatherPy"
              cardText="Created a Python script to visualize the weather of 500+ cities across the world of varying distance from the equator. Click to find the relationships between different units of measurements."
              github="https://github.com/mlee0416/WeatherPy"
              demo="/404"
              image="url(http://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Heroes of Pymoli"
              cardText="Using data from a fake game, I was able to clean and analyze data to provide evidence of popular items, popularity demograhics, and many more."
              github="https://github.com/mlee0416/Heroes-of-Pymoli"
              demo="/404"
              image="url(https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1100/kjffvvi4vdfcyly9a0to) center / cover"
            />

            <ProjectCardNoDemo
              cardTitle="Twitter Media Mining"
              cardText="This is my personal portfolio to feature all of my projects throughout the course of my coding career. Using ReactJS, this application shows my knowledge of my drive to learn."
              github="https://github.com/mlee0416/Twitter_Media_Mining"
              demo="/404"
              image="url(https://www.howtogeek.com/wp-content/uploads/2016/11/img_58238a78b4405.png) center / cover"
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
              cardText="This project is a number of query searches that presents data using MySQL. By using the Sakila DB, I am able to demonstrates my ability to select rows, columns, make inner and outer joins, alter tables, and update new data."
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
              cardText="This project is a demo for product web design using WordPress. This WordPress site features different elements used to make a stunning website."
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
      <div>
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