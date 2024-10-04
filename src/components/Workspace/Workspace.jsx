import { useEffect } from "react";
import { useMTG } from "../MTGProvider";
import Card from "./Card";
import './workspace.css'

export default function Workspace() {
    const { cards, addToDeck, myDeck } = useMTG()


    function dropHandler(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("application/my-app");
        addToDeck(JSON.parse(data))
    }

    function dragoverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    const renderCards = cards?.map(cardData =>
        <Card key={cardData.id} cardData={cardData} />
    )

    const renderMyDeck = myDeck?.map(card =>
        <Card key={card.id} cardData={card} />
    )

    return (<div className="d-flex flex-column workspace">

        <div id="cards" className="d-flex">
            {renderCards}
        </div>

        <div className="workspace-divider"></div>

        <div id="myDeck" className="d-flex" onDrop={dropHandler} onDragOver={dragoverHandler}>
            {renderMyDeck}
        </div>
    </div>)
}