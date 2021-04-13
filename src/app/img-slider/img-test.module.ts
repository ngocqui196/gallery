import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ImageGalleryComponent} from '../image-gallery/image-gallery.component';

const routes: Routes = [
  {
    path: 'test',
    component: ImageGalleryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ImgTestModule {
}
