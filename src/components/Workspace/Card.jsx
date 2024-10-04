import { useEffect, useState } from "react"

export default function Card({ cardData }) {
    const { id, image_url } = cardData
    const [showMenu, setShowMenu] = useState(false)


    function dragstartHandler(ev) {
        ev.dataTransfer.setData("application/my-app", JSON.stringify(cardData));
        ev.dataTransfer.effectAllowed = "copy";
    }



    return (
        <div onMouseEnter={(e) => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)} className="myDeck-card"
            id={id}
            onDragStart={dragstartHandler}
            draggable>

            {showMenu
                ? <div className="card-overlay d-flex justify-content-center align-items-center gap-2">
                    <button className="btn overlay-btn">Remove</button>
                    <button className="btn overlay-btn">Info</button>
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