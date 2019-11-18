import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ContactPage } from '../contact/contact';
import { AddContactPage } from '../add-contact/add-contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  quantity = null;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewWillEnter()
  {
      this.http.get("contacts/api/contacts")
      .subscribe(data => {
          this.data = data;
          this.quantity = Object.keys(data).length;
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  addContact()
  {
    this.navCtrl.push(AddContactPage);
  }

  showContact(contact)
  {
      this.navCtrl.push(ContactPage, {contact: contact});
  }

}
