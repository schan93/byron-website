import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Home from './Home';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import Testimonials from './Testimonials';

import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const App = () => {

  return (
    <Container style={{height: '100%'}}>
      <NavBar />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/" component={Home} />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        {/* <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" style={{height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px'}} />
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark">
            <Menu.Item key="1">
              <Link
                to="/" >
                <Icon type="home" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link
                to="/about" >
                <Icon type="user" />
                <span>About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
             <Link
                to="/contact" >
                <Icon type="message" />
                <span>Contact</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link
                to="/services" >
                <Icon type="tool" />
                <span>Services</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider> */}
        {/* <Layout>
          <Header style={{ background: '#fff', padding: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button type="primary" onClick={toggleCollapsed} style={{marginLeft: '20px', marginTop: '20px'}}>
             <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            <span>
              Byron NG
              <Button style={{marginLeft: '20px'}} icon="instagram" href="https://www.instagram.com/ng_byron"/>
              <Button style={{marginLeft: '20px'}} icon="facebook" href="https://www.facebook.com/byron.ng.188"/>
            </span>
          </Header>
          <Content
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/" component={Home} />
          </Content>
        </Layout> */}
      </Container>
  );
}

export default App;