import { Component, OnInit } from '@angular/core';
import { CommenService } from 'src/app/services/commen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: CommenService) { }

  ngOnInit(): void {
  }
  scroll(className: any) {
    this.service.scrollTo(className);
  }

}
