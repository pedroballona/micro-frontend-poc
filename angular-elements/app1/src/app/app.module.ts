import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssetUrlPipe } from './asset-url.pipe';

@NgModule({
  declarations: [AppComponent, AssetUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const appComponent = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-one', appComponent);
  }
}
