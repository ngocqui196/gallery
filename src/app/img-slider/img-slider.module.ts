import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgSliderComponent} from './img-slider.component';
import {ImgSlideComponent} from './img-slide/img-slide.component';
import {RouterModule} from '@angular/router';

const routerChild = [
  {
    path: 'detail',
    component: ImgSlideComponent
  }
];

@NgModule({
  declarations: [
    ImgSliderComponent,
    ImgSlideComponent
  ],
  exports: [
    ImgSlideComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerChild)
  ]
})
export class ImgSliderModule {
}
