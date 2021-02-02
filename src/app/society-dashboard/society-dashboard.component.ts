import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-society-dashboard',
  templateUrl: './society-dashboard.component.html',
  styleUrls: ['./society-dashboard.component.scss']
})
export class SocietyDashboardComponent implements OnInit {

  constructor(public dataService: DataService, private modalService: BsModalService) { }

  modalRef: BsModalRef;
  f: FormGroup;
  Username: string;
  mobile_1: number;
  mobile_2: number;
  emailid: string;
  address: string;
  city: string;
  zip: number;
  qualification: string;
  profession: string; 
  facebook: string;
  twitter: string;
  instagram: string;
  contribute: string;
  hours: number;
  days: number;

  isVisible= false;
  ngOnInit(): void {
  }
  
  record = [];

  get(form)
  {
    this.record.push({
      Username: form.value.Username,
      mobile_1: form.value.mobile_1,
      mobile_2: form.value.mobile_2,
      emailid: form.value.emailid,
      address: form.value.address,
      area: form.value.area,
      city: form.value.city,
      zip: form.value.zip,
      qualification: form.value.qualification,
      profession: form.value.profession,
      facebook: form.value.facebook,
      twitter: form.value.twitter,
      instagram: form.value.instagram,
      contribute: form.value.contribute,
      hours: form.value.hours,
      days: form.value.days
    });

    this.dataService.add_NewData(this.record).subscribe(
      (response) => {
        console.log(response);
        form.reset();
      },
      (err) =>console.log(err)
    );
    
  }

  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  // open(content) {
  //   if(this.isVisible)
  //   {
  //     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     }, (reason) => {});
  //   }
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
