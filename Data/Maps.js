let charts;
let _charts = [];
let _alt = [];

function getCharts() {
    fetch("https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/count.json")
        .then(response => response.text())
        .then(data => {
            console.log(data);
            chartCount = JSON.parse(data)["RankedCharts"];

            let value = 0;
            const progressBar = document.getElementById("myProgressBar");
            const progressBarText = document.getElementById("myProgressBarText");
            progressBar.max = chartCount - 1;
            progressBarText.innerText = `0/${progressBar.max+1} charts loaded...`;

            for (let i = 1; i < chartCount; i++) {
                fetch(`https://corsproxy.io/?https://prosody-server.schiytu37.repl.co/charts/ranked/${i}/chartData.json`)
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
                            value += 1;
                            progressBar.value = value;
                            progressBarText.innerText = `${value+1}/${progressBar.max+1} charts loaded...`;
                            _charts.push([chartData, i]);
                        }

                        if (i == chartCount - 1) {
                            _alt.length = _charts.length; // Sets the length of _alt so the exact index can be reached
                            console.log(_alt);
                            sortCharts(_charts)
                                // if (_alt[-1] != null) {
                                //     //_alt.shift(); // 
                                //     console.log("System: Removed negative index")
                                // }
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
    return _charts.length;
}

function sortCharts(toSort) {
    toSort.sort(function(a, b) {
        // Compare the second elements (index 1) of each array
        return a[1] - b[1];
    });
    _alt.length = _charts.length;
    for (let j = 0; j < _alt.length; j++) {
        _alt[j] = toSort[j][0];
        //console.log(_alt);
    }
    return _alt;
}

function reloadChart() {
    for (let i = 0; i < document.getElementsByClassName("SongSelector").length; i = i) {
        document.getElementsByClassName("SongSelector")[0].remove();
    }
    charts = sortCharts(_charts);
    for (var i in charts) {
        CreateButton(i)
    }
}