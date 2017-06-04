import React from 'react'

import {SelectableLabel, HeroAvatar, HiddenRadio} from '../../style/components'

export default ({id, name, color, selected, onCheck}) => {
    return (
        <div>
            <HiddenRadio type="radio" id={id} name="hero" value={id} color={color} checked={selected} onChange={onCheck} />
            <SelectableLabel htmlFor={id}>
                <HeroAvatar src={`../../assets/${id}.png`} alt={name} />
            </SelectableLabel>
        </div>
    )
}