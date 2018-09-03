import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Consultorio } from '../../../../models';

@Component({
  selector: 'app-criar-consultorio',
  templateUrl: './criar-consultorio.component.html',
  styleUrls: ['./criar-consultorio.component.css']
})
export class CriarConsultorioComponent implements OnInit {

  constructor() { }

  hide = true;
  consultorio = new Consultorio();

  estado = [
    { id: 1, sigla: 'ES'},
    { id: 2, sigla: 'MG'},
  ];
  cidade = [
    { id: 1, nome: 'Vitória'},
    { id: 2, nome: 'Vila Velha'},
    { id: 3, nome: 'Cariacica'},
    { id: 4, nome: 'Serra'},
    { id: 5, nome: 'Guarapari'}
  ];
  cidadeSelected = '';
  estadoSelected = '';
  cadastrar() {
    console.log('cidadeSelected :', this.cidadeSelected);
    console.log('estadoSelected :', this.estadoSelected);
    console.log('Consultorio :', this.consultorio);
  }

  ngOnInit() {
  }


}
