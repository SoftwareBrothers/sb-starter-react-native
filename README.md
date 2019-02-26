# Software Brothers React Native Starter Kit

### How do I get set up? ###
1. Install npm dependencies
      npm install
2. Install React Native CLI
      npm install -g react-native-cli
2. Running app on a simulator or virtual device
      If you want to run app on the iOS Simulator install Xcode.
      
      You can open the xcodeproject file in Xcode and press play to build and launch the app. Alternatively you can use command:

      react-native run-ios

3. If you dont change native bindings/libraries, you can launch the app on simulator/device and use command `npm start` to launch metro bundler and refresh the app so that it can fetch latest JS package.

## What's inside

### Features
- simple & basic auth flow
- scalable folder structure
- basic resuable components and libs (AsyncStorageHelper, FormField)
- API Service with REST based API
- simple Mock API
- Eslint config

### Libraries
- React, React Native
- React Navigation
- Redux
- Redux Saga
- Reselect
- Formik with Yup schema validation
- Lodash
- Enzyme & Jest

## Status
- TODO: create enzyme config and initial tests
- TODO: finish up documentation
- TODO: polish auth flows, create APIResponseExceptions