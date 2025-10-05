import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cow } from '../models/cow.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class CowService {
  private cows$ = new BehaviorSubject<Cow[]>(this.loadCows());

  private loadCows(): Cow[] {
    const raw = localStorage.getItem('cows');
    if (raw) {
      const arr = JSON.parse(raw);
      // convert date strings back to Date objects
      return arr.map((c: any) => ({
        ...c,
        lastEventDate: new Date(c.lastEventDate),
        events: c.events?.map((e: any) => ({ ...e, date: new Date(e.date) }))
      }));
    }
    return [];
  }

  private saveCows(cows: Cow[]) {
    localStorage.setItem('cows', JSON.stringify(cows));
  }

  getCows() {
    return this.cows$.asObservable();
  }

  getCowById(id: string): Cow | undefined {
    return this.cows$.value.find(c => c.id === id);
  }

  addCow(cow: Partial<Cow>) {
    const newCow: Cow = {
      id: uuidv4(),
      earTag: cow.earTag!,
      sex: cow.sex!,
      pen: cow.pen!,
      status: cow.status || 'Active',
      weight: cow.weight,
      lastEventDate: new Date(),
      events: []
    };
    const arr = [...this.cows$.value, newCow];
    this.saveCows(arr);
    this.cows$.next(arr);
  }
}
