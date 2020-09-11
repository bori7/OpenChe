import React from "react";
import { Divider, Radio } from "antd";

const RadioGroup = Radio.Group;

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
  paddingRight: '20px',
};

const Choices = (props) => { 
    const { questionId } = props;
    const { usersAnswers } = props;
    return (
      <RadioGroup
        onChange={(e, qId) => props.change(e, questionId)}
        value={
          usersAnswers[questionId] !== undefined &&
          usersAnswers[questionId] !== null
            ? usersAnswers[questionId]
            : null
        }
      >
        {props.choices.map((c, index) => {
          return (<div 
              >
            <Radio width={0.80 *window.innerWidth}style={radioStyle} value={c} key={index}>
              {c}
            </Radio>
            </div>
          );
        })}
      </RadioGroup>
    );
  };

export default Choices;
