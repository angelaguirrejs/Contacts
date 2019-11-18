import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  name = "";
  photo = "";
  email = "";
  number_phone = "";
  facebook = "";
  twitter = "";
  instagram ="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  addContact()
  {
    const contact ={
      name: this.name,
      photo: this.photo,
      email: this.email,
      number_phone: this.number_phone,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram
    };

    this.http.post('contacts/api/contacts/', contact)
    .subscribe(data => {
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    })

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

}
