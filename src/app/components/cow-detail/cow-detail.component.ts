// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CowService } from '../../services/cow.service';
// import { Cow } from '../../models/cow.model';

// @Component({
//   selector: 'app-cow-detail',
//   templateUrl: './cow-detail.component.html',
//   styleUrls: ['./cow-detail.component.scss']
// })
// export class CowDetailComponent implements OnInit {
//   cow?: Cow;

//   constructor(private route: ActivatedRoute, private cowService: CowService) {}

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) this.cow = this.cowService.getCowById(id);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CowService } from '../../services/cow.service';
import { Cow } from '../../models/cow.model';

@Component({
  selector: 'app-cow-detail',
  templateUrl: './cow-detail.component.html',
  styleUrls: ['./cow-detail.component.scss']
})
export class CowDetailComponent implements OnInit {
  cow?: Cow;

  constructor(private route: ActivatedRoute, private cowService: CowService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cow = this.cowService.getCowById(id);
    }
  }
}
