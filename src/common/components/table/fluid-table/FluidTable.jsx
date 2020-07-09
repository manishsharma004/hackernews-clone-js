import React from 'react'
import classnames from 'classnames'
import './FluidTable.scss'


export const Table = ({
    columns,
    data
}) => {
    return (
        <div className={classnames('table', 'fluid', 'full-width')}>
            {renderHead(columns)}
            {renderBody(columns, data)}
        </div>
    )
}

export default Table


export const Head = ({
    children
}) => {
    return (
        <div className='table-head table-row'>
            {children}
        </div>
    )
}

export const Body = ({
    children
}) => {
    return (
        <>
            {children}
        </>
    )
}

export const TableRow = () => {
    return (
        <div className='table-row'></div>
    )
}


export const TableColumn = () => {
    return (
        <div className='table-column'></div>
    )
}

function renderHead(columns) {
    return (
        <Head>
            {
                columns.map((column, index) => renderHeadColumn(column, index))
            }
        </Head>
    )
}
function renderHeadColumn(column, index) {
    return (
        <span key={index} className={classnames('table-header-column', 'table-column')}>
            { column.renderHead && column.renderHead(column, index) }
            { !column.renderHead && column.name }
        </span>
    )
}

function renderBody(columns, data) {
    return (
        <Body>
            {
                data.map(
                    (row, index) =>
                    renderRow(columns, row, index)
                )
            }
        </Body>
    )
}

function renderRow(columns, data, rowIndex) {
    return <div key={rowIndex} className={classnames('table-row', rowIndex%2 ? 'dark-bg' : 'white-bg')}>
        {
            columns.map(
                (column, index) =>
                renderColumn(data, column, rowIndex, index)
            )
        }
    </div>
}

function renderColumn(data, column, rowIndex, columnIndex) {
    return (
        <div key={columnIndex} className={classnames('table-column')}>
            {column.render(data, column, rowIndex, columnIndex)}
        </div>
    )
}