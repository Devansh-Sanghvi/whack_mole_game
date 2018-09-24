# whack_mole_game

The code is written in javascript with react as the framework. We are using React-Native-Router-Flux for navigation and redux and redux-thunk to manage states within the app.

Project Code Structure:

App- It has all the javascript files which is to meant run the app.

App.js-its root component, it wraps router and store provider for redux.

Router.js-It contains all the routes for navigation from one screen to another.

Api-its used for making server request, it has all the four method post,put,get,delete.(Not used in this codebase)

Actions- Contains all the action creators for every module.

Reducers-Contains all the reducers, respectively mapped with that particular component.

Components-Contains all the UI components, kept within the folders named according to the modules respectively and also contains styles specific to that component.

CommonComponents- contains all the reusable components like spinner,header, submit button.. etc(Not used in this codebase)

Config-Contains basic configuration like the base-url and theme color of the app.(Not used in this codebase)

images-contains all the images we are using in the app.

IOS-contains all the ios platform specific files, like info.plist, appdelegate.m.

Android-contains all the Android platform specific files, like Android.xml,mainApplication.java.
