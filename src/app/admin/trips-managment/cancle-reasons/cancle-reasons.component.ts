import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../confirm/confirm.component';


@Component({
  selector: 'app-cancle-reasons',
  templateUrl: './cancle-reasons.component.html',
  styleUrls: ['./cancle-reasons.component.css']
})
export class CancleReasonsComponent {
  cancleName: any
  reasons: any = [
    {
      id: 1,
      name: "تأخر السائق"
    },
    {
      id: 2,
      name: "الخدمة سيئة"
    }
  ]
  constructor(private confirmDialog:MatDialog){

  }
  
  delete(id: number) {
    this.reasons = this.reasons.filter((a:any) => a.id != id)
  }

  onSubmit() {
    let reason = { id: this.reasons[this.reasons.length - 1].id + 1, name: this.cancleName }
    this.reasons.push(reason)
    this.cancleName = undefined;
  }

  confirmDelete(id:number){
    let dialog = this.confirmDialog.open(ConfirmComponent,{
      data:{
        message : "هل أنت متأكد من حذف السبب ؟"
      }
    })
    dialog.afterClosed().subscribe((res:boolean) =>{
      if(res){
        this.delete(id)
      } else {

      }
    });
  }

}
