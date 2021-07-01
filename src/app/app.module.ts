import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './Components/Wuala/login/login.component';


import { CarouselModule } from 'ngx-bootstrap/carousel';
//MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './Components/Wuala/menu/menu.component';
import { HeaderComponent } from './Components/Wuala/header/header.component';
import { FooterComponent } from './Components/Wuala/footer/footer.component';
import { ShopStatusComponent } from './Components/Wuala/shop-status/shop-status.component';
import { ProductosComponent } from './Components/Wuala/productos/productos.component';
import { SliderComponent } from './Components/Wuala/slider/slider.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DetallecarritoComponent } from './Components/Wuala/detallecarrito/detallecarrito.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EditusersComponent } from './pages/usuarios/editusers/editusers.component';
import { ProductComponent } from './pages/product/product.component';
import { SaveusersComponent } from './pages/usuarios/saveusers/saveusers.component';
import { EditprodComponent } from './pages/product/editprod/editprod.component';
import { SaveprodComponent } from './pages/product/saveprod/saveprod.component';
import { CheckOutComponent } from './Components/Wuala/check-out/check-out.component';



import { ReactiveFormsModule } from '@angular/forms';
import { CheckOutPedidoComponent } from './Components/Wuala/check-out/check-out-pedido/check-out-pedido.component';
import { CheckOutBoletaComponent } from './Components/Wuala/check-out/check-out-boleta/check-out-boleta.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { PedidoComponent } from './pages/pedido/pedido.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ShopStatusComponent,
    ProductosComponent,
    SliderComponent,
    DetallecarritoComponent,
    UsuariosComponent,
    EditusersComponent,
    ProductComponent,
    SaveusersComponent,
    EditprodComponent,
    SaveprodComponent,
    CheckOutComponent,
    CheckOutPedidoComponent,
    CheckOutBoletaComponent,
    DetalleComponent,
    PedidoComponent,


  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    CarouselModule.forRoot(),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
