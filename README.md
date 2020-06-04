# lidocommon
Common Components ReactNative and ReactNativeWeb
## code sharing between Web, iOS and Android
\
**Technology Used:**\
[React](https://reactjs.org/)\
[React Native](https://facebook.github.io/react-native/)\
[React Native Web](https://github.com/necolas/react-native-web)\
[Lerna](https://github.com/lerna/lerna)\
[Typescript](https://github.com/microsoft/TypeScript)\
\
\
**To Build Library:**\
- Run `npm run build` in root folder.

**To Develop Components:**\
Please follow below mentioned step to run this project:

- Clone the repo
```shell##
git clone git@github.com:shubhadip/lidocommon.git
```
- run **npm install** in root folder

#### To develop
- Run `npm run dev` in root folder.

#### To develop using webpack(for react-native-web)
- Run `npm run web` in root folder.

#### For StoryBook Development
- Run `npm run storybook` in root folder.

### To update library code and develop your native version
- Run `npm run dev` and Run `npm run android` or `npm run ios` on our repository in which you are suppose to use these components.

> to develop android/ios code we have to make a symlink from library to react-native project .

`npm install -g wml`.
`wml add ./lidocommon ./repository/node_modules/lidocommon`
`wml start`.

> now you will get updated code everytime you change something in library code.

## To Import Library
- `import { YourComponent } from 'monoreactrepo'`
