export interface Cow {
    id: string;
    earTag: string;
    sex: 'Male' | 'Female';
    pen: string;
    status: 'Active' | 'In Treatment' | 'Deceased';
    weight?: number;
    lastEventDate: Date;
    events?: CowEvent[];
}

export interface CowEvent {
  date: Date;
  type: 'Weight Check' | 'Treatment' | 'Moved Pen' | 'Death';
  note?: string;
}
