import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SpinnerOverlayService } from 'src/shared/services/spinner-overlay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let postId = 1;
    this.http.get(`http://localhost:8000/posts/${postId}`).subscribe((res) => {
      console.log(res);
    });
  }
  ngAfterViewInit(): void {}
}
