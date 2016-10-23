import tinyColor from 'tinyColor2';

const store = window.store = {
	_watchers: [],

	// Loaded
	_isLoaded: false,
	get isLoaded() { return this._isLoaded; },
	set isLoaded(loaded) { this._isLoaded = loaded; this.notify(); },

	// Dev Mode
	_isDevMode: false,
	get isDevMode() { return this._isDevMode; },
	set isDevMode(visible) { this._isDevMode = visible; this.notify(); },

	_currentColor: 'red',
	get currentColor() { return this._currentColor; },
	get analogous() {
		return tinyColor(this._currentColor).analogous();
	},
	get monochrome() {
		return tinyColor(this._currentColor).monochromatic();
	},
	// get alterchrome() {
	// 	const scheme = tinyColor(this._currentColor).monochromatic();
	// 	const [firstColor, ...generatedColors] = scheme;
	// 	const reversedMono = generatedColors.reverse();
	// 	reversedMono.unshift(firstColor);
	// 	return reversedMono;
	// },
	get alterchrome() {
		const scheme = tinyColor(this._currentColor).monochromatic();
		const first = scheme.shift();
		return [first, ...scheme.reverse()];
	},

	get splitcomplement() {
		return tinyColor(this._currentColor).splitcomplement();
	},
	get triad() {
		return tinyColor(this._currentColor).triad();
	},
	get tetrad() {
		return tinyColor(this._currentColor).tetrad();
	},
	get complement() {
		return tinyColor(this._currentColor).complement();
	},
	set currentColor(color) { this._currentColor = color; this.notify(); },

	// Watch
	register(watcher) { this._watchers.push(watcher); },
	notify() { this._watchers.forEach(w => w()); }
};

export default store;
