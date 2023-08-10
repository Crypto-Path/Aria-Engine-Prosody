/*
Diff calculator

Jacks > Streams
Chord Jacks < Hand steams

NPS won't directly translate to difficulty
20nps handsteams is a lot harder than 20nps quads, they shouldn't be rated the same
*/

//Temp diff calculator

//TODO: Fix difficulty calculator to match the comments above
function calculateDifficulty(chartJson, difficulty, rate = 1) {
    const bpm = chartJson.BPM;
    console.log(chartJson)
    const notes = chartJson['4Rows'][difficulty]['Notes'];

    // Calculate the effective BPM based on the rate
    const effectiveBpm = bpm * rate;

    LN1A = (notes[0].reduce((acc, Other) => { return Other; }, 0) - notes[0][0]) * 4;
    LN1 = notes[0].length - 1;
    LNA = LN1 / LN1A
    LNANPS = LNA * effectiveBpm / 60

    LN2A = (notes[1].reduce((acc, Other) => { return Other; }, 0) - notes[1][0]) * 4;
    LN2 = notes[1].length - 1;
    LNB = LN2 / LN2A
    LNBNPS = LNB * effectiveBpm / 60

    LN3A = (notes[2].reduce((acc, Other) => { return Other; }, 0) - notes[2][0]) * 4;
    LN3 = notes[2].length - 1;
    LNC = LN3 / LN3A
    LNCNPS = LNC * effectiveBpm / 60

    LN4A = (notes[3].reduce((acc, Other) => { return Other; }, 0) - notes[3][0]) * 4;
    LN4 = notes[3].length - 1;
    LND = LN4 / LN4A
    LNDNPS = LND * effectiveBpm / 60

    NPS = (LNANPS + LNBNPS + LNCNPS + LNDNPS) * 4

    Dev1 = Math.max(LNANPS, LNBNPS, LNCNPS, LNDNPS)
    intArray = [LNANPS, LNBNPS, LNCNPS, LNDNPS]

    Dev2 = intArray.sort(function(a, b) { return b - a })[1];

    //console.log(NPS * Dev)
    return NPS * Math.sqrt(Dev1 + Dev2) + Math.log10(chartJson["4Rows"][difficulty]["Notes"][0].length + chartJson["4Rows"][difficulty]["Notes"][1].length + chartJson["4Rows"][difficulty]["Notes"][2].length + chartJson["4Rows"][difficulty]["Notes"][3].length);
}