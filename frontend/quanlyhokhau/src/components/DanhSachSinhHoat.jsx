import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { getbuoihopRoute } from '../utils/APIRoutes';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ChiTietBuoiHop from './ChiTietBuoiHop';


function DanhSachSinhHoat() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      let resPage = await axios.get(`${getbuoihopRoute}?page=${page}`)
      if (resPage.status == 200) {
        let res = await resPage.data.data;
        setData(res);
      }
    }
    loadData();
  }, [page])


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


  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-16">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Danh sách các cuộc họp, buổi sinh hoạt</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            <a href='/addsinhhoat'>Thêm mới</a>
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
                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Chủ đề
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Địa điểm
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Thời gian
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Loại
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Chi tiết
                    </th>

                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Xem chi tiết</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item) => (
                    <ChiTietBuoiHop key={item.id} item={item} />
                  ))
                  }
                </tbody>
              </table>
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

export default DanhSachSinhHoat