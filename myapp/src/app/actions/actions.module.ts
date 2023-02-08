import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActionsComponent } from './actions.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewActionComponent } from '../new-action/new-action.component';
import { FormsModule } from '@angular/forms';
import { StateService  } from '../service/shared.service';

@NgModule({
  declarations: [ActionsComponent, NewActionComponent],
  imports: [CommonModule, HttpClientModule, BrowserModule, FormsModule],
  bootstrap: [ActionsComponent],
  providers: [StateService ],
  exports: [ActionsComponent],
})
export class ActionsModule {}
