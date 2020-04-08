import React from 'react'
import styled from 'styled-components'
type Prop = {
    name: string
}
const Svg = styled.svg`
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`
const Icon = (props: Prop) => {
    return (
        <Svg className={`icon ${props.name}`}>
            <use xlinkHref={`#${props.name}`} />
        </Svg>
    )
}
export default Icon