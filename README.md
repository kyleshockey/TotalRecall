# Total Recall
*Learn faces, so you can say hi to those faces when you're in places.*

**Total Recall** is a small game that shows you photos of your new friends, and prompts you for their name. 

## Quick Start

There's no need to clone down this repo in order to play! [**Click here to play Total Recall**.](http://tr.kyleshockey.com/) 

The hosted version of TotalRecall is running the [most recent release](https://github.com/kyleshockey/TotalRecall/releases/latest) of TotalRecall, with a default dataset of Hack Reactor's HR26 cohort.

## Using custom images

Total Recall uses an array of tuples, where `tuple[0]` is a character's name, and `tuple[1]` is an absolute URL to the character's photo. For best performance and presentation, use ~700x464 progressive JPEG images. [ImageMagick](http://www.imagemagick.org) is great for making these transformations.

## Contributing

Please contribute if you'd like to assist in development! Take a look at the [Trello board](https://trello.com/b/gganrdly) to see what hasn't been implemented yet. **Pull requests for features not on the Trello board will be closed**- if you aren't a contributor, please [open an issue](https://github.com/kyleshockey/TotalRecall/issues/new) with the 'enhancement' tag describing your feature so we can discuss it.