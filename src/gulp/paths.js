const isDebug = process.env.NODE_ENV !== 'production';
const dist = '';
const paths = {
	root: './dist',
	templates: {
		src: ['./src/templates/**/*.pug', '!./src/templates/blocks/*.pug', '!./src/templates/layout/**/*.pug'],
		dest: './dist/'
	},
	styles: {
		src: ['./src/styles/**/*.styl', '!./src/styles/blocks/*.pug'],
		dest: './dist/css/'
	},
	scripts: {
		src: './src/js/**/*.*',
		dest: './dist/js/'
	}
};

export default paths;
