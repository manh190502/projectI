package com.example.demo.service.impl;

import java.util.Date;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.BuoiHop;
import com.example.demo.model.Diemdanh;
import com.example.demo.model.HoKhau;
import com.example.demo.payloads.request.DiemdanhRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.BuoiHopRepository;
import com.example.demo.repository.DiemDanhRepository;
import com.example.demo.repository.HoKhauRepository;
import com.example.demo.service.DiemDanhService;

@Service
public class DiemDanhServiceImpl implements DiemDanhService {
  private static final Logger log = LogManager.getLogger(DiemDanhServiceImpl.class);

  @Autowired
  DiemDanhRepository diemDanhRepository;

  @Autowired
  HoKhauRepository hoKhauRepository;

  @Autowired
  BuoiHopRepository buoiHopRepository;

  @Override
  public CommonResponse<Object> diemdanh(DiemdanhRequest request) {
    CommonResponse<Object> response = new CommonResponse<>();
    
    Optional<Diemdanh> diemdanh = diemDanhRepository.findByMabuoihopAndMahokhau(request.getMabuoihop(), request.getMahokhau());

    Optional<HoKhau> hokhau = hoKhauRepository.findByMahokhau(request.getMahokhau());

    Optional<BuoiHop> buoihop = buoiHopRepository.findById(request.getMabuoihop());

    Diemdanh _diemdanh = new Diemdanh();

    if(hokhau.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
    }else if(buoihop.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
    }else if(request.getMabuoihop().contains("hanhchinh")){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
    }else if(diemdanh.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.EXIST_MSG);
      response.setStatus(EcodeConstant.EXIST);
      return response;
    }else{
      _diemdanh.setMabuoihop(request.getMabuoihop());
      _diemdanh.setMahokhau(request.getMahokhau());
      _diemdanh.setNgaytao(new Date());

      hokhau.get().setDiemtichluy(hokhau.get().getDiemtichluy() + 1);
    }

    try {
      diemDanhRepository.save(_diemdanh);
      hoKhauRepository.save(hokhau.get());
    } catch (Exception e) {
      
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("diem danh service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    
    return response;
  }
    
}