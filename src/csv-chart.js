import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import EChartsReact from 'echarts-for-react';

const CsvChart = () => {

    const [parsedData, setParsedData] = useState([]);

    useEffect(() => {
        Papa.parse('/Video_Games_Sales_as_at_22_Dec_2016.csv', { // csv文件必须放在public目录下
            download: true,
            header: true,
            complete: results => {
                setParsedData(results.data);
            }
        })
    }, [])

    let platformColumn = []; // 存放所有平台名称
    parsedData.forEach(data => {
        if (!platformColumn.includes(data.Platform)) {
            platformColumn.push(data.Platform);
        }
    });

    let dataList = []; // Object：存放平台数量
    platformColumn.forEach(platform => {
        dataList.push({
            name: platform,
            value: 0
        })
    });

    parsedData.forEach(data => {
        platformColumn.forEach(platform => {
            if (data.Platform === platform) {
                dataList.forEach(item => {
                    if (item.name === platform) {
                        item.value += 1;
                    }
                })
            }
        })
    });

    dataList.sort((a, b) => {
        return b.value - a.value;
    });
    dataList = dataList.slice(0, 10);

    // console.log(parsedData);
    console.log('platformColumn: ', platformColumn);
    console.log('dataList: ', dataList);

    const options = {
        legend: {show: false},
        toolbox: {
            show: false,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [{
            name: 'platform Nightingale',
            type: 'pie',
            radius: [20, 180],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 2
            },
            data: dataList,
        }]
    }

    return (
        <div>
            <EChartsReact option={options} style={{height: '400px', width: '100%'}}/>
        </div>
    )
};

export default CsvChart;