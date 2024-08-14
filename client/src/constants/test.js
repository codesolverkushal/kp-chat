
const RenderAtachment = (file,url) => {

    switch(file){
        case "video":
           console.log("Video");
            break;
        case "image":
            console.log("image");
            break;
        case "audio":
            console.log("Audio");
            break;

        default:
            console.log("Kushal");
    }
}


console.log(RenderAtachment("image","https://www.w3schools.com/howto/img_avatar.png"))



