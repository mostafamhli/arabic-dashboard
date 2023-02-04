import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { ProvinceService } from 'src/app/core/services/province.service';

@Component({
  selector: 'app-driver-profile-personal-info',
  templateUrl: './driver-profile-personal-info.component.html',
  styleUrls: ['./driver-profile-personal-info.component.scss']
})
export class DriverProfilePersonalInfoComponent implements OnInit {

  driverProfile: FormGroup;
  imageFile: any
  @ViewChild('fileInput') fileInput: any
  provinces: any

  constructor(private controlContainer: ControlContainer, private provinceService: ProvinceService) {

  }
  ngOnInit(): void {
    this.driverProfile = <FormGroup>this.controlContainer.control;
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
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageFile = reader.result;
    };
  }
}
