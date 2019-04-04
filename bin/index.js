#!/usr/bin/env node
const RobotService = require('../src/ToyRobot');

const Robot = new RobotService(5,5);
Robot.start();