const jText = document.getElementById("jText")

let texts = [
    'j-eoeo',
    'jjjj',
    'jenkins',
    'jello jorld',
    'jazujazu123123',
    'j eoeo is powered by tty7.uk'
];

function getRandomText(texts) {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function runRandomTextFrames() {
    while (true) {
        jText.innerHTML = '';
        const text = getRandomText(texts);
        for (const char of text) {
            jText.innerHTML += char;
            await new Promise(resolve => setTimeout(resolve, getRandomTime(100, 500)));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));

        for (let i = text.length; i >= 0; i--) {
            jText.innerHTML = text.substring(0, i) || 'j';
            await new Promise(resolve => setTimeout(resolve, getRandomTime(100, 500)));
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

runRandomTextFrames();