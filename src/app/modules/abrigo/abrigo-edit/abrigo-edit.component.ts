// const EstadosJson = require('../../../json/estados-cidade.json');
// const PaisesJson = require('../../../json/paises.json');
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abrigo } from '../../../models/abrigo.model';
import { AbrigoService } from '../abrigo.service';
import { UsuarioService } from '../../usuario/usuario.service';
import { Observable } from 'rxjs';

// let EstadosJson = [];
// let PaisesJson = [];

@Component({
  selector: 'app-abrigo-edit',
  templateUrl: './abrigo-edit.component.html',
  styleUrls: ['./abrigo-edit.component.scss']
})
export class AbrigoEditComponent implements OnInit {
  abrigo: Abrigo;
  estados: any[] = [];
  cidades: any[] = [];
  paises: any[] = [];

  estadoSelecionado: any;
  paisSelecionado: any;
  jsonEstadoData: any;

  constructor(
    private router: Router,
    private http:HttpClient,
    private abrigoService: AbrigoService,
    private usuarioService: UsuarioService,
  ) {

    this.abrigoService.abrigo ? this.abrigo = this.abrigoService.abrigo : this.abrigo = new Abrigo();
    console.log(this.abrigoService.abrigo);
    this.getEstados().subscribe((data) => {
      this.jsonEstadoData = data.estados;
      this.estados = data.estados;
    });

    this.getPaises().subscribe((data) => {
      this.paises = data.filter((elem) => { return elem.nome_pais === 'Brasil' });
    });
   }

  ngOnInit() {
    // console.log(EstadosJson);
  }

  updateCidades(estado) {
    this.cidades = estado.cidades;
  }

  save() {

    if (this.validate()) {
      if (this.abrigo.usuarios && this.abrigo.usuarios !== []) {
        this.abrigoService.edit(this.abrigo).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        this.abrigo.usuarios = [];
        this.abrigo.usuarios.push(this.usuarioService.getUser()._id);
        this.abrigoService.create(this.abrigo).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });

      }
    } else {
      alert('Campos inválidos');
    }
  }

  private getEstados(): Observable<any> {
    return this.http.get('assets/estados-cidade.json');
  }

  private getPaises(): Observable<any> {
    return this.http.get('assets/paises.json');
  }

  validate() {
    return (this.abrigo.nome && this.abrigo.email && this.abrigo.telefone && this.abrigo.descricao && this.abrigo.endereco && this.abrigo.responsavel);
  }

}
