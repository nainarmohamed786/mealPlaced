import { useState } from 'react';
import { createContext } from 'react';

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { }
});

const FavouriteContextProvider = ({ children }) => {

    const [favoId, setFavoId] = useState([]);

    function addFavourite(id) {
        console.log(id)
        setFavoId((currentFavo) => [...currentFavo, id]);
    }

    function removeFavourite(id) {
        setFavoId((currentFavo) => currentFavo.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoId,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    console.log(favoId)

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
};

export default FavouriteContextProvider