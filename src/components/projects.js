import React from 'react'
import { Cell, Grid, Card, CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl'

function Projects(){
    return(
        <div>
            <Grid >
                    <Cell col={12}>
                        <div className='projects-grid'>
                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth: '450px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Project 1</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                                <CardActions border>
                                    <Button colored>Github</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </div>
                    </Cell>
            </Grid>
        </div>
    )
}

export default Projects;