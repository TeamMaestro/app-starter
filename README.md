<p align="center">
    <img src="https://avatars1.githubusercontent.com/u/7539657?s=200&v=4">
</p>

# Hive App Starter

Rapidly build web and native (iOS, Android, Desktop) applications using the latest technologies.

_Note_: Documentation and project set-up is still being actively flushed out. This repository is for early adopters to **experiment** with the current configuration.

## What is the Hive App Starter?

An Angular mono-repository set-up that allows developers to seamlessly share app business logic across multiple platforms (web/native/desktop), using technologies they are familiar with: Angular, Ionic, Capacitor, and StencilJS (web components).

### What makes this seed/starter useful?

#### 1. Web Component UI Kit Documentation

Web components with an appropriate README declaration will auto generate into a beautifully designed UI-kit, allowing your development team to quickly discover available components and preview new web components in a pure eco-system.

#### 2. Mono-repo Support for Capacitor

Capacitor out-of-the-box does not support targeting multiple apps from a shared Angular schematics set-up. The set-up scripts included allows you to support multiple capacitor apps (`capacitor.config.json` per app directory) and share UI kits and components without nested dependencies in each apps folder.

#### 3. Rapid Prototyping

Stencil based web components allow you to create core UI elements and immediately consume them in all your apps (regardless of web/native/desktop). Create consistent user interfaces and avoid time crunch of determining font-sizes, weights, colors, container spacing, etc.


### Underlying Technologies
- [Angular](https://angular.io/)
- [Nx](https://nrwl.io/nx)
- [Ionic 4 (Beta)](http://ionic-docs.herokuapp.com/docs)
- [Capacitor](https://capacitor.ionicframework.com/)
- [StencilJS](https://stenciljs.com/)
- [Catalog](https://docs.catalog.style/)
- [Compodoc](https://github.com/compodoc/compodoc)
- HMR (Hot Module Replacement)

## Getting Started

### Articles
- [Testing](https://github.com/TeamHive/app-starter/wiki/Testing)


#### 1. Clone this project
```
git clone https://github.com/TeamHive/app-starter.git projectName
```

#### 2. Install required dependencies
```
cd projectName && npm i
```

#### 3. Build Stencil UI
```
npm run build-ui
```

#### 4a. Running Web
```
npm run start
```

#### 4b. Running Native (serving)
```
npm run start:native
```

#### 4c. Building Native
```
npm run build:native
```

#### 4d. Running Native (iOS)
```
npm run update:ios && npm run open:ios
```

### Contributors

[<img alt="Sean Perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=4&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
