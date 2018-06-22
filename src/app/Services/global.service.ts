import { Injectable, Directive } from '@angular/core';
@Injectable()
export class GlobalVariableService {
    private servicios = {
        "servicios": [
            {
                "Id": 1,
                "Nombre": 'First transaction',
                "CentroCoste": '130 lo que sea'
            },
            {
                "Id": 2,
                "Nombre": 'Second transaction',
                "CentroCoste": '140 lo que sea'
            },
            {
                "Id": 3,
                "Nombre": 'Third transaction',
                "CentroCoste": '150 lo que sea'
            }
        ]
    };

    private roles = {
        "roles": [{
            "Id": "Rol1"
        },
        {
            "Id": "Rol2"
        },
        {
            "Id": "Rol3"
        },
        {
            "Id": "Rol4"
        },
        {
            "Id": "Rol5"
        },
        {
            "Id": "Rol6"
        },
        {
            "Id": "Rol7"
        },
        {
            "Id": "Rol8"
        },
        {
            "Id": "Rol9"
        },
        {
            "Id": "Rol10"
        }]
    }


    private rolesXservicios = {
        "rolesXservicio": [{
            "Id": 1,
            "rols": ["Rol1", "Rol2", "Rol4"]
        },
        {
            "Id": 2,
            "rols": ["Rol2", "Rol3", "Rol4"]
        },
        {
            "Id": 3,
            "rols": ["Rol2", "Rol4", "Rol10"]
        }
        ]
    };

    private usuarios = {
        "usuarios": [{
            "NIFF": "73256498T",
            "Apellido1": "Azpíroz",
            "Apellido2": "Del Cuvillo",
            "Nombre": "Ignacio"
        },
        {
            "NIFF": "58921456N",
            "Apellido1": "Rodrigez",
            "Apellido2": "Echeverria",
            "Nombre": "Gorka"
        },
        {
            "NIFF": "98756413K",
            "Apellido1": "Aranguren",
            "Apellido2": "Argubide",
            "Nombre": "Santiago"
        }
        ]
    };


    constructor() { }
    setServicios(val) {
        this.servicios = val;
    }
    getServicios() {
        return this.servicios;
    }

    setRolesXsericio(val) {
        this.rolesXservicios = val;
    }
    getRolesXsericio() {
        return this.rolesXservicios;
    }

    setUsuarios(val) { 
        this.usuarios = val;
    }

    getUsuarios() {
        return this.usuarios;
    }

    setRoles(val) {
        this.roles = val;
    }

    getRoles() {
        return this.roles;
    }
}