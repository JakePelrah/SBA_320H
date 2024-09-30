import { useEffect, useState } from "react"
import { useMTG } from "./MTGProvider";
import ContextMenu from './ContextMenu'

import './workspace.css'
export default function Workspace() {
    const { cards } = useMTG()


    useEffect(() => {


        // document.addEventListener('contextmenu', function (e) {
        //     const { id } = e.target
        //     // alert("You've tried to open context menu"); //here you draw your own menu
        //     console.log('context', id)
        //     e.preventDefault();

        // }, false);

    }, [])

    function dragstartHandler(ev) {
        ev.dataTransfer.setData("application/my-app", ev.target.id);
        ev.dataTransfer.effectAllowed = "copy";
        console.log(ev)
    }

    function dropHandler(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("application/my-app");
        ev.target.appendChild(document.getElementById(data).cloneNode());
        ev.target.scrollLeft = ev.target.scrollWidth
    }

    function dragoverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    const renderCards = cards?.map(card => <img id={card.id}
        key={card.id + new Date()}
        onDragStart={dragstartHandler}
        draggable
        src={card.image_url
            || 'icons/ph.jpeg'
        }></img>)

    return (<div className="d-flex flex-column workspace">

        <div id="cards" className="d-flex">
            {renderCards}
        </div>


        <div id="myDeck" className="d-flex" onDrop={dropHandler} onDragOver={dragoverHandler}>
        </div>
        {/* <ContextMenu/> */}
    </div>)
}