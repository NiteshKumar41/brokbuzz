import { Routes } from '@angular/router';

// dashboard
import { IndexComponent } from './index';
// import { AnalyticsComponent } from './analytics';
// import { FinanceComponent } from './finance';
// import { CryptoComponent } from './crypto';

// widgets
import { WidgetsComponent } from './widgets';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { PartiesComponent } from './components/parties/parties.component';
import { AddInvoiceComponent } from './components/invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './components/invoice/edit-invoice/edit-invoice.component';
import { ListInvoiceComponent } from './components/invoice/list-invoice/list-invoice.component';
import { PreviewInvoiceComponent } from './components/invoice/preview-invoice/preview-invoice.component';

// tables
// import { TablesComponent } from './tables';

// font-icons
// import { FontIconsComponent } from './font-icons';

// charts
// // import { ChartsComponent } from './charts';

// // dragndrop
// import { DragndropComponent } from './dragndrop';

// // layouts
// import { AppLayout } from './layouts/app-layout';
// import { AuthLayout } from './layouts/auth-layout';

// // pages
// import { KnowledgeBaseComponent } from './pages/knowledge-base';
// import { FaqComponent } from './pages/faq';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        
    },
    {
        path: 'signUp',
        component: SignUpComponent,
        
    },
    {
        path:'home',canActivate: [AuthguardGuard],component:DashboardComponent,
        children:[
            {path:'dashboard', canActivate: [AuthguardGuard] ,component:HomeComponent },
            {path:'parties',canActivate:[AuthguardGuard],component:PartiesComponent},
            {
                path:'invoice/add',canActivate:[AuthguardGuard],component:AddInvoiceComponent
            },
            {
                path:'invoice/edit',canActivate:[AuthguardGuard],component:EditInvoiceComponent
            },
            {
                path:'invoice/list',canActivate:[AuthguardGuard],component:ListInvoiceComponent
            },
            {
                path:'invoice/preview',canActivate:[AuthguardGuard],component:PreviewInvoiceComponent
            },
        ]
    }

    // children: [
    //     // dashboard
    //     { path: '', component: IndexComponent, title: 'Sales Admin | VRISTO - Multipurpose Tailwind Dashboard Template' },
    //     { path: 'analytics', component: AnalyticsComponent, title: 'Analytics Admin | VRISTO - Multipurpose Tailwind Dashboard Template' },
    //     { path: 'finance', component: FinanceComponent, title: 'Finance Admin | VRISTO - Multipurpose Tailwind Dashboard Template' },
    //     { path: 'crypto', component: CryptoComponent, title: 'Crypto Admin | VRISTO - Multipurpose Tailwind Dashboard Template' },

    //     //apps
    //     { path: '', loadChildren: () => import('./apps/apps.module').then((d) => d.AppsModule) },

    //     // widgets
    //     { path: 'widgets', component: WidgetsComponent, title: 'Widgets | VRISTO - Multipurpose Tailwind Dashboard Template' },

    //     // components
    //     { path: '', loadChildren: () => import('./components/components.module').then((d) => d.ComponentsModule) },

    //     // elements
    //     { path: '', loadChildren: () => import('./elements/elements.module').then((d) => d.ElementsModule) },

    //     // forms
    //     { path: '', loadChildren: () => import('./forms/form.module').then((d) => d.FormModule) },

    //     // users
    //     { path: '', loadChildren: () => import('./users/user.module').then((d) => d.UsersModule) },

    //     // tables
    //     { path: 'tables', component: TablesComponent, title: 'Tables | VRISTO - Multipurpose Tailwind Dashboard Template' },
    //     { path: '', loadChildren: () => import('./datatables/datatables.module').then((d) => d.DatatablesModule) },

    //     // font-icons
    //     { path: 'font-icons', component: FontIconsComponent, title: 'Font Icons | VRISTO - Multipurpose Tailwind Dashboard Template' },

    //     // charts
    //     { path: 'charts', component: ChartsComponent, title: 'Charts | VRISTO - Multipurpose Tailwind Dashboard Template' },

    //     // dragndrop
    //     { path: 'dragndrop', component: DragndropComponent, title: 'Dragndrop | VRISTO - Multipurpose Tailwind Dashboard Template' },

    //     // pages
    //     { path: 'pages/knowledge-base', component: KnowledgeBaseComponent, title: 'Knowledge Base | VRISTO - Multipurpose Tailwind Dashboard Template' },
    //     { path: 'pages/faq', component: FaqComponent, title: 'FAQ | VRISTO - Multipurpose Tailwind Dashboard Template' },
    // ],
    // {
    //     path: '',
    //     component: AuthLayout,
    //     children: [
    //         // pages
    //         { path: '', loadChildren: () => import('./pages/pages.module').then((d) => d.PagesModule) },

    //         // auth
    //         { path: '', loadChildren: () => import('./auth/auth.module').then((d) => d.AuthModule) },
    //     ],
    // },
];
