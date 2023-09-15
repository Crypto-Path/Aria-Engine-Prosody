let charts;
let _charts = [];
getCharts();

function getCharts() {
    fetch("https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/")
        .then(response => response.text())
        .then(data => {
            console.log(data);
            for (let i = 1; i < JSON.parse(data)["RankedCharts"]; i++) {
                fetch("https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/" + i)
                    .then(chart => chart.text())
                    .then(chartData => {
                        skip = false;
                        console.log(JSON.parse(chartData)["Name"]);
                        //console.log(_charts);
                        for (let j = 0; j < _charts.length; j++) {
                            const Json = JSON.parse(_charts[j]);
                            console.log(j + ") " + Json["Name"]);
                            if (Json["Name"] == JSON.parse(chartData)["Name"]) {
                                skip = true
                            }
                        }
                        if (!skip) {
                            _charts.push(chartData);
                        }

                        if (i == JSON.parse(data)["RankedCharts"] - 1) {
                            charts = _charts;
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