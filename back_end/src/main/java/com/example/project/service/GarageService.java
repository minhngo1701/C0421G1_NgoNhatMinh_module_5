package com.example.project.service;

import com.example.project.model.Garage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface GarageService {

    Page<Garage> findAll(Pageable pageable);

    Garage findById(Long id);
    boolean save(Garage garage);
    boolean edit(Long id, Garage garage);
    boolean delete(Long id);
}
