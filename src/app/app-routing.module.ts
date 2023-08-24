import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { CartpageComponent } from './Components/cartpage/cartpage.component';

const routes: Routes = [

{
  path:'',
  component:MainpageComponent
},
{
  path:'cart',
  component:CartpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
