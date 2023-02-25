import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TripsServicesService } from 'src/app/core/services/trips-services.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent {

  private routeSub: Subscription;
  tripDetails:any
  constructor(private route:ActivatedRoute,private tripServcie:TripsServicesService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.tripServcie.getTripDetails(params['id']).subscribe(res => {
        console.log(res)
        this.tripDetails= res
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
