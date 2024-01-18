package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.constant.EcodeConstant;
import com.example.demo.model.NhanKhau;
import com.example.demo.model.TamTru;
import com.example.demo.model.TamVang;
import com.example.demo.payloads.response.CommonResponse;
import com.example.demo.repository.NhanKhauRepository;
import com.example.demo.repository.TamTruRepository;
import com.example.demo.repository.TamVangRepository;
import com.example.demo.service.ThongKeService;


@Service
public class ThongKeServiceImpl implements ThongKeService {
  private static final Logger log = LogManager.getLogger(ThongKeServiceImpl.class);

  @Autowired
  NhanKhauRepository nhanKhauRepository;

  @Autowired
  TamVangRepository tamVangRepository;

  @Autowired
  TamTruRepository tamTruRepository;

  @Override
  public CommonResponse<Object> thongkeTuoi() {
    CommonResponse<Object> response = new CommonResponse<>();

    List<NhanKhau> nhankhau = nhanKhauRepository.findAll();
    ArrayList<Integer> danhsachthongke = new ArrayList<>();
    if(nhankhau.size() > 0){
      for(NhanKhau item : nhankhau){
        Date now = new Date();
        long timeBetween = now.getTime() - item.getNgaysinh().getTime();
        double yearsBetween = timeBetween / 3.15576e+10;
        int age = (int) Math.floor(yearsBetween);
        danhsachthongke.add(age);
      }
      response.setData(danhsachthongke);
    }
    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }

  @Override
  public CommonResponse<Object> thongkeTamVang() {
    CommonResponse<Object> response = new CommonResponse<>();

    List<TamVang> tamvang = tamVangRepository.findAll();
    ArrayList<Integer> danhsachthongke = new ArrayList<>();
    Calendar calendar = new GregorianCalendar();
    
    if(tamvang.size() > 0){
      for(TamVang item : tamvang){
        calendar.setTime(item.getTungay());
        danhsachthongke.add(calendar.get(Calendar.YEAR));
      }
      response.setData(danhsachthongke);
    }

    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }

  @Override
  public CommonResponse<Object> thongkeTamTru() {
    CommonResponse<Object> response = new CommonResponse<>();

    List<TamTru> tamtru = tamTruRepository.findAll();
    ArrayList<Integer> danhsachthongke = new ArrayList<>();
    Calendar calendar = new GregorianCalendar();
    if(tamtru.size() > 0){
      for(TamTru item : tamtru){
        calendar.setTime(item.getTungay());
        danhsachthongke.add(calendar.get(Calendar.YEAR));
      }

      response.setData(danhsachthongke);
    }

    response.setStatus(EcodeConstant.SUCCESS);
    response.setMesssage(EcodeConstant.SUCCESS_MSG);
    return response;
  }
    
}