# Code Kata - Integer Sequence Statistics

## Language/Platform: Javascript

## Goal
Code Kata to process an integer sequence to determine the following statistics:

* Minimum Value
* Maximum Value
* Average Value


E.g. For a integer sequence "6, 9, 15, -2, 92, 11" we have the following answers:

* Minimum Value: -2
* Maximum Value: 92
* Average Value: 18.1666666

Kata Source: [Practicing programming with Code Kata and Javascript/Jasmine](http://pauloortins.com/code-kata-javascript-jasmine/)

## Tools Employed
+ Bower
+ Karma
+ Jasmine (karma-jasmine)
+ RequireJS
+ PhantomJS (If you're interested in Headless Browser testing, like the way this project is configured. If not change the karma config file and you're good.)

## Pre-requisites
+ Node
+ NPM
+ PhantonJS (Optional, if you're interested in headless browser testing.)

## Step-by-step Actions for setting-up project with tools of use and productivity for Code Kata
```
$ mkdir int-seq-kata-js
$ cd int-seq-kata-js

$ bower init
$ bower install karma
$ bower install karma-jasmine
$ bower install requirejs

$ karma init
```

## Inspirations and References
* Blog post by [Ben Nadel](http://www.bennadel.com/blog/2393-Writing-My-First-Unit-Tests-With-Jasmine-And-RequireJS.htm)
* Article by [Paulo Ortins](http://pauloortins.com/codekatas-for-coding-dojos/)