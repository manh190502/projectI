package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.HoKhau;

@Repository
public interface HoKhauRepository extends MongoRepository<HoKhau, String> {
    
    Optional<HoKhau> findByMahokhau(String mahokhau);

    Page<HoKhau> findAll(Pageable page);

    Page<HoKhau> findByTenchuhoContainingIgnoreCase(Pageable page, String tenchuho);
}