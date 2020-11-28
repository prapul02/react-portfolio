import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profpic from '../img/profpic.png'

function Contactme(){
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Prapul Reddy</h2>
            <img
              src={profpic}
              alt="profile pic"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}></p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +91 9952038232
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    prapul02@gmail.com
                  </ListItemContent>
                </ListItem>

                

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
    
}

export default Contactme;