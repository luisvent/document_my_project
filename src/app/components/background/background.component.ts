import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundComponent {

}
