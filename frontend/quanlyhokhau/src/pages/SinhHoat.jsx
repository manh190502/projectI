import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DanhSachSinhHoat from '../components/DanhSachSinhHoat'


function SinhHoat() {

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      setUserInfo(localStorage.getItem("tai-khoan"));
      if (userInfo) {
        setIsLogin(true);
      }
    }
    loadData();
  }, [isLogin, userInfo])
  if (userInfo) {
  } else {
    navigate("/login");
  }
  return (
    <div className='w-full h-full flex-col gap-4 mt-8'>
      <span className='ml-16 bg-slate-500 p-1 text-white'>
        <a href='/'>Quay lại</a>
      </span>

      <DanhSachSinhHoat />
    </div>
  )
}

export default SinhHoat;