import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
  @ViewChild('post') post: ElementRef<HTMLLIElement>;
  @ViewChild('user') user: ElementRef<HTMLLIElement>;
  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}

  createUser() {
    this.renderer2.removeClass(this.post.nativeElement, 'active');
    this.renderer2.addClass(this.user.nativeElement, 'active');
  }

  logout() {}
}
