import { useEffect, useState } from "react"

export default function Card({ cardData, bisInDeck = false, removeFromDeck }) {
    const { id, image_url } = cardData
    const [showMenu, setShowMenu] = useState(false)

    function dragstartHandler(ev) {
        ev.dataTransfer.setData("application/my-app", JSON.stringify(cardData));
        ev.dataTransfer.effectAllowed = "copy";
    }

    return (
        <div
            onMouseEnter={bisInDeck ? (e) => setShowMenu(true) : undefined}
            onMouseLeave={bisInDeck ? (e) => setShowMenu(false) : undefined}
            className="myDeck-card"
            id={id}
            onDragStart={dragstartHandler}
            draggable>
            {showMenu
                ? <div className="card-overlay d-flex justify-content-center align-items-center gap-2">
                    {bisInDeck ? <button onClick={()=>removeFromDeck(cardData.uuid)} className="btn overlay-btn">Remove</button> : null}
                </div>
                : null
            }

            <img
                src={image_url
                    || 'icons/ph.jpeg'
                }></img>
        </div>
    )
}