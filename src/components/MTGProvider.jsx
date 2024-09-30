import { createContext, useContext, useState, useEffect } from "react";


const MTGContext = createContext()
export const useMTG = () => useContext(MTGContext)

export default function MTGProvider({ children }) {
    const [cards, setCards] = useState([])


    function getCards(colors, type) {
        console.log(colors)
        fetch('cardQuery', {
            method: 'POST',
            body: JSON.stringify({colors, type}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(setCards)
    }



    return (
        <MTGContext.Provider value={{
            cards, getCards
        }}>
            {children}
        </MTGContext.Provider>
    );
};