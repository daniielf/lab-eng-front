import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../modules/usuario/usuario.service';

@Component({
  selector: 'app-sidebartop-site',
  templateUrl: './sidebartop-site.component.html',
  styleUrls: ['./sidebartop-site.component.scss']
})
export class SidebartopSiteComponent implements OnInit {

  modalCadastro: BsModalRef;
  nomeInput : string = '';
  emailInput : string = '';
  usuarioInput : string = '';
  senhaInput : string = '';

  modalLogin: BsModalRef;
  usernameInput: string = '';
  passwordInput: string = '';
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private usuarioService: UsuarioService

  ) { }

  ngOnInit() {
  }

  openRegisterModal(modal: TemplateRef<any>) {
    this.modalCadastro = this.modalService.show(modal);
  }

  openLogInModal(modal: TemplateRef<any>) {
    this.modalLogin = this.modalService.show(modal);
  }

  register() {
    if(this.validate()) {
      let novoRegistro = new Usuario;
      const self = this;

      novoRegistro.nome = this.nomeInput;
      novoRegistro.email = this.emailInput;
      novoRegistro.username = this.usuarioInput;
      novoRegistro.password = this.senhaInput;

      this.usuarioService.create(novoRegistro).then((result) => {
        this.usuarioService.setUser(result);
        this.modalCadastro.hide();
        setTimeout(() => {
          self.router.navigate(['/dash']).catch(err => console.log(err));
        }, 1000);
      }).catch((err) =>{
        console.log(err);
      });
    }
    // const self = this;
    // this.modalCadastro.hide();
    // setTimeout(() => {
    //   self.router.navigate(['/dash']).catch(err => console.log(err));
    // }, 1000);
  }

  validate() {
    return (this.nomeInput != '' && this.emailInput != '' && this.usuarioInput != '' && this.senhaInput != '');
  }

  logIn() {
    let self = this;
    this.usuarioService.getAll().then((res:any) => {
      let user = res.find((elem) => { return elem.username === this.usernameInput && elem.password === this.passwordInput });
      if (user != null) {
        this.usuarioService.setUser(user);
        this.modalLogin.hide();
        setTimeout(() => {
          self.router.navigate(['/dash']).catch(err => console.log(err));
        }, 500);
      } else {
        console.log('Não encontrou');
        alert("Não foi possível logar");
      }
    }).catch((err) => {
      console.log(err);
      alert("Não foi possível logar");
    });
  }

}
