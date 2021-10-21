package com.example.project.controller;

import com.example.project.model.Garage;
import com.example.project.service.GarageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/garage")
public class GarageController {
    @Autowired
    private GarageService garageService;

//    @GetMapping("/list")
//    public String showListPage() {
//        return "/garage";
//    }

    @GetMapping("/list")
    public ResponseEntity<?> showList(@PageableDefault(value = 2) Pageable pageable) {
        Page<Garage> garages = garageService.findAll(pageable);
        if (garages.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(garages, HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Garage> getGarage(@PathVariable("id") Long id) {
//        Garage garage = garageService.findById(id);
//        if (garage == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(garage, HttpStatus.OK);
//    }

    @PostMapping("/create")
    public ResponseEntity<?> createGarage(@RequestBody Garage garage) {
         if (this.garageService.save(garage)) {
             return new ResponseEntity<>(HttpStatus.OK);
         }  else {
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") Long id) {
        Garage garage = garageService.findById(id);
        if (garage != null) {
            return new ResponseEntity<>(garage,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/edit/{id}")
    public ResponseEntity<?> editGarage(@RequestBody Garage garage) {
        if (this.garageService.save(garage)) {
            return new ResponseEntity<>(garage,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGarage(@PathVariable("id") Long id) {
        if (this.garageService.delete(id)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
