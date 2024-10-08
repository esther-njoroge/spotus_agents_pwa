// pages/product-metrics.tsx

"use client"; 

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { FaArrowLeft } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BiBorderRadius } from 'react-icons/bi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Signups: React.FC = () => {
    
  // Bar chart data
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Agents',
        data: [40, 35, 30, 25],
        backgroundColor: 'rgba(40, 56, 145)', // Blue color for Agents
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 87,
      },
      {
        label: 'Coaches',
        data: [20, 25, 22, 30],
        backgroundColor: 'rgba(233, 151, 0,)', // Orange color for Coaches
        borderColor: 'rgba(255, 159, 64, 1)',
        BorderRadius: '10%',
        borderWidth: 1,
        barThickness: 78,
        
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 40, // Adjust this value based on your data
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const, // Legend position at the bottom
      },
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#5aa2d6',
        padding: '20px',
        color: 'white'
      }}>
        <img src="images/logo.png" alt="" />
        <div>
          <p className='mt-[40px] font-bold text-[30px]'>Dashboard</p>
          <p className='mt-[50%] font-bold text-[30px] text-[#4b60a2]'>Product Metrics</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaArrowLeft style={{ marginRight: '10px' }} />
        </div>

        <div style={{ marginTop: '40px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Signups;










// pages/product-metrics.tsx

// "use client";

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { FaArrowLeft } from 'react-icons/fa';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ProductMetrics: React.FC = () => {
//   // Bar chart data
//   const data = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//     datasets: [
//       {
//         label: 'Agents',
//         data: [40, 35, 30, 25],
//         backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for Agents
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//         barThickness: 60, // Adjust the bar width for Agents
//       },
//       {
//         label: 'Coaches',
//         data: [20, 25, 22, 30],
//         backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color for Coaches
//         borderColor: 'rgba(255, 159, 64, 1)',
//         borderWidth: 1,
//         barThickness: 60, // Adjust the bar width for Coaches
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 50, // Adjust this value based on your data
//       },
//     },
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom' as const, // Legend position at the bottom
//       },
//     },
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Sidebar */}
//       <div style={{
//         width: '250px',
//         height: '100vh',
//         backgroundColor: '#5aa2d6',
//         padding: '20px',
//         color: 'white'
//       }}>
//         <h1 style={{ fontSize: '24px' }}>Spot Us</h1>
//         <div>
//           <p style={{ fontSize: '18px', marginBottom: '20px' }}>Dashboard</p>
//           <p style={{ fontSize: '18px', color: '#4b60a2' }}>Product Metrics</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <FaArrowLeft style={{ marginRight: '10px' }} />
//           <p>This chart shows the number of signups per week for Agents and Coaches.</p>
//         </div>

//         <div style={{ marginTop: '40px' }}>
//           <Bar data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductMetrics;
