import React,  { useContext, useEffect } from "react";
import { List, Skeleton } from "antd";
import Result from "../components/Result";
import { getGradedASNTS } from "../store/actions/gradedAssignments";
import Hoc from "../hoc/hoc";
import {MyContext} from '../store/context/myContext';
import { ComposedChart, Area, Bar,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Legend, Scatter,
} from 'recharts';
import { curveCardinal } from 'd3-shape';


// const cardinal = curveCardinal.tension(0.2);


const  Profile = () => {

  const {state, dispatch} = useContext(MyContext);
  const {token,username,assignments, loading} = state;

  if (assignments.length >= 10) {
    var data = assignments.slice(-10,)
  } else{
    var data = assignments}
   

  if(assignments.length >= 5){
    var assig= assignments.slice(-5,).reverse()
  } else {
    var assig = assignments
  }
  useEffect(() => {
   if (token !== undefined && token !== null) {
     getGradedASNTS(username, token,dispatch);
   }
    }, [token])

    // console.log(assignments)
    return (
      <Hoc>
        {loading ? (
          <Skeleton active />
        ) : (
          <Hoc>
            <h1>Welcome  {username}</h1>
            <br/>
            {/* <div> */}
            <ComposedChart
              width={0.80 *window.innerWidth}
              height={400}
              data={data}
              
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="data" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Area type="monotone" dataKey="grade" fill="#8884d8" stroke="#8884d8" /> */}
              <Bar dataKey="grade" barSize={40} fill="#413ea0" />
              <Line type="monotone" dataKey="grade" stroke="#ff7300" />
              <Scatter dataKey="grade" fill="red" />
            </ComposedChart>
            {/* </div> */}
            {/* <LineChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10, right: 30, left: 0, bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="assignment" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="grade" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              {/* <Area type={cardinal} dataKey="grade" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} /> */}
            {/* </LineChart> */}
            <br/>
            <p style={{fontSize: 'large'}}>Previous submissions</p>
            <List
              size="large"
              dataSource={assig.slice(-5,)}
              renderItem={a => <div><Result key={a.id} grade={a.grade} title = {a.assignment}/>
              <span>  {a.assignment}</span></div>}
            />
          </Hoc>
        )}
        
      </Hoc>
    );
}

// const mapStateToProps = state => {
//   return {
//     token: state.auth.token,
//     username: state.auth.username,
    
//   };
// };


export default Profile;
