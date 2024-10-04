import { useMTG } from "../MTGProvider";

export default function Footer() {
    const { myDeck } = useMTG()
    return (
        <footer>

            <div className="d-flex justify-content-between align-items-center">
                
                <a className="btn footer-btn" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasExample" >
                    <img src="/icons/caret-right-fill.svg"></img>
                </a>

                <div>
                    <span id="card-count-text" className="me-1">{myDeck.length}</span>
                    <img id="deck-icon" src="/icons/deck.svg" className="me-2"></img>

                </div>

            </div>


        </footer>
    )
}