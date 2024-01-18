import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { addtamvangRoute } from '../utils/APIRoutes';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function AddTamVang() {
  const [values, setValues] = useState({
    magiaytamvang: "",
    mahokhau: "",
    hoten: "",
    tungay: new Date(),
    denngay: new Date(),
    lydo: "",
    nguoithuchien: ""
  })

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const nagivate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { magiaytamvang, mahokhau, hoten, tungay, denngay, lydo, nguoithuchien } = values
    const { data } = await axios.post(addtamvangRoute, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      magiaytamvang,
      mahokhau,
      hoten,
      tungay: values.tungay.toISOString().split('T')[0],
      denngay: values.denngay.toISOString().split('T')[0],
      lydo,
      nguoithuchien
    })
    if (data.status == "000") {
      toast.success("Thêm mới tạm vắng thành công", toastOptions);
      nagivate('/tamvang');
    } else {
      toast.error("Lỗi, vui lòng thử lại", toastOptions);
    }
  }

  return (
    <div className='m-8'>
      <span className='ml-48 bg-slate-500 p-1 text-white'>
        <a href='/tamvang'>Quay lại</a>
      </span>
      <form className=" divide-y divide-gray-200 w-full flex justify-center"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="divide-y divide-gray-200 sm:space-y-5">
          <div className=" pt-8 sm:space-y-5 sm:pt-10">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Thêm tạm vắng mới</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Điền đầy đủ các thông tin cần thiết</p>
            </div>
            <div className="space-y-2 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã giấy tạm vắng
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="magiaytamvang"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã hộ khẩu
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="mahokhau"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Họ tên
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="hoten"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Từ ngày
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.tungay} onChange={(date) => setValues({ ...values, tungay: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Đến ngày
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.denngay} onChange={(date) => setValues({ ...values, denngay: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Lý do
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="lydo"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Người thực hiện
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="nguoithuchien"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

            </div>
          </div>
          <button
            type="submit"
            className="ml-[550px] w-42 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Thêm tạm trú mới
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTamVang