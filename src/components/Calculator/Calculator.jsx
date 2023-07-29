import React from 'react';
import { Component } from 'react';
import { MAPE, nRMSE } from '../../lib/Metrics'
// BS components
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
// view components
import ForecastReader from './ForecastReader'
import ClacScore from './ClacScore'
import './Calculator.scss';

let ajaxUrl = "http://localhost:3020/"

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            isFileUpload: false,
            mape: 0,
            nrmse: 0,
            real: [],
            pred: []
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    ajaxServerItemAdd = (addItem) => {
        const payload = addItem

        fetch(ajaxUrl + 'ranking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                // ok = 200-299
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(() => {
                alert("Success")
            })
            .catch(() => {
                alert("Fail")
            })
    }

    getRealData = () => {
        const newData = [...this.state.real]
        return newData
    }

    getPredData = () => {
        const newData = [...this.state.pred]
        return newData
    }

    dataCleaning = (data) => {
        // 展開運算子, 壓平陣列
        var newData = data.map(function (value) {
            if (value === '') {
                return '-'
            } else if (Number.isNaN(Number(value))) {
                return '-'
            } else {
                return Number(value)
            }
        })
        console.log(newData)
        return newData
    }

    calculateScore = (e) => {

        e.preventDefault()

        const real = this.dataCleaning(this.getRealData())
        const pred = this.dataCleaning(this.getPredData())

        if (real.length !== pred.length) {
            alert('資料長度不同')
            return
        }

        let newReal = [...real]
        let newPred = [...pred]

        let i = 0;
        while (i < newReal.length) {
            if (newReal[i] === '-') {
                newReal.splice(i, 1)
                newPred.splice(i, 1)
            } else if (newPred[i] === '-') {
                newReal.splice(i, 1)
                newPred.splice(i, 1)
            } else {
                i++
            }
        }

        let nrmse = nRMSE(newReal, newPred)
        let mape = MAPE(newReal, newPred)

        this.setState({
            real: real,
            pred: pred,
            isFileUpload: true,
            nrmse: nrmse,
            mape: mape,
        })
    }

    applyData = (target, data) => {
        if (target === 'pred') {
            this.setState({
                pred: data,
            })
        } else {
            this.setState({
                real: data,
            })
        }
    }

    handleForce = (target, data, fileName) => {
        // 檢查附檔名，若不符合則判斷上傳失敗
        const validExts = [".xlsx", ".xls", ".csv"]
        const fileExt = fileName.substring(fileName.lastIndexOf('.'))
        if (validExts.indexOf(fileExt) < 0) {
            alert("檔案類型錯誤，可接受的副檔名有：" + validExts.toString())
            return
        }

        // 清洗 csv
        let newData = [].concat(...data.data)
        // let ary = [].concat(...newData)
        isNaN(newData[0]) && newData.splice(0, 1)

        this.applyData(target, newData)
    }

    handleTextareaChange = (target, e) => {
        let ary = String(e.target.value).split('\n')
        if (target === 'pred') {
            this.setState({ pred: ary })
        } else {
            this.setState({ real: ary })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="align-items-center calculator-textarea">
                            <Col xs={12} className="row-title">
                                <h2>Real Answer</h2>
                                <span>Enter some numbers or upload a CSV file with data</span>
                            </Col>
                            <Col xs={12} className="row-textarea">
                                <textarea value={this.state.real.join('\n')} placeholder='Please enter some numbers, separated by line breaks.' className="form-control" rows={10} onChange={(e) => this.handleTextareaChange('real', e)} />
                                {/* <br /> */}
                                <Badge pill variant="primary">
                                    {this.state.real.length} Data Points
                                </Badge>
                            </Col>
                            <Col xs={12} className="calculator-csv-reader">
                                <ForecastReader handleForce={(...e) => this.handleForce('real', ...e)} />
                                {/* <br /> */}
                                <Badge pill variant="secondary">
                                    <a href='https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/template/Template(Real).csv' target='_blank'>
                                        <span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                        File format template
                                    </a>
                                </Badge>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="align-items-center calculator-textarea">
                            <Col xs={12} className="row-title">
                                <h2>Predictive Value</h2>
                                <span>Enter some numbers or upload a CSV file with data</span>
                            </Col>
                            <Col xs={12} className="row-textarea">
                                <textarea value={this.state.pred.join('\n')} placeholder='Please enter some numbers, separated by line breaks.' className="form-control" rows='10' onChange={(e) => this.handleTextareaChange('pred', e)} />
                                {/* <br /> */}
                                <Badge pill variant="primary">
                                    {this.state.pred.length} Data Points
                                </Badge>
                            </Col>
                            <Col xs={12} className="calculator-csv-reader">
                                <ForecastReader handleForce={(...e) => this.handleForce('pred', ...e)} />
                                {/* <br /> */}
                                <Badge pill variant="secondary">
                                    <a href='https://raw.githubusercontent.com/Chang-Siang/onlinecalcerror/master/public/template/Template(Pred).csv' target='_blank'>
                                        <span className="glyphicon glyphicon-download-alt" aria-hidden="true"></span>
                                        File format template
                                    </a>
                                </Badge>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                    <Col xs={12} className="row-title">
                        <Button variant="btn btn-outline-primary btn-lg btn-block" onClick={this.calculateScore}>
                            Calculate
                        </Button>
                        {/* <ClacScore rmse={this.state.rmse} mape={this.state.mape} /> */}
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center calculator-score">
                    <Col xs={12}>
                        <ClacScore nrmse={this.state.nrmse} mape={this.state.mape} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Calculator