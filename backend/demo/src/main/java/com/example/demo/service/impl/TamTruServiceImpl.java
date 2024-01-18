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
import com.example.demo.model.TamTru;
import com.example.demo.payloads.request.TamTruRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.TamTruRepository;
import com.example.demo.service.TamTruService;

@Service
public class TamTruServiceImpl implements TamTruService {

  private static final Logger log = LogManager.getLogger(TamTruServiceImpl.class);

  @Autowired
  TamTruRepository tamTruRepository;

  @Override
  public CommonResponse<Object> themTamTru(TamTruRequest request) {
    //
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<TamTru> tamtru = tamTruRepository.findByMagiaytamtru(request.getMagiaytamtru());
    TamTru _tamTru = new TamTru();

    if(tamtru.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.EXIST_MSG);
      response.setStatus(EcodeConstant.EXIST);
      return response;
    }
    else{
      _tamTru.setMagiaytamtru(request.getMagiaytamtru());
      _tamTru.setHoten(request.getHoten());
      _tamTru.setNgaysinh(request.getNgaysinh());
      _tamTru.setGioitinh(request.getGioitinh());
      _tamTru.setNguyenquan(request.getNguyenquan());
      _tamTru.setDantoc(request.getDantoc());
      _tamTru.setCccd(request.getCccd());
      _tamTru.setNghenghiep(request.getNghenghiep());
      _tamTru.setNoitamtru(request.getNoitamtru());
      _tamTru.setTungay(request.getTungay());
      _tamTru.setDenngay(request.getDenngay());
      _tamTru.setLydo(request.getLydo());
      _tamTru.setNguoithuchien(request.getNguoithuchien());
      _tamTru.setNgaytao(new Date());
    }

    try {
      tamTruRepository.save(_tamTru);
      log.info("Save response {}", _tamTru.getId());
      response.setData(_tamTru);
    } catch (Exception e) {
      // e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi tam tru service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }

  @Override
  public CommonResponse<Object> danhsachTamTru(int page, String text) {
    CommonResponse<Object> response = new CommonResponse<>();
    
    ArrayList<TamTru> danhsachtamtru = new ArrayList<>();
    
    Pageable paging = PageRequest.of(page, 5);
    Page<TamTru> pageTamTru;
    
    pageTamTru = tamTruRepository.findByHotenContainingIgnoreCase(paging, text);
    pageTamTru.getContent();
    if(pageTamTru.getContent().size() > 0){
      for(TamTru item : pageTamTru.getContent()){
        danhsachtamtru.add(item);
      }

      response.setData(danhsachtamtru);
    }else{
      response.setData(danhsachtamtru);
      response.setMesssage(EcodeConstant.NULL_MSG);
    }

    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;

  }

  @Override
  public CommonResponse<Object> xoaTamTru(String magiaytamtru) {
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<TamTru> tamtru = tamTruRepository.findByMagiaytamtru(magiaytamtru);

    
    if(tamtru.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
    }
    try {
      tamTruRepository.deleteByMagiaytamtru(magiaytamtru);
    } catch (Exception e) {
      // e.printStackTrace();
      log.error("co loi xay ra!" , e);
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);

      return response;
    }
    log.info("xoa tam tru service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
  
    return response;
  }
  
    
}