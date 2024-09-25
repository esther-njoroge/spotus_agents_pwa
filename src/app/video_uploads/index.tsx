// pages/product-metrics.tsx

"use client"; 

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FaArrowLeft } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { PiX } from 'react-icons/pi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductMetrics: React.FC = () => {
  const data = {
    labels: ['Week 4', 'Week 3', 'Week 2', 'Week 1'],
    datasets: [
      {
        label: 'Number of video uploads weekly',
        data: [11, 14, 13, 16],
        backgroundColor: 'rgba(40, 56, 145)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        max: 25,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    // <div style={{ display: 'flex' }}>
    <div className='flex '>

      {/* Sidebar */}
      <div style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#5aa2d6',
        padding: '20px',
        color: 'white'
      }}>
        {/* <h1 style={{ fontSize: '24px' }}>Spot Us</h1> */}
        <img src="images/logo.png" alt="" />
        <div>
        <p className='mt-[40px] font-bold text-[30px]'>Dashboard</p>
        <p className='mt-[50%] font-bold text-[30px] text-[#4b60a2]'>Product Metrics</p>
        </div>
      </div>

      {/* Main Content */}
      {/* <div style={{ flex: 1, padding: '20px' }}> */}
      <div className='flex:1 p-[20px] ml-[10%]'>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaArrowLeft style={{ marginRight: '10px' }} />
          <p className='text-[26px] ml-[2%] w-[50%]'>This bar chart displays the number of videos uploaded per week thus help in understanding the effectiveness of the video feature in the product</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProductMetrics;
