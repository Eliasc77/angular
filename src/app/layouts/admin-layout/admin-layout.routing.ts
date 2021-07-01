import { Routes } from '@angular/router';









import { UsuariosComponent } from 'app/pages/usuarios/usuarios.component';
import { EditusersComponent } from 'app/pages/usuarios/editusers/editusers.component';
import { ProductComponent } from 'app/pages/product/product.component';
import { SaveusersComponent } from 'app/pages/usuarios/saveusers/saveusers.component';
import { SaveprodComponent } from 'app/pages/product/saveprod/saveprod.component';
import { EditprodComponent } from 'app/pages/product/editprod/editprod.component';
import { PedidosService } from 'app/Services/pedidos.service';
import { PedidoComponent } from 'app/pages/pedido/pedido.component';
import { DetalleComponent } from 'app/pages/detalle/detalle.component';



export const AdminLayoutRoutes: Routes = [

    { path: 'user',           component: UsuariosComponent },

    { path: 'product',     component: ProductComponent},

    {path:'pedidos', component:PedidoComponent},

    {path:'detallesp', component:DetalleComponent},

    {path:'saveprod', component:SaveprodComponent},

    { path: 'saveusu', component: SaveusersComponent},

    {path:'editusuario', component:EditusersComponent},

    {path:'editprod', component:EditprodComponent},
];
