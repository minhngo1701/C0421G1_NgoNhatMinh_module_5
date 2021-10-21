package com.example.project.service;

import com.example.project.model.Garage;
import com.example.project.repository.GarageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GarageServiceImpl implements GarageService {
    @Autowired
    private GarageRepository garageRepository;
    @Override
    public Page<Garage> findAll(Pageable pageable) {
        return garageRepository.findAll(pageable);
    }

    @Override
    public Garage findById(Long id) {
        return garageRepository.findById(id).get();
    }

    @Override
    public boolean save(Garage garage) {
        if (garage != null) {
            garageRepository.save(garage);
            return true;
        }
        return false;
    }

    @Override
    public boolean edit(Long id, Garage garage) {
        Garage garage1 = garageRepository.findById(id).get();
        if (garage != null) {
            garageRepository.save(garage1);
            return true;
        }
        return false;
    }

    @Override
    public boolean delete(Long id) {
        garageRepository.deleteById(id);
        return true;
    }
}
