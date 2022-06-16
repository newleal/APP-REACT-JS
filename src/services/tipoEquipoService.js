import { axiosInstance } from '../helpers/axios-config';

const getTipoEquipos = () => {
    return axiosInstance.get('tipo-Equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearTipoEquipo = (data) => {
    return axiosInstance.post('tipoEquipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editTipoEquipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipoEquipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getTipoEquipos, crearTipoEquipo, editTipoEquipo
}