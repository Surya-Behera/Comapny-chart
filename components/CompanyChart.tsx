// import { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';


// interface CompanyChartProps {
//   data: number[];
// }

// const CompanyChart: React.FC<CompanyChartProps> = ({ data }) => {
//   const chartRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');
//       if (ctx) {
//         const chartInstance = new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
//             datasets: [
//               {
//                 label: 'Company Data',
//                 data: data,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//                 fill: false,
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               y: {
//                 beginAtZero: true,
//               },
//             },
//           },
//         });

//         // Cleanup function to destroy the chart instance
//         return () => {
//           chartInstance.destroy();
//         };
//       }
//     }
//   }, [data]);

//   return <canvas ref={chartRef} />;
// };

// export default CompanyChart;
'use client';

import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

const CompanyChart = ({ data }: { data: number[] }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        const config: ChartConfiguration = {
          type: 'radar',
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            datasets: [{
              label: 'Company Performance',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1500,
              easing: 'easeOutBounce'
            },
            scales: {
              r: {
                beginAtZero: true,
                min: 0,
                max: Math.max(...data) * 1.2
              }
            }
          }
        };

        chartInstanceRef.current = new Chart(ctx, config);
      }
    }

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef} />
    </div>
  );
};

export default CompanyChart;