import { Component, OnInit } from '@angular/core';
import {CinemaService} from "../../service/cinema.service";
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../model/movie";
import {MovieService} from "../../service/movie.service";

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css']
})
export class CreateCinemaComponent implements OnInit {
  createForm: FormGroup;
  movies: Movie[];
  constructor(private cinemaService: CinemaService, private route:Router, private movieService: MovieService) {
    this.createForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl("", [Validators.compose([Validators.pattern("^CI-\\d{4}$")])]),
      movie: new FormControl(),
      dateStart: new FormControl("", [this.validateDate]),
      amount: new FormControl("", [Validators.min(1)])
    })
    this.movieService.getAll().subscribe(next =>{
      this.movies = next;
    })
  }

  ngOnInit(): void {
  }

  createCinema() {
    this.cinemaService.createC(this.createForm.value).subscribe(() => {
      this.route.navigateByUrl("/cinema");
    })
  }

  validationMsg=({
    code: [{
      type: "pattern", message: "Code is wrong. Ex: CI-xxxx (x is number 0-9)"
    }],
    amount: [{
      type: "min", message: "Must be greater than 0"
    }]
  })

  validateDate(dateStart: AbstractControl) {
    let time = new Date();
    if (dateStart.value <= time) {
      return {"invalid": true}
    } else {
      return null
    }
  }
}
