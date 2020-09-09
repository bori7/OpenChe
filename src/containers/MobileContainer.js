

import React, { useContext, useState} from "react";
import {MyContext} from '../store/context/myContext';
import { Link, withRouter } from "react-router-dom";
import * as actions from "../store/actions/auth";
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import {Button,  Icon,  Menu,
  Segment, Sidebar} from 'semantic-ui-react';
import {HomepageHeading} from './Header';

  const {  Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  })


const MobileContainer = (props) =>  {

    const [sidebarOpened, setSidebarOpened] = useState();
  
    const handleSidebarHide = () => setSidebarOpened(false )
    const handleToggle = () => setSidebarOpened(true )
  
      const {state, dispatch} = useContext(MyContext);
      const isAuthenticated = state.token !== null
  
      const { children } = props
      
      const logout = () => {
        actions.logout(dispatch)
        props.history.push("/");
      }
    
      return (
        <Media as={Sidebar.Pushable} at='mobile'>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='overlay'
              inverted
              onHide={handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
            <Menu.Item as='a' >
              <Link to="/">Home</Link>
                </Menu.Item>
              {isAuthenticated ? (
              <Menu.Item>
                <Link to={`/profile/${state.userId}`}>Profile</Link>
              </Menu.Item>
                ) : null}
              {isAuthenticated && state.is_teacher ? (
                <Menu.Item>
                  <Link to="/create">Create</Link>
                </Menu.Item>
              ) : null}
              {isAuthenticated ? (
                <Menu.Item>
                  <Link to="/assignment">Assignments</Link>
                </Menu.Item>
              ) : null}
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              {/* <Menu.Item position='right'>
                { isAuthenticated ? (
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={logout}>
                  Logout
                  </Button>
                  ) : (
                    <Button as='a' inverted={!fixed}>
                    <Link to="/login">Login</Link>
                    </Button>
                  )}
              </Menu.Item> */}
            
              {/* <Menu.Item as='a' >
              <Link to="/">Home</Link>
              </Menu.Item>
              {isAuthenticated ? (
                  <Menu.Item>
                    <Link to={`/profile/${state.userId}`}>Profile</Link>
                  </Menu.Item>
                    ) : null}
                {isAuthenticated && state.is_teacher ? (
                  <Menu.Item>
                    <Link to="/create">Create</Link>
                  </Menu.Item>
                ) : null}
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              { isAuthenticated ? (
                <Menu.Item key="2" onClick={logout} >
                  Logout
                </Menu.Item>
              ) : (
                <Menu.Item key="2">
                  <Link to="/login">Login</Link>
                </Menu.Item>
              )} */}
            </Sidebar>
  
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 350, padding: '1em 0em' }}
                vertical
              >
                
                  <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item as='a' >
                    <Link to="/">Home</Link>
                    </Menu.Item>
                    {isAuthenticated ? (
                    <Menu.Item>
                      <Link to={`/profile/${state.userId}`}>Profile</Link>
                    </Menu.Item>
                      ) : null}
                    <Menu.Item position='right'>
                    { isAuthenticated ? (
                      <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={logout}>
                      Logout
                      </Button>
                      ) : (
                      <Menu.Item position='right'>
                      <Button as='a' inverted>
                      <Link to="/login">Login</Link>
                      </Button>
                    </Menu.Item>
                      )}
                  </Menu.Item>
                  
                  </Menu>
                
                <HomepageHeading mobile />
              </Segment>
  
              {children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Media>
      )
    }
  
  export default withRouter(MobileContainer)
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  