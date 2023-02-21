import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { SettingsServicesService } from 'src/app/core/services/settings-services.service';
import { pageType } from '../vehicle-classification/add-new-classification/add-new-classification.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  pageTypeEnum = pageType;
  activePageType = pageType.add;
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
    orderNotRespondingWaitMinutes: new FormControl('', [Validators.required]),

  });

  constructor(private settingsService: SettingsServicesService) {
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
      this.settingForm.get('orderNotRespondingWaitMinutes')?.setValue(res.orderNotRespondingWaitMinutes)
      console.log(res)
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
      endAfternoonShiftTime: this.settingForm.value.dayEnd
    }

    console.log(modal)
    this.settingsService.addSocialMediaInfo(modal).subscribe(res => {
      console.log(res)
      this.socialMediaInfo();
    })
  }
}
