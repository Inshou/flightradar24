const isDebug = process.env.NODE_ENV !== 'production';
const dist = '';
const paths = {
	root: './dist',
	templates: {
		src: ['./src/templates/**/*.pug'],
		dest: './dist/'
	},
	styles: {
		src: ['./src/styles/**/*.styl'],
		dest: './dist/css/'
	},
	scripts: {
		src: './src/js/**/*.*',
		dest: './dist/js/'
	}
};

export default paths;
