import React, { useState, ChangeEvent } from 'react'
import Button from '../common/Button'
import Radio from '../common/Radio'
import styled from 'styled-components'
type Bug = {
    id: number,
    completed: boolean,
    bugLevel: string,
    bugTitle: string,
    bugDetail: string,
    createTime: Date,
    completedTime: Date | null,
}
const _card = styled.div`
    position: relative;
    background:#fff;
    border:1px solid #eee;
    padding:15px;
    .title{
      font-size:16px;
      margin-bottom:15px;
    }
    .level{
        position: absolute;
        top:15px;
        right:15px;
        height:25px;
        width:25px;
        font-size:13px;  
        display:flex;
        justify-content:center;
        align-items:center;    
        &.Mid{
            background-color:yellow;
        }
        &.High{
            background-color:red;
            color:red;
        }
        &.Low{
            background-color:blue;
        }
    }
    .content{
        text-overflow:ellipsis;
        font-size:14px;
        color:#999;
        margin-bottom:15px;
    }
    .time{
        font-size:14px;
        color:#999;
    }
    &.completed{
        background-color:#999;

    }
`
type Prop = {
    bug: Bug
}
const Card = (props: Prop) => {
    const { completed, bugTitle, bugLevel, bugDetail, createTime } = props.bug
    const level = bugLevel === 'Low' ? '低' : (bugLevel === 'Mid' ? '中' : '高')
    return (
        <_card className={completed ? 'completed' : ''}>
            <div className="title">{bugTitle}</div>
            <div className={`level ${bugLevel}`}>{level}</div>
            <div className="content">{bugDetail}</div>
            <div className="time">{createTime.toDateString()}</div>
        </_card>
    )
}
export default Card