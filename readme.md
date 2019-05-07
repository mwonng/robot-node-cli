# Robot challenge with Node.js

See detail descrpition [here](#description).

# Requirement
This repo are using Node.js with NPM/Yarn as package manager. Please refer link below for installation.

```bash
$ node --version  # check node version
```

this project are develop and test on Node v10.13.0. if you meet any error and please check your node version, please keep node version >= v10.10.0

- [Download Node.js ](https://nodejs.org/en/download/) (npm will installed within Node.js by default).

# Install Instruction

## Clone repo
to start work with GitHub, you have to had Git installed. I assume you already have git installed, but if you don't know, you can check in terminal

```bash
$ git --version  # check git version
```
if not installed, please redirec to [download Git](https://git-scm.com/downloads)

```bash
$ git clone https://github.com/mwonng/robot-node-cli.git
$ cd robot-node-cli
```

## Install dependencies

Install dependencies via package manager.

```bash
$ npm install
```

or if you using Yarn.

```bash
$ yarn
```

## Customize your own commands

you can change command in file `./commands.txt` to customize your commands.

Note: command is not seneitive which means, command `MOVE` is same with `move`

## Run this application

```bash
$ node ./bin/index.js
```

or

```bash
$ ./bin/index.js
```

_Note: If you get a 'Invalid regular expression error', please confirm your node's version again to keep it update or at least >= 10.10.0_

## Test

```bash
$ npm test
```

or or if you using Yarn

```bash
$ yarn test
```

## Build a excutable application

```bash
$ npm run build
```

or or if you use yarn

```bash
$ yarn build
```

After run command above, it will build into a binary application which works for Linux, MacOS or Windows excutable application on `./release` folder

---

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
* Input can be from a file, or from standard input, as the developer chooses.
* Provide test data to exercise the application.
* The application must be a command line application.

### Constraints:

* The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
* Any move that would cause the robot to fall must be ignored.

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
### Deliverables

Please provide your source code, and any test code/data you using in
developing your solution.

Please engineer your solution to a standard you consider suitable for
production. It is not required to provide any graphical output showing the
movement of the toy robot.

Please do not put your name in any of the submitted code since this makes it harder for us to review your submission anonymously.