import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Call } from '../../../app/models/call.model';
import { CallService } from '../../../app/services/call.service';
import { StatusPipe } from '../../../app/shared/status.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, StatusPipe],
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css'],
})
export class CallListComponent implements OnInit {
  calls: Call[] = [];

  constructor(private callService: CallService) {}

  ngOnInit() {
    this.calls = this.callService.getCalls();
  }

  searchTitle(e: any) {
    this.calls = this.callService.getCalls(e.target.value);
  }
}
