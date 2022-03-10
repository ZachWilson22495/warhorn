# _Warhorn_

#### Created By _**Zach Wilson**_

#### _A React application that allows you to build a list of characters with different properties, rolls a random number between 1 and 20 for each character, and then sorts the list of characters from highest roll to lowest_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _React_
* _webpack_
* _npm_

## Description

_A webpage built to assist Dungeons and Dragons groups with Initiative rolling. If you use the 'Add Character' button to place in the necessary information on each character participating in the Initiative Roll and then click 'Sound the Warhorn!' Warhorn will automatically roll an Initiative dice for every participant and sort the list of participants from highest Initiative to lowest._

## Setup/Installation Requirements

* Clone this repository to your Desktop
* From the main project directory, run `npm install` in your terminal to load the necessary plugins and packages.
* Run `npm run start` in your terminal to start the application.
* Navigate the page in your browser by clicking 'Add Character,' adding however many characters you wish to add, and clicking 'Sound the Warhorn!' to roll dice for each character.

## Known Bugs

'Sound the Warhorn!' only moves characters up or down the character list by one space. This can be circumvented by clicking 'Sound the Warhorn!' multiple times until all characters have reached their destinations.

Instead of tiebreaker rolls existing in a vacuum between the tiebreaker participants, their new rolls are compared to every other character on the list and they are sorted accordingly. (EX: Two players who tied for last place have to roll off against eachother. Currently, if one of these participants rolls a higher roll than any other player did during the first Initiative roll, not only will they win the tiebreaker, they'll be placed at the top of the final Initiative order)

Connected to the bug above. Tiebreaker rolls do not draw upon each characters' personal bonuses to Initiative. Meaning somebody with a high bonus is at a detriment and somebody with a low bonus is at a benefit by ignoring these players' bonuses.

## License

MIT License

Copyright (c) [2021] [Zachary Wilson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Research & Planning Log

2/18

9:00-9:30: Fixed boilerplate errors with create-react-app build.
9:30-10:00: Built and finished project proposal template.
10:00-11:00: Building project foundation.
11:00-12:00: Troubleshooting Build Errors.
1:15-2:15: Fixed Build Errors. Project Builds.
2:15-3:00: Dried up CharacterControl and connected files. Project now allows for building characters and adding characters to a list.

2/27

11:00-12:30: Researching Method types in React
12:30-1:30: Researching Forms in React
2:00-3:00: Trying to fix errors with adding Character
3:00-3:30: Characters now build correctly!
3:30-4:30: Learned and implemented Select Form. Pseudocoded roll function

3/4

7:00-8:15: Brainstorming function layouts for roll function
8:15-9:15: Researching Math.Random. Attempting to add to roll function
9:30-11:00: Remaking roll function
11:00-12:00: Split roll function into multiple functions.
12:00-1:15: Built rollDefault, rollAdvantage, and rollDisadvantage functions
1:15-2:30: Fixing build errors/bugs in all roll functions
2:30-3:15: Added roll button to CharacterDetail. Now rolls!
3:15-4:15: Trying to build a rollAll function/button
4:15-5:00: Researching array sort algorithms

3/5

12:00-1:00: Remaking rollAll function.
1:00-2:00: Researching Bubble Sort algorithm
2:00-3:00: Researching NoSQL and rereading course material
3:00-3:45: Troubleshooting rollAll function.

3/8

9:00-11:00: Researching CSS Styling with Bootstrap
11:00-12:00: Researching Redux and rereading course material
1:00-2:00: Revisiting rollAll. Practicing Bubble Sort 
2:00-3:00: Built Sort function from Bubble Sort algorithm
3:00-4:30: roll/sort function now works. Fixing roll/sort button

3/9

8:00-9:00: Researching buttons in React
9:00-11:00: Bugfixing roll/sort function and button
1:00-3:00: MVP Achieved!
3:00-4:15: CSS styling
4:15-5:00: More CSS styling
5:00-6:00: CSS Styling. Laid groundwork for bump function

3/10

8:40-9:10: Finished README.md
10:00-11:30: Researching Pre-populated forms. Attempted to implement.

### Feel free to fix/edit all contained code to your liking. If you encounter and problems, contact me at zwilson22495@gmail.com