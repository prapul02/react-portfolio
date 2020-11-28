import React from 'react';
import {Grid, Cell} from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profpic from '../img/profpic.png'

function Resume(){
    return(
        <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profpic}
                alt="profile pic"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Prapul Reddy</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Seeking to advance a growing tech career as a Software Developer. Offering skills in application development to develop superior software applications and other core systems.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Chennai, India</p>
            <h5>Phone</h5>
            <p>+91 9952038232</p>
            <h5>Email</h5>
            <p>prapul02@gmail.com</p>
            <h5>portfolio</h5>
            <p>prapul02.github.io/portfolio</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Vellore Institute Of Technology, Chennai, Tamil Nadu"
              schoolDescription="Bachelor Of Technology, Electrical and Electronics Engineering, I have completed my 4 year graduation degree with overall CGPA 7.28."
               />

               <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Sri Gayatri Institute, Hyderabad, Telangana"
                 schoolDescription="Board of Intermediate Education Telangana, I have completed my 12th with overall 93.2%."
                  />

<Education
                 startYear={2002}
                 endYear={2012}
                 schoolName="English Union School, Karimnagar, Telangana"
                 schoolDescription="Seconday Education (10TH), CBSE, I have completed my 10th with overall CGPA 9.6.

                 ."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={"Present"}
              jobName="Tata Consultancy Services"
              jobDescription="Developing rest api's with java, Api management with ca-api gateway, Agile Methodology."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                    skill="Express"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />

                <Skills
                  skill="HTML/CSS"
                  progress={75}
                  />
                  <Skills
                  skill="CA-API"
                  progress={100}
                  />


          </Cell>
        </Grid>
      </div>
    )
}

export default Resume;