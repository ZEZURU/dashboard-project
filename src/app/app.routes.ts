import { Routes } from '@angular/router';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { AdmindashComponent } from './pages/admindash/admindash.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { SingleenquiryComponent } from './pages/singleenquiry/singleenquiry.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    component:SidenavComponent,
    children:[{ path: '',
      component: AdmindashComponent
    },

    {path: 'Enquiries',
      component: EnquiriesComponent

    },

    {path: 'singleenquiry',
      component: SingleenquiryComponent

    },

    {path: 'Enquiries/:id',
      component: SingleenquiryComponent

    },
  ]
   },



];
