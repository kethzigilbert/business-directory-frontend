
import { httpService } from "./httpService"
const PlacesService = {
    getPlaces: (placeId) => httpService(`https://business-places-directory.herokuapp.com/places/${placeId}`),
   

}


export default PlacesService