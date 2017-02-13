import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';

import { TestService } from './test.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TextComponent
  ],
  declarations: [
    TextComponent
  ],
  providers: [
    TestService
  ]
})
export class ToolsModule { }
