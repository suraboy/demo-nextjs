import axios from 'axios'

const endpoint = `${process.env.BACKEND_API}/v1/doscg`

export const callDoScg = async () => {
    return await axios.get(endpoint)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callXYZ = async () => {
    return await axios.get("http://localhost:6319/v1/doscg/xyz")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callABC = async () => {
    return await axios.get("http://localhost:6319/v1/doscg/abc")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callMap = async () => {
    return await axios.get("http://localhost:6319/v1/doscg/map")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}