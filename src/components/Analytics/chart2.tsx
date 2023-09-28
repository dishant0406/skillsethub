'use Client'
import React, { useState } from 'react'
import axios from 'axios';
import { useTheme } from '@material-tailwind/react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';



type Props = {}


function ChartComponent2({ }: Props)
{

  const theme = useTheme();

  const chartData: any = {

    series: [
      10, 20, 30
    ],
    labels: [
      "Approved", "Rejected", "Pending"
    ],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };


  return <ReactApexChart width={500} options={chartData} series={chartData.series} type="polarArea" />;

};
export default ChartComponent2