import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const MTGContext = createContext()
export const useMTG = () => useContext(MTGContext)

export default function MTGProvider({ children }) {
    const [detailedView, setDetailedView] = useState({})
    const [myDeck, setMyDeck] = useState([])
    const [cards, setCards] = useState([
        {
            "id": "0001e0d0-2dcd-5640-aadc-a84765cf5fc9",
            "name": "Goblin King",
            "mana_cost": "{1}{R}{R}",
            "cmc": 3,
            "colors": [
                "R"
            ],
            "color_identity": [
                "R"
            ],
            "type": "Creature — Goblin",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Goblin"
            ],
            "rarity": "Rare",
            "set": "3ED",
            "set_name": "Revised Edition",
            "text": "Other Goblins get +1/+1 and have mountainwalk.",
            "flavor": "To become king of the Goblins, one must assassinate the previous king. Thus, only the most foolish seek positions of leadership.",
            "artist": "Jesper Myrfors",
            "number": "155",
            "layout": "normal",
            "multiverseid": 1296,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1296&type=card",
            "original_text": "All Goblins in play gain mountainwalk and +1/+1 while this card remains in play.",
            "original_type": "Summon - Lord",
            "printings": [
                "10E",
                "2ED",
                "30A",
                "3ED",
                "4BB",
                "4ED",
                "5ED",
                "6ED",
                "7ED",
                "8ED",
                "9ED",
                "ATH",
                "CED",
                "CEI",
                "FBB",
                "LEA",
                "LEB",
                "PW24",
                "SLD",
                "SUM"
            ],
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Oldschool",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Predh",
                    "legality": "Legal"
                },
                {
                    "format": "Premodern",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2005-08-01",
                    "text": "Goblin King now has the Goblin creature type and its ability has been reworded to affect *other* Goblins. This means that if two Goblin Kings are on the battlefield, each gives the other a bonus."
                }
            ],
            "foreign_names": [
                {
                    "name": "Goblinkönig",
                    "text": "Alle Goblins erhalten +1/+1 und die Fähigkeit Gebirgstarnung.",
                    "type": "Beschwörung eines Herrschers",
                    "flavor": null,
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "b391889c-3468-4114-9d62-55bd873ad328"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Roi des gobelins",
                    "flavor": null,
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "fec9eed2-9269-4279-becd-b23a30596ee6"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Re dei Goblin",
                    "flavor": null,
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "fb74bcc5-3ba5-489f-a942-7a13fa865048"
                    },
                    "multiverseid": null
                }
            ]
        }
    ])

  
    function addToDeck(card) {
        card.uuid = uuidv4()
        setMyDeck(prevState => [...prevState, card])
    }

    function removeFromDeck(uuid) {
        const filteredCards = myDeck.filter(card => card.uuid !== uuid )
        setMyDeck(filteredCards)
    }

    function getCards(colors, type, sliderValues) {
        fetch('cardQuery', {
            method: 'POST',
            body: JSON.stringify({ colors, type, sliderValues }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                return data
            })
            .then(setCards)
    }

    return (
        <MTGContext.Provider value={{
            cards, getCards, addToDeck, removeFromDeck, myDeck, 
            setDetailedView, detailedView
        }}>
            {children}
        </MTGContext.Provider>
    );
};