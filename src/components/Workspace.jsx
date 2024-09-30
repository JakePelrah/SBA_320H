import { useEffect, useState } from "react"
import { useMTG } from "./MTGProvider";
import './workspace.css'
export default function Workspace() {
    const { cards } = useMTG()

    console.log(cards)

    // useEffect(() => {
    //     fetch('/allCards')
    //         .then(res => res.json())
    //         .then(setCards)

    //     // if (document.addEventListener) {
    //     //     document.addEventListener('contextmenu', function(e) {
    //     //       alert("You've tried to open context menu"); //here you draw your own menu
    //     //       e.preventDefault();
    //     //     }, false);
    //     //   } else {
    //     //     document.attachEvent('oncontextmenu', function() {
    //     //       alert("You've tried to open context menu");
    //     //       window.event.returnValue = false;
    //     //     });
    //     //   }
    // }, [])

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

        <div className="cards d-flex">
            {renderCards}
        </div>


        <div className="myDeck d-flex" onDrop={dropHandler} onDragOver={dragoverHandler}>
        </div>
    </div>)
}