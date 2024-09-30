export default function Footer() {


    function dropHandler(ev) {
        console.log(ev)
        ev.preventDefault();
        const data = ev.dataTransfer.getData("application/my-app");
       console.log(document.getElementById(data))
    }

    function dragoverHandler(ev) {
        console.log(ev)
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }

    return (
        <footer className="d-flex flex-wrap justify-content-center align-items-center">

            <a className="btn footer-btn" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasExample">
                <img src="/icons/sliders2.svg"></img>
            </a>


            <div onDrop={dropHandler} onDragOver={dragoverHandler} className="btn footer-btn" id="trash-dropzone">
                <img src="/icons/trash3-fill.svg"></img>
            </div>
        </footer>
    )
}