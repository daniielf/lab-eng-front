// const EstadosJson = require('../../../json/estados-cidade.json');
// const PaisesJson = require('../../../json/paises.json');
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abrigo } from '../../../models/abrigo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AbrigoService } from '../abrigo.service';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-abrigo-read',
  templateUrl: './abrigo-read.component.html',
  styleUrls: ['./abrigo-read.component.scss']
})
export class AbrigoReadComponent implements OnInit {

  model: Abrigo = new Abrigo();
  estados: any[] = [];
  cidades: any[] = [];
  paises: any[] = [];
  jsonEstadoData: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private abrigoService: AbrigoService,
    private usuarioService: UsuarioService,
  ) {


    this.getEstados().subscribe((data) => {
      this.jsonEstadoData = data.estados;
      this.estados = data.estados.map((elem) => elem);
    });

    this.getPaises().subscribe((data) => {
      this.paises = data;
    });
   }

  ngOnInit() {
    if (this.usuarioService.getUser()) {
      this.getAbrigoOfUser(this.usuarioService.getUser()._id);
    }
  }

  updateCidades(estado) {
    this.cidades = estado ? estado.cidades : [];
  }

  edit() {
    this.router.navigate(['/dash/abrigo/edit']);
  }

  private getEstados(): Observable<any> {
    return this.http.get('assets/estados-cidade.json');
  }

  private getPaises(): Observable<any> {
    return this.http.get('assets/paises.json');
  }

  getAbrigoOfUser(userID) {
    this.abrigoService.getAll().then((res:any) => {
      for (let abrigo of res) {
        let findAbrigo = abrigo.usuarios.find((elem) => { return elem._id === userID });
        if (findAbrigo) {
          this.abrigoService.abrigo = abrigo;
          this.model = abrigo;
          return;
        }
      }
    }).catch((err) => {
      console.log(err);
      // alert('err');
    });
  }

}
