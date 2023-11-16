import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentOverviewByCliComponent } from "./component-overview-by-cli/component-overview-by-cli.component";
import { ComponentOverviewByTestComponent } from "./component-overview-by-test/component-overview-by-test.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, ComponentOverviewByCliComponent, ComponentOverviewByTestComponent]
})
export class AppComponent {
  title = 'first-project';
}
