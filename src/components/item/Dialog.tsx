import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
const DialogWrapper = styled.div`
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.2);
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    >form{
        width:30%;
        height:30%;
        background:white;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        position:relative;
        >.title{
            display:flex;
            align-items:center;
            width:80%;
            margin-bottom:15px;
            >.label{
                width:50px;
                margin-right:10px;
            }
        }
        >.level{
            display:flex;
            align-items:center;
            width:80%;
            >.label{
                margin-right:10px;
                width:50px;
            } 
            >.bugLevel{
                width:80%;
                > button{
                    border-style:none;
                    border:0px;
                    background:white;
                    padding:5px 10px;
                    width:50px;
                }
                >.selected{
                border:1px solid grey;
                border-radius:8px;
            }
            }
            
        }
        >.buttons{
            position:absolute;
            right:-10px;
            top:10px;
            display:flex;
            flex-direction:column;
            >button{
                width:30px;
                height:30px;
                background:white;
                border:1px solid #ddd;
            }
        }
        
    }
`
type Prop = {
    handleClose: Function,
    handleSubmit: Function
}
const Dialog = (props: Prop) => {
    const [bugTitle, setBugTitle] = useState('')
    const [bugLevel, setBugLevel] = useState('Low')
    function handleChange(e: ChangeEvent) {
        setBugTitle((e.target as HTMLInputElement).value)
    }
    function selectBugLevel(e: any) {
        setBugLevel((e.target as HTMLElement).innerText)
    }
    function handleSubmit(e: any) {
        if (bugTitle.trim() === '') window.alert('bug标题不可为空')
        else props.handleSubmit(bugTitle, bugLevel)
    }
    function handleClose() {
        props.handleClose()
    }
    return (
        <DialogWrapper>
            <form>
                <label className="title">
                    <div className='label'>Title</div>
                    <input type="text" value={bugTitle} onChange={handleChange} />
                </label>
                <label className="level">
                    <div className='label'>Level</div>
                    <div className="bugLevel">
                        <button onClick={selectBugLevel} className={bugLevel === 'Low' ? 'selected' : ''}>Low</button>
                        <button onClick={selectBugLevel} className={bugLevel === 'Mid' ? 'selected' : ''}>Mid</button>
                        <button onClick={selectBugLevel} className={bugLevel === 'High' ? 'selected' : ''}>High</button>
                    </div>
                </label>
                <div className="buttons">
                    <button onClick={handleSubmit}>√</button>
                    <button onClick={handleClose}>x</button>
                </div>

            </form>
        </DialogWrapper>
    )
}
export default Dialog