import { Route } from '@angular/router';
import { AuthBlogComponent } from './blogs.component';

export const authBlogRoutes: Route[] = [
    {
        path     : '',
        component: AuthBlogComponent
    }
];
