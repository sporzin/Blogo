import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from './shared/services/spinner-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  public loading: boolean = false;
  constructor(private spinnerService: SpinnerOverlayService) {
    this.spinnerService.loading$.subscribe((result) => {
      this.loading = result;
    });
  }

  ngOnInit(): void {}
}
