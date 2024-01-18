import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginRoute } from '../utils/APIRoutes';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    taikhoan: "",
    matkhau: ""
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
      const { taikhoan, matkhau } = values;
      const { data } = await axios.post(loginRoute, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        taikhoan,
        matkhau
      })

      if (data.status == "000") {
        localStorage.setItem("tai-khoan", JSON.stringify(data.data));
        toast.success("Đăng nhập thành công", toastOptions);
        navigate("/");
      } else {
        toast.error("Lỗi, vui lòng đăng nhập lại", toastOptions);
      }
    }
  }

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleValidation = () => {
    const { taikhoan, matkhau } = values;

    if (matkhau === "" || taikhoan === "") {
      toast.warning("Vui lòng điền đầy đủ thông tin", toastOptions);
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
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Đăng nhập tài khoản</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(event) => handleSubmit(event)}>
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
                <p>Chưa có tài khoản</p>
                <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng ký
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login