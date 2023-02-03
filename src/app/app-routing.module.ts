import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, Ng2SearchPipeModule
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
