const eoeoText = document.getElementById("eoeoText")

let texts = [
    'eoeo-org',
    'eoeo',
    'eoello eorld',
    'eoeo123123',
    'eoeo org is powered by c30.life'
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
        eoeoText.innerHTML = '';
        const text = getRandomText(texts);
        for (const char of text) {
            eoeoText.innerHTML += char;
            await new Promise(resolve => setTimeout(resolve, getRandomTime(100, 500)));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));

        for (let i = text.length; i >= 0; i--) {
            eoeoText.innerHTML = text.substring(0, i) || 'j';
            await new Promise(resolve => setTimeout(resolve, getRandomTime(100, 500)));
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

runRandomTextFrames();