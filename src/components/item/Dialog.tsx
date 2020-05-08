import React, { useState, ChangeEvent } from 'react'
import Button from '../common/Button'
import Radio from '../common/Radio'
import styled from 'styled-components'
const DialogWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    z-index: 2049;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: rgba(0, 0, 0, 0.4);
    >form{
        background: #ffffff;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        padding: 20px;
        position: relative;
        width: 35%;
        padding:25px;    
        >label{
            display:flex;
            align-items:center;
            margin-bottom:20px;  
                .name{
                margin-right:10px;
                width:50px;
            }    
        }
        .detail{
            height:92px;
            >textarea{
                resize:none;
                font-size:16px;
            }
        }
        .title,.detail{
            >.input{
                flex-grow:1;
                height:100%;
                border:1px solid #ddd;
                border-radius:4px;
                padding: 10px ;
            }
           
        }
        
        .buttons{
            text-align: right;
            >*{
                margin-left:10px;
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
    const [bugDetail, setBugDetail] = useState('')
    const [bugLevel, setBugLevel] = useState('Low')
    function handleTitleChange(e: ChangeEvent) {
        setBugTitle((e.target as HTMLInputElement).value)
    }
    function handleDeatilChange(e: ChangeEvent) {
        setBugDetail((e.target as HTMLInputElement).value)
    }
    function selectBugLevel(e: any) {
        setBugLevel(e.target.value)
    }
    function handleSubmit(e: any) {
        if (bugTitle.trim() === '') window.alert('bug标题不可为空')
        else props.handleSubmit(bugTitle, bugLevel, bugDetail)
    }
    function handleClose() {
        props.handleClose()
    }
    return (
        <DialogWrapper>
            <form>
                <label className="title">
                    <div className='name'>标题</div>
                    <input className="input" type="text" value={bugTitle} onChange={handleTitleChange} />
                </label>
                <label className="detail">
                    <div className='name'>内容</div>
                    <textarea className="input" value={bugDetail} onChange={handleDeatilChange} />
                </label>
                <label className="level">
                    <div className='name'>优先级</div>
                    <div className="bugLevel input">
                        <Radio text="低" label='Low' radio={bugLevel} handleRadio={selectBugLevel}></Radio>
                        <Radio text="中" label='Mid' radio={bugLevel} handleRadio={selectBugLevel}></Radio>
                        <Radio text="高" label='High' radio={bugLevel} handleRadio={selectBugLevel}></Radio>
                    </div>
                </label>
                <div className="buttons">
                    <Button type='primary' handleClick={handleSubmit}>确定</Button>
                    <Button type='default' handleClick={handleClose}>取消</Button>
                </div>

            </form>
        </DialogWrapper>
    )
}
export default Dialog