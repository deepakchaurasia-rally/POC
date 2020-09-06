import axios from 'axios'

const GET_DOCTORS = 'http://localhost:9000/doctors';

export const getDoctorsDetail = () => {
    return axios.get(GET_DOCTORS).then(res => res.data, res => {
        throw new Error(res);
    });
}
