import axios from 'axios'

export { regUser }

const regUser = (data: object) => {

    return axios.post('api/users', data)
                .then((req) => {

                    if(req.status === 200) {
                        return req.data
                    }

                    return "Someting went wrong!"
                })
                .catch((err) => {
                    return err
                })
}