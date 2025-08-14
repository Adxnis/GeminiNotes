import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { NotesComponent } from "./notes/notes.component";


const routes: Routes = [
    { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
    {path: '', redirectTo: '/notes', pathMatch: 'full'}  // Wildcard route for a 404 page can be added here
];  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}