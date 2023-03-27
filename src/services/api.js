const API_KEY = '';

const fetchApi = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`
    const response = await fetch(url);
    const data = await response.json();
    return data
}
// const fetchApiCurrentLocation = async (lat, long) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${A}&lang=pt_br`
//     const response = await fetch(url);
//     const data = await response.json()
//     return data
// }

export default fetchApi;