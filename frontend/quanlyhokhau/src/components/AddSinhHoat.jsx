import axios from 'axios';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addbuoihopRoute } from '../utils/APIRoutes';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function AddSinhHoat() {
  const nagivate = useNavigate();
  const [values, setValues] = useState({
    loai: "Hành chính",
    id: "",
    chude: "",
    noidung: "",
    diadiem: "",
    thoigian: new Date(),
    dsduocmoi: []
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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { loai, id, chude, noidung, diadiem, thoigian, dsduocmoi } = values;
    const { data } = await axios.post(addbuoihopRoute, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      loai,
      id,
      chude,
      noidung,
      diadiem,
      thoigian: values.thoigian,
      dsduocmoi: values.dsduocmoi.split(",")
    })
    if (data.status == "000") {
      toast.success("Thêm mới sinh hoạt/buổi họp thành công", toastOptions);
      nagivate('/sinhhoat');
    } else {
      toast.error("Lỗi, vui lòng thử lại", toastOptions);
    }
  }

  console.log("time", values.thoigian)

  return (
    <div className='m-8'>
      <span className='ml-48 bg-slate-500 p-1 text-white'>
        <a href='/sinhhoat'>Quay lại</a>
      </span>
      <form className=" divide-y divide-gray-200 w-full flex justify-center"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="divide-y divide-gray-200 sm:space-y-5">
          <div className=" pt-8 sm:space-y-5 sm:pt-10 ">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Thêm sinh hoạt/buổi họp mới</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Điền đầy đủ các thông tin cần thiết</p>
            </div>
            <div className="space-y-2 sm:space-y-5">
              <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Loại
                </label>
                <select
                  name="loai"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => handleChange(e)}
                  value={values.loai}
                >
                  <option value="Hành chính">Hành chính</option>
                  <option value="Sinh hoạt">Sinh hoạt</option>
                </select>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã buổi họp/sinh hoạt
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="id"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Chủ đề
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="chude"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nội dung
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="noidung"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Địa điểm
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="diadiem"
                    type="text"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Thời gian
                  <p className="text-xs font-light text-red-500">* Bắt buộc</p>
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.thoigian} showTimeSelect onChange={(date) => setValues({ ...values, thoigian: date })} />
                </div>
              </div>

              <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5'>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Danh sách được mời
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="dsduocmoi"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={''}
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

            </div>
          </div>
          <button
            type="submit"
            className="ml-[550px] w-32 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Thêm buổi họp mới
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSinhHoat;