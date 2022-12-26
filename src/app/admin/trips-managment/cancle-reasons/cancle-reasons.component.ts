import { Component, ViewChild} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-cancle-reasons',
  templateUrl: './cancle-reasons.component.html',
  styleUrls: ['./cancle-reasons.component.css']
})
export class CancleReasonsComponent {

  keywords = ['تأخر السائق', 'الخدمة سيئة'];
  formControl = new FormControl(['تأخر السائق']);

  @ViewChild('myForm') form!: NgForm;
  cancleName = new FormControl('');

  
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

 
  onSubmit(){
    console.log(this.form.controls)
    const value = this.form.value.cancleName

    if (value) {
      this.keywords.push(value);
    }

    this.form.reset()
  }
}
