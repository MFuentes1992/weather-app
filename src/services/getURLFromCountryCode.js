import { apiKey, baseURL } from '../Const/conts';
const getURLFromCountryCode = (city) => {
    return `${baseURL}?q=${city}&appid=${apiKey}&units=metric`;
}
export default getURLFromCountryCode;