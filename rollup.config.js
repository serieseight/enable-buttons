import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const config = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'enableButtons',
  plugins: [
    babel()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.dest = 'dist/enable-buttons.min.js'
  config.plugins.push(uglify())
} else {
  config.dest = 'dist/enable-buttons.js'
}

export default config
