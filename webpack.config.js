import { resolve as _resolve } from 'path';

export const mode = 'development';
export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'public'),
  filename: 'main.js',
};
export const target = 'web';
export const devServer = {
  port: 8080,
  static: ['./public'],
  open: true,
  hot: true,
};
export const resolve = {
  extensions: ['.js', '.jsx', '.json'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', { loader: 'css-loader' }],
    },
  ],
};
