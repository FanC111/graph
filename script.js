// 获取canvas元素
var ctx = document.getElementById('myLineChart').getContext('2d');

// 创建折线图
var myLineChart = new Chart(ctx, {
    type: 'line', // 图表类型
    data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月'], // X轴标签
        datasets: [{
            label: '销售额（单位：万）', // 图例标题
            data: [12, 19, 3, 5, 2, 3], // Y轴数据
            borderColor: 'rgba(75, 192, 192, 1)', // 折线颜色
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // 填充色
            fill: true, // 是否填充区域
            tension: 0.4, // 平滑度
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // 数据点颜色
            pointRadius: 5 // 数据点半径
        }]
    },
    options: {
        responsive: true, // 自适应屏幕
        scales: {
            y: {
                beginAtZero: true // Y轴从0开始
            }
        }
    }
});
