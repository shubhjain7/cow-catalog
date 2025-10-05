import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CowService } from '../../core/services/cow.service';
import { Cow } from '../../core/models/cow.model';

@Component({
  selector: 'app-cow-list',
  templateUrl: './cow-list.component.html'
})
export class CowListComponent implements OnInit {
  cows: Cow[] = [];
  filtered: Cow[] = [];
  filters = { tag: '', status: '', pen: '' };
  statuses = ['Active', 'In Treatment', 'Deceased'];
  pens = ['Pen A', 'Pen B', 'Pen C'];

  constructor(private svc: CowService, private router: Router) {}

  ngOnInit() {
    this.svc.getCows().subscribe(arr => {
      this.cows = arr;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filtered = this.cows.filter(c => {
      return (!this.filters.tag || c.earTag.includes(this.filters.tag)) &&
             (!this.filters.status || c.status === this.filters.status) &&
             (!this.filters.pen || c.pen === this.filters.pen);
    });
  }

  openAddCow() {
    this.router.navigate(['/add']);
  }

  viewDetail(id: string) {
    this.router.navigate(['/cows', id]);
  }
}
