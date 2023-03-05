import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import LineChart from './LineChart';

const Chart = ({ Data }) => {
    const [chartData, setChartData] = useState(null);
    
    useEffect(() => {
        setChartData({
            labels: Data?.map((data) => `${data?._id.day}-${data?._id.month}-${data?._id.year}`),
            datasets : [
                {
                    label: "Todos Added",
                    data: Data?.map((data) => data?.count),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                }
            ]
        })
    },[Data]);
        
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', margin: 40 }}>
      <div style={{ width: '70%'}}>
        { chartData?.labels !== undefined && <LineChart chartData={chartData}/> }
      </div>
    </div>
  )
}

export default Chart