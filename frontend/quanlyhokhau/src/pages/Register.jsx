import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { registerRoute } from '../utils/APIRoutes';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    hoten: "",
    taikhoan: "",
    matkhau: "",
    nhaplaimatkhau: ""
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


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { hoten, taikhoan, matkhau, nhaplaimatkhau } = values;
      const { data } = await axios.post(registerRoute, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        hoten,
        taikhoan,
        matkhau
      })

      if (data.status == "000") {
        localStorage.setItem("tai-khoan", JSON.stringify(data.data));
        toast.success("Đăng ký thành công", toastOptions);
        navigate("/login");
      } else {
        toast.error("Lỗi, vui lòng đăng ký lại", toastOptions);
      }
    }
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleValidation = () => {
    const { hoten, taikhoan, matkhau, nhaplaimatkhau } = values;

    if (matkhau === "" || nhaplaimatkhau === "" || taikhoan === "" || hoten === "") {
      toast.warning("Vui lòng điền đầy đủ các thông tin!", toastOptions);
      return false;
    } else if (hoten.length < 6) {
      toast.warning("Họ tên ít nhất 6 ký tự", toastOptions);
      return false;
    } else if (matkhau.length < 8) {
      toast.warning("Mật khẩu ít nhất 8 ký  tự", toastOptions);
      return false;
    } else if (taikhoan === "") {
      toast.warning("Không được để trống tài khoản", toastOptions);
      return false;
    } else if (matkhau !== nhaplaimatkhau) {
      toast.warning("Mật khẩu không khớp", toastOptions);
      return false;
    }

    return true;
  }


  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <button
        type="button"
        className="ml-32 flex w-28 items-center rounded border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        <a href="/">Trang chủ</a>
      </button>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Đăng ký tài khoản</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(event) => handleSubmit(event)}>
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              placeholder="Họ và tên"
              name="hoten"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="text"
              placeholder="Tài khoản"
              name="taikhoan"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="password"
              placeholder="Mật khẩu"
              name="matkhau"
              onChange={e => handleChange(e)}
            />
            <input
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 bg-slate-50 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              type="password"
              placeholder="Nhập lại mật khẩu"
              name="nhaplaimatkhau"
              onChange={e => handleChange(e)}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Lưu thông tin
                </label>
              </div>

              <div className="text-sm flex gap-1">
                <p>Đã có tài khoản</p>
                <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng nhập
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register