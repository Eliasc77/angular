import { Routes } from '@angular/router';
import { CheckOutBoletaComponent } from './Components/Wuala/check-out/check-out-boleta/check-out-boleta.component';
import { CheckOutPedidoComponent } from './Components/Wuala/check-out/check-out-pedido/check-out-pedido.component';
import { CheckOutComponent } from './Components/Wuala/check-out/check-out.component';
import { DetallecarritoComponent } from './Components/Wuala/detallecarrito/detallecarrito.component';

import { LoginComponent } from './Components/Wuala/login/login.component';
import { MenuComponent } from './Components/Wuala/menu/menu.component';
import { ProductosComponent } from './Components/Wuala/productos/productos.component';
import { SliderComponent } from './Components/Wuala/slider/slider.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { EditusersComponent } from './pages/usuarios/editusers/editusers.component';


export const AppRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'dashboard', pathMatch:'full'
  },


  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: 'admin',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},


  {path:'login', component:LoginComponent},

  {
    path:'menu', component:MenuComponent,
    children:[
      {path:'slider', component: SliderComponent},
      {path:'productos', component:ProductosComponent},
      {path:'detailshop', component:DetallecarritoComponent},
      {path:'checkout', component:CheckOutComponent},
      {path:'checkoutpedido', component:CheckOutPedidoComponent},
      {path:'checkoutboleta', component:CheckOutBoletaComponent}

    ]

  },








  {path:'', redirectTo:'menu/slider', pathMatch:'full'},


]
