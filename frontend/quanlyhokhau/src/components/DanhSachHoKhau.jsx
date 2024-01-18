import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { gethokhauRoute } from '../utils/APIRoutes';
import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'

import { BsSearch } from 'react-icons/bs';
import Empty from "../assets/empty.png";

function DanhSachHoKhau() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [find, setFind] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      let resPage = await axios.get(`${gethokhauRoute}?page=${page}&text=${find}`)
      if (resPage.status == 200) {
        let res = await resPage.data.data;
        setData(res);
      }
    }
    loadData();
  }, [page, find])


  const handleDesPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(0);
    }
  }

  const handleAcsPage = () => {
    setPage(page + 1);
  }

  const handleFind = (event) => {
    console.log("text", event.target.value);
    setFind(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Danh sách các hộ khẩu</h1>
        </div>
        <div className='-mt-4'>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Tìm kiếm
          </label>
          <form className=" flex rounded-md shadow-sm"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="email"
                className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Nhập tên chủ hộ"
                value={find}
                onChange={(event) => handleFind(event)}
              />
            </div>
            <button
              type="submit"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <BsSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
          </form>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <a href='/addhokhau'>Thêm mới</a>
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg items-start flex justify-center">
              {data.length != 0 ?
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Mã hộ khẩu
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Mã khu vực
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Tên chủ hộ
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Địa chỉ
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Điểm tích lũy
                      </th>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Người thực hiện
                      </th>
                      <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {item.mahokhau}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.makhuvuc}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.tenchuho}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.diachi}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.diemtichluy}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.nguoithuchien}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button onClick={() => navigate(`/updatehokhau/${item.mahokhau}`)} className="text-indigo-600 hover:text-indigo-900">
                            Chỉnh sửa<span className="sr-only">, {item.id}</span>
                          </button>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button onClick={() => navigate(`/hokhau/${item.mahokhau}`)} className="text-indigo-600 hover:text-indigo-900">
                            Xem chi tiết<span className="sr-only">, {item.id}</span>
                          </button>
                        </td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
                : <img className='h-[250px] flex items-center justify-center' src={Empty} alt="Logo" />
              }
            </div>
          </div>
        </div>
      </div>
      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handleDesPage()}
          >
            Previous
          </button>
          <button
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handleAcsPage()}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  )
}

export default DanhSachHoKhau