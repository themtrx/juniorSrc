import axios from 'axios'

export { regUser }

const regUser = (data: object) => {

    return axios.post('api/register', data)
                .then((req) => {

                    if(req.status === 200) {
                        return req.data
                    }

                })
                .catch((err) => {
                    return err
                })
}