import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from '../../services/auth.http.service';

import { Usuario } from '../../models/usuario.model';

@Injectable()
export class UsuarioService {
  public currentUser: Usuario;
  constructor(private authHttp: AuthHttp) {
    console.log('CONSTRUCTED');
  }

  public create(usuario: Usuario) {
    let data: any = new Object();
    Object.assign(data,usuario);
    return this.authHttp.post('/usuario', data);
  }

  public edit(usuario: Usuario) {
    let data: any = new Object();
    Object.assign(data,usuario);
    return this.authHttp.put('/usuario', data);
  }

  public getAll() {
    return this.authHttp.get('/usuario');
  }

  public read(id) {
    return this.authHttp.get('/usuario');
  }

  public setUser(user) {
    let usuario = new Usuario;
    Object.assign(usuario, user);
    this.currentUser = usuario;
  }

  public getUser() {
    return this.currentUser;
  }

}
