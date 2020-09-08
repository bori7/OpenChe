/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React, { useContext, useState} from "react";
import {MyContext} from '../store/context/myContext';
import { Link, withRouter } from "react-router-dom";
import * as actions from "../store/actions/auth";
import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import {Button, Container, Header, Icon, Menu,
  Segment, Visibility } from 'semantic-ui-react';


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
export const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Che-Art'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content='In a chemical engineering world'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        fontFamily: "Lucida Console",
      }}
    />
    {/* <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = (props) => {

  const [fixed, setFixed] = useState();

  const hideFixedMenu = () => setFixed(false )
  const showFixedMenu = () => setFixed(true )


  const {state, dispatch} = useContext(MyContext);
  const isAuthenticated = state.token !== null

  const logout = () => {
    actions.logout(dispatch)
    props.history.push("/");
    props.history.push("/");
    }

    const { children } = props

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 400, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
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
                <Menu.Item position='right'>
                  { isAuthenticated ? (
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={logout}>
                    Logout
                    </Button>
                    ) : (
                      <Button as='a' inverted={!fixed}>
                      <Link to="/login">Login</Link>
                      </Button>
                    )}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }

export default withRouter(DesktopContainer)

DesktopContainer.propTypes = {
  children: PropTypes.node,
}






