import React, { Component } from "react";
import "./App.css";
import {
  Link,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
} from "react-mdl";
import Main from './components/main'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout> 
          <Header className="background" title="Michael Lee's Portfolio" scroll>
            <Navigation>
              <a href="/">Home</a>
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
              <a href="/aboutme">About Me</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="">
            <Navigation>
              <a href="/resume">Resume</a>
              <a href="/projects">Projects</a>
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
