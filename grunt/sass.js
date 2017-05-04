module.exports = {
  dist: {
	options: {
	  style: 'expanded',
	  sourcemap: 'none'
	},
	files: {
	  'style.css': 'sass/global.scss',      
	  'css/dev.style.css': 'sass/global.scss',
	}
  }
};