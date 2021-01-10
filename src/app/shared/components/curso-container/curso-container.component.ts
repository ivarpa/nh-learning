import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {

  @Input() typeShow: 'all' | 'featured' = 'all';
  cursos = [];
  constructor() { }

  ngOnInit(): void {
  }

}
