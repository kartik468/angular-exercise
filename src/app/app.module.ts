import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LazyLoadParentComponent } from './lazy-loading-comp/lazy-load-parent/lazy-load-parent.component';
import { WithoutInjectableService } from './services/without-injectable.service';
import { RatingInputComponent } from './misc/rating-input.component';
import { LifecycleHookComponent } from './misc/lifecycle-hook/lifecycle-hook.component';
import { RatingComponentNewComponent } from './misc/rating-component-new/rating-component-new.component';

// import { CustomerClaimsModule } from 'customer-claims';

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
    ChildComponent,
    LazyLoadParentComponent,
    RatingInputComponent,
    LifecycleHookComponent,
    RatingComponentNewComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule, HttpClientModule],
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
    },
    WithoutInjectableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
