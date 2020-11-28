import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

function Skills ({skill,progress}){
  
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={progress} /> </div>
        </Cell>
      </Grid>
    )
  }


export default Skills;