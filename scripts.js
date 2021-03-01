const slider = document.getElementById("zoomRange");
const zvgZoom = document.getElementById("map");
const zoomValue = document.getElementById("zoomValue");
zvgZoom.style.transform = `scale(${4})`;

slider.oninput = function() {
    //console.log('zoom', this.value / 100);
    zoomValue.innerText = `${this.value}%`;
    zvgZoom.style.transform = `scale(${this.value / 100})`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function goTo(train, station, ms) {
    document.getElementById(train).classList.add(station);
    await sleep(ms);
    document.getElementById(train).classList.remove(station);
}

async function line_4_eastbound(train){
    await goTo(train, 'line-4-bayview-east', 5000);
    await goTo(train, 'line-4-bessarion-east', 3000);
    await goTo(train, 'line-4-leslie-east', 3000);
    await goTo(train, 'line-4-don-mills-east', 3000);
};

async function line_4_westbound(train){
    await goTo(train, 'line-4-leslie-west', 3000);
    await goTo(train, 'line-4-bessarion-west', 3000);
    await goTo(train, 'line-4-bayview-west', 3000);
    await goTo(train, 'line-4-sheppard-east-west', 5000);
};

async function play(train){
    while(true) {
        await line_4_eastbound(train);
        await line_4_westbound(train);
    }
};

async function play_line(){
    var trains = ['trainA', 'trainB', 'trainC', 'trainD'];
    for (i = 0; i < trains.length; i++) {
        play(trains[i]);
        await sleep(5000);
    }
};
