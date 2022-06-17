import { axiosInstance } from '../helpers/axios-config';

const getEstadoEquipo = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-Equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editEstadoEquipo = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-Equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getEstadoEquipo, crearEstadoEquipo, editEstadoEquipo
}