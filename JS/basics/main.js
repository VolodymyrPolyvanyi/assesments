
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// func return random string from array
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// initialize variables
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
];
    
const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House',
];

const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
];

randomize.addEventListener
    ('click', result(storyText, insertX, insertY, insertZ)
);

function result(text, x, y, z) {
    // vars for new arrays with randow tex
    const itemX = randomValueFromArray(x);
    const itemY = randomValueFromArray(y);
    const itemZ = randomValueFromArray(z);

    // var for new story - will not update storyText
    let newStory = text
        .replaceAll(':insertx:', itemX)
        .replaceAll(':inserty:', itemY)
        .replaceAll(':insertz:', itemZ)

    // changing default name to custom
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // changing text for british
    if(document.getElementById("uk").checked) {
        // add constant names
        const weight = `${Math.round(300 * 0.071429)} stone`;
        const temperature = `${Math.round((94 - 32) / 1.8)} centigrade`;

        newStory = 
            newStory.replace('94 fahrenheit', temperature).replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
