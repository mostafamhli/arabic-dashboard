import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { PageType } from 'src/app/core/enums/genric.enums';
import { MatSnackBar } from '@angular/material/snack-bar';
import { duration } from 'moment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  pageTypeEnum = PageType;
  activePageType = PageType.Create;
  socialMedia: any

  settingForm = new FormGroup({
    facebook: new FormControl('', [Validators.required]),
    twitter: new FormControl('', [Validators.required]),
    instagram: new FormControl('', [Validators.required]),
    whatsapp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    email: new FormControl('', [Validators.required]),
    morningEnd: new FormControl('', [Validators.required]),
    dayEnd: new FormControl('', [Validators.required]),
    captainCancellationFine: new FormControl('', [Validators.required]),
    minimumCaptainWallet: new FormControl('', [Validators.required]),
    minimumCountInRange: new FormControl('', [Validators.required]),
    defaultZeroFeeRange: new FormControl('', [Validators.required]),
    orderNotRespondingWaitMinutes: new FormControl('', [Validators.required]),

  });

  constructor(private settingsService: SettingsServicesService, private _snackBar: MatSnackBar) {
    this.socialMediaInfo();
  }

  socialMediaInfo() {
    this.settingsService.getSocialMediaInfo().subscribe((res: any) => {
      this.settingForm.get('facebook')?.setValue(res.contactFacebook)
      this.settingForm.get('twitter')?.setValue(res.contactTwitter)
      this.settingForm.get('instagram')?.setValue(res.contactInstagram)
      this.settingForm.get('whatsapp')?.setValue(res.contactWhatsApp)
      this.settingForm.get('phone')?.setValue(res.contactPhone)
      this.settingForm.get('email')?.setValue(res.contactEmail)
      this.settingForm.get('morningEnd')?.setValue(res.endMorningShiftTime)
      this.settingForm.get('dayEnd')?.setValue(res.endAfternoonShiftTime)
      this.settingForm.get('captainCancellationFine')?.setValue(res.captainCancellationFine)
      this.settingForm.get('minimumCaptainWallet')?.setValue(res.minimumCaptainWallet)
      this.settingForm.get('minimumCountInRange')?.setValue(res.minimumCountInRange)
      this.settingForm.get('defaultZeroFeeRange')?.setValue(res.defaultZeroFeeRange)
      this.settingForm.get('orderNotRespondingWaitMinutes')?.setValue(res.orderNotRespondingWaitMinutes)
    });
  }

  edit() {
    let modal =
    {
      contactFacebook: this.settingForm.value.facebook,
      contactTwitter: this.settingForm.value.twitter,
      contactInstagram: this.settingForm.value.instagram,
      contactWhatsApp: this.settingForm.value.whatsapp,
      contactEmail: this.settingForm.value.email,
      contactPhone: this.settingForm.value.phone,
      minimumCountInRange: this.settingForm.value.minimumCountInRange,
      orderNotRespondingWaitMinutes: this.settingForm.value.orderNotRespondingWaitMinutes,
      minimumCaptainWallet: this.settingForm.value.minimumCaptainWallet,
      captainCancellationFine: this.settingForm.value.captainCancellationFine,
      endMorningShiftTime: this.settingForm.value.morningEnd,
      endAfternoonShiftTime: this.settingForm.value.dayEnd,
      defaultZeroFeeRange: this.settingForm.value.defaultZeroFeeRange
    }

    this.settingsService.addSocialMediaInfo(modal).subscribe(res => {
     
      this.openSnackBar('تمت العملية بنجاح' , 'x')
      this.socialMediaInfo();
    })
  }

  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    duration:1000
  }
}
