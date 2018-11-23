import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes.js';


export const fetchWeatherStared = () => ({
    type: FETCH_STARTED
})

export const fectchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
})
export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
})

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`
        dispatch(fetchWeatherStared())
        return fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status' + response.status)
            }
            response.json().then(responseJson => {
                dispatch(fectchWeatherSuccess(responseJson.weatherinfo))
            }).catch(error => {
                dispatch(fetchWeatherFailure(error))
            })
        }).then(error => {
            dispatch(fetchWeatherFailure(error))
        })
    }
}