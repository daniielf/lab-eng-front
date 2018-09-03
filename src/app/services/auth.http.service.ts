import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class AuthHttp {

  private serviceUrl = 'http://localhost:1337/api';
  private userToken = '';
  public loggedUser: any;

  constructor(private http: Http) {

  }

  public post(url: string, data: any) {
		return new Promise((resolve, reject) => {
			const header: Headers = new Headers();
			header.append('Content-Type', 'application/json');
			// header.append('Authorization', 'Bearer ' + String(this.userToken));
			const options = new RequestOptions({ headers: header });
			this.http.post(this.serviceUrl + url, data, options).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				reject(err);
			});
		});
	}

	public noAuthPost(url: string, data: any) {
		return new Promise((resolve, reject) => {
			this.http.post(this.serviceUrl + url, data).subscribe((result: any) => resolve(result.status),
			err => reject(err));
		});
	}

	public put(url: string, data: any) {
		return new Promise((resolve, reject) => {
			const header: Headers = new Headers();
			header.append('Content-Type', 'application/json');
      // header.append('Authorization', 'Bearer ' + String(this.userToken));
			const options = new RequestOptions({ headers: header });
			this.http.put(this.serviceUrl + url, data, options).subscribe((result: any) => {
				resolve(result.json());
			},
			err => {
				reject(err);
			});
		});
	}

  public getToken() {
    return this.userToken;
  }

	public delete(url: string) {
		return new Promise((resolve, reject) => {
			const header: Headers = new Headers();
      header.append('Content-Type', 'application/json');
			// header.append('Authorization', 'Bearer ' + String(this.userToken));
			const options = new RequestOptions({ headers: header });

			this.http.delete(this.serviceUrl + url, options).subscribe((data: any) => {
				resolve(data);
			},
			err => {
				reject(err);
			});
		});
	}

	public get(url: string) {
		return new Promise((resolve, reject) => {
			const header: Headers = new Headers();
      header.append('Content-Type', 'application/json');
			// header.append('Authorization', 'Bearer ' + String(this.userToken));
			const options = new RequestOptions({ headers: header });

			this.http.get(this.serviceUrl + url, options).subscribe((data: any) => {
				resolve(data.json());
			},
			(err) => {
				reject(err);
			});
		}).catch((err) => {
			console.log('ERROR', err);
		});
	}

	public auth(email: string, password: string) {
		const data  = { email: email, senha: password };
		return new Promise((resolve, reject) => {
			this.http.post(this.serviceUrl + 'login/', data).subscribe((result: any) => {
				const json: any = result.json();
				this.loggedUser = result.usuario;
				if (json.token) {
					this.userToken = json.token;
					resolve(result.json());
				}
			}, (err) => {
					console.log('Error on Auth');
					reject(err);
				}
			);
		});
	}
}
