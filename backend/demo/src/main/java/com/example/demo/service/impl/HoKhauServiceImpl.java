package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.HoKhau;
import com.example.demo.payloads.request.HoKhauRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.HoKhauRepository;
import com.example.demo.service.HoKhauService;

@Service
public class HoKhauServiceImpl implements HoKhauService {

  private static final Logger log = LogManager.getLogger(HoKhauServiceImpl.class);
  
  @Autowired
  private HoKhauRepository hoKhauRepository;

  @Override
  public CommonResponse<Object> themHoKhau(HoKhauRequest request) {
    //

    CommonResponse<Object> response = new CommonResponse<>();
    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(request.getMahokhau());

    HoKhau _hoKhau = new HoKhau();

    if(hokhau.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);

      return response;
    }else{
      _hoKhau.setMahokhau(request.getMahokhau());
      _hoKhau.setMakhuvuc(request.getMakhuvuc());
      _hoKhau.setDiachi(request.getDiachi());
      _hoKhau.setTenchuho(request.getTenchuho());
      _hoKhau.setNgaychuyendi(request.getNgaychuyendi());
      _hoKhau.setLydochuyen(request.getLydochuyen());
      _hoKhau.setNguoithuchien(request.getNguoithuchien());
      _hoKhau.setGhichu(request.getGhichu());
      _hoKhau.setNgaytao(new Date());
      _hoKhau.setNgaycapnhat(new Date());
      _hoKhau.setDiemtichluy(0);
    }

    try {
      hoKhauRepository.save(_hoKhau);
      
      log.info("Save response {}", _hoKhau.getId());
      response.setData(_hoKhau);
    } catch (Exception e) {
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi ho khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    
    return response;
  }

  @Override
  public CommonResponse<Object> danhsachHokhau(int page, String text) {
    CommonResponse<Object> response = new CommonResponse<>();
    
    ArrayList<HoKhau> danhsachhokhau = new ArrayList<>();
    
    Pageable paging = PageRequest.of(page, 5);
    Page<HoKhau> pageHoKhau;

    //Page<HoKhau> dsfindtheoten = hoKhauRepository.findByTenchuhoContainingIgnoreCase(text);

    //log.info("ten duoc find{}",dsfindtheoten.toString());
    
    pageHoKhau = hoKhauRepository.findByTenchuhoContainingIgnoreCase(paging, text);
    pageHoKhau.getContent();
    if(pageHoKhau.getContent().size() > 0){
      for(HoKhau item : pageHoKhau.getContent()){
        danhsachhokhau.add(item);
      }

      response.setData(danhsachhokhau);
    }else{
      response.setData(danhsachhokhau);
      response.setMesssage(EcodeConstant.NULL_MSG);
    }

    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;

  }

  @Override
  public CommonResponse<Object> suaHoKhau(HoKhauRequest request) {
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(request.getMahokhau());

    if(hokhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.NULL_MSG);

      return response;
    }else{
      hokhau.get().setMahokhau(request.getMahokhau());
      hokhau.get().setMakhuvuc(request.getMakhuvuc());
      hokhau.get().setDiachi(request.getDiachi());
      hokhau.get().setTenchuho(request.getTenchuho());
      hokhau.get().setNgaychuyendi(request.getNgaychuyendi());
      hokhau.get().setLydochuyen(request.getLydochuyen());
      hokhau.get().setNguoithuchien(request.getNguoithuchien());
      hokhau.get().setGhichu(request.getGhichu());
      hokhau.get().setNgaycapnhat(new Date());
    }
    try {
      hoKhauRepository.save(hokhau.get());
      log.info("Save response {}", hokhau.get().getId());

      response.setData(hokhau.get());
    } catch (Exception e) {
       //
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }

    //thanh cong
    log.info("sua moi ho khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);

    return response;
  }


  @Override
  public CommonResponse<Object> chitietHoKhau(String mahokhau) {
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(mahokhau);

    if(hokhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.NULL_MSG);

      return response;
    }else{
      response.setData(hokhau.get());
    }
    try {
      hoKhauRepository.save(hokhau.get());
      log.info("Save response {}", hokhau.get().getId());

      response.setData(hokhau.get());
    } catch (Exception e) {
       //
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }

    //thanh cong
    log.info("chi tiet ho khau service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);

    return response;
  }
  
}