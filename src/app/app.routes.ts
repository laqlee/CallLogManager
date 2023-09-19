import { Routes } from '@angular/router';
import { AddCallComponent } from './pages/add-call/add-call.component';
import { CallListComponent } from './pages/call-list/call-list.component';

export const routes: Routes = [
    { path: 'call-list', component: CallListComponent },
    { path: 'add-call', component: AddCallComponent },
    { path: '', redirectTo: '/call-list', pathMatch: 'full' }
];
