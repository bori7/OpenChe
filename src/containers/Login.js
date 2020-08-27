import React, { useContext} from "react";
import {MyContext} from '../store/context/myContext';
import { Form, Icon, Input, Button, Spin } from "antd";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const NormalLoginForm = (props) => {

  const {state, dispatch } = useContext(MyContext)

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        actions.authLogin(values.userName, values.password,dispatch)
        //console.log(values.userName, values.password)
        props.history.push("/");
      }
    });
  };


    const { getFieldDecorator } = props.form;

    return (
      <div>
        
        {state.loading ? (
          <Spin indicator={antIcon} />
        ) : (
          <Form onSubmit={handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              Or
              <NavLink style={{ marginRight: "10px" }} to="/signup/">
                {" "}
                Signup
              </NavLink>
            </FormItem>
          </Form>
        )}
      </div>
    );
};

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export default WrappedNormalLoginForm;
