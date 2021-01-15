import axios from 'axios'

export { regUser }

const regUser = () => {

    return axios.get('api/users')
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