import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export default function UserChart({user, post}) {
  return (
    <div className='col s12 hoverable'>
        <div className="row">
            <div className="col s12">
                <h5> User Charts</h5>
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#5550bd"/>
                        <Line type="monotone" stroke="#5550bd" dataKey="uv"/>
                        <Tooltip/>
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                        <Legend/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  )
}
