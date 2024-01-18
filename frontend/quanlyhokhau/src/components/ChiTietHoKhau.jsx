import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getnhankhauRoute } from '../utils/APIRoutes';


function ChiTietHoKhau() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let { mahokhau } = useParams();

  useEffect(() => {
    const loadData = async () => {
      let res = await axios.get(`${getnhankhauRoute}?mahokhau=${mahokhau}`)
      if (res.status == 200) {
        let resData = await res.data.data;
        setData(resData);
      }

    }
    loadData();
  }, [navigate])

  console.log("dataa", data);


  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto flex">
          <h1 className="text-xl font-semibold text-gray-600">Các thông tin chi tiết của hộ
          </h1>
          {data ? <p className='ml-2 text-xl font-semibold text-gray-900'>
            {data[0]?.tenchuho}
          </p> : <p></p>}
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <a href='/addnhankhau'>Thêm mới</a>
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Họ tên
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Giới tính
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Ngày sinh
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Dân tộc
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Tôn giáo
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Quê quán
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      CCCD
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Nghề nghiệp
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Địa chỉ hiện tại
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Quan hệ chủ hộ
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Người thực hiện
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Ghi chú
                    </th>
                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Chỉnh sửa</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900 sm:pl-6">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-500">
                        {item.gioitinh}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.ngaysinh.split('T')[0]}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{item.dantoc}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.tongiao}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.nguyenquan}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.cccd}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.nghenghiep}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.diachihientai}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.quanhechuho}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.nguoithuchien}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{item.ghichu}</td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button onClick={() => navigate(`/updatenhankhau/${item.id}`)} className="text-indigo-600 hover:text-indigo-900">
                          Chỉnh sửa<span className="sr-only">, {item.id}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiTietHoKhau;