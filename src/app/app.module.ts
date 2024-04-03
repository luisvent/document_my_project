import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./store/reducers";
import {MarkdownModule} from "ngx-markdown";
import {MdPreviewComponent} from './md-preview/md-preview.component';
import {BackgroundComponent} from './background/background.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MultiPickerComponent} from './multi-picker/multi-picker.component';

@NgModule({
    declarations: [
        AppComponent,
        MdPreviewComponent,
        BackgroundComponent,
        MultiPickerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
        }),
        MarkdownModule.forRoot(),
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
