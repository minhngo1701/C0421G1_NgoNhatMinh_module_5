package com.example.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Garage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codeNumber;
    private String carType;
    private String station;
    private String phone;
    private String email;
    private String locationStart;
    private String locationEnd;
    private String timeStart;
    private String timeEnd;

    public Garage() {
    }

    public Garage(String codeNumber, String carType, String station, String phone, String email, String locationStart, String locationEnd, String timeStart, String timeEnd) {
        this.codeNumber = codeNumber;
        this.carType = carType;
        this.station = station;
        this.phone = phone;
        this.email = email;
        this.locationStart = locationStart;
        this.locationEnd = locationEnd;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeNumber() {
        return codeNumber;
    }

    public void setCodeNumber(String codeNumber) {
        this.codeNumber = codeNumber;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public String getStation() {
        return station;
    }

    public void setStation(String station) {
        this.station = station;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocationStart() {
        return locationStart;
    }

    public void setLocationStart(String locationStart) {
        this.locationStart = locationStart;
    }

    public String getLocationEnd() {
        return locationEnd;
    }

    public void setLocationEnd(String locationEnd) {
        this.locationEnd = locationEnd;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }
}
