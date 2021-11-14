# react-coding-challenge
## Congratulations

Congratulations, you will receive our Coding Challenge today! Everything you need (besides React) can be found in this repository.

### Conditions
1. Only solutions coded with React/TypeScript will be evaluated.
2. Share your solution with us by creating a new git repository. Please send us the link and make sure that the repository contains all the files and instructions needed to run.


### Task
Your task is to programm the **itemSlider** component.
All required assets are already included under: `src/assets`.
Use storybook to visualize/document your work.

1. Build the itemSlider-Component as shown on the following gif.
    - ![Alt text](src/assets/itemSlider.gif?raw=true "ItemSliderGif")
    - The component should be optimized for **mobile devices only** and does not need to be optimized for desktop devices nor tablets.
    - The items all contain a so-called *gem-socket* in the lower right corner. The used image can be found under the following path in the assets: `/assets/itemSlider/gem_socket_square.png`
    - The items all contain a so-called *rarity* in the lower middle. The rarity of an item can change and has to be set dynamically. The used images can be found under the following path in the assets: `/assets/itemSlider/rarities/`
    - The centered item is surrounded by a static border as shown on the following picture
        - ![Alt text](src/assets/centeredItem.png?raw=true "CenteredIcon")
        - While sliding through the icons, the images snap in between the bordered area
        - The size of the border is `2px` and the color-code is `#6E4F38`
    - The name and category of the currently centered item changes dynamically
        - Use the following color-code for the text: `#C4B494`