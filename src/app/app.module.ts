import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./store/reducers";
import {MarkdownModule} from "ngx-markdown";
import {BackgroundComponent} from './components/background/background.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from './toast/toast.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdPreviewComponent} from "./components/markdown/md-preview/md-preview.component";
import {MultiPickerComponent} from "./components/multi-picker/multi-picker.component";
import {RawCodeSnippetComponent} from "./components/raw-code-snippet/raw-code-snippet.component";
import {MdCodeSnippetComponent} from "./components/markdown/md-code-snippet/md-code-snippet.component";

@NgModule({
    declarations: [
        AppComponent,
        MdPreviewComponent,
        BackgroundComponent,
        MultiPickerComponent,
        RawCodeSnippetComponent,
        MdCodeSnippetComponent,
        ToastComponent
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
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
