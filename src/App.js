import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="background" title="My Portfolio" scroll>
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/projects">Projets</a>
              <a href="/aboutme">About Me</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/projects">Projets</a>
              <a href="/aboutme">About Me</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
