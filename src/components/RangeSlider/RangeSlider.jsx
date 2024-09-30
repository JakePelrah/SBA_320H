import { useEffect, useRef, useState } from "react"
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css';
import './rangeSlider.css'

export default function RangeSlider({ id, min, max }) {
    const sliderRef = useRef(null)
    const [value, setValue] = useState([0, 16])

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
        slider.on('slide', (valArray) => setValue(valArray.map(val => parseInt(val))))

    }, [])

    return (<>
        <label className="mt-4 mb-1 fw-bold">{id}</label>
        <div ref={sliderRef} id={`${id}-slider`}></div>
    </>
    )
}
