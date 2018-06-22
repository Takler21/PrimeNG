import { Component, OnInit } from '@angular/core';
import { Servicio } from '../Models/servicio-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariableService } from '../Services/global.service';

@Component({
    selector: 'app-service',
    templateUrl: 'servicios.component.html',
    styleUrls: ['./servicios.component.css']
})
export class ServicioComponent implements OnInit {
    //Como no podemos tratar directamente con el Json tendremos que adaptarlo a otro formato como por ejemplo string o array

    servicios;
    servicio;

    tServ

    display: boolean = false;
    display2: boolean = false;
    //El tres tal vez sobre, y en lugar de eso usamos el del otro formulario, pero dependiendo del que usemos se genera uno u otro
    display3: boolean = false;

    roles;

    rols: string[];
    indexRoles: number;

    id: string;
    form: FormGroup;

    idS: number;
    nombre: string;
    centroCoste: string;
    form1: FormGroup;

    cols = [
        { field: 'Id', header: 'Id' },
        { field: 'Nombre', header: 'Nombre' },
        { field: 'CentroCoste', header: 'CentroCoste' }]

    colsR = [
        { field: 'Id', header: 'Id' }
    ]

    constructor(private fb: FormBuilder, private gv: GlobalVariableService) { }

    ngOnInit() {

        this.servicios = this.gv.getServicios();
        this.roles = this.gv.getRolesXsericio();
        console.log(this.servicios.servicios);
        console.log(this.roles.rolesXservicio);

        this.form = this.fb.group({
            id: [this.id, Validators.required]
        });

        this.form1 = this.fb.group({
            Id: [this.idS, Validators.required],
            Nombre: [this.nombre, Validators.required],
            CentroCoste: [this.centroCoste, Validators.required]
        });

    }

    edit(row) {
        this.tServ = "Editar Servicio";
        //Ahora tenemos que ver como marcamos la diferencia aqui para que se diferencie entre agreagar y editar
        this.servicio = row;
        this.form1.setValue(row);
        this.showDialog3()
        //var editable;
        //this.showDialog();

        //editable = this.roles.rolesXservicio.filter((rol: any) => rol.Id == row.Id);
        ////por aqui un indice roles?
        //this.indexRoles = this.roles.rolesXservicio.indexOf(editable[0]);
        //console.log("Indice: " + this.indexRoles);
        //console.log(editable[0]['rols']);
        ////creo que nos podriammos pasar el segundo parametro
        //this.rols = editable[0]['rols'];
        //console.log(this.roles.rolesXservicio.indexOf(editable[0]));
    }

    masServicios() {
        this.servicio = undefined;
        this.form1.setValue({ "Id": null, "Nombre": null, "CentroCoste": null });
        this.tServ = "Nuevo Servicio";
        this.showDialog3();
    }

    adRols() {
        var editable;
        this.showDialog();

        editable = this.roles.rolesXservicio.filter((rol: any) => rol.Id == this.servicio.Id);
        //por aqui un indice roles?
        this.indexRoles = this.roles.rolesXservicio.indexOf(editable[0]);
        console.log("Indice: " + this.indexRoles);
        console.log(editable[0]['rols']);
        //creo que nos podriammos pasar el segundo parametro
        this.rols = editable[0]['rols'];
        console.log(this.roles.rolesXservicio.indexOf(editable[0]));
    }

    showDialog() {
        this.display = true;
    }

    showDialog2() {
        this.display2 = true;
    }

    showDialog3() {
        this.display3 = true;
    }

    delete(row) {
        console.log('Reacciono!');
        row.Id;
        this.servicios.servicios = this.servicios.servicios.filter(servicio => servicio != row);

        this.roles.rolesXservicio = this.roles.rolesXservicio.filter(rol => rol.Id != row.Id);
        console.log("Roles: ")
        console.log(this.gv.getRolesXsericio())
        console.log(row);
        console.log("Retorno: ");
        console.log(this.gv.getServicios());

        //console.log(this.servicios.indexOf(row));
    }

    deleteRol(emp) {
        console.log(emp);
        console.log(this.rols);
        console.log(this.roles.rolesXservicio.filter((rol: any) => rol.rols != this.rols));
        //Tenemos que borrar un rol de una lista de roles, no quitar toda la lista de roles para ese elemento.
        this.rols = this.rols.filter((rol) => rol != emp);
        this.roles.rolesXservicio[this.indexRoles].rols = this.rols;
        //No he llegado a modificar roles.
    }

    submit() {
        console.log(this.form.value.id);
        console.log(this.rols);
        this.rols = this.rols.concat([this.form.value.id])
        this.roles.rolesXservicio[this.indexRoles].rols = this.rols
        console.log(this.roles);
        this.display2 = false;
    }

    submit1() {
        //console.log(this.form1.value);
        //console.log(this.servicios.servicios);
        if (!this.servicio) {
            this.gv.setServicios({ "servicios": this.servicios.servicios.concat(this.form1.value) });
            this.servicios = this.gv.getServicios();
            this.roles.rolesXservicio = this.roles.rolesXservicio.concat([{
                "Id": this.form1.value.Id,
                "rols": []
            }])
        }
        else {
            this.servicio = this.form1.value;
            console.log(this.servicio.Id);
            console.log(this.servicios.servicios.filter(servicio => servicio.Id != this.servicio.Id).concat(this.servicio));
            this.servicios.servicios = this.servicios.servicios.filter(servicio => servicio.Id != this.servicio.Id).concat(this.servicio);

        }
        //console.log(this.servicios.servicios);
        //console.log(this.form1.value);

        //Aqui es donde reamos el nuevo elemento en roles.
        this.servicio = undefined;
        console.log(this.roles);
        this.display3 = false;
    }
}
