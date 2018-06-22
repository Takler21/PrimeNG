import { Component, OnInit } from '@angular/core';
import { Servicio } from '../Models/servicio-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVariableService } from '../Services/global.service';

@Component({
    selector: 'app-user',
    templateUrl: 'usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent implements OnInit {
    //Como no podemos tratar directamente con el Json tendremos que adaptarlo a otro formato como por ejemplo string o array

    usuarios;
    usuario;
    display: boolean = false;

    niff: string;
    apellido1: string;
    apellido2: string;
    nombre: string;
    form: FormGroup;

    cols = [
        { field: 'NIFF', header: 'NIFF' },
        { field: 'Apellido1', header: 'Apellido1' },
        { field: 'Apellido2', header: 'Apellido2' },
        { field: 'Nombre', header: 'Nombre' }]

    constructor(private fb: FormBuilder, private gv: GlobalVariableService) { }

    ngOnInit() {
        console.log(this.gv.getUsuarios());
        this.usuarios = this.gv.getUsuarios();

        this.form = this.fb.group({
            NIFF: [this.niff],
            Apellido1: [this.apellido1, Validators.required],
            Apellido2: [this.apellido2, Validators.required],
            Nombre: [this.nombre, Validators.required],
        });


    }

    showDialog() {
        this.display = true;
    }

    delete(row) {
        console.log('Reacciono!');
        row.Id;
        this.usuarios.usuarios = this.usuarios.usuarios.filter(usuario => usuario != row);
        console.log(row);
        //console.log(this.servicios.indexOf(row));
    }

    masUsuarios() {
        this.usuario = undefined;
        this.form.setValue({ "NIFF": null, "Apellido1": null, "Apellido2": null, "Nombre": null });

        this.showDialog();
    }

    edit(emp) {
        //this.usuarios.usuarios[ri];
        this.usuario = emp;
        console.log(this.usuario);
        this.niff = emp.NIFF;
        this.showDialog();
        console.log(this.form.valid);

        this.form.setValue({ "NIFF": emp.NIFF, "Apellido1": emp.Apellido1, "Apellido2": emp.Apellido2, "Nombre": emp.Nombre });
        //this.nombre = emp.Nombre;
        //this.apellido1 = emp.Apellido1;
        //this.apellido2 = emp.Apellido2;
        //this.form.value.Nombre = emp.Nombre;
        //this.form.value.Apellido1 = emp.Apellido1;
        //this.form.value.Apellido2 = emp.Apellido2;
    }

    mostrar() {
        console.log("Formulario: ")
        console.log(this.form.value.NIFF + ", " + this.form.value.Apellido1 + ", " + this.form.value.Apellido2 + ", " + this.form.value.Nombre)
        console.log("Variables: ");
    }

    submit() {
        console.log("Hizo algo!")
        console.log(this.form.value);
        console.log(this.niff + ", " + this.apellido1 + ", " + this.apellido2 + ", " + this.nombre)
        console.log(this.form.value + ", " + this.form.value.Apellido1 + ", " + this.form.value.Apellido2 + ", " + this.form.value.Nombre)

        if (this.usuario) {

            //Aqui es si se esta editando, por lo que primero comprobaremos que 
            console.log(this.usuarios.usuarios.indexOf(this.usuario));
            console.log(this.usuarios.usuarios[this.usuarios.usuarios.indexOf(this.usuario)]);
            this.gv.setUsuarios({ "usuarios": this.usuarios.usuarios.filter((rol: any) => rol.NIFF != this.usuario.NIFF).concat({ "NIFF": this.usuario.NIFF, "Apellido1": this.form.value.Apellido1, "Apellido2": this.form.value.Apellido2, "Nombre": this.form.value.Nombre })});
            this.usuarios = this.gv.getUsuarios();
            console.log(this.usuarios.usuarios[this.usuarios.usuarios.indexOf(this.usuario)]);

        }
        else {
            this.usuarios.usuarios = this.usuarios.usuarios.concat([this.form.value]);
        }
        this.usuario = undefined;
        this.display = false;
        //console.log(this.form.value.id);
        //console.log(this.rols);
        //this.rols = this.rols.concat([this.form.value.id])
        //this.roles.rolesXservicio[this.indexRoles].rols = this.rols
        //this.usuarios
        //this.display = false;

    }
}
