import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { HomeComponent } from './public/home/home.component';
import { LanPaperComponent } from './public/studylan/lan-paper/lan-paper.component';
import { LanTextComponent } from './public/studylan/lan-text/lan-text.component';
import { LanVideoComponent } from './public/studylan/lan-video/lan-video.component';
import { StudylanComponent } from './public/studylan/studylan.component';
import { StudysubComponent } from './public/studysub/studysub.component';
import { SubPaperComponent } from './public/studysub/sub-paper/sub-paper.component';
import { SubTextComponent } from './public/studysub/sub-text/sub-text.component';
import { SubVideoComponent } from './public/studysub/sub-video/sub-video.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"  },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContactUsComponent },

  { path: "study-lan", component: StudylanComponent },
  { path: "lan-text", component: LanTextComponent },
  { path: "lan-paper", component: LanPaperComponent },
  { path: "lan-video", component: LanVideoComponent },

  { path: "study-sub", component: StudysubComponent },
  { path: "sub-text", component: SubTextComponent },
  { path: "sub-paper", component: SubPaperComponent },
  { path: "sub-video", component: SubVideoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
