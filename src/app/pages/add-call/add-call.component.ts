import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CallService } from '../../../app/services/call.service';
import { StatusPipe } from '../../../app/shared/status.pipe';
import { AddCallCommand } from '../../../app/models/add-call-command.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StatusPipe],
  templateUrl: './add-call.component.html',
  styleUrls: ['./add-call.component.css'],
})
export class AddCallComponent {
  addCallCommand = new AddCallCommand();

  constructor(private router: Router, private callService: CallService) {}

  save() {
    this.callService.addCall(this.addCallCommand);
    this.router.navigate(['/call-list']);
  }
}
