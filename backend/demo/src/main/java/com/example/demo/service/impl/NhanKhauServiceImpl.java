package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.HoKhau;
import com.example.demo.model.NhanKhau;
import com.example.demo.payloads.request.NhanKhauRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.HoKhauRepository;
import com.example.demo.repository.NhanKhauRepository;
import com.example.demo.service.NhanKhauService;

@Service
public class NhanKhauServiceImpl implements NhanKhauService {

  private static final Logger log = LogManager.getLogger(NhanKhauServiceImpl.class);

  @Autowired
  private NhanKhauRepository nhanKhauRepository;

  @Autowired
  private HoKhauRepository hoKhauRepository;

  @Override
  public CommonResponse<Object> themNhanKhau(NhanKhauRequest request) {
    CommonResponse<Object> response = new CommonResponse<>();
    
    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(request.getMahokhau());

    NhanKhau _nhanKhau = new NhanKhau();

    if(hokhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);

      return response;
    }else{
      _nhanKhau.setMahokhau(request.getMahokhau());
      _nhanKhau.setName(request.getName());
      _nhanKhau.setNickname(request.getNickname());
      _nhanKhau.setNgaysinh(request.getNgaysinh());
      _nhanKhau.setNoisinh(request.getNoisinh());
      _nhanKhau.setGioitinh(request.getGioitinh());
      _nhanKhau.setNguyenquan(request.getNguyenquan());
      _nhanKhau.setDantoc(request.getDantoc());
      _nhanKhau.setTongiao(request.getTongiao());
      _nhanKhau.setNghenghiep(request.getNghenghiep());
      _nhanKhau.setNoilamviec(request.getNoilamviec());
      _nhanKhau.setDiachihientai(request.getDiachihientai());
      _nhanKhau.setNgaydkythuongtru(request.getNgaydkythuongtru());
      _nhanKhau.setNoithuongtrutruocday(request.getNoithuongtrutruocday());
      _nhanKhau.setQuanhechuho(request.getQuanhechuho());      
      _nhanKhau.setCccd(request.getCccd());
      _nhanKhau.setNoicapcccd(request.getNoicapcccd());
      _nhanKhau.setNgaycapcccd(request.getNgaycapcccd());
      _nhanKhau.setNgaytao(new Date());
      _nhanKhau.setNgaycapnhat(new Date());
      _nhanKhau.setNguoithuchien(request.getNguoithuchien());
      _nhanKhau.setGhichu(request.getGhichu());
    }

    try {
      nhanKhauRepository.save(_nhanKhau);
      
      log.info("Save response {}", _nhanKhau.getId());
      response.setData(_nhanKhau);
    } catch (Exception e) {
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi nhan khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    
    return response;
  }

  @Override
  public CommonResponse<Object> danhsachNhanKhau(String mahokhau) {
    CommonResponse<Object> response = new CommonResponse<>();

    ArrayList<NhanKhau> _danhsachnhankhau = new ArrayList<>();

    List<NhanKhau> danhsachnhankhau = nhanKhauRepository.findByMahokhau(mahokhau);
    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(mahokhau);

    if(danhsachnhankhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.NULL_MSG);

      return response;
    }else{
      for(NhanKhau item : danhsachnhankhau){
        item.setTenchuho(hokhau.get().getTenchuho());
        _danhsachnhankhau.add(item);
      }
      response.setData(_danhsachnhankhau);
    }
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }

  @Override
  public CommonResponse<Object> suaNhanKhau(NhanKhauRequest request) {
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<NhanKhau> nhankhau = nhanKhauRepository.findByMahokhauAndName(request.getMahokhau(), request.getName());

    if (nhankhau.isEmpty()) {
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      log.info("hereeee");

      return response;
    } else {
      nhankhau.get().setMahokhau(request.getMahokhau());
      nhankhau.get().setName(request.getName());
      nhankhau.get().setNickname(request.getNickname());
      nhankhau.get().setNgaysinh(request.getNgaysinh());
      nhankhau.get().setNoisinh(request.getNoisinh());
      nhankhau.get().setGioitinh(request.getGioitinh());
      nhankhau.get().setNguyenquan(request.getNguyenquan());
      nhankhau.get().setDantoc(request.getDantoc());
      nhankhau.get().setTongiao(request.getTongiao());
      nhankhau.get().setNghenghiep(request.getNghenghiep());
      nhankhau.get().setNoilamviec(request.getNoilamviec());
      nhankhau.get().setDiachihientai(request.getDiachihientai());
      nhankhau.get().setNgaydkythuongtru(request.getNgaydkythuongtru());
      nhankhau.get().setNoithuongtrutruocday(request.getNoithuongtrutruocday());
      nhankhau.get().setQuanhechuho(request.getQuanhechuho());
      nhankhau.get().setCccd(request.getCccd());
      nhankhau.get().setNoicapcccd(request.getNoicapcccd());
      nhankhau.get().setNgaycapcccd(request.getNgaycapcccd());
      nhankhau.get().setNguoithuchien(request.getNguoithuchien());
      nhankhau.get().setGhichu(request.getGhichu());
    }

    try {
      nhanKhauRepository.save(nhankhau.get());

      log.info("Save response {}", nhankhau.get().getId());
      response.setData(nhankhau.get());
    } catch (Exception e) {
      
      e.printStackTrace();
      log.error("co loi xay ra!", e);
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
    }
    log.info("sua nhan khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);

    return response;
  }

  @Override
  public CommonResponse<Object> chitietNhanKhau(String idnhankhau) {
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<NhanKhau> nhankhau = nhanKhauRepository.findById(idnhankhau);

    if(nhankhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.NULL_MSG);

      return response;
    }else{
      response.setData(nhankhau.get());
    }
    try {
      nhanKhauRepository.save(nhankhau.get());
      log.info("Save response {}", nhankhau.get().getId());

      response.setData(nhankhau.get());
    } catch (Exception e) {
       
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }

    //thanh cong
    log.info("chi tiet nhan khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);

    return response;
  }
}