import React, { useState} from "react";
import { Steps, Button } from "antd";

const Step = Steps.Step;

const Questions = (props) => {

const [current, setCurrent] = useState(0)

  
  const next = () => {
     const curr = current + 1;
    setCurrent( curr);
  }

  const prev = () => {
    const curr = current - 1;
    setCurrent( curr);
  }

  
  const { questions } = props;

    return (
      <div>
        <Steps progressDot current={current}>
          {questions.map((q, index) => (
            <Step key={index} />
          ))}
        </Steps>
        <div>{questions[current]}</div>
        <div>
          {current < questions.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === questions.length - 1 && (
            <Button type="primary" onClick={props.submit()}>
              Submit
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }

export default Questions;
