import Vue from 'vue';
import VueRouter from 'vue-router';

import CategoriesComponent from '../components/backend/pages/categories/CategoriesComponent';
import DashboardComponent from '../components/backend/pages/dashboard/DashboardComponent';
import AdminComponent from '../components/backend/AdminComponent';

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin', 
        component: AdminComponent,
        children: [
            {path: '', component: DashboardComponent, name: 'admin.dashboard'},
            {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
        ]
    }
]
    

const router = new VueRouter({
    routes
})

export default router