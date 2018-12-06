# nodeJsSample1
* Developed As Demo Project to Learn NodeJs with MongoDB, Express, Mongoose

Open the `CMD` as an administrator then execute below commands,

* To install `express-generator` globally in your system

    `npm install express-generator --save`

    This will install framwork to create NodeJS application integrated with express already ready with some of the ready codes. And if its not installed globally in your system you can install any below required packages using written command. 

* To install other required packages for your project. You can omit `--save` for global installation but if you want to integrate package directly to your project you can append `--save` while installing (only if your are executing command from project directory). 

    `npm install -g mongoose --save`

    `npm install -g express --save`

    `npm install -g body-parser --save`

    `npm install -g cookie-parser --save`

    `npm install -g debug --save`

    `npm install -g http-errors --save`

    `npm install -g jade --save`

    `npm install -g morgan --save`

* For execution of our project on **Save Changes** install nodemon using command,

    `npm install nodeman -g --save`

## Create a Project
*   create a directory with your desired project name using command

    `mkdir nodeJsSample1`

*   switch to that folder using 

    `cd nodeJsSample1`

*   execute command

    `express`

    This will create basic required files and create `package.jason` file. All the information about your project will be there in `package.json` file.

### Installation of Required Components/Libraries/Modules

* To Run this Project first time (your default entry file **app.js** or **index.js**)

    `node app.js` or `nodemon`

    If you start you application using `nodemon` there no need to rerun project using command, when you save your changes it'll automatically restart it. Else if you want to restart using terminal use `rs` to execute. It'll do so. 

    To Get out of executiuon press `ctrl+C` and input `y -> ENTER`. 

