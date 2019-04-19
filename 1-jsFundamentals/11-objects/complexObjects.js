/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ]
        }
    },
season2: {},
season3: {}
}

console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);
//Pick an episode to log in the terminal
//Using dot notation, walk through the netflix object and print off both the episode number
//and the epsisode name
console.log(netflix.season1.seasonInfo.episodeInfo[10].episode, netflix.season1.seasonInfo.episodeInfo[10].episodeName);

//JSON -> Javascript Object Notation  <<== json.eval restores from text string, json.parse 
json["editor.fontSize" object:
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}
////spacejam object:
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//// first letter upper case for Object.keys
console.log(Object.keys(spaceJam));  //Object.keys returns an array
console.log(Object.keys(spaceJam.toonSquad));  //returns an array of strings
console.log(Object.keys(spaceJam.toonSquad).toString());  //returns a single string of all seperated by comas

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread!';  //square bracket can be used to add key.value pair to an object
baking.bestKeyEver = 'zucchini';  //dot notation can also be used to add key.value pair to an object

console.log(baking.zucchini);    //better make some bread!
console.log(baking.bestKeyEver);    //zucchini
console.log(baking[baking.bestKeyEver]);    //better make some bread!

let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})
