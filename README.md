# Light-and-sound-memory-game

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Adish Timalsina

Time spent: 11 hours spent in total

https://glitch.com/edit/#!/unequaled-ahead-power?path=script.js%3A51%3A17

https://unequaled-ahead-power.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

![codePathIntern](https://user-images.githubusercontent.com/97929111/160266700-46ae34dd-b534-47fd-b981-0a158ecafb3f.gif)

https://imgur.com/70aHhxz.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
for this pre-work task, I took a help from the following website and resources 
w3schools.com for color and https://pages.mtu.edu/~suits/notefreqs.html for sound frequencies. For timer which is 20 second, user have to guess the played button before time out and the other feature is user have three chances to guess. I took a help from stack overflow for these two features. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
My biggest challenge on this pre work task was set a timer and again timer had to reset after user guesses the right. For this feature I almost spent more than 4 hours. I had to spend a lot of time on this feature because I did not have enough knowledge to implement functions for this feature. so, I did search on stack overflow and W3schools.com for this. After some research I understand about some function that going to help for this feature such as setInterval and clearInterval. Also, it was little bit hard to make a function for time keep decreasing from 20 second to 0 s. For this feature I made a  function  countDown. I had to put a many different conditions for this function because the condition was not working, I did not give up and keep trying until I get success. On this function I also had to let user know that you lost a game because time is up. After completing this function, I tried to run and it was looking fine until I lost the game and restart again, when I restart the time start decreasing like a millisecond it took 2 second to get to 0 second from 20 second. I stuck on the same function almost one hour, trying to find a bug. The problem was on function playClueSequence(), I did not set time for 20 second. Another challenge was user can have three chances to guess otherwise user will lose the game. For this feature I had to add more logic on guess function so user can use multiple attempts before they lose the game, and user can see how many attempts left. For me on this pre work task debugging stressed me out but I also learn some debugging techniques.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Adish Timalsina]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
