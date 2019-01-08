import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import {Animation} from "mdbreact";

class Resume extends Component {
  render() {
    return (
      <div>
        <Animation type="fadeInLeft" >
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "left"}}>
              <img
                src="./profile.jpg"
                alt="avatar"
                style={{ height: "250px", borderRadius: "50%" }}
              />
            </div>
            <h3 style={{ paddingTop: "1em" }}>Michael Lee</h3>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #91eae4", width: "80%" }} />
            <p style={{paddingRight:"100px"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #91eae4", width: "80%" }} />
            <h5>Address</h5>
            <p>1307 Palo Verde Rd. Irvine, CA 92617</p>
            <h5>Phone</h5>
            <p>(909) 525-2015</p>
            <h5>Email</h5>
            <p>mlee0416@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://portfolio-react1.herokuapp.com/">https://portfolio-react1.herokuapp.com/</a></p>
          </Cell>
          {/* Education */}
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>
                <h5 style={{ marginTop: "0px" }}>
                  DATA ANALYTICS & VISUALIZATION CERTIFICATION | UNIVERSITY OF
                  CALIFORNIA, IRVINE | JULY 2018
                </h5>
                <ul>
                  <li>
                    Learned various practices and programming languages to build
                    applications that best visualize data
                  </li>
                  <li>
                    Portfolio: ​https://mlee0416.github.io/Developer-Portfolio/
                  </li>
                </ul>
                <h5 style={{ marginTop: "0px" }}>
                BACHELOR OF ARTS IN SOCIOLOGY | UNIVERSITY OF CALIFORNIA,RIVERSIDE | AUGUST 2010
                </h5>
            

            {/*Technical Skills & Certifications  */}
            <h3>Technical Skills & Certifications</h3>

            <h5> LANGUAGES/FRAMEWORKS/SOFTWARE/DATABASES/LIBRARIES</h5>
                <ul>
                    <li>Python, JavaScript, HTML, CSS, Microsoft Excel, Google Sheets, Tableau, SQL, MySQL, MongoDB, Bootstrap</li>
                </ul>
            <h5>TOP 5 LANGUAGES & FRAMEWORK</h5>
            <Skills skill="JavaScript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="Python" progress={60}/>
            <Skills skill="MySQL" progress={50} />
            <Skills skill="React" progress={25} />

            <h5>CERTIFICATIONS</h5>
            <p>Google AdWords Certified, HIPAA Compliant Certified</p>
            <h3>Current Projects</h3>
            <h5>ZENDESK STANDARD OF PROCEDURE | YAPI | OCTOBER 2018 – PRESENT</h5>
                <ul>
                    <li>
                    Create a standard of procedure for Zendesk to streamline workflow and visualize accurate data
                    </li>
                </ul>
            <h3>Work Experience</h3>
            <h5>TECHNICAL SUPPORT SPECIALIST | YAPI | JULY 2018 – PRESENT</h5>
            <ul>
                <li>Assist in developing data visualization tools using Python to retrieve relevant data from Zendesk AP</li>
                <li>Problem solve by observing trace logs and debugging tools</li>
                <li>Provide excellent verbal and written communication to clients during the troubleshooting process</li>
            </ul>
            <h5>MARKETING ANALYST | NETT SOLUTIONS | JANUARY 2018 – JULY 2018</h5>
            <ul>
                <li>Monitored and maintained over 20 client bid adjustments for optimal CPA (Cost Per Acquisition)</li>
                <li>Delivered keyword research recommendations based on the client’s industry</li>
                <li>Provided A/B Testing data to represent best practices for the client</li>
            </ul>
            <h5>ACCOUNT EXECUTIVE | NETT SOLUTIONS | MAY 2017 – JANUARY 2018</h5>
            <ul>
                <li>Reviewed and presented monthly Google Analytics data showing campaign performance</li>
                <li>Suggested actionable businesses strategies to optimize performance</li>
            </ul>
            <h5>ACCOUNT EXECUTIVE | NETT SOLUTIONS | MAY 2017 – JANUARY 2018</h5>
            <ul>
                <li>Collected, analyzed, and summarized sales activity in a monthly report</li>
                <li>Increased distribution sales by 14.6% through training programs with clients</li>
            </ul>
          </Cell>
        </Grid>
        </Animation>
      </div>
    );
  }
}
export default Resume;
