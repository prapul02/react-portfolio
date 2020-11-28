import React from 'react'
import { Cell, Grid, Card, CardTitle,CardText,CardActions,CardMenu,IconButton } from 'react-mdl';

function Projects(){
    return(
            
                        <div className='projects-grid'>
                            <div>
                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://repository-images.githubusercontent.com/220870477/89948080-045a-11ea-99c4-d21971d0bc28) center / cover'}}>Authentication</CardTitle>
                                <CardText>
                                    Node and Express authentication mechanism with bcrypt module and JWT
                                </CardText>
                                <CardActions border>
                                <a href="https://github.com/prapul02/authentication" rel="noreferrer" target="_blank">GitHub</a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </div>
                            <div>
                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}>Ticket Booking</CardTitle>
                                <CardText>
                                    Ticket booking application using  Express rest api's , Sequelize ORM, Handlebars template engine
                                </CardText>
                                <CardActions border>
                                <a href="https://github.com/prapul02/Bus-Ticket-Booking-System" rel="noreferrer" target="_blank">GitHub</a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </div>
                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/2600/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg) center / cover'}}>CRM</CardTitle>
                                <CardText>
                                    CRM application with Express, React, MongoDB
                                </CardText>
                                <CardActions border>
                                <a href="https://github.com/prapul02/crm-frontend" rel="noreferrer" target="_blank">GitHub</a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            <div>
                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}>Conference SignUp Form</CardTitle>
                                <CardText>
                                    Event signup form using Express, Handlebars, Sequelize, chart js
                                </CardText>
                                <CardActions border>
                                <a href="https://github.com/prapul02/conference_event_sign_up_form" rel="noreferrer" target="_blank">GitHub</a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </div>
                        </div>
                    
        
    )
}

export default Projects;