# babylon-project-setup
How to setup WebGL application project with Babylon.JS

## Prerequisites
1. Download and install [node.js](https://nodejs.org/en/download/)
2. Download and install [VS Code](https://code.visualstudio.com/download)
3. Open shell (e.g. [Powershell](https://learn.microsoft.com/en-us/powershell/))
4. Install [Typescript](https://www.typescriptlang.org/) globally

    `npm install -g --force typescript`

## Project intialization
1. Create new project folder
2. Open the folder with VS Code
3. Initialize node project (accept all defaults or change whatever is appropriate)

    `npm init`

4. Initialize Typescript config

    `tsc --init`
   
5. Edit **tsconfig.json**:

 ```
{
  . . .
  "target": "es6",
  "module": "es2015",
  "sourceMap": true,
  . . .
}
```

6. Install webpack and other webpack packages

    `npm i webpack webpack-cli ts-loader webpack-dev-server -D`
    
7. Create **webpack.config.js**

```
const path = require ('path')
module.exports = {
    devtool: 'source-map',
    // devtool: 'eval-source-map',
    entry: './src/index.ts',
    // mode: 'production',
    mode: 'development',
    // watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
                // include: [path.resolve (__dirname, 'src')]
            }
        ]
    },
    output: {
        // publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve (__dirname, 'public')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // liveReload: true
    }
}
```

8. Add scripts to build and run on webpack test server to **package.json**

```
{
. . .
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  },
. . .
}
```

9. Install [babylonjs](https://doc.babylonjs.com/setup/frameworkPackages/npmSupport#installing-babylonjs) and other babylonjs packages

    `npm install --save babylonjs babylonjs-gui babylonjs-materials`
    
10. Add babylonjs types definitions to compiler options of **tsconfig.json**

```
{
    . . .
    "compilerOptions": {
        . . .
        "types": [
            "babylonjs",
            "babylonjs-gui",
            "babylonjs-materials"
        ],
        . . .
    },
    . . .
}
```

9. Create source code directory **src** with **index.ts**


10. Create **public** directory with **index.html**


11. Build project

    `npm run build`
    
12. Run project on webpack development server

    `npm run serve`
