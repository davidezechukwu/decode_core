[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Table of contents

- [Project Name](#project-name)
- [Prerequisites](#prerequisites)
- [Table of contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Building](#building)
- [Running](#running)      
- [Credits](#credits)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Authors](#authors)  



## Project Name

> This is a monorepo containing 3 projects:-
- Core project
- Api project
- WebClient project 

## Prerequisites

NPN_TOKEN = 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

This project requires Docker Desktop For Windows, NodeJS (version 18.12.1 or later) and NPM (version 7.24.2 or later).
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
7.24.2
v18.12.1
```

## Getting Started

Pull the latest from the master branch at 


## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this monorepo on your local machine:

```sh
$ git clone https://github.com/davidezechukwu/pik.git
```

## Building

Build the Core library
```
cd  .\core
$ npm run build
```

Build the API 
```
cd .\api
$ npm run build
```

Build the WebClient
<br/>
<strong>Before building the WebClient, ensure that the API is up and running at port 8888</strong>
```sh
cd .\webclient
$ npm run build
```

## Running
To run the API do this
1. Run \api\src\_infrastructure\docker\os\windows\set-up-port-forwarding-for-wsl2.ps1 using Powershell
2. Open a Terminal and go to .\api\src\_infrastructure\docker\
3. Run docker compose up

Running docker compose up will 
1. Create a SQL Server instance
2. Run migration
3. Create a Redis Server
4. Create a worker process for email sending
5. Create a wprker process for SMS notifications 

Once docker environment is up, go to ./api and run this to start the API 
```sh
cd ./api
$ npm startt
```

This will start the Loopback4 based API

Once the API is running, you can now build the client 


## Built With

* Typescript
* Nextjs

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **David Ezechukwu** -  [GitHub](https://github.com/davidezechukwu)

* davidezechukwu@hotmail.com
 

## License
Please only use for the intended purpose