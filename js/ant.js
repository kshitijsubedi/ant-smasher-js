// Define the number of columns and rows in the sprite
let numColumns = 8;
let numRows = 4;

// Define the size of a frame
let frameWidth = sprite.width / numColumns;;
let frameHeight = sprite.height / numRows;;

// The sprite image frame starts from 0
let currentFrame = 0;

setInterval(function()
{
    // Pick a new frame
    currentFrame++;

    // Make the frames loop
    let maxFrame = numColumns * numRows - 1;
    if (currentFrame > maxFrame){
        currentFrame = 0;
    }

    // Update rows and columns
    let column = currentFrame % numColumns;
    let row = Math.floor(currentFrame / numColumns);

    // Clear and draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(sprite, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth, frameHeight);

//Wait for next step in the loop
}, 100);