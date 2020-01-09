import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectiveAndPipeComponent } from './directives-and-pipes/directive-and-pipe/directive-and-pipe.component';
import { UsPhonePipe } from './directives-and-pipes/us-phone.pipe';
import { UsPhone1Pipe } from './directives-and-pipes/us-phone1.pipe';
import { CustomMaxLengthDirective } from './directives-and-pipes/custom-max-length.directive';
import { DoCheckComponent } from './directives-and-pipes/do-check/do-check.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ParentComponent } from './service-example/parent/parent.component';
import { ChildComponent } from './service-example/child/child.component';
import { LoggerInterceptorService } from './logger-interceptor.service';
import { AuthHeaderInterceptorService } from './auth-header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectiveAndPipeComponent,
    UsPhonePipe,
    UsPhone1Pipe,
    CustomMaxLengthDirective,
    DoCheckComponent,
    PathNotFoundComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
