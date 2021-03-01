
export interface Centro {
    codigo: string,
    nombre: string,
    direccion: string,
    telefono: string,
    localidad: string,
    codigo_provincia: string
}

export interface Ciclo {
    centro: Centro,
    familia: string,
    codigo_ciclo: string,
    nombre_ciclo: string,
    tipo: string,
    turno: string,
    bilingue: string,
    dual: string
}

export interface Filtro {
    filterId: string,
    filterLabel: string,
    filterProp: string
}
