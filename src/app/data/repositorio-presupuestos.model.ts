import { Presupuesto } from '../shared/models/presupuesto.model'

export abstract class RepositorioPresupuestos {

    abstract guardar(presupuesto: Presupuesto): void;
    abstract buscarPorId(id: number): Presupuesto | undefined;
    abstract listar(): Presupuesto[];

}
