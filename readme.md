# Robot challenge with Node.js

See detail descrpition [here](#description)

## Requirement
This repo are using Node.js with NPM/Yarn as package manager. Please refer link below for installation.

- [Downloa dNode.js ](https://nodejs.org/en/download/) (npm will installed within Node.js by default)

## Install Instruction

### Clone repo

```bash
$ git clone https://github.com/mwonng/robot-node-cli.git
$ cd robot-node-cli
```

### Install dependencies

Install dependencies via package manager

```bash
$ npm install
```

or if you use yarn

```bash
$ yarn
```

### Run this application

```bash
node ./bin/index.js
```

or

```bash
./bin/index.js
```

### Test

```bash
npm run test
```

or or if you use yarn

```bash
yarn test
```

### Build a excutable application

```bash
npm run build
```

or or if you use yarn

```bash
yarn build
```

After run command above, it will build into a binary application which works for Linux, MacOS or Windows in `./release` folder

## Description

* The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
* There are no other obstructions on the table surface.
* The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement
that would result in the robot falling from the table must be prevented, however further valid movement commands must still
be allowed.

Create an application that can read in commands of the following form:

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

* PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
* The origin (0,0) can be considered to be the SOUTH WEST most corner.
* The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
* MOVE will move the toy robot one unit forward in the direction it is currently facing.
* LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
* REPORT will announce the X,Y and orientation of the robot.
* A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands.
* Provide test data to exercise the application.

### Constraints:

The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
Any move that would cause the robot to fall must be ignored.

Example Input and Output:

```
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```
