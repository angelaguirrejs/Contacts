import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  quantity = null;

  constructor(public navCtrl: NavController, public http: HttpClient) {
      this.http.get("contacts/api/contacts")
      .subscribe(data => {
          this.data = data;
          this.quantity = Object.keys(data).length;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  showContact(contact)
  {
      this.navCtrl.push(ContactPage, {contact: contact});
  }

}
