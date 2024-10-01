import { useEffect, useRef, useState } from "react"
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './rangeSlider.css'

export default function RangeSlider({ id, min, max, setSliderValues }) {
    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = noUiSlider.create(sliderRef.current, {
            start: [min, max],
            tooltips: { to: (v) => v.toFixed(0) },
            behaviour: 'unconstrained-tap drag',
            connect: true,
            range: {
                min,
                max
            }
        })
        slider.on('set', (valArray) => {
            setSliderValues(prevState=>({...prevState, [id]:valArray.map(val => parseInt(val)) }))
            }
       
    )

    }, [])

    return (<>
        <label className="mt-4 mb-1 fw-bold">{id.toUpperCase()}</label>
        <div className="mb-3" ref={sliderRef} id={`${id}-slider`}></div>
    </>
    )
}
