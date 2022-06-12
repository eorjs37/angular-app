import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const multiPartOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':  'multipart/form-data'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  constructor(private http: HttpClient) { 
    
  }

  fileUplaod(fb:any){
    return this.http.post<any>(`${environment.apiUrl}/board/fileupload`,fb,{
      reportProgress:true,
      observe:'events'
    });
  }

  getCoffeeList(){
    return this.http.get<any>(`${environment.apiUrl}/coffees/all`,httpOptions);
  }
}
