import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './landingpage'
import Aboutme from './aboutme'
import Contactme from './contactme'
import Projects from './projects'
import Resume from './resume'

function Main() {
    return(
        <Switch>
            <Route exact path="/react-portfolio/" component={Landing}/>
            <Route path="/aboutme" component={Aboutme}/>
            <Route path="/contactme" component={Contactme}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
        </Switch>
    )
}

export default Main;