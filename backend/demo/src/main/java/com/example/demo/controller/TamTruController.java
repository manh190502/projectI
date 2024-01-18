package com.example.demo.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.payloads.request.TamTruRequest;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.service.TamTruService;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
@CrossOrigin
public class TamTruController {
  private static final Logger log = LogManager.getLogger(TamTruController.class);

  @Autowired
  TamTruService tamTruService;

  @PostMapping(value="/addtamtru")
  public CommonResponse<Object> addTamTru(@RequestBody TamTruRequest request) {
      //
      CommonResponse<Object> response = new CommonResponse<Object>();
      try {
        response = tamTruService.themTamTru(request);
      } catch (Exception e) {
        //
        log.error(e);
        response.setStatus(EcodeConstant.ERR);
        response.setMesssage(EcodeConstant.ERR_MSG);
      }
      return response;

  }

  @GetMapping(value="/gettamtru")
  public CommonResponse<Object> getHoKhau(@RequestParam(required = true, defaultValue = "0") int page, @RequestParam(required = true, defaultValue = "") String text) {
    
    CommonResponse<Object> response = new CommonResponse<Object>();
    try {
      response = tamTruService.danhsachTamTru(page, text);
    } catch (Exception e) {
      
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;

}

  @DeleteMapping(value="/xoatamtru")
  public CommonResponse<Object> xoaTamTru(@RequestParam(required = true, defaultValue = "") String magiaytamtru){
    CommonResponse<Object> response = new CommonResponse<Object>();
    log.info("data gui ve {}",magiaytamtru);
    try {
      response = tamTruService.xoaTamTru(magiaytamtru);
    } catch (Exception e) {
      //
      log.error(e);
      response.setStatus(EcodeConstant.ERR);
      response.setMesssage(EcodeConstant.ERR_MSG);
    }
    return response;
  }
}