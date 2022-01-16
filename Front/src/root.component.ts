import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from './shared/services/spinner-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, AfterViewInit {
  public loading: any;
  constructor(private spinnerService: SpinnerOverlayService) {
    this.loading = this.spinnerService.loading$;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }
}
