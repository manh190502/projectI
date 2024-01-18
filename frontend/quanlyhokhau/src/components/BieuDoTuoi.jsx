import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { thongketuoiRoute } from '../utils/APIRoutes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


Chart.register(...registerables);

function BieuDoTuoi() {
  const nagivate = useNavigate();
  const [ages, setAges] = useState([]);

  const tke = [
    { "<10": 0 },
    { "10-27": 0 },
    { "27-40": 0 },
    { "40-60": 0 },
    { ">60": 0 },
  ]

  const classifyAge = age => {
    if (age <= 10) {
      tke[0]['<10']++;
    } else if (age > 10 && age <= 27) {
      tke[1]['10-27']++;
    } else if (age > 27 && age <= 40) {
      tke[2]['27-40']++;
    } else if (age > 40 && age <= 60) {
      tke[3]['40-60']++;
    } else {
      tke[4]['>60']++;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      let res = await axios.get(`${thongketuoiRoute}`)
      setAges(res.data.data)
    }
    loadData();
  }, [nagivate])

  if (ages) {
    ages.forEach(age => {
      classifyAge(age);
    });
  }


  return (
    <div className='ml-96 mr-96 mt-36' id='bieudotuoi'>
      <Bar
        data={{
          labels: [
            "Dưới 10t",
            "10-27",
            "27-40",
            "40-60",
            "Trên 60t"
          ],
          datasets: [
            {
              label: "BIỂU ĐỒ THỐNG KÊ ĐỘ TUỔI CỦA TỔ DÂN PHỐ",
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
              data: [tke[0]['<10'], tke[1]['10-27'], tke[2]['27-40'], tke[3]['40-60'], tke[4]['>60']]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050"
          }, animation: {
            duration: 1500,
          }
        }}
      />
    </div>
  )
}

export default BieuDoTuoi