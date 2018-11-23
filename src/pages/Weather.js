import React from 'react'
import { view as CitySelector } from '../components/city_selector'
import { view as Weather } from '../components/Weather/';
const CityWeather = () => {
    return (
        <div>
            <CitySelector></CitySelector>
            <Weather></Weather>
        </div>
    )
}
export default CityWeather
