var store = window.store = {
  _watchers: [],

  // Loaded
  _isLoaded: false,
  get isLoaded() { return this._isLoaded; },
  set isLoaded(loaded) { this._isLoaded = loaded; this.notify(); },

  // Dev Mode
  _isDevMode: false,
  get isDevMode() { return this._isDevMode; },
  set isDevMode(visible) { this._isDevMode = visible; this.notify(); },

  // Watch
  register(watcher) { this._watchers.push(watcher); },
  notify() { this._watchers.forEach(w => w()) }
};

  export default store;