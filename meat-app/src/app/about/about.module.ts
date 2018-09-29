import { NgModule } from '../../../node_modules/@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule { }
