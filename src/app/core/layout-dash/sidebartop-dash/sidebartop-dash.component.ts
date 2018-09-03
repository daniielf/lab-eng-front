import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../../modules/usuario/usuario.service';
import { AbrigoService } from '../../../modules/abrigo/abrigo.service';

@Component({
  selector: 'app-sidebartop-dash',
  templateUrl: './sidebartop-dash.component.html',
  styleUrls: ['./sidebartop-dash.component.scss']
})
export class SidebartopDashComponent implements OnInit {
  private usuario: any;
  private abrigo: any;
  constructor(
    private router: Router,
    public userService: UsuarioService,
    public abrigoService: AbrigoService
  ) {
    this.router.navigate(['/dash/abrigo/read']);

   }

  ngOnInit() {
    this.usuario = this.userService.getUser();
    if (!this.usuario) {
      this.router.navigate(['/inicio']);
      return;
    }
    this.getAbrigoOfUser(this.usuario._id);
  }

  goToAbrigoRead() {
    this.router.navigate(['/dash/abrigo/read']);
  }

  logout() {
    this.userService.setUser(null);
    this.router.navigate(['/inicio']);
  }

  getAbrigoOfUser(userID) {
    this.abrigoService.getAll().then((res:any) => {
      for (let abrigo of res) {
        let findAbrigo = abrigo.usuarios.find((elem) => { return elem._id === userID });
        if (findAbrigo) {
          this.abrigoService.abrigo = abrigo;
          this.abrigo = abrigo;
          return;
        }
      }
    }).catch((err) => {
      console.log(err);
      // alert('err');
    });
  }
}
