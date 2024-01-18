import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddHoKhau from "./components/AddHoKhau";
import AddNhanKhau from "./components/AddNhanKhau";
import AddSinhHoat from "./components/AddSinhHoat";
import AddTamTru from "./components/AddTamTru";
import AddTamVang from "./components/AddTamVang";
import ChiTietHoKhau from "./components/ChiTietHoKhau";
import DiemDanhSinhHoat from "./components/DiemDanhSinhHoat";
import EditHoKhau from "./components/EditHoKhau";
import EditNhanKhau from "./components/EditNhanKhau";
import HoKhau from "./pages/HoKhau";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NhanKhau from "./pages/NhanKhau";
import Register from "./pages/Register";
import SinhHoat from "./pages/SinhHoat";
import TamTru from "./pages/TamTru";
import TamVang from "./pages/TamVang";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/hokhau' element={<HoKhau />} />
        <Route path='/addhokhau' element={<AddHoKhau />} />
        <Route path='/updatehokhau/:mahokhauchitiet' element={<EditHoKhau />} />
        <Route path='/hokhau/:mahokhau' element={<NhanKhau />} />

        <Route path='/addnhankhau' element={<AddNhanKhau />} />
        <Route path='/updatenhankhau/:idnhankhau' element={<EditNhanKhau />} />

        <Route path='/tamtru' element={<TamTru />} />
        <Route path='/addtamtru' element={<AddTamTru />} />

        <Route path='/tamvang' element={<TamVang />} />
        <Route path='/addtamvang' element={<AddTamVang />} />

        <Route path='/sinhhoat' element={<SinhHoat />} />
        <Route path='/addsinhhoat' element={<AddSinhHoat />} />
        <Route path='/diemdanh/:idsinhhoat' element={<DiemDanhSinhHoat />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
