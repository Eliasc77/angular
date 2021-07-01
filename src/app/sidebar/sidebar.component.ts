import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [


    { path: 'admin/detallesp',          title: 'Detalle',              icon:'nc-single-copy-04',      class: '' },
    { path: 'admin/product',       title: 'Productos',     icon:'nc-chart-pie-36',    class: '' },
    { path: 'admin/typography',    title: 'Produccion',        icon:'nc-tap-01', class: '' },
    { path: 'admin/user',          title: 'Usuarios',      icon:'nc-single-02',  class: '' },
    { path: 'admin/pedidos',         title: 'Ventas',        icon:'nc-money-coins',    class: '' },
    { path: 'admin/typography',    title: 'Roles',        icon:'nc-badge', class: '' },

    { path: 'admin/upgrade',       title: 'Wuala pizzas',    icon:'nc-single-02',  class: 'active-pro' },






];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
