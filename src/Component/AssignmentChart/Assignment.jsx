import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Assignment = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className='text-4xl font-bold my-12 text-center'>Visualize my previous marks</h1>
            <div className='flex justify-center mt-5 items-center'>
                <div>
                         <AreaChart width={500} height={400} data={data} >
                         <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                         <XAxis dataKey = "assignment"></XAxis>
                         <YAxis></YAxis>
                         <Tooltip></Tooltip>
                         </AreaChart>
                </div>
            </div>

        </div>

        // <div>
        //     <h1 className='text-4xl font-bold my-12 text-center'>Visualize my previous marks</h1>
        //     <div className='flex justify-center mt-5 items-center'>
        //      <div>
        //      <LineChart width={500} height={400} data={data} >
        //         <Line dataKey={'marks'} stroke="#8884d8" ></Line>
        //         <XAxis dataKey='assignment'>Assignment no</XAxis>
        //         <YAxis ></YAxis>
        //         <Tooltip />
        //     </LineChart>
        //      </div>
        // </div>
        // </div>
    );
};

export default Assignment;