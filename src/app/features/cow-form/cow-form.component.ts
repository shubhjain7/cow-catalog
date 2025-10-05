import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CowService } from '../../core/services/cow.service';

@Component({
  selector: 'app-cow-form',
  template: `
  <div class="p-4">
    <h2>Add New Cow</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      <button pButton type="submit" label="Save"></button>
    </form>
  </div>`
})
export class CowFormComponent {
  form = new FormGroup({});
  model = { status: 'Active' };
  fields = [
    { key: 'earTag', type: 'input', templateOptions: { label: 'Ear Tag', required: true } },
    { key: 'sex', type: 'select', templateOptions: { label: 'Sex', options: ['Male', 'Female'].map(v => ({ label: v, value: v })), required: true } },
    { key: 'pen', type: 'input', templateOptions: { label: 'Pen', required: true } },
    { key: 'status', type: 'select', templateOptions: { label: 'Status', options: ['Active', 'In Treatment', 'Deceased'].map(v => ({ label: v, value: v })) } },
    { key: 'weight', type: 'input', templateOptions: { type: 'number', label: 'Weight (kg)', min: 0 } }
  ];

  constructor(private cowService: CowService) {}

  onSubmit() {
    if (this.form.valid) {
      this.cowService.addCow(this.form.value);
      alert('Cow added successfully!');
    }
  }
}
