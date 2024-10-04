import { useEffect, useRef } from 'react'
import { useMTG } from '../MTGProvider'
import './lightbox.css'

export default function LightBox() {
    const { detailedView, setDetailedView } = useMTG()
    const lightBoxRef = useRef(null)
    const modalRef = useRef(null)

    useEffect(() => {
        console.log(modalRef.current)
        if (!modalRef.current) return
        modalRef.current.show()
    }, [detailedView])


    useEffect(() => {
        lightBoxRef.current.addEventListener('hide.bs.modal', () =>{ 
            modalRef.current.hide()
            setDetailedView(null)
        })
        modalRef.current = new bootstrap.Modal(lightBoxRef.current, {})
    
       
    }, [])


    return (
        <div ref={lightBoxRef} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title" id="exampleModalLabel">{detailedView?.name}</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* {JSON.stringify(detailedView)} */}
                        <img src={detailedView?.image_url}></img>
                    </div>
                    <div className="modal-footer text-center">
                
                    </div>
                </div>
            </div>
        </div>)
}