import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  store: any;
  loginForm: FormGroup
  currYear: number = new Date().getFullYear();
  constructor(public translate: TranslateService, public storeData: Store<any>, public router: Router, public fb: FormBuilder, public appService: AppServiceService) {
    this.initStore();
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  async initStore() {
    this.storeData
      .select((d) => d.index)
      .subscribe((d) => {
        this.store = d;
      });
  }

  changeLanguage(item: any) {
    this.translate.use(item.code);
    // this.appSetting.toggleLanguage(item);
    // if (this.store.locale?.toLowerCase() === 'ae') {
    //     this.storeData.dispatch({ type: 'toggleRTL', payload: 'rtl' });
    // } else {
    //     this.storeData.dispatch({ type: 'toggleRTL', payload: 'ltr' });
    // }
    // window.location.reload();
  }
  login() {
    this.appService.login(this.loginForm.value).subscribe(res => {
      if (res.status == 'success') {
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/home/dashboard')
      }
    })
  }
}
