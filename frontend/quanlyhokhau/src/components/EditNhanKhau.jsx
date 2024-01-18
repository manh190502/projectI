import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { chitietnhankhauRoute, updatenhankhauRoute } from '../utils/APIRoutes';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditNhanKhau() {
  const [values, setValues] = useState({
    mahokhau: "",
    name: "",
    nickname: "",
    ngaysinh: new Date(),
    noisinh: "",
    gioitinh: "",
    nguyenquan: "",
    dantoc: "",
    tongiao: "",
    nghenghiep: "",
    noilamviec: "",
    cccd: "",
    ngaycapcccd: new Date(),
    noicapcccd: "",
    diachihientai: "",
    ngaydkythuongtru: new Date(),
    noithuongtrutruocday: "",
    quanhechuho: "",
    nguoithuchien: "",
    ghichu: ""
  })
  let { idnhankhau } = useParams();
  const nagivate = useNavigate();

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  useEffect(() => {
    const loadData = async () => {
      let res = await axios.get(`${chitietnhankhauRoute}?idnhankhau=${idnhankhau}`)
      if (res.status == 200) {
        let resData = await res.data.data;
        const { mahokhau, name, nickname, ngaysinh, noisinh, gioitinh, nguyenquan, dantoc, tongiao, nghenghiep, noilamviec,
          cccd, ngaycapcccd, noicapcccd, diachihientai, ngaydkythuongtru, noithuongtrutruocday, quanhechuho, nguoithuchien, ghichu } = resData;

        setValues({
          ...values, mahokhau, name, nickname, noisinh, gioitinh, nguyenquan, dantoc, tongiao, nghenghiep, noilamviec,
          cccd, noicapcccd, diachihientai, noithuongtrutruocday, quanhechuho, nguoithuchien, ghichu
        });
      }
    }
    loadData();
  }, [nagivate])


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { mahokhau, name, nickname, ngaysinh, noisinh, gioitinh, nguyenquan, dantoc, tongiao, nghenghiep, noilamviec,
      cccd, ngaycapcccd, noicapcccd, diachihientai, ngaydkythuongtru, noithuongtrutruocday, quanhechuho, nguoithuchien, ghichu } = values;

    const { data } = await axios.put(updatenhankhauRoute, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mahokhau, name, nickname, ngaysinh: values.ngaysinh.toISOString().split('T')[0],
      noisinh, gioitinh, nguyenquan, dantoc, tongiao, nghenghiep, noilamviec,
      cccd, ngaycapcccd: values.ngaycapcccd.toISOString().split('T')[0],
      noicapcccd, diachihientai, ngaydkythuongtru: values.ngaydkythuongtru.toISOString().split('T')[0],
      noithuongtrutruocday, quanhechuho, nguoithuchien, ghichu
    })

    if (data.status == "000") {
      toast.success("Thay đổi nhân khẩu thành công", toastOptions);
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
              <h3 className="text-lg font-medium leading-6 text-gray-900">Sửa nhân khẩu</h3>
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
                    value={`${values.mahokhau}`}
                    readonly="readonly"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Họ tên
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    value={`${values.name}`}
                    readonly="readonly"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Biệt danh
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="nickname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.nickname}`}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ngày sinh
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.ngaysinh} onChange={(date) => setValues({ ...values, ngaysinh: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nơi sinh
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="noisinh"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.noisinh}`}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nguyên quán
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="nguyenquan"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.nguyenquan}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Giới tính
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="gioitinh"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.gioitinh}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Dân tộc
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="dantoc"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.dantoc}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Tôn giáo
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="tongiao"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.tongiao}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nghề nghiệp
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="nghenghiep"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.nghenghiep}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nơi làm việc
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="noilamviec"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.noilamviec}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  CCCD
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="cccd"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.cccd}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ngày cấp CCCD
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.ngaycapcccd} onChange={(date) => setValues({ ...values, ngaycapcccd: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nơi cấp CCCD
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="noicapcccd"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.noicapcccd}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Địa chỉ hiện tại
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="diachihientai"
                    type="text"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.diachihientai}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Ngày đăng ký thường trú
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <DatePicker className='border-1 rounded-md border-gray-300 drop-shadow-sm' showYearDropdown dateFormat='yyyy-MM-dd' selected={values.ngaydkythuongtru} onChange={(date) => setValues({ ...values, ngaydkythuongtru: date })} />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Nơi thường trú trước đây
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="noithuongtrutruocday"
                    type="text"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.noithuongtrutruocday}`}

                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Quan hệ chủ hộ
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <input
                    id="email"
                    name="quanhechuho"
                    type="text"
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={e => handleChange(e)}
                    value={`${values.quanhechuho}`}

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
            Sửa nhân khẩu
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditNhanKhau