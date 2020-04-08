import React, { useState } from 'react'
import styled from 'styled-components'
import Dialog from 'components/item/Dialog'
type Bug = {
    id: number,
    completed: boolean,
    bugLevel: string,
    bugTitle: string,
    createTime: Date,
    completedTime: Date | null,
}
const Row = styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    >li{
        width:20%;
    }
`
const Header = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Item = () => {
    const [bugSum, setBugSum] = useState(0)
    const [solved, setSolved] = useState(0)
    const [bugList, setBugList] = useState<Bug[]>([])
    const [showDialog, setShowDialog] = useState(true)
    const tableTitle = [
        { en: 'completed', zh: '完成度' },
        { en: 'bugLevel', zh: '优先级' },
        { en: 'bugTitle', zh: '标题' },
        { en: 'createTime', zh: '创建时间' },
        { en: 'completedTime', zh: '完成时间' },
    ]
    function openAddBugDialog() {
        setShowDialog(true)
    }
    function handleClose() {
        setShowDialog(false)
    }
    function handleSubmit(bugTitle: string, bugLevel: string) {
        setShowDialog(false)
        const newBug = {
            id: createId(),
            completed: false,
            bugLevel: bugLevel,
            bugTitle: bugTitle,
            createTime: new Date(),
            completedTime: null
        }
        setBugList([...bugList, newBug])
        setBugSum(bugSum + 1)
    }
    function createId() {
        let id = Number(window.localStorage.getItem("billId") || '0') || 0
        id += 1
        window.localStorage.setItem('billId', id.toString())
        return id
    }
    return (
        <div>
            {showDialog && <Dialog handleClose={handleClose} handleSubmit={handleSubmit} />}
            <Header>
                <div className="bugSum">
                    <p>BUG总数</p>
                    <p>{solved}/{bugSum}</p>
                </div>
                <div className="level">
                    <div className="high">高</div>
                    <div className="mid">中</div>
                    <div className="low">低</div>
                </div>
                <div className="addBug">
                    <button onClick={openAddBugDialog}>+</button>
                </div>
                <div className="search"><input type="text" /></div>
            </Header>
            <div className="bugList">
                <Row className="title">
                    {tableTitle.map(title => <li className={title.en}>{title.zh}</li>)}
                </Row>
                {bugList.map((bug: Bug) =>
                    <Row className='bugItem' key={bug.id}>
                        <li className="completed">{bug.completed ? '√' : 'x'}</li>
                        <li className="bugLevel">{bug.bugLevel}</li>
                        <li className="bugTitle">{bug.bugTitle}</li>
                        <li className="createTime">{bug.createTime.getDate()}</li>
                        <li className="completedTime">{bug.completedTime && bug.completedTime.getDate()}</li>
                    </Row>
                )}
            </div>
        </div>
    )
}
export default Item