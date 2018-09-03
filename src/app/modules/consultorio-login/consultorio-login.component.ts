import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultorio-login',
  templateUrl: './consultorio-login.component.html',
  styleUrls: ['./consultorio-login.component.css'],
})
export class ConsultorioLoginComponent implements OnInit {

  hide = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrar () {
    this.router.navigate(['consultorio/cadastrar']);
  }
}
