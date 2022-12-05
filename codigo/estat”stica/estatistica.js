window.addEventListener('DOMContentLoaded', () => {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Trabalho', 8],
            ['Eat', 4],
            ['Diversão', 3],
            ['TV', 4],
            ['Dormir', 7]
        ]);

        var options = {
            title: 'Atividade realizadas',
            is3D: true,
            backgroundColor: '#f6f6f6',
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie'));
        chart.draw(data, options);
    }

    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawRightY);

    function drawRightY() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var materialOptions = {
            chart: {
                title: 'Atividade realizadas',
            },
            bars: 'vertical',
        };

        var options = {
            backgroundColor: '#F6F6F6'
        }

        var materialChart = new google.charts.Bar(document.getElementById('columns'));
        materialChart.draw(data, materialOptions);
    }
})



