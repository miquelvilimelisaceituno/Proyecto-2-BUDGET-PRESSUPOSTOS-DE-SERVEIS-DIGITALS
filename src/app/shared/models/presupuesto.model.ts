export interface Presupuesto {
    readonly nombre: string;
    readonly email: string;
    readonly telefono: string;
    readonly servicios: RegistroPrecio[];
    readonly total: number;
    readonly fecha: number;
    readonly id: number

}


export interface RegistroPrecio { 
    nombre: string,
    precio: number
} 

