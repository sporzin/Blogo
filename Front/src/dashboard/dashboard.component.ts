import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  createPost() {
    const modalRef = this.modalService.open(CreatePostModalComponent);
    modalRef.componentInstance.name = 'Pouya';
  }
}
