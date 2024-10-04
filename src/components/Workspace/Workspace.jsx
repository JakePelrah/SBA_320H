import { useMTG } from "../MTGProvider";
import Card from "./Card";
import { v4 as uuidv4 } from 'uuid';
import './workspace.css'

export default function Workspace() {
    const { cards, addToDeck, myDeck, removeFromDeck } = useMTG()

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
        <Card key={uuidv4()} cardData={cardData} />
    )

    const renderMyDeck = myDeck?.map(card =>
        <Card key={card.uuid} cardData={card} bisInDeck={true} removeFromDeck={removeFromDeck} />
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