import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { thongketamtruRoute, thongketamvangRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

Chart.register(...registerables);


function BieuDoTTruTVang() {
  const nagivate = useNavigate();
  const [tamtru, setTamtru] = useState([]);
  const [tamvang, setTamvang] = useState([]);

  const thongkeTamTru = [
    { "2015": 0 },
    { "2016": 0 },
    { "2017": 0 },
    { "2018": 0 },
    { "2019": 0 },
    { "2020": 0 },
    { "2021": 0 },
    { "2022": 0 },
    { "2023": 0 },
  ]
  const thongkeTamVang = [
    { "2015": 0 },
    { "2016": 0 },
    { "2017": 0 },
    { "2018": 0 },
    { "2019": 0 },
    { "2020": 0 },
    { "2021": 0 },
    { "2022": 0 },
    { "2023": 0 },
  ]

  const classifyYearTamTru = year => {
    if (year == 2015) {
      thongkeTamTru[0]["2015"]++;
    } else if (year == 2016) {
      thongkeTamTru[1]["2016"]++;
    } else if (year == 2017) {
      thongkeTamTru[2]["2017"]++;
    } else if (year == 2018) {
      thongkeTamTru[3]["2018"]++;
    } else if (year == 2019) {
      thongkeTamTru[4]["2019"]++;
    } else if (year == 2020) {
      thongkeTamTru[5]["2020"]++;
    } else if (year == 2021) {
      thongkeTamTru[6]["2021"]++;
    } else if (year == 2022) {
      thongkeTamTru[7]["2022"]++;
    } else if (year == 2023) {
      thongkeTamTru[8]["2023"]++;
    }
  }

  const classifyYearTamVang = year => {
    if (year == 2015) {
      thongkeTamVang[0]["2015"]++;
    } else if (year == 2016) {
      thongkeTamVang[1]["2016"]++;
    } else if (year == 2017) {
      thongkeTamVang[2]["2017"]++;
    } else if (year == 2018) {
      thongkeTamVang[3]["2018"]++;
    } else if (year == 2019) {
      thongkeTamVang[4]["2019"]++;
    } else if (year == 2020) {
      thongkeTamVang[5]["2020"]++;
    } else if (year == 2021) {
      thongkeTamVang[6]["2021"]++;
    } else if (year == 2022) {
      thongkeTamVang[7]["2022"]++;
    } else if (year == 2023) {
      thongkeTamVang[8]["2023"]++;
    }
  }

  useEffect(() => {
    const loadData = async () => {
      let resTamTru = await axios.get(`${thongketamtruRoute}`)
      let resTamVang = await axios.get(`${thongketamvangRoute}`)
      setTamtru(resTamTru.data.data);
      setTamvang(resTamVang.data.data);
    }

    loadData();
  }, [nagivate])

  console.log("tamtru", tamtru);

  console.log("tamvang", tamvang);

  if (tamtru) {
    tamtru.forEach(item => {
      classifyYearTamTru(item)
    })
  }

  if (tamvang) {
    tamvang.forEach(item => {
      classifyYearTamVang(item)
    })
  }

  return (
    <div className='ml-96 mr-96 mt-36 mb-20' >
      <Line
        data={{
          labels: ["năm 2015", "năm 2016", "năm 2017", "năm 2018", "năm 2019",
            "năm 2020", "năm 2021", "năm 2022", "năm 2023"],
          datasets: [
            {
              data: [
                thongkeTamTru[0]["2015"],
                thongkeTamTru[1]["2016"],
                thongkeTamTru[2]["2017"],
                thongkeTamTru[3]["2018"],
                thongkeTamTru[4]["2019"],
                thongkeTamTru[5]["2020"],
                thongkeTamTru[6]["2021"],
                thongkeTamTru[7]["2022"],
                thongkeTamTru[8]["2023"],
              ],
              label: "Tạm trú",
              borderColor: "#e8c3b9",
              fill: false
            },
            {
              data: [
                thongkeTamVang[0]["2015"],
                thongkeTamVang[1]["2016"],
                thongkeTamVang[2]["2017"],
                thongkeTamVang[3]["2018"],
                thongkeTamVang[4]["2019"],
                thongkeTamVang[5]["2020"],
                thongkeTamVang[6]["2021"],
                thongkeTamVang[7]["2022"],
                thongkeTamVang[8]["2023"],
              ],
              label: "Tạm vắng",
              borderColor: "#c45850",
              fill: false
            }
          ]
        }}
        options={{
          title: {
            display: true,
            text: "Thống kê số lượng người tạm trú/ tạm vắng"
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }}
      />
    </div>
  )
}

export default BieuDoTTruTVang