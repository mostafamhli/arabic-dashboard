import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountStatus } from 'src/app/core/enums/genric.enums';

@Component({
  selector: 'app-view-client-details',
  templateUrl: './view-client-details.component.html',
  styleUrls: ['./view-client-details.component.scss']
})
export class ViewClientDetailsComponent {

  profile: FormGroup
  id: number
  clients = [
    {
      id: 1,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.active
    },

    {
      id: 2,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.inActive
    },


    {
      id: 3,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.active
    },


    {
      id: 4,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.active
    },


    {
      id: 5,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.active
    },

    {
      id: 6,
      userName: 'ali Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.inActive
    },


    {
      id: 7,
      userName: 'Mostafa Mhli',
      mobile: 95365522,
      creationDate: '12-9-2022',
      NumOfTrips: 62,
      eval: 3.8,
      activatedCode: 123456,
      accountStatus: AccountStatus.inActive
    },
  ]
  constructor(private activatedRoute: ActivatedRoute) {
    this.profile = new FormGroup({
      name: new FormControl({ value: '', disabled: true }, [Validators.required]),
      mobile: new FormControl({ value: '', disabled: true }, [Validators.required]),
      tripsNum: new FormControl({ value: 0, disabled: true }, [Validators.required])
    })

    this.id = activatedRoute.snapshot.params['id']
    if (this.id)
      this.assignVal(this.id);
  }

  assignVal(id: number) {
    let client = this.clients.find(a => a.id == id)
    console.log(client);
    if(client){
    this.profile.controls['name'].setValue(client.userName);
    this.profile.controls['mobile'].setValue(client.mobile);
    this.profile.controls['tripsNum'].setValue(client.NumOfTrips);
    }
  }
}
