import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
// RxJS 임포트
import { Subscription, Observable, of, throwError } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  searchInput: FormControl = new FormControl('');
  email: FormControl = new FormControl('',[Validators.required, Validators.email]);
  githubUser: GithubUser;
  subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.email.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(() => this.email.valid),
        switchMap((x) => this.test(x))
      )
      .subscribe((x) => {
        if (this.email.valid) {
          console.log('x : ',x);
        }
    })
  }

  ngOnInit() {
    this.test('eorjs37');
    
  }

  
  getGithubUser(userId: string){
  }

  test(userId: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${userId}`)
  }
}
