import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LeadProductComponent } from './lead-product/lead-product.component';
import { MainContactComponent } from './main-contact/main-contact.component';

const routes: Routes = [
  {
    path:'',component:MainContactComponent
  },
 
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'add-products',component: AddProductComponent
  },
  {
    path:'lead-products',component:LeadProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
