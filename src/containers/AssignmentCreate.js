import React,  { useContext, useState } from "react";
import {MyContext} from '../store/context/myContext';
import { Form, Input, Icon, Button, Divider } from "antd";
import QuestionForm from "./QuestionForm";
import Hoc from "../hoc/hoc";
import { createASNT } from "../store/actions/assignments";

const FormItem = Form.Item;

const AssignmentCreate = (props) => {

  const [formCount , setFormCount] = useState(1)
  const {state, dispatch} = useContext(MyContext)

  const {token, username} = state
 

  const remove = () => {
    setFormCount(formCount - 1)
  };

 const add = () => {
    setFormCount(formCount + 1)
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const questions = [];
        for (let i = 0; i < values.questions.length; i += 1) {
          questions.push({
            title: values.question[i],
            choices: values.questions[i].choices.filter(el => el !== null),
            answer: values.answers[i]
          });
        }
        const asnt = {
          teacher: username,
          title: values.title,
          questions:questions
        };
        dispatch(createASNT(token, asnt));
      }
    });
  };


    const { getFieldDecorator } = props.form;
    const questions = [];
    for (let i = 0; i < formCount; i += 1) {
      questions.push(
        <Hoc key={i}>
          {questions.length > 0 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={questions.length === 0}
              onClick={remove}
            />
          ) : null}
          <QuestionForm id={i} {...props} />
          <Divider />
        </Hoc>
      );
    }
    return (
      <Form onSubmit={handleSubmit}>
        <h1>Create an assignment</h1>
        <FormItem label={"Title: "}>
          {getFieldDecorator(`title`, {
            validateTrigger: ["onChange", "onBlur"],
            rules: [
              {
                required: true,
                message: "Please input a title"
              }
            ]
          })(<Input placeholder="Add a title" />)}
        </FormItem>
        {questions}
        <FormItem>
          <Button type="secondary" onClick={add}>
            <Icon type="plus" /> Add question
          </Button>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  };

const WrappedAssignmentCreate = Form.create()(AssignmentCreate);


export default WrappedAssignmentCreate;
