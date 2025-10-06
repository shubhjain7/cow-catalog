import { Component } from '@angular/core';
import { CowService } from '../../services/cow.service';
import { Cow } from '../../models/cow.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cow-list',
  templateUrl: './cow-list.component.html',
  styleUrls: ['./cow-list.component.scss']
})
export class CowListComponent {
  cows: Cow[] = [];

  constructor(private cowService: CowService, private router: Router) {
    this.cowService.cows$.subscribe(list => this.cows = list);
  }

  viewCow(cow: Cow) {
    this.router.navigate(['/detail', cow.id]);
  }
  onFilter(filteredCows: Cow[]) {
    this.cows = filteredCows;
  }
}
