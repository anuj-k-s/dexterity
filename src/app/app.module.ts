import { ReverseFunctionalityDirective } from './common/reverse-functionality.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { LandingComponent } from './_components/landing/landing.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { CategoryComponent } from './_components/category/category.component';
import { environment } from 'src/environments/environment.prod';
import { PostAddComponent } from './_components/post-add/post-add.component';
import { PostService } from './_components/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [ReverseFunctionalityDirective, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
