function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function goTo(train, station, ms) {
  document.getElementById(train).classList.add(station);
  await sleep(ms);
  document.getElementById(train).classList.remove(station);
}

async function line_1_to_vmc(train) {
  await goTo(train, "line-1-north-york-centre-south", 3000);
  await goTo(train, "line-1-sheppard-yonge-south", 3000);
  await goTo(train, "line-1-york-mills-south", 3000);
  await goTo(train, "line-1-lawrence-south", 3000);
  await goTo(train, "line-1-eglinton-south", 3000);
  await goTo(train, "line-1-davisville-south", 3000);
  await goTo(train, "line-1-st-clair-south", 3000);
  await goTo(train, "line-1-summerhill-south", 3000);
  await goTo(train, "line-1-rosedale-south", 3000);
  await goTo(train, "line-1-bloor-yonge-south", 3000);
  await goTo(train, "line-1-wellesley-south", 3000);
  await goTo(train, "line-1-college-south", 3000);
  await goTo(train, "line-1-dundas-south", 3000);
  await goTo(train, "line-1-queen-south", 3000);
  await goTo(train, "line-1-king-south", 3000);
  await goTo(train, "line-1-union-south", 3000);
  await goTo(train, "line-1-st-andrew-north", 3000);
  await goTo(train, "line-1-osgoode-north", 3000);
  await goTo(train, "line-1-st-patrick-north", 3000);
  await goTo(train, "line-1-queens-park-north", 3000);
  await goTo(train, "line-1-museum-north", 3000);
  await goTo(train, "line-1-st-george-north", 3000);
}

async function line_1_to_finch(train) {
  await goTo(train, "line-1-museum-south", 3000);
  await goTo(train, "line-1-queens-park-south", 3000);
  await goTo(train, "line-1-st-patrick-south", 3000);
  await goTo(train, "line-1-osgoode-south", 3000);
  await goTo(train, "line-1-st-andrew-south", 3000);
  await goTo(train, "line-1-union-right", 3000);
  await goTo(train, "line-1-king-north", 3000);
  await goTo(train, "line-1-queen-north", 3000);
  await goTo(train, "line-1-dundas-north", 3000);
  await goTo(train, "line-1-college-north", 3000);
  await goTo(train, "line-1-wellesley-north", 3000);
  await goTo(train, "line-1-bloor-yonge-north", 3000);
  await goTo(train, "line-1-rosedale-north", 3000);
  await goTo(train, "line-1-summerhill-north", 3000);
  await goTo(train, "line-1-st-clair-north", 3000);
  await goTo(train, "line-1-davisville-north", 3000);
  await goTo(train, "line-1-eglinton-north", 3000);
  await goTo(train, "line-1-lawrence-north", 3000);
  await goTo(train, "line-1-york-mills-north", 3000);
  await goTo(train, "line-1-sheppard-yonge-north", 3000);
  await goTo(train, "line-1-north-york-centre-north", 3000);
  await goTo(train, "line-1-finch-north", 3000);
}

async function line_4_eastbound(train) {
  await goTo(train, "line-4-bayview-east", 5000);
  await goTo(train, "line-4-bessarion-east", 3000);
  await goTo(train, "line-4-leslie-east", 3000);
  await goTo(train, "line-4-don-mills-east", 3000);
}

async function line_4_westbound(train) {
  await goTo(train, "line-4-leslie-west", 3000);
  await goTo(train, "line-4-bessarion-west", 3000);
  await goTo(train, "line-4-bayview-west", 3000);
  await goTo(train, "line-4-sheppard-east-west", 5000);
}

async function play_line4(train) {
  while (true) {
    await line_4_eastbound(train);
    await line_4_westbound(train);
  }
}

async function play_line1(train) {
  while (true) {
    await line_1_to_vmc(train);
    await line_1_to_finch(train);
  }
}

async function deploy_line4(){
    var line_4_trains = ["train4A", "train4B", "train4C", "train4D"];
    for (i = 0; i < line_4_trains.length; i++) {
        play_line4(line_4_trains[i]);
        await sleep(7000);
      }
}

async function deploy_line1() {
  var line_1_trains = [
    "train101",
    "train102",
    "train103",
    "train104",
    "train105",
    "train106",
    "train107",
    "train108",
    "train109",
    "train110",
    "train111",
    "train112",
    "train113",
    "train114",
    "train115",
    "train116",
    "train117",
    "train118",
    "train119",
    "train120",
  ];
  
  for (j = 0; j < line_1_trains.length; j++) {
    play_line1(line_1_trains[j]);
    await sleep(6600);
  }
}

async function play(){
    deploy_line1();
    deploy_line4();
}

play();
