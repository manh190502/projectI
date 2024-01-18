const host = "http://localhost:5000";

//auth
export const registerRoute = `${host}/api/auth/dangky`;
export const loginRoute = `${host}/api/auth/dangnhap`;

//main ho khau
export const addhokhauRoute = `${host}/api/addhokhau`;
export const updatehokhauRoute = `${host}/api/suahokhau`;
export const gethokhauRoute = `${host}/api/gethokhau`;
export const chitiethokhauRoute = `${host}/api/chitiethokhau`;

//main nhan khau
export const addnhankhauRoute = `${host}/api/addnhankhau`;
export const updatenhankhauRoute = `${host}/api/suanhankhau`;
export const getnhankhauRoute = `${host}/api/getnhankhau`;
export const chitietnhankhauRoute = `${host}/api/chitietnhankhau`;

//main buoi hop
export const addbuoihopRoute = `${host}/api/addbuoihop`;
export const diemdanhbuoihopRoute = `${host}/api/diemdanhbuoihop`;
export const getbuoihopRoute = `${host}/api/getbuoihop`;
export const diemdanhRoute = `${host}/api/diemdanh`;

//main tam tru
export const gettamtruRoute = `${host}/api/gettamtru`;
export const updatetamtruRoute = `${host}/api/updatetamtru`;
export const xoatamtruRoute = `${host}/api/xoatamtru`;
export const addtamtruRoute = `${host}/api/addtamtru`;

//main tam vang
export const gettamvangRoute = `${host}/api/gettamvang`;
export const updatetamvangRoute = `${host}/api/updatetamvang`;
export const xoatamvangRoute = `${host}/api/xoatamvang`;
export const addtamvangRoute = `${host}/api/addtamvang`


//main thong ke
export const thongketuoiRoute = `${host}/api/thongketuoi`;
export const thongketamtruRoute = `${host}/api/thongketamtru`;
export const thongketamvangRoute = `${host}/api/thongketamvang`;