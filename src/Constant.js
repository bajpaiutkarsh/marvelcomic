const Constants = {
    "base_url" : "https://gateway.marvel.com",
    "api_key": "117e977c22beb57200d313d325cfac3a",
    "ts": "1",
    "hash" : "b1a2eaa8a6d17c97c204da91c0d887b2"
}
export default Constants

export const Utililty = {
    "getApiPath" : (api)=>{
        return `${Constants.base_url}${api}?apikey=${Constants.api_key}&ts=${Constants.ts}&hash=${Constants.hash}`
    }
}