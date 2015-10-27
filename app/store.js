var store = window.store = {
  _watchers: [],

  // Loaded
  _isLoaded: false,
  get isLoaded() { return this._isLoaded; },
  set isLoaded(loaded) { this._isLoaded = loaded; this.notify(); },

  // Is the infinigrammer loading pics?
  _isInfinigramming: false,
  get isInfinigramming() { return this._isInfinigramming; },
  set isInfinigramming(yes) { this._isInfinigramming = yes; this.notify(); },

  // Nav
  _isNavShowing: false,
  get isNavShowing() { return this._isNavShowing; },
  set isNavShowing(showing) { this._isNavShowing = showing; this.notify(); },

  // Nav Expansion
  _isNavExpanded: false,
  get isNavExpanded() { return this._isNavExpanded; },
  set isNavExpanded(expanded) { this._isNavExpanded = expanded; this.notify(); },

  // Portfolio
  _isProjectExpanded: false,
  get isProjectExpanded() { return this._isProjectExpanded; },
  set isProjectExpanded(expanded) { this._isProjectExpanded = expanded; this.notify(); },

  // Expanded Project
  _expandedProjectId: null,
  get expandedProjectId() { return this._projectId; },
  set expandedProjectId(projectId) { this._projectId = projectId; this.notify(); },

  // Expanded Colophon
 _isColophonShowing: false,
  get isColophonShowing() { return this._isColophonShowing; },
  set isColophonShowing(showing) { this._isColophonShowing = showing; this.notify(); },

  // Mobile
  _isMobile: null,
  get isMobile() { return this._isMobile; },
  set isMobile(mobile) { this._isMobile = mobile; this.notify(); },

  // Dev Mode
  _isDevMode: false,
  get isDevMode() { return this._isDevMode; },
  set isDevMode(visible) { this._isDevMode = visible; this.notify(); },

  // Watch
  register(watcher) { this._watchers.push(watcher); },
  notify() { this._watchers.forEach(w => w()) }
};

  export default store;