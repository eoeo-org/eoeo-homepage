const jText = document.getElementById("jText")

const textFrames = [
    {
        "type": "text",
        "text": "j"
    },
    {
        "type": "text",
        "text": "j-"
    },
    {
        "type": "text",
        "text": "j-e"
    },
    {
        "type": "text",
        "text": "j-eo"
    },
    {
        "type": "text",
        "text": "j-eoe"
    },
    {
        "type": "text",
        "text": "j-eoeo"
    },
    
    {
        "type": "wait",
        "wait": 1500
    },

    {
        "type": "text",
        "text": "j-eoe"
    },
    {
        "type": "text",
        "text": "j-eo"
    },
    {
        "type": "text",
        "text": "j-e"
    },
    {
        "type": "text",
        "text": "j-"
    },
    {
        "type": "text",
        "text": "j"
    },

    {
        "type": "wait",
        "wait": 1500
    },

    {
        "type": "text",
        "text": "jj"
    },
    {
        "type": "text",
        "text": "jjj"
    },
    {
        "type": "text",
        "text": "jjjj"
    },

    {
        "type": "wait",
        "wait": 1500
    },

    {
        "type": "text",
        "text": "jjj"
    },
    {
        "type": "text",
        "text": "jj"
    },
    {
        "type": "text",
        "text": "j"
    },

    {
        "type": "wait",
        "wait": 1500
    }
]

async function runTextFrames(textFrames) {
    while (true) {
        for (const frame of textFrames) {
            await new Promise(resolve => setTimeout(resolve, 500));

            if (frame.type === 'text') {
                //console.log(frame.text); 
                jText.innerHTML = frame.text;
                document.title = frame.text;
            } else if (frame.type === 'wait') {
                await new Promise(resolve => setTimeout(resolve, frame.wait));
            }
        }
    }
}

runTextFrames(textFrames);