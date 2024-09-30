import { useEffect, useState } from "react"
import RangeSlider from "../RangeSlider/RangeSlider";
import formats from './formats.json'
import types from './types.json'
import subtypes from './subtypes.json'
import supertypes from './supertypes.json'
import { useMTG } from "../MTGProvider";

export default function Filter() {
const {cards, getCards} = useMTG()

console.log(cards)

    const [colors, setColors] = useState({
        black: false, red: false,
        green: false, blue: false, white: false, colorless: false
    })

    const [data, setData] = useState({ types, subtypes, supertypes, formats })


    useEffect(()=>{
        getCards(colors)
    },[colors])

    function onChangeCheckbox(e) {
        console.log(e.target.checked)
        setColors({ ...colors, [e.target.id]: e.target.checked })
    }


    const renderColors = ['black', 'red', 'green', 'blue', 'white', 'colorless'].map(color =>
        <div key={color} className="d-flex flex-column align-items-center">
            <img className="mana-icon mb-1" src={`icons/${color}.svg`} />
            <input onChange={onChangeCheckbox} className="form-check-input color-checkbox" type="checkbox" value={color[color]} id={color} />
        </div>
    )


    const renderTypes = (data) => data.map(item =>
        <div key={item} className="form-check">
            <input className="form-check-input type-checkbox" type="checkbox" value={item} id="flexCheckDefault" />
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
                        {renderTypes(data.types)}
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
                        {renderTypes(data.subtypes)}
                    </div>
                </div>
            </div>

            <div className="accordion-item mb-2">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Supertypes
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {renderTypes(data.supertypes)}
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
                        {renderTypes(data.formats)}
                    </div>
                </div>
            </div>

        </div>


        <RangeSlider id="CMC" min={0} max={16} />
        <RangeSlider id="Power" min={0} max={20} />
        <RangeSlider id="Toughness" min={0} max={20} />


    </div>)
}