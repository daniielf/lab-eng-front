import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from '../../services/auth.http.service';
import { Abrigo } from '../../models/abrigo.model';


@Injectable()
export class AbrigoService {
  public abrigo: any;
  constructor(private authHttp: AuthHttp) {
    console.log('constructed');
  }

  public create(abrigo: Abrigo) {
    return this.authHttp.post('/abrigo', abrigo);
  }

  public edit(abrigo: Abrigo) {
    return this.authHttp.put('/abrigo', abrigo);
  }

  public read(id) {
    return this.authHttp.get('/abrigo');
  }

  public getAll() {
    return this.authHttp.get('/abrigo');
  }

}
