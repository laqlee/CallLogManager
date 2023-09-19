import { Injectable } from '@angular/core';
import { AddCallCommand } from '../models/add-call-command.model';
import { Call } from '../models/call.model';

@Injectable({ providedIn: 'root' })
export class CallService {
  private readonly calls: Call[] = [
    { caller: 'John', title: 'Need admin permissions', problem: '', solution: '', statusId: 2, callDate: new Date('2023-09-10') },
    { caller: 'Mary', title: 'Need access to project', problem: '', solution: '', statusId: 2, callDate: new Date('2023-09-11') },
    { caller: 'James', title: 'Add user to app', problem: '', solution: '', statusId: 1, callDate: new Date('2023-09-12') }
  ];

  getCalls(filter?: string): Call[] {
    let regExp = new RegExp('');

    if (filter) {
      regExp = new RegExp(filter, 'i');
    }

    return this.calls.filter(c => regExp.test(c.caller) || regExp.test(c.title));
  }

  addCall(addCallCommand: AddCallCommand) {
    this.calls.push({
      caller: addCallCommand.caller!,
      title: addCallCommand.title!,
      problem: addCallCommand.problem!,
      solution: addCallCommand.solution!,
      statusId: 1,
      callDate: new Date()
    });
  }
}
