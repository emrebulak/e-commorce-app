import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string | null;

  constructor(private http: HttpClient) { }

  authentication(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiEndpoint + 'login', {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log("Token : ", this.token);

      return response.success;
    }));
  }

  get authenticated(): boolean {
    return this.token != null;
  }

  clear() {
    this.token = null;
  }
}
