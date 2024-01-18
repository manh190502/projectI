package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TaiKhoan;


@Repository
public interface TaiKhoanRepository extends MongoRepository<TaiKhoan, String> {
    Optional<TaiKhoan> findByTaikhoan(String taikhoan);
}