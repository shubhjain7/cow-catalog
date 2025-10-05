import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CowService } from '../../core/services/cow.service';
import { Cow, CowEvent } from '../../core/models/cow.model';

@Component({
  selector: 'app-cow-detail',
  templateUrl: 'cow-detail.component.html'
})
export class CowDetailComponent implements OnInit {
  cow?: Cow;

  constructor(private route: ActivatedRoute, private svc: CowService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cow = this.svc.getCowById(id);
  }
}
