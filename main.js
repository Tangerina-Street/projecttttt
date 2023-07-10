song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("Taylor Swift - Delicate.mp3");
    song2 = loadSound("NewJeans-Hype-Boy-24-Najjamuzic-com.mp3");
}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,500,500);
}