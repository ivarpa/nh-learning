import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-short-detail',
  templateUrl: './curso-short-detail.component.html',
  styleUrls: ['./curso-short-detail.component.scss']
})
export class CursoShortDetailComponent implements OnInit {
  @Input() curso;
  constructor() { }

  ngOnInit(): void {
  }

}
