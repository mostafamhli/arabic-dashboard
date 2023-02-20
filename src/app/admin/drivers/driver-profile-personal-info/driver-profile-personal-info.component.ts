import { Component, ViewChild, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { ProvinceService } from 'src/app/core/services/province.service';
import { PageType } from 'src/app/core/enums/genric.enums';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-profile-personal-info',
  templateUrl: './driver-profile-personal-info.component.html',
  styleUrls: ['./driver-profile-personal-info.component.scss']
})
export class DriverProfilePersonalInfoComponent implements OnInit {

  @Input() clickSubmit:boolean;

  driverProfile: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any
  provinces: any

  genders = [
    {
      id : 1,
      name : "ذكر"
    },
    {
      id : 2,
      name : "أنثى"
    }
  ]
  pageType:number
  pageTypeEnum = PageType
  driverId:number
  constructor(private controlContainer: ControlContainer,private activatedRoute:ActivatedRoute, private provinceService: ProvinceService) {
    this.pageType = PageType.Get
    this.driverId = activatedRoute.snapshot.params['id']
    if (this.driverId) {
      this.pageType = PageType.Edit
    } else {
      this.pageType = PageType.Create
    }
  }
  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
    if (this.driverProfile.controls['profileImageUrl'] && this.driverProfile.controls['profileImageUrl'].value && this.driverProfile.controls['profileImageUrl'].value != "") {
      this.imageFile = this.driverProfile.controls['profileImageUrl'].value
      if (typeof (this.imageFile) != 'string') {
        this.onFileInput([this.imageFile])
      }
    }
    this.getProvinces()
  }

  getProvinces() {
    this.provinceService.getProvinceList().subscribe((res: any) => {
      this.provinces = res["items"];
    }, err => { })
  }

  onFileInput(files: any): void {
    var reader = new FileReader();
    this.imageFile = files;
    this.driverProfile.controls['profileImageUrl'].setValue(files[0])
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.clickSubmit  && this.driverProfile){
      this.driverProfile.markAllAsTouched()
    }
  }
}
