var CHART = document.getElementById("doughnutChart");

Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#333';
Chart.defaults.global.legend.labels.padding = 40;
// Chart.defaults.global.legend.position = 'left';
Chart.defaults.global.tooltips.enabled = false;


var doughnutChart = new Chart(CHART, {
    type: 'doughnut',
    data: {
        labels: ['Healthy', 'Average', 'Unhealthy'],
        datasets: [
            {
                data: [35, 10, 15],
                backgroundColor: [
                    "#68D286",
                    "#FBAD2F",
                    "#EB585C"
                ],
                hoverBackgroundColor: [
               "#68D286",
               "#FBAD2F",
               "#EB585C"
                ]
            }
        ]
    },
    options: {
        cutoutPercentage: 55
    }
});
// data array
var dataArray = douighnutChart.chart.config.data.datasets[0].data;

// Good entry
var goodEntryBtn = document.getElementById('good-btn');
goodEntryBtn.onclick = function() {
    dataArray[0]+=5;
    barChart.update();
}

// Medium entry
var medEntryBtn = document.getElementById('med-btn');
medEntryBtn.onclick = function() {
    dataArray[1]+=5;
    barChart.update();
}

// Bad entry
var badEntryBtn = document.getElementById('bad-btn');
badEntryBtn.onclick = function() {
    dataArray[2]+=5;
    barChart.update();
}


//
// // Remove latest element from array on click
// var removeEntryBtn = document.getElementById('remove-btn');
// removeEntryBtn.onclick = function() {
//     dataArray[0]-=5;
//     barChart.update();
// }
