package com.example.demo.service.impl;

import java.util.Date;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.TaiKhoan;
import com.example.demo.payloads.request.TaiKhoanRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.TaiKhoanRepository;
import com.example.demo.service.TaiKhoanService;

@Service
public class TaiKhoanServiceImpl implements TaiKhoanService {
  private static final Logger log = LogManager.getLogger(TaiKhoanServiceImpl.class);

  @Autowired
  private TaiKhoanRepository taiKhoanRepository;

  @Override
  public CommonResponse<Object> dangkyTaiKhoan(TaiKhoanRequest request) {
    //
		CommonResponse<Object> response = new CommonResponse<>();
    Optional<TaiKhoan> taikhoan = taiKhoanRepository.findByTaikhoan(request.getTaikhoan());
    TaiKhoan _taiKhoan = new TaiKhoan();
    if(taikhoan.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);

      return response;
    }
    else{
      //_taiKhoan.setMatkhau();
      String hash = BCrypt.hashpw(request.getMatkhau(), BCrypt.gensalt(12));
      _taiKhoan.setMatkhau(hash);
      _taiKhoan.setTaikhoan(request.getTaikhoan());
      _taiKhoan.setHoten(request.getHoten());
      _taiKhoan.setChucvu("user");
      _taiKhoan.setNgaytao(new Date());
      _taiKhoan.setNgaycapnhat(new Date());
    }

    try {
      TaiKhoan save_response = taiKhoanRepository.save(_taiKhoan);

      log.info("Save response {}", _taiKhoan.getId());

      response.setData(_taiKhoan);
    } catch (Exception e) {
      //
      e.printStackTrace();
      log.error("co loi xay ra!" , e);
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
    }

    //
    log.info("them moi tai khoan end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }

  @Override
  public CommonResponse<Object> dangnhapTaiKhoan(TaiKhoanRequest request) {
    //
    CommonResponse<Object> response = new CommonResponse<>();
    Optional<TaiKhoan> taikhoan = taiKhoanRepository.findByTaikhoan(request.getTaikhoan());

    if(taikhoan.isEmpty()){
      response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
    }else{
      boolean isMatchPw = BCrypt.checkpw(request.getMatkhau(), taikhoan.get().getMatkhau());
      if(!isMatchPw){
        response.setData(null);
      response.setMesssage(EcodeConstant.ERR_MSG);
      response.setStatus(EcodeConstant.ERR);
      return response;
      }else{
        response.setStatus(EcodeConstant.SUCCESS);
        response.setMesssage(EcodeConstant.SUCCESS_MSG);
        response.setData(taikhoan.get());
        return response;
      }
    }

  }

  
}