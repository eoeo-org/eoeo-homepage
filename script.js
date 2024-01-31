const jText = document.getElementById("jText")

const textFrames = [
    {
        "text": "j"
    },
    {
        "text": "j-"
    },
    {
        "text": "j-e"
    },
    {
        "text": "j-eo"
    },
    {
        "text": "j-eoe"
    },
    
    {
        "wait": 1500
    },

    {
        "text": "j-eoeo"
    },
    {
        "text": "j-eoe"
    },
    {
        "text": "j-eo"
    },
    {
        "text": "j-e"
    },
    {
        "text": "j-"
    },
    {
        "text": "j"
    },

    {
        "wait": 1500
    },

    {
        "text": "jj"
    },
    {
        "text": "jjj"
    },
    {
        "text": "jjjj"
    },

    {
        "wait": 1500
    },

    {
        "text": "jjj"
    },
    {
        "text": "j"
    },

    {
        "wait": 1500
    }
]

function typeText() {
    const frames = Object.entries(textFrames)
    console.log(frames)
}

typeText()