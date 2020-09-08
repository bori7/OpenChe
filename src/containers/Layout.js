import React, { useContext} from "react";
import {MyContext} from '../store/context/myContext';
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import {Button, Container, Divider,
  Grid, Header, Image, List,
  Segment} from 'semantic-ui-react';


const CustomLayout = (props) => {
  
//   const {state, dispatch} = useContext(MyContext);
//   const isAuthenticated = state.token !== null
  
//   const logout = () => {
//     actions.logout(dispatch)
//     props.history.push("/");
//   }

  return (
    <Segment style={{ padding: '3em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            We Help you Expand your mind and Intuition
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We can give you superpowers to imagine and build processes that they never thought possible.
           </p>
          <p style={{ fontSize: '1.33em' }}>
             Let us feed your wild imaginations and whet your passion... through pure chemical engineering.
          </p>
          {/* <Header as='h3' style={{ fontSize: '2em' }}>
            We Make Bananas That Can Dance
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
            bioengineered.
          </p> */}
        </Grid.Column>
        {/* <Grid.Column floated='right' width={6}>
          <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
        </Grid.Column> */}
      </Grid.Row>
      {/* <Grid.Row>
        <Grid.Column textAlign='center'>
          <Button size='huge'>Check Them Out</Button>
        </Grid.Column>
      </Grid.Row> */}
    </Grid>
  </Segment>
//       <Layout className="layout">
      
//         <Header>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             defaultSelectedKeys={["2"]}
//             style={{ lineHeight: "64px" }}
//           >
//             { isAuthenticated ? (
//               <Menu.Item key="2" onClick={logout} >
//                 Logout
//               </Menu.Item>
//             ) : (
//               <Menu.Item key="2">
//                 <Link to="/login">Login</Link>
//               </Menu.Item>
//             )}
//           </Menu>
//         </Header>
//         <Content style={{ padding: "0 50px" }}>
//           <Breadcrumb style={{ margin: "16px 0" }}>
//             <Breadcrumb.Item>
//               <Link to="/">Home</Link>
//             </Breadcrumb.Item>
//             {isAuthenticated ? (
//               <Breadcrumb.Item>
//                 <Link to={`/profile/${state.userId}`}>Profile</Link>
//               </Breadcrumb.Item>
//             ) : null}
//             {isAuthenticated && state.is_teacher ? (
//               <Breadcrumb.Item>
//                 <Link to="/create">Create</Link>
//               </Breadcrumb.Item>
//             ) : null}
//           </Breadcrumb>
//           <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
//             {props.children}
//           </div>
//         </Content>
//         <Footer style={{ textAlign: "center" }}>
//           CheArt for Chemical Engineering Students
//         </Footer>
//       </Layout>
   );

 };

export default withRouter(CustomLayout);
