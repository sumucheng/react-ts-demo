import React, { useState } from 'react'
import styled from 'styled-components'
import Dialog from 'components/item/Dialog'
import Card from 'components/item/Card'
import Button from 'components/common/Button'
type Bug = {
    id: number,
    completed: boolean,
    bugLevel: string,
    bugTitle: string,
    bugDetail: string,
    createTime: Date,
    completedTime: Date | null,
}
const Container = styled.div`
    background-color:#eee;
`
const BugList = styled.ul`
    display:flex;
    align-items:center;
    >*{
        width:33%;
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
    // const [bugList, setBugList] = useState<Bug[]>([])
    const [bugList, setBugList] = useState([
        {
            id: createId(),
            completed: false,
            bugLevel: 'Mid',
            bugTitle: 'title',
            bugDetail: 'content',
            createTime: new Date(),
            completedTime: null
        }
    ])
    const [showDialog, setShowDialog] = useState(false)
    const tableTitle = [
        { en: 'completed', zh: '完成度' },
        { en: 'bugLevel', zh: '优先级' },
        { en: 'bugTitle', zh: '标题' },
        { en: 'bugDetail', zh: '详情' },
        { en: 'createTime', zh: '创建时间' },
        { en: 'completedTime', zh: '完成时间' },
    ]
    function openAddBugDialog() {
        setShowDialog(true)
    }
    function handleClose() {
        setShowDialog(false)
    }
    function handleSubmit(bugTitle: string, bugLevel: string, bugDetail: string) {
        setShowDialog(false)
        const newBug = {
            id: createId(),
            completed: false,
            bugLevel: bugLevel,
            bugTitle: bugTitle,
            bugDetail: bugDetail,
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
        <Container>
            {showDialog && <Dialog handleClose={handleClose} handleSubmit={handleSubmit} />}
            <Header>
                <div className="bugSum">
                    <p>所有问题：{bugSum}</p>
                </div>
                <Button type='default' handleClick={openAddBugDialog}>新增问题</Button>
            </Header>
            <BugList>
                {bugList.map((bug: Bug) =>
                    <Card bug={bug} key={bug.id}></Card>
                )}
            </BugList>
        </Container>
    )
}

export default Item