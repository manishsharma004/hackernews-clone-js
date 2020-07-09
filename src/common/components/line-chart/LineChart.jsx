import React from 'react'
import HighchartsStock from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const commonChartConfig = {
    credits: false
}

/**
 * 
 * @param {string} title 
 * @param {string} name
 * @param {string[]} axesTitle
 * @param {[(number|string), number][]} data
 *
 * @returns {Highcharts.Options}
 */
const getConfig = (title, name, axesTitle, data) => ({
    rangeSelector: {
        selected: 1
    },

    title: {
        text: title,
    },

    series: [{
        name,
        data,
        type: 'line',
        dataLabels: {

        }
    }],
    xAxis: {
        title: {
            text: axesTitle[0],
            style: {
                fontWeight: 'bold',
            },
        },
        categories: data.map(([category]) => category),
    },
    yAxis: {
        title: {
            text: axesTitle[1],
            style: {
                fontWeight: 'bold',
            },
        },
    },
    legend: {
        enabled: false,
    },
    ...commonChartConfig,
})

/**
 * @param {object} lineChartProps
 * @param {string} lineChartProps.title 
 * @param {string} lineChartProps.name 
 * @param {string[]} lineChartProps.axesTitle
 * @param {[(number|string), number][]} lineChartProps.data
 */
export default function LineChart({title, name, axesTitle, data}) {

    const config = getConfig(title, name, axesTitle, data)
    console.log('line chart config', config)

    return (
        <HighchartsReact highcharts={HighchartsStock} options={config} />
    )
}
