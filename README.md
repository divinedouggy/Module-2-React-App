# Special Ingredients
![Special Ingredients logo](/src/images/logo.png)


This project was created with much assistance from the [Wizard World API](https://wizard-world-api.herokuapp.com/swagger/index.html) and the [Imsea API](https://imsea.herokuapp.com/)


## Description

This site explores the ingredients used in elixirs and potions in the Harry Potter universe.

Simply navigate to the ingredients tab and the list of ingredients will render, and if desired, type into the input box and the list will narrow down based on what you've typed.

Clicking an ingredient plugs the ingredient name into an image search engine and the first image result from the search will render in front of the viewport.\
*Please allow a moment for the image to load, especially the first time you click an ingredient.*

Click the image again to close it, or click another ingredient to close the image and render the next one.

## Component Hierarchy


![Component Hierarchy](/src/images/componentHeirarchy.png)


## APIs Used
[Wizard World API](https://wizard-world-api.herokuapp.com/swagger/index.html) \
[Imsea API](https://imsea.herokuapp.com/)


## Challenges I Faced (And How I Overcame Them)
- Filtered ingredient list would not "unfilter" on backspace\
*Added a reset button that fetches the ingredients again*\
- Image API had CORS issue\
*Used [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere) app*\
- CORS-Anywhere was only available as demo with temporary access/restrictions\
*Hosted the app myself with the help of [this git respository/tutorial](https://github.com/Isoaxe/cors-server)*\
- Could not figure out how to make ingredient link to a separate Image component, passing the ingredient name to be searched\
*Merely passed ingredient name to Imsea API and rendered image all in the same component*

## Get Your Wizard On
![App GIF](/src/images/sigif.gif)

## Things I Wish I Had Time For
- Optimizing the app for mobile\
- Making multiple images from the search render at same time, or\
- Randomizing which image is pulled from the search (currently the first result always renders)\
- Making the app yet prettier\
*But... I need sleep*



