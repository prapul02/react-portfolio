
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}  scroll>
            <Navigation>
                <Link to="/react-portfolio">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactme">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Prapul Reddy">
            <Navigation>
                <Link to="/react-portfolio">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contactme">Contact Me</Link>
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

export default App;