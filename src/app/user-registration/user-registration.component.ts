import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  public showImg: boolean = false;
  public ImgStore: string = '';

  getImg(img: any) {
    // console.log(img.target.files[0]);
    // console.log();
    this.ImgStore = URL.createObjectURL(img.target.files[0]);
    this.showImg = true;
  }

}
