import React, {Component} from 'react';
import {
  ButtonToolbar,
  Button,
  Image,
  Grid,
  Row,
  Col,
  Carousel
} from 'react-bootstrap'
import './App.css';
import cl19 from './es19 copy.jpg'
import shivam from './shivam copy.jpg'
import marios from './marios copy.jpg'
import merna from './merna copy.jpg'
import yumi from './yumi copy.png'
import grace from './grace.jpg'
import './App.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.scrollTop = this.scrollTop.bind(this)
    this.scrollDown = this.scrollDown.bind(this)
    this.scrollabout = this.scrollabout.bind(this)
  }
  scrollTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    console.log(window.outerWidth, window.outerHeight)
  }
  scrollDown() {
    let x = (window.outerWidth / 100 * 42) + (window.outerHeight / 100 * 105)
    document.body.scrollTop = x
    document.documentElement.scrollTop = x
  }
  scrollabout() {
    let x = (window.outerWidth / 100 * 42) + (window.outerHeight / 100 * 5)
    document.body.scrollTop = x
    document.documentElement.scrollTop = x
  }

  render() {
    let style = {
      width: '100%'
    }
    return (<nav>
      <Grid>
        <Row style={style}>
          <Col xs={3} sm={1} md={1} lg={1}>
            <Image src="http://www.classcreator.com/000/1/1/2/33211/userfiles/image/ENMS_Knight_Logotransparent.png" className='logo'/>
          </Col>
          <Col xs={9} sm={5} md={4} lg={5}>
            <p className='title'>East Noble AFS</p>
          </Col>
          <Col xs={12} xsOffset={3} sm={6} md={6} lg={3}>
            <ButtonToolbar>
              <Button onClick={this.scrollTop} className='glyphicon glyphicon-eject tb'></Button>
              <Button className='tb' onClick={this.scrollabout}>About Us</Button>
              <Button className='tb' onClick={this.scrollDown}>Contact Us</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    </nav>)
  }
}
class Top extends React.Component {
  render() {
    return (<Carousel md={12} className='coro' interval={4000}>
      <Carousel.Item>
        <img src={cl19} alt='cl19' className='car'/>
        <Carousel.Caption>
          <h3>2018-2019</h3>
          <p>East Noble AFS Exchange students</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={marios} alt='marios' className='car'/>
        <Carousel.Caption>
          <h3>Marios of Israel</h3>
          <p>Hosted by the Kidd family</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={merna} alt='merna' className='car'/>
        <Carousel.Caption>
          <h3>Merna of Egypt</h3>
          <p>Hosted by the Smoot family</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={shivam} alt='shivam' className='car'/>
        <Carousel.Caption>
          <h3>Shivam of India</h3>
          <p>Hosted by the Housholder family</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={yumi} alt='yumi' className='car'/>
        <Carousel.Caption>
          <h3>Yumi of Turkey</h3>
          <p>Hosted by the White family</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>)
  }
}
class About extends React.Component {
  render() {
    return (<div className='aboutUs'><br/><br/><br/>
      <p className='about'>About Us</p><br/>
      <p className="aboutp">We are a group of volunteers who believe that welcoming students from around the world into our homes, schools and communities is a lot fun and an amazing learning experience for everyone involved<br/><br/>
        Our host families range in age and many of them are empty nesters. Some of our host parents are single parents and many of the host families host students year after year.
        <br/><br/>
        We work closely with schools, community leaders and other volunteer organizations. Many of our exchange students achieve their goal of volunteering 100 hours toward the betterment of various aspects of their local community.<br/>
        <br/>
        All of them acquire leadership and communication skills that they can use when they return to their home country.
        <br/>
      </p>
    </div>)
  }
}

class Contact extends React.Component {
  render() {
    return (<div className='contact'>
      <Grid>
        <Row>
          <p className='cont'>Contact Us</p>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4}><br/><br/><br/>
            <img src={grace} alt='grace housholdr' className='conpic'/></Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className='contp'><br/><br/><br/>
              Grace Housholder
              <br/>
              East Noble AFS YES cluster co-ordinator<br/>
              Email: &ensp;
              <a href="https://mail.google.com/mail/u/0/#search/ghousholder%40kpcmedia.com" target="_blank" rel="noopener noreferrer">ghousholder@kpcmedia.com</a><br/>
              Call: (260)318-1981<br/>
              or visit &ensp;
              <a href="https:\\afsusa.org" target="_blank" rel="noopener noreferrer">afsusa.org</a>
            </p>
          </Col>
        </Row>
      </Grid>
      {/*  <p className='about'>Contact Us</p>
      <div>
        <img src={grace}/>
        <p>
          Grace Housholder
          <br/>
          East Noble AFS YES cluster co-ordinator<br/>
          Email:
          <a href="https://mail.google.com/mail/u/0/#search/ghousholder%40kpcmedia.com" target="_blank">ghousholder@kpcmedia.com</a><br/>
          Call: (260)318-1981<br/>
          or visit
          <a href="https:\\afsusa.org" target="_blank">afsusa.org</a>
        </p>
      </div>*/
      }

    </div>)
  }
}
class App extends Component {
  render() {
    return (<div >
      <Nav/>
      <Top/>
      <About/>
      <Contact/>
    </div>);
  }
}

export default App;
