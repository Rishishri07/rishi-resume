import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {HomeRoutingModule} from './home-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ScrollToTopComponent} from '../shared/scrollToTop/scroll-to-top.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgxTypedJsModule} from 'ngx-typed-js';

const animate = [HomeComponent];
@NgModule({
  declarations: [
    HomeComponent,
    ScrollToTopComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatGridListModule,
    RouterModule,
    HomeRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgxTypedJsModule,
  ]
})
export class HomeModule { }
