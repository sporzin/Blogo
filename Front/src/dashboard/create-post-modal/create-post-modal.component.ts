import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss'],
})
export class CreatePostModalComponent implements OnInit {
  @Input() name: string;
  public Editor = ClassicEditor;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
