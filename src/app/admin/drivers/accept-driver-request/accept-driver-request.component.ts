import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-driver-request',
  templateUrl: './accept-driver-request.component.html',
  styleUrls: ['./accept-driver-request.component.scss']
})
export class AcceptDriverRequestComponent {

  activeVehicle: number = 1
  activeTypes: number = 0
  vehicles: any = [
    {
      id: 1,
      name: "سيارة",
      path: "/assets/img/vehicles/car.png",
    },
    {
      id: 2,
      name: "ونش",
      path: "/assets/img/vehicles/wnch.png",
    },
    {
      id: 3,
      name: "سيارة VIP",
      path: "/assets/img/vehicles/vip.png",
    },
    {
      id: 4,
      name: "توك توك",
      path: "/assets/img/vehicles/toktok.png",
    }
  ]

  types: any = [
    {
      id: 1,
      name: "توك توك",
      path: "/assets/img/vehicles/toktok.png",
    },
    {
      id: 2,
      name: "جاي تكسي",
      path: "/assets/img/logo.png",
    },
    {
      id: 3,
      name: "آليات",
      path: "/assets/img/vehicles/fleet.png",
    }
  ]

  toktoks: any = [
    {
      id: 1,
      name: "توك توك",
      path: "/assets/img/vehicles/toktok.png",
    },
    {
      id: 2,
      name: "توك توك",
      path: "/assets/img/vehicles/toktok.png",
    }
  ]

  cars: any = [
    {
      id: 1,
      name: "سيارة",
      path: "/assets/img/vehicles/car.png",
    },
    {
      id: 2,
      name: "ونش",
      path: "/assets/img/vehicles/wnch.png",
    },
    {
      id: 3,
      name: "سيارة VIP",
      path: "/assets/img/vehicles/vip.png",
    }
  ]
  constructor(private dialogRef: MatDialogRef<AcceptDriverRequestComponent>) {

  }
  accept() {

  }
  cancel() {
    this.dialogRef.close()
  }
}
