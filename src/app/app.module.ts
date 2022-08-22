import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { HeadComponent } from './common/head/head.component';
import { FootComponent } from './common/foot/foot.component';
import { StudylanComponent } from './public/studylan/studylan.component';
import { StudysubComponent } from './public/studysub/studysub.component';
import { LanTextComponent } from './public/studylan/lan-text/lan-text.component';
import { LanVideoComponent } from './public/studylan/lan-video/lan-video.component';
import { LanPaperComponent } from './public/studylan/lan-paper/lan-paper.component';
import { SubTextComponent } from './public/studysub/sub-text/sub-text.component';
import { SubVideoComponent } from './public/studysub/sub-video/sub-video.component';
import { SubPaperComponent } from './public/studysub/sub-paper/sub-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeadComponent,
    FootComponent,
    StudylanComponent,
    StudysubComponent,
    LanTextComponent,
    LanVideoComponent,
    LanPaperComponent,
    SubTextComponent,
    SubVideoComponent,
    SubPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
