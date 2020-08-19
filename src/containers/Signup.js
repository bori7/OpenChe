import React, { useContext,useState} from "react";
import {MyContext} from '../store/context/myContext';
import { Form, Input, Icon, Button, Select } from "antd";
import { NavLink } from "react-router-dom";
import * as actions from "../store/actions/auth";

const FormItem = Form.Item;
const Option = Select.Option;

const RegistrationForm = (props) => {
  
  const {dispatch} = useContext(MyContext)
  //const {loading, error} = state

  const [confirmDirty, setConfirmDirty] = useState(false)
  

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let is_student = false;
        let is_teacher = false;
        values.userType === "student" &&  (is_student = true );
        values.userType === "teacher" &&  (is_teacher = true );
        dispatch(actions.authSignup(values.userName, values.email,values.password,
          values.confirm, is_student,is_teacher))
          props.history.push("/");
      }
    });
  };

  const handleConfirmBlur = e => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value );
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

    const { getFieldDecorator } = props.form;

    return (
      <Form onSubmit={handleSubmit}>
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onBlur={handleConfirmBlur}
            />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator("userType", {
            rules: [
              {
                required: true,
                message: "Please select a user!"
              }
            ]
          })(
            <Select placeholder="Select a user type">
              <Option value="student">Student</Option>
              <Option value="teacher">Teacher</Option>
            </Select>
          )}
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Signup
          </Button>
          Or
          <NavLink style={{ marginRight: "10px" }} to="/login/">
            login
          </NavLink>
        </FormItem>
      </Form>
    );
  };
const WrappedRegistrationForm = Form.create()(RegistrationForm);


export default WrappedRegistrationForm;
