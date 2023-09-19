import { Injectable } from '@angular/core';
import { StatusType } from '../models/status-type';

@Injectable()
export class StatusTypeService {
  private readonly statusTypes: StatusType[] = [
    { id: 1, name: 'Open' },
    { id: 2, name: 'Closed' }
  ];

  getStatusTypes(): StatusType[] {
    return this.statusTypes;
  }
}
