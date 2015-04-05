#[**Click here to play Total Recall**.](http://tr.kyleshockey.com/)

# Total Recall
*Learn faces, so you can say hi to those faces when you're in places.*

**Total Recall** is a small game that shows you photos of your new friends, and prompts you for their name. 

### Quick Start

There's no need to clone down this repo in order to play! [**Click here to play Total Recall**.](http://tr.kyleshockey.com/) 

The hosted version of TotalRecall is running the [most recent release](https://github.com/kyleshockey/TotalRecall/releases/latest) of TotalRecall, with a default dataset of [Hack Reactor](http://hackreactor.com)'s HR26 and HR27 cohorts.

### Gameplay

Total Recall is a game that also serves as a utility for learning. You'll be presented with a photo of a random person from a pool of people (hereafter called a 'character'), and prompted with three choices of what their name may be. If you select correctly, that character will be removed from the pool of selectable characters; if you choose incorrectly, you'll be asked again later on in the game.

Score is kept as you play and is always visible! You can also change your active sets at any time (if multiple ones are available), but doing so will start your game over.

### Configuration

Total Recall data sets are an array of tuples, where `tuple[0]` is a character's name, and `tuple[1]` is an absolute URL to the character's photo. For best performance and presentation, use ~700x464 progressive JPEG images. [ImageMagick](http://www.imagemagick.org) is great for making these transformations.



###### Multiple data sets

You can use multiple data sets with Total Recall. First, add your array of tuples to `data.js` as a property of totalRecall. Then add the name of the property to the `totalRecall.sets` array, and optionally to the `totalRecall.defaultSets` array if you want that set to be loaded into the pool of characters by default.

## Contributing

Please contribute if you'd like to assist in development! Take a look at the [Trello board](https://trello.com/b/gganrdly) to see what hasn't been implemented yet. Pull requests are welcome, but feature additions may be rejected if it is esoteric or at odds with something on the Trello roadmap.
