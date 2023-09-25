import React, { useCallback, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
    const getLocalData = JSON.parse(localStorage.getItem('catagories'));
    const localDataLenth = getLocalData.length;

    const donationParsent = (localDataLenth * 100) / 12;
    const totaldonation = 100 - donationParsent;

    console.log(donationParsent);


    const data = [
        { name: 'Group A', value: donationParsent },
        { name: 'Group B', value: totaldonation },
    ];

    const COLORS = ['#00C49F', '#FF444A',];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className=" container mx-auto">

        </div>
    );
};

export default Statistics;