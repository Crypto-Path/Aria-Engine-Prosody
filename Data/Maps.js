let charts;
let _charts = [];
let _alt = [];
getCharts();

function getCharts() {
    fetch("https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/")
        .then(response => response.text())
        .then(data => {
            console.log(data);
            chartCount = JSON.parse(data)["RankedCharts"];
            for (let i = 1; i < chartCount; i++) {
                fetch("https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/" + i)
                    .then(chart => chart.text())
                    .then(chartData => {
                        skip = false;
                        //console.log(chartCount);
                        //console.log(_charts);
                        for (let j = 0; j < _charts.length; j++) {
                            const Json = JSON.parse(_charts[j][0]);
                            //console.log(j + ") " + Json["Name"]);
                            if (Json["Name"] == JSON.parse(chartData)["Name"]) {
                                skip = true
                            }
                        }
                        if (!skip) {
                            _charts.push([chartData, i]);
                        }

                        if (i == chartCount - 1) {
                            _alt.length = _charts.length;
                            console.log(_alt);
                            for (let j = 0; j < _alt.length; j++) {
                                _alt[getIndexOfChart(j + 1)] = _charts[j][0];
                                //console.log(_alt);
                            }
                            if (_alt[-1] != null) {
                                _alt.shift();
                                console.log("System: Removed negative index")
                            }
                            console.log(_alt);
                            charts = _alt;
                        }
                    })
                    .catch(error => {

                    });
            }
        })
        .catch(error => {
            // handle the error
        });
}
window.onerror = function() {
    location.reload();
}

function getIndexOfChart(index) {
    for (let i = 0; i < _charts.length; i++) {
        if (_charts[i][1] == index) {
            return i;
        }
    }
    return -1;
}