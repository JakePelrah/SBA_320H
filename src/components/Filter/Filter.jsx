import { useEffect, useState } from "react"
import RangeSlider from "../RangeSlider/RangeSlider";
import formats from './formats.json'
import types from './types.json'
import subtypes from './subtypes.json'
import { useMTG } from "../MTGProvider";

export default function Filter() {
    const { cards, getCards } = useMTG()
    const [colors, setColors] = useState([])
    const [selTypes, setSelTypes] = useState({ type: [], subtype: [], supertype: [], format: [] })
    const [sliderValues, setSliderValues] = useState({ cmc: [0, 16], power: [0, 20], toughness: [0, 20] })


    const [data, setData] = useState({ types, subtypes, formats })


    useEffect(() => {
        getCards(colors, selTypes, sliderValues)
    }, [colors, selTypes, sliderValues])

    function onChangeCheckbox(e) {
        const checked = e.target.checked
        const color = e.target.id

        if (checked && !colors.includes(color)) {
            setColors([...colors, color])
        }
        else {
            setColors(colors.filter(c => c !== color))
        }
    }


    function onChangeType(e) {
        const checked = e.target.checked
        const checkedType = e.target.id
        const property = e.target.dataset['property']


        if (checked) {
            setSelTypes({ ...selTypes, [property]: [...selTypes[property], checkedType] })
        }
        else {
            setSelTypes({ ...selTypes, [property]: selTypes[property]?.filter(t => t !== checkedType) || [] })
        }
    }


    const renderColors = ['B', 'R', 'G', 'U', 'W', 'C'].map(color =>
        <div key={color} className="d-flex flex-column align-items-center">
            <img className="mana-icon mb-1" src={`icons/${color}.svg`} />
            <input onChange={onChangeCheckbox} className="form-check-input color-checkbox" type="checkbox" value={color[color]} id={color} />
        </div>
    )


    const renderTypes = (data, property) => data.map(item =>
        <div key={item} className="form-check">
            <input data-property={property} onChange={onChangeType} className="form-check-input type-checkbox" type="checkbox" value={item[item]} id={item} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {item}
            </label>
        </div>
    )

    return (<div>

        <div className="d-flex justify-content-center gap-2">
            {renderColors}
        </div>

        <div className="accordion accordion-flush filter-accordion mt-5">

            <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Types
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.types, 'type')}
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Subtypes
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.subtypes, 'subtype')}
                    </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Formats
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.formats, 'format')}
                    </div>
                </div>
            </div>

        </div>


        <div className="mt-3">
            <RangeSlider id="cmc" min={0} max={16} setSliderValues={setSliderValues} />
            <RangeSlider id="power" min={0} max={20} setSliderValues={setSliderValues} />
            <RangeSlider id="toughness" min={0} max={20} setSliderValues={setSliderValues} />
        </div>

    </div>)
}