//지점 혼잡 상태

//임시로 만들었음, 연결된곳 없음

var ctx = document.getElementById('myChart').getContext("2d")
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"],
        datasets: [{
            data: [0,0,0,2,10,15,14,12,15,17,25,20],
            backgroundColor: [
                'rgba(55, 232, 152, 1)',
                'rgba(55, 232, 152, 1)',
                'rgba(251, 206, 54, 1)',
                'rgba(55, 232, 152, 1)',
                'rgba(55, 232, 152, 1)',
                'rgba(55, 232, 152, 1)',
                'rgba(55, 232, 152, 1)',
                'rgba(251, 206, 54, 1)',
                'rgba(251, 206, 54, 1)',
                'rgba(251, 206, 54, 1)',
                'rgba(247, 77, 45, 1)',
                'rgba(200, 200, 200, 1)',
            ],
            borderWidth: 5,
            borderColor: '#E8F2FF',
        }],
    },
    
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
                },
                
}],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    fontSize : 10,
                    fontColor : '#2D2D2D',
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
                }
            }]
        }
    }
});