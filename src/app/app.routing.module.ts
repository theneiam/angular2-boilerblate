/**
 * The Routing Module is a design choice whose value is most obvious
 * when the configuration is complex and includes specialized guard
 * and resolver services
 *
 * @author Yevhen Nezhuta <eugene.nezhuta@gmail.com>
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}