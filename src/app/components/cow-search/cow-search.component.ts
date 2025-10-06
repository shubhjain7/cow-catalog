import { Component, EventEmitter, Output } from '@angular/core';
import { CowService } from '../../services/cow.service';
import { Cow } from '../../models/cow.model';

@Component({
  selector: 'app-cow-search',
  templateUrl: './cow-search.component.html',
  styleUrls: ['./cow-search.component.scss']

})
export class CowSearchComponent {
  tag = '';
  status = '';
  pen = '';
  cows: Cow[] = [];
  @Output() filtered = new EventEmitter<Cow[]>();

  constructor(private cowService: CowService) {
    this.cows = this.cowService.currentCows;
  }

  search() {
    const filteredCows = this.cowService.filterCows(this.tag, this.status, this.pen);
    this.filtered.emit(filteredCows);
  }
}
