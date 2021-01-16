import axios from 'axios'

export const callDoScg = async () => {
    return await axios.get('v1/doscg')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callXYZ = async () => {
    return await axios.get("v1/doscg/xyz")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callABC = async () => {
    return await axios.get("v1/doscg/abc")
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export const callMap = async () => {
    const params = {
        origin: 'Central World',
        destination: 'SCGBangsue',
    }
    return await axios.get("v1/doscg/map", {params: params})
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}