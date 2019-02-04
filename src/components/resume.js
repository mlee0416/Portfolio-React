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
                style={{ marginLeft: "5em", height: "250px", borderRadius: "50%" }}
              />
            </div>
            <h3 style={{ paddingTop: "1em" }}>Michael Lee</h3>
            <h4 style={{ color: "grey" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #91eae4", width: "80%" }} />
            <p style={{paddingRight:"100px"}}>
            I am pursuing a career in web development, where I can apply my coding skills.
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
            <h3 style={{textDecoration: "underline"}}>Education</h3>
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
                    Github Portfolio: <a href="https://github.com/mlee0416">https://github.com/mlee0416</a> 
                  </li>
                </ul>
                <h5 style={{ marginTop: "0px" }}>
                BACHELOR OF ARTS IN SOCIOLOGY | UNIVERSITY OF CALIFORNIA, RIVERSIDE | AUGUST 2010
                </h5>
            

            {/*Technical Skills & Certifications  */}
            <h3 style={{textDecoration: "underline"}}>Technical Skills & Certifications</h3>

            <h5> LANGUAGES/FRAMEWORKS/SOFTWARE/DATABASES/LIBRARIES</h5>
                <ul>
                    <li>JavaScript, Python, HTML, CSS, React, PHP, SQL, MySQL, MongoDB, Microsoft Excel, Google Sheets, Tableau, WordPress</li>
                </ul>
            <h5>TOP 5 LANGUAGES & FRAMEWORK</h5>
            <Skills skill="JavaScript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="Python" progress={60}/>
            <Skills skill="React" progress={60}/>
            <Skills skill="MySQL" progress={50} />

            <h5>CERTIFICATIONS</h5>
            <p>Google AdWords Certified, HIPAA Compliant Certified</p>
            <h3 style={{textDecoration: "underline"}}>Current Projects</h3>
            <h5>Zendesk / Acuity Scheduling Tool | YAPI | January 2019 – Present</h5>
                <ul>
                    <li>
                    Develop a Zendesk application that displays our Acuity scheduling to streamline communication 
                    </li>
                    <li>
                    Current Status: Currently accessing Zendesk API to get current user data and validate against Acuity API by email
                    </li>
                    <li>
                    Current Issues: CORS errors when calling a request to Acuity’s API on the Zendesk tool client
                    </li>
                </ul>
            <h5>Freelance Web Page for Test Rite | Test Rite | February 2019 – Present</h5>
                <ul>
                    <li>
                    Develop a website using WordPress to feature products 
                    </li>
                    <li>
                    Contract requires 40 web pages and three back-end features: Contact Us form, Subscription page, and Warranty page 
                    </li>
                </ul>
            <h3 style={{textDecoration: "underline"}}>Work Experience</h3>
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
