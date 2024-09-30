import Filter from "./Filter"

export default function Sidebar() {
    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

            <div className="offcanvas-header">
                <a className="navbar-brand  mt-1" href="#">MTG Binder</a>
            </div>

            <div className="offcanvas-body">
                <Filter />
            </div>

            <div className="d-flex justify-content-end">
                <button className="btn footer-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                    <img src="/icons/caret-left-fill.svg"></img>
                </button>
            </div>

        </div>)
}