import { useMTG } from "./MTGProvider";

import './workspace.css'
export default function Workspace() {
    const { cards } = useMTG()

    function dragstartHandler(ev) {
        ev.dataTransfer.setData("application/my-app", ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
        console.log(ev)
    }

    function dropHandler(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("application/my-app");
        const cloned = document.getElementById(data).cloneNode(true)
        cloned.draggable = false
        cloned.style.pointerEvents = "none"
        ev.target.appendChild(cloned);
        ev.target.scrollLeft = ev.target.scrollWidth
    }

    function dragoverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }


    const renderCards = cards?.map(card =>
        <div className="myDeck-card"
            key={card.id + new Date()}
            id={card.id}
            onDragStart={dragstartHandler}
            draggable>
            <img
                src={card.image_url
                    || 'icons/ph.jpeg'
                }></img>
        </div>

    )

    return (<div className="d-flex flex-column workspace">

        <div id="cards" className="d-flex">
            {renderCards}
        </div>

        <div className="hr d-flex justify-content-center align-items-center">
        </div>
        <div id="myDeck" className="d-flex" onDrop={dropHandler} onDragOver={dragoverHandler}>
        </div>
    </div>)
}