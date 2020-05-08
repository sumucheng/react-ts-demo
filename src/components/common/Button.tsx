import React from 'react'
import styled from 'styled-components'
const _button = styled.div`
    display: inline-block;
  text-align: center;
  padding: 0 1em;
  border-radius: 4px;
  line-height:30px;
  border: 1px solid;
  height: 32px;
    cursor: pointer;
  &.plain.default {
    &:hover,
    &:active {
      color: #409eff;
      border-color: #409eff;
      background: #fff;
    }
  }
  &.plain.primary {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover {
      color: #fff;
      background-color: #136bff;
      border-color: #136bff;
    }
    &:active {
      color: #fff;
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
  }
  &.plain.danger {
    color: #f5573e;
    background: #fff2f0;
    border-color: #faab9e;
    &:hover {
      color: #fff;
      background: #f5573e;
      border-color: #f5573e;
    }
    &:active {
      color: #fff;
      background: #dd6161;
      border-color: #dd6161;
    }
    
  }
  &.plain.success {
    color: #52c41a;
    background: #f2fbed;
    border-color: #a8e18c;
    &:hover {
      color: #fff;
      background: #52c41a;
      border-color: #52c41a;
    }
    &:active {
      color: #fff;
      background: #5daf34;
      border-color: #5daf34;
    }
  }
  &.default {
    background: #fff;
    border: 1px solid #ccc;
    color: #333;
    &:hover {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
    }
    &:active {
      color: #409eff;
      background: #ecf5ff;
      border-color: #409eff;
    }
  }
  &.primary {
    color: #fff;
    background-color: #136bff;
    border-color: #136bff;
    &:hover {
      color: #fff;
      background: #66b1ff;
      border-color: #66b1ff;
    }
    &:active {
      color: #fff;
      background: #3a8ee6;
      border-color: #3a8ee6;
    }
  }
  &.danger {
    color: #fff;
    background: #f5573e;
    border-color: #f5573e;
    &:hover {
      color: #fff;
      background: #f78989;
      border-color: #f78989;
    }
    &:active {
      color: #fff;
      background: #dd6161;
      border-color: #dd6161;
    }
  }
  &.success {
    color: #fff;
    background: #52c41a;
    border-color: #52c41a;
    &:hover {
      color: #fff;
      background: #85ce61;
      border-color: #85ce61;
    }
    &:active {
      color: #fff;
      background: #5daf34;
      border-color: #5daf34;
    }
  }
`
type Prop = {
    type: string,
    children: string,
    handleClick: (event: any) => void
}
const Button = (props: Prop) => {
    return (
        <_button className={props.type} onClick={props.handleClick}>
            {props.children}
        </_button>
    )
}
export default Button