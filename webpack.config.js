const path = require('path');

module.exports =  {
    entry: {
      ButtonLido: './src/ButtonLido',
      Card: './src/Card',
      LidoAppText: './src/LidoAppText',
      LidoButton: './src/LidoButton',
      LidoLinkText: './src/LidoLinkText',
      LidoMathText: './src/LidoMathText',
      LidoTextBox: './src/LidoTextBox',
      index: './src/index'
    },
    output: {
      // ./[name]/
        path: path.join(__dirname, '/dist'),
        filename: './[name]/index.js',
        libraryTarget: 'commonjs2'
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },{
            test: /\.(sa|sc|c)ss$/,
            use: [
              'css-loader',
              'sass-loader',
            ],
        }
        ]
      },
      resolve: {
        alias: {
            "react-native$": "react-native-web"
          },
        extensions: [".ts", ".js", ".tsx"]
      }
}

// var path = require('path');
// var commonConfig = {
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 include: path.resolve(__dirname, 'src'),
//                 exclude: /(node_modules|bower_components|build)/,
//                 use: {
//                     loader: 'ts-loader'
//                 }
//             }
//         ]
//     },
//     mode: 'production'
// }

// var components = ['TextReact', 'TextReact2']

// module.exports = components.map((componentName) => {
//   const opPath = __dirname+ '/dist'
//     return Object.assign({}, commonConfig, {
//         name: componentName,
//         entry: './src/' + componentName + '.tsx',
//         output: {
//             path: path.resolve(opPath, componentName),
//             filename: 'index.js',
//             libraryTarget: 'commonjs2'
//         }
//     });
// })
