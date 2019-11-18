import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.contact = this.navParams.get('contact');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  deleteContact()
  {
    this.http.delete(`contacts/api/contacts/${this.contact.id}`)
    .subscribe(data => {
      console.log(JSON.stringify(data));
    }, error => {
      console.log(JSON.stringify(error));
    });

    this.navCtrl.pop();
  }

}
