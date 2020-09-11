import React from "react";
import { Progress } from "antd";

const Result = props => (


  <Progress type="dashboard" percent={props.grade} width={80} 
    strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
  />
 
);

export default Result;
