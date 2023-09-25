import React, { useCallback, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
    const getLocalData = JSON.parse(localStorage.getItem('catagories'));
    const localDataLenth = getLocalData.length;

    const donationParsent = (localDataLenth * 100) / 12;
    const totaldonationParsent = 100 - donationParsent;

    const donation = parseFloat(donationParsent).toFixed(1);
    const totaldonation = parseFloat(totaldonationParsent).toFixed(1);


    const data = [
        { name: 'Group A', value: donationParsent },
        { name: 'Group B', value: totaldonationParsent },
    ];

    const COLORS = ['#00C49F', '#FF444A',];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>

        );
    };


    return (
        <div className=" container mx-auto flex flex-col items-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
            <div className="flex flex-row">
                <div className="flex items-center mr-9">
                    <p className=" text-lg font-bold mr-5">Your Donation: </p>
                    <div className=" h-4 w-[100px] bg-[#00C49F]"></div>
                </div>
                <div className="flex items-center">
                    <p className=" text-lg font-bold mr-5">Total Donation: </p>
                    <div className=" h-4 w-[100px] bg-[#FF444A]"></div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;