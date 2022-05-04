import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { RoutingService } from '../../../core/services/routing.service';
import { UrlConst } from '../../constants/url-const';
import { SignInRequestDto } from '../../models/dtos/requests/sign-in-request-dto';
import { SignInResponseDto } from '../../models/dtos/responses/sign-in-response-dto';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  signInUserAccount = new FormControl('', [Validators.required]);
  signInUserPassword = new FormControl('', [Validators.required]);

  signInForm = this.formBuilder.group({
    signInUserAccount: this.signInUserAccount,
    signInUserPassword: this.signInUserPassword
  });

  constructor(public translateService: TranslateService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private routingService: RoutingService) { }

  ngOnInit(): void {
    this.setupLanguage();
  }
  /**
  * Clicks sign in button
  */
clickSignInButton() {
  // Creates request dto.
  const signInRequestDto = this.createSignInRequestDto();

  // Signs in using dto.
  this.signIn(signInRequestDto);
}
private signIn(signInRequestDto: SignInRequestDto) {
  // Signs in and gets response dto.
  const signInResponseDto: Observable<SignInResponseDto> = this.accountService.signIn(signInRequestDto);
  signInResponseDto.subscribe(responseDto => {
    if (responseDto != null) {
      // Moves to the Product listing page.
      this.routingService.navigate(UrlConst.PATH_PRODUCT_LISTING);
    }
  });
}

private createSignInRequestDto(): SignInRequestDto {
  // Creates Request.
  return {
    Username: this.signInUserAccount.value,
    Password: this.signInUserPassword.value
  };
}
  private setupLanguage() {
    // Setups language using browser settings.
    this.translateService.setDefaultLang(this.getLanguage(navigator.language));
    this.translateService.use(this.getLanguage(navigator.language));
  }

  private getLanguage(language: string): string {
    console.log('SignInPageComponent #getLanguage() language:' + language);

    const CHAR_HYPHEN = '-';
    if (language.indexOf(CHAR_HYPHEN) > 0) {
      const splittedLanguage: string[] = language.split(CHAR_HYPHEN);
      console.log('SignInPageComponent #getLanguage() splittedLanguage[0]:' + splittedLanguage[0]);

      return splittedLanguage[0];
    }
    return language;
  }

}
