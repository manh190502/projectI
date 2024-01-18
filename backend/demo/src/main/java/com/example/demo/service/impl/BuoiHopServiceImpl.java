package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.BuoiHop;
import com.example.demo.payloads.request.BuoiHopRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.BuoiHopRepository;
import com.example.demo.service.BuoiHopService;

@Service
public class BuoiHopServiceImpl implements BuoiHopService {
  private static final Logger log = LogManager.getLogger(BuoiHopServiceImpl.class);

  @Autowired
  BuoiHopRepository buoiHopRepository;

  @Override
  public CommonResponse<Object> themBuoiHop(BuoiHopRequest request) {
    
    CommonResponse<Object> response = new CommonResponse<>();

    Optional<BuoiHop> buoihop = buoiHopRepository.findById(request.getId());
    
    BuoiHop _buoiHop= new BuoiHop();


    if(buoihop.isPresent()){
      response.setData(null);
      response.setMesssage(EcodeConstant.EXIST_MSG);
      response.setStatus(EcodeConstant.EXIST);

      return response;
    }else{
      _buoiHop.setId(request.getId());
      _buoiHop.setChude(request.getChude());
      _buoiHop.setChude(request.getChude());
      _buoiHop.setDiadiem(request.getDiadiem());
      _buoiHop.setThoigian(request.getThoigian());
      _buoiHop.setNoidung(request.getNoidung());
      if(request.getLoai().equals("Hành chính")){
        _buoiHop.setDsduocmoi(request.getDsduocmoi());
        _buoiHop.setLoai(request.getLoai());
        _buoiHop.setSoluong(request.getDsduocmoi().length);
      }else if(request.getLoai().equals("Sinh hoạt")){
        _buoiHop.setLoai(request.getLoai());
      }else{
        response.setData(null);
        response.setMesssage(EcodeConstant.ERR_MSG);
        response.setStatus(EcodeConstant.ERR);
       log.error("co loi xay ra o day!");
        
        return response;
      }
    }
    try {
      buoiHopRepository.save(_buoiHop);
      log.info("Save response {}", _buoiHop.getId());
      response.setData(_buoiHop);
    } catch (Exception e) {
       
       e.printStackTrace();
       log.error("co loi xay ra!" , e);
       response.setData(null);
       response.setMesssage(EcodeConstant.ERR_MSG);
       response.setStatus(EcodeConstant.ERR);
    }
    log.info("them moi buoi hop service end.");
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    
    return response;
  }

  @Override
  public CommonResponse<Object> danhsachBuoiHop(int page) {
    CommonResponse<Object> response = new CommonResponse<>();
    
    ArrayList<BuoiHop> danhsachbuoihop = new ArrayList<>();
    
    Pageable paging = PageRequest.of(page, 5);
    Page<BuoiHop> pageBuoiHop;
    
    pageBuoiHop = buoiHopRepository.findAll(paging);
    pageBuoiHop.getContent();
    if(pageBuoiHop.getContent().size() > 0){
      for(BuoiHop item : pageBuoiHop.getContent()){
        danhsachbuoihop.add(item);
      }

      response.setData(danhsachbuoihop);
    }else{
      response.setData(danhsachbuoihop);
      response.setMesssage(EcodeConstant.NULL_MSG);
    }

    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;

  }
}