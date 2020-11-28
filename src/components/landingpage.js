import React from 'react'
import { Grid, Cell } from 'react-mdl'
import profpic from '../img/profpic.png'


function Landing(){
    return(
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img 
                        src={profpic}
                        alt='profile pic'
                        className='profile-img'
                    />
                    <div className='banner-text'>
                        <h1>Full Stack Developer </h1>

                        <hr/>
                        <p>JavaScript | NodeJS | Express | React | HTML/CSS | CA-API | MongoDB </p>

                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/prapul-reddy-a59618b0/' target='_blank' rel="noreferrer" >
                            <i className="fa fa-linkedin-square" aria-hidden='true'/>
                            </a>

                            <a href='https://github.com/prapul02' target='_blank' rel="noreferrer" >
                            <i className="fa fa-github-square" aria-hidden='true'/>
                            </a>

                            <a href='https://twitter.com/prapulreddy02' target='_blank' rel="noreferrer" >
                            <i className="fa fa-twitter-square" aria-hidden='true'/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Landing;