/*
* Creates a factory which iterates through array of videos
* Find a dom element and replay with video tag
* We will use this event:
* https://www.w3schools.com/tags/av_event_loadeddata.asp
*/
const videoSequence = (array) => {
    const factory = () => {
        const arrayElement = array.shift();
        if (arrayElement) {
            const divId = arrayElement[0];
            const videoUrl = arrayElement[1];
            const domElement = document.getElementById(divId);
            if (domElement) {
                const newNode = document.createElement('video');
                domElement.replaceWith(newNode);
                newNode.src = videoUrl;
                newNode.onloadeddata = () => {
                    factory();
                };
            } else {
                factory();
            }
        }
    };
    factory();
};

window.videoSequence = videoSequence;
