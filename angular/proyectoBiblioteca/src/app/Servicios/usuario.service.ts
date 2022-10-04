import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = '/api/users';
  
  constructor(private http: HttpClient) {}

  getUsuarios():Observable<any>{

    return this.http.get(this.url);
  }

  getUnUsuario(id: string):Observable<any>{

    return this.http.get(this.url + '/' + id);
  }

  guardarUsuario(usuario : Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  editarUsuario(id: string, usuario:Usuario):Observable<any>{
    return this.http.put(this.url+'/'+id, usuario);
  }

  borrarUsuario(id: string): Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }
}

export interface Usuario{
  id: string;
  name : string;
  last_name_p: string;
  last_name_m: string;
  domicilio: string;
  tel: string;
  sanctions: string;
  sanc_money: string;

}
