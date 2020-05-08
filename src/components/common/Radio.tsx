import React from 'react'
import styled from 'styled-components'
const _radio = styled.label`
position: relative;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  &:first-child {
    .text {
      border-radius: 4px 0 0 4px;
    }
  }
  &:last-child {
    .text {
      border-radius: 0 4px 4px 0;
      border-right: 1px solid #dcdfe6;
    }
  }
  .radio-origin {
    opacity: 0;
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    margin: 0;
  }
  .text {
    transition: all 0.3s;
    border: 1px solid #dcdfe6;
    border-right: transparent;
    padding: 10px 24px;
    display: inline-block;
    font-size: 14px;
  }
  &.active {
    .text {
      color: #fff;
      background-color: #136bff;
      border-color: #136bff;
    }
  }
`
type Prop = {
    radio: string,
    label: string,
    text: string,
    handleRadio: (e: any) => void
}
const Radio = (props: Prop) => {
    return (
        <_radio className={`r-radio-button ${props.radio === props.label && 'active'}`}>
            <input value={props.label} type="radio" onClick={props.handleRadio} className="radio-origin" />
            <span className="text">{props.text}</span>
        </_radio >
    )
}
export default Radio