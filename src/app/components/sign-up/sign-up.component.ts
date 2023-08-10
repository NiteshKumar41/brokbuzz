import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppServiceService } from '../services/app-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  store: any;
  signUpForm:FormGroup
  currYear: number = new Date().getFullYear();
  constructor(public translate: TranslateService, public storeData: Store<any>, public router: Router,public appService:AppServiceService) {
      this.initStore();
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
  signUp(){
    this.appService.registerUser('').subscribe(res=>{
      console.log(res);
      
    })
  }
}
