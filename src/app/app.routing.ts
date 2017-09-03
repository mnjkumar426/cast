import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
    path: '', component: HomeComponent
 },{
     path:'repo/:search',component:RepoComponent
 },
 {
    path:'users/:username',component:UserComponent
}
];
export const routing = RouterModule.forRoot(routes);