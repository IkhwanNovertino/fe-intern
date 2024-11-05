import React, { useEffect, useState } from 'react'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, scales, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DataBarBiroComponent({ dataBiro }) {
  const { count } = dataBiro;  

  

  const data = {
    labels: [dataBiro.name],
    datasets: [
      {
        label: 'pending',
        data: [count[0]],
        backgroundColor: '#FFB802',
        borderColor: '#ffffff',
        borderWidth: 4,
        borderRadius: 12,
      },
      {
        label: 'aktif',
        data: [count[1]],
        backgroundColor: '#5900CC',
        borderColor: '#ffffff',
        borderWidth: 4,
        borderRadius: 12,
      },
      {
        label: 'selesai',
        data: [count[2]],
        backgroundColor: '#27C499',
        borderColor: '#ffffff',
        borderWidth: 4,
        borderRadius: 12,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          color: 'white'
        },
        border: { color: 'white' },
        stacked: true,
        ticks: {
          display: false,
        }
      },
      y: {
        grid: {
          color: 'white'
        },
        border: { color: 'white' },
        stacked: true,
        ticks: {
          display: false,
        }
      }
    }
  };

  return (
    <div>
      <Bar width={200} height={12} data={data} options={options} />
    </div>
  )
}
