module.exports = {
	options: {
		processors: [
		  require('autoprefixer')(),
		  require('rucksack-css')({ fallbacks: true })
		]
	  },
	  dist: {
		src: 'style.css',
		dest: 'style.css'
	  },
	  dev: {
		src: 'css/dev.style.css',
		dest: 'css/dev.style.css'
	  },
};