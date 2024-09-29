import Filter from "./Filter"

export default function Sidebar() {

    return (
        <div className="offcanvas show offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                
                <a className="navbar-brand  mt-1" href="#">MTG Binder</a>
                <button type="button" className="btn-close"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <Filter/>
            </div>
        </div>)
}