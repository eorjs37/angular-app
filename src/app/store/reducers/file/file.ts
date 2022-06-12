import {  HttpEvent } from '@angular/common/http';
export interface File {
    id:number;
    file:FormData;
    progressBar:number;
    loaded:number;
    total:number;
    res?:HttpEvent<any>;
}