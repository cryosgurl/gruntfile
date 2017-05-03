module.exports = {
sass: {
        options: {
			compress: false,
			sourcemap: 'none'
		},
		dist: {
			files: {
				'dist/css/main.css': 'dist/scss/main.scss'
			}
		}
    }
};