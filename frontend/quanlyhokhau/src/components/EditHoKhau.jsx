import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { chitiethokhauRoute, updatehokhauRoute } from '../utils/APIRoutes';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditHoKhau() {
  const [values, setValues] = useState({
    mahokhau: "",
    makhuvuc: "",
    tenchuho: "",
    diachi: "",
    ngaychuyendi: new Date(),
    lydochuyen: "",
    nguoithuchien: "",
    ghichu: ""
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

  let { mahokhauchitiet } = useParams();
  const nagivate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      let res = await axios.get(`${chitiethokhauRoute}?mahokhau=${mahokhauchitiet}`)
      if (res.status == 200) {
        let resData = await res.data.data;
        const { mahokhau, makhuvuc, tenchuho, diachi, ngaychuyendi, lydochuyen, nguoithuchien, ghichu } = resData;

        setValues({ ...values, mahokhau, makhuvuc, tenchuho, diachi, lydochuyen, nguoithuchien, ghichu });
      }
    }
    loadData();
  }, [nagivate])


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { mahokhau, makhuvuc, tenchuho, diachi, ngaychuyendi, lydochuyen, nguoithuchien, ghichu } = values
    const { data } = await axios.put(updatehokhauRoute, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mahokhau,
      makhuvuc,
      tenchuho,
      diachi,
      ngaychuyendi: values.ngaychuyendi.toISOString().split('T')[0],
      lydochuyen,
      nguoithuchien,
      ghichu
    })

    if (data.status == "000") {
      toast.success("Thay đổi hộ khẩu thành công", toastOptions);
      nagivate('/hokhau');
    } else {
      toast.error("Lỗi, vui lòng thử lại", toastOptions);
    }
  }

  return (
    <div className='m-8'>
      <span className='ml-48 bg-slate-500 p-1 text-white'>
        <a href='/hokhau'>Quay lại</a>
      </span>
      <form className=" divide-y divide-gray-200 w-full flex justify-center"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="divide-y divide-gray-200 sm:space-y-5">
          <div className=" pt-8 sm:space-y-5 sm:pt-10 flex">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Sửa hộ khẩu</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Điền đầy đủ các thông tin cần thiết</p>
            </div>
            <div className="space-y-2 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã hộ khẩu
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="mahokhau"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.mahokhau}`}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Mã khu vực
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="makhuvuc"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.makhuvuc}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Tên chủ hộ
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="tenchuho"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.tenchuho}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Địa chỉ thường trú
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="diachi"
                    type="text"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.diachi}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ngày chuyển đi
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.ngaychuyendi} onChange={(date) => setValues({ ...values, ngaychuyendi: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Lý do chuyển
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="lydochuyen"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.lydochuyen}`}

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
                    value={`${values.nguoithuchien}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ghi chú
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="ghichu"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.ghichu}`}
                  />
                </div>
              </div>


            </div>
          </div>
          <button
            type="submit"
            className="ml-[550px] w-32 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sửa hộ khẩu
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditHoKhau;