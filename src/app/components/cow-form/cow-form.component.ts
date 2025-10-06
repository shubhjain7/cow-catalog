import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CowService } from '../../services/cow.service';
import { Cow } from '../../models/cow.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cow-form',
  templateUrl: './cow-form.component.html',
  styleUrls: ['./cow-form.component.scss']
})
export class CowFormComponent {
  cowForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cowService: CowService,
    private router: Router
  ) {
    this.cowForm = this.fb.group({
      id: ['', Validators.required],
      sex: ['', Validators.required],
      pen: ['', Validators.required],
      status: ['Active', Validators.required],
      weight: [null, [Validators.min(1)]],
      eventType: ['', Validators.required],
      eventDate: [new Date(), Validators.required],
      eventDetails: ['']
    });
  }

  onSubmit() {
    if (this.cowForm.valid) {
      const formData = this.cowForm.value;
      const newCow = {
        id: formData.id,
        sex: formData.sex,
        pen: formData.pen,
        status: formData.status,
        weight: formData.weight,
        lastEventDate: new Date(formData.eventDate),
        events: [{
          type: formData.eventType,
          date: new Date(formData.eventDate),
          details: formData.eventDetails
        }]
      };
      this.cowService.addCow(newCow);
      this.router.navigate(['/']);
    }
  }
}
