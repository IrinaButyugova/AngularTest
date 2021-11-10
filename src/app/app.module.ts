import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ChangeUserComponent } from './change-user/change-user.component'; 
import { FormatPipe} from './pipes/format.pipe';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormDirComponent } from './form-dir/form-dir.component';
import { GetChangeModelComponent } from './get-change-model/get-change-model.component';
import { GetSumComponent } from './get-sum/get-sum.component';
import { HttpServerInteractionComponent } from './http-server-interaction/http-server-interaction.component'
import { ItemDetailsComponent } from './item/item.details.component';
import { ItemComponent }   from './item/item.component';
import { ItemStatComponent } from './item/item.stat.component';
import { JoinPipe } from './pipes/join.pipe';
import { ModelValidationComponent } from './model-validation/model-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

const itemRoutes: Routes = [
    { path: 'details', component: ItemDetailsComponent},
    { path: 'stat', component: ItemStatComponent},
];

const appRoutes: Routes =[
    { path: '', component: ChangeUserComponent},
    { path: 'getChangeModel', component: GetChangeModelComponent, 
canActivate: [ CanActivateGuard ], canDeactivate: [CanDeactivateGuard]},
    { path: 'getChange', redirectTo: '/getChangeModel', pathMatch:'full'},
    { path: 'item/:id', component: ItemComponent},
    { path: 'item/:id', component: ItemComponent, children: itemRoutes},
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, 
        RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [ AppComponent, ChangeUserComponent, FormatPipe, GetChangeModelComponent, 
        GetSumComponent, ItemDetailsComponent, ItemComponent, ItemStatComponent, 
        ModelValidationComponent, FormDirComponent, FormBuilderComponent, 
        HttpServerInteractionComponent, JoinPipe],
    providers:    [ CanActivateGuard, CanDeactivateGuard ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }