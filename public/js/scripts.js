const line_1_trains = [
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

const line_4_trains = [
  "train401", 
  "train402", 
  "train403", 
  "train404"
];

const trains = [
  line_1_trains, line_4_trains
]

const line_1 = [
  //Station Name, Station ID, dur from last station (to vmc), dur from last station (to finch)
  ["Finch", "line-1-finch", 0, 3000],
  ["North York Centre", "line-1-north-york-centre", 3000, 3000],
  ["Sheppard-Yonge", "line-1-sheppard-yonge", 3000, 3000],
  ["York Mills", "line-1-york-mills", 3000, 3000],
  ["Lawrence", "line-1-lawrence", 3000, 3000],
  ["Eglington", "line-1-eglinton", 3000, 3000],
  ["Davisville", "line-1-davisville", 3000, 3000],
  ["St. Clair", "line-1-st-clair", 3000, 3000],
  ["Summerhill", "line-1-summerhill", 3000, 3000],
  ["Rosedale", "line-1-rosedale", 3000, 3000],
  ["Bloor-Yonge", "line-1-bloor-yonge", 3000, 3000],
  ["Wellesley", "line-1-wellesley", 3000, 3000],
  ["College", "line-1-college", 3000, 3000],
  ["Dundas", "line-1-dundas", 3000, 3000],
  ["Queen", "line-1-queen", 3000, 3000],
  ["King", "line-1-king", 3000, 3000],
  ["Union", "line-1-union", 3000, 3000],
  ["St. Andrew", "line-1-st-andrew", 3000, 3000],
  ["Osgoode", "line-1-osgoode", 3000, 3000],
  ["St. Patrick", "line-1-st-patrick", 3000, 3000],
  ["Queen's Park", "line-1-queens-park", 3000, 3000],
  ["Museum", "line-1-museum", 3000, 3000],
  ["St. George", "line-1-st-george", 3000, 0] 
]

const line_4 = [
  ["Sheppard-East", "line-4-sheppard-east", 0, 5000],
  ["Bayview", "line-4-bayview", 5000, 3000],
  ["Bessarion", "line-4-bessarion", 3000, 3000],
  ["Leslie", "line-4-leslie", 3000, 3000],
  ["Don Mills", "line-4-don-mills", 3000, 0],

]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function goTo(train, station, ms) {
  document.getElementById(train).classList.add(station);
  await sleep(ms);
  document.getElementById(train).classList.remove(station);
}

function hide_line(line) {
  if (line == 1) {
    for (i = 0; i < line_1_trains.length; i++) {
      document.getElementById(line_1_trains[i]).classList.add("hide");
    }
  } else if (line == 4) {
    for (i = 0; i < line_4_trains.length; i++) {
      document.getElementById(line_4_trains[i]).classList.add("hide");
    }
  }
}

function show_line(line) {
  if (line == 1) {
    for (i = 0; i < line_1_trains.length; i++) {
      document.getElementById(line_1_trains[i]).classList.remove("hide");
    }
  } else if (line == 4) {
    for (i = 0; i < line_4_trains.length; i++) {
      document.getElementById(line_4_trains[i]).classList.remove("hide");
    }
  }
}

async function animate_line(train, line, dir, appendix) {
  for (const item of line) {
    await goTo(train, item[1] + appendix, item[dir]);
  }
}


async function play_line(train, line) {
  const line_data = [
    [line_1, '-vmc', '-fin'],
    [line_4, '-east', '-west']
  ]
  while (true) {
    await animate_line(train, line_data[line][0], 2, line_data[line][1]);
    await animate_line(train, line_data[line][0].slice().reverse(), 3, line_data[line][2]);
  }
}

async function deploy_trains(trainset, t) {
  const waitTimes = [6000, 6000]
  for (const train of trainset) {
    play_line(train, t)
    await sleep(waitTimes[t])
  }
}

async function play() {

  for(t = 0; t < trains.length; t++) {
    deploy_trains(trains[t], t);
  }
}

play();
