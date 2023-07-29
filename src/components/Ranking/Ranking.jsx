import React from "react";
import { Component } from 'react';
import BasicTable from "./BasicTable"

let ajaxUrl = "http://localhost:3020/"

class Ranking extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            loading: false,
            error: false
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

        this.ajaxServerItemsLoad()
    }


    ajaxServerItemsLoad = () => {
        fetch(ajaxUrl + 'ranking', {
            method: 'GET'
        })
            .then((response) => {
                // ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((itemList) => {

                // 加入 { isEditing: false } 屬性
                const items = itemList.map((item) => {
                    return Object.assign({}, item, { range: new Date(item.to) - new Date(item.from) })
                })
                console.log('items :', items);
                // 載入資料，重新渲染
                this.setState({
                    items: items,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }

    ajaxServerItemDelete = (deleteItem) => {
        const { id } = deleteItem

        fetch(ajaxUrl + `ranking/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then((item) => {
                console.log('item:', item)
            })
            .catch((error) => {
                console.error('error:', error)
            })
    }

    handleDelItem = index => {
        // 拷貝新陣列
        const newItems = [...this.state.items]

        // 呼叫 Ajax 刪除資料
        this.ajaxServerItemDelete(newItems[index])

        newItems.splice(index, 1)

        // 整個陣列重新更新
        this.setState({
            items: newItems,
        })
    }

    render() {
        return (
            <div>
                <BasicTable rankingData={this.state.items} onItemDelClick={this.handleDelItem} />
            </div>
        )
    }
}

export default Ranking