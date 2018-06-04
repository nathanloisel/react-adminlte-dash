(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-adminlte-dash"] = factory();
	else
		root["react-adminlte-dash"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Dashboard = __webpack_require__(1);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	var _Header = __webpack_require__(50);

	var _Header2 = _interopRequireDefault(_Header);

	var _Sidebar = __webpack_require__(59);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Dashboard: _Dashboard2.default,
	  Header: _Header2.default,
	  Sidebar: _Sidebar2.default
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* theme */\n  ', '\n\n  min-height: 100vh;\n  position: relative;\n  overflow: hidden;\n\n  ', '\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _Header = __webpack_require__(50);

	var _Header2 = _interopRequireDefault(_Header);

	var _Sidebar = __webpack_require__(59);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _Content = __webpack_require__(64);

	var _Content2 = _interopRequireDefault(_Content);

	var _Footer = __webpack_require__(65);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _styles = __webpack_require__(66);

	var _styles2 = _interopRequireDefault(_styles);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledDashboard = _styledComponents2.default.div(_templateObject, function (props) {
	  return props.theme.sidebarBg && 'background-color: ' + props.theme.sidebarBg + ';';
	}, function (props) {
	  return props.boxed && '\n    max-width: ' + _variables.boxedLayoutMaxWidth + ';\n    margin: 0 auto;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);\n    position: relative;\n  ';
	});

	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);

	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);

	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

	    _this._sidebarToggle = _this.sidebarToggle.bind(_this);

	    _this.state = {
	      sidebarCollapse: _this.props.initialCollapse
	    };
	    return _this;
	  }

	  _createClass(Dashboard, [{
	    key: 'sidebarToggle',
	    value: function sidebarToggle() {
	      this.setState({ sidebarCollapse: !this.state.sidebarCollapse });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = _styles2.default[this.props.theme];
	      return _react2.default.createElement(
	        StyledDashboard,
	        null,
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Header2.default,
	            {
	              logoOnClick: this.props.logoOnClick,
	              logoHref: this.props.logoHref,
	              logoLg: this.props.logoLg,
	              logoSm: this.props.logoSm,
	              fixed: this.props.fixed,
	              sidebarToggle: this._sidebarToggle,
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.navbarChildren
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Sidebar2.default,
	            {
	              fixed: this.props.fixed,
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.sidebarChildren
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Content2.default,
	            {
	              fixed: this.props.fixed,
	              name: 'content-wrapper',
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.children
	          )
	        ),
	        _react2.default.createElement(
	          _styledComponents.ThemeProvider,
	          { theme: theme },
	          _react2.default.createElement(
	            _Footer2.default,
	            {
	              sidebarCollapse: this.state.sidebarCollapse,
	              sidebarMini: this.props.sidebarMini
	            },
	            this.props.footerChildren
	          )
	        )
	      );
	    }
	  }]);

	  return Dashboard;
	}(_react2.default.Component);

	Dashboard.propTypes = {
	  children: _propTypes2.default.node,
	  logoOnClick: _propTypes2.default.func,
	  logoHref: _propTypes2.default.string,
	  logoLg: _propTypes2.default.element,
	  logoSm: _propTypes2.default.element,
	  navbarChildren: _propTypes2.default.node,
	  sidebarChildren: _propTypes2.default.node,
	  footerChildren: _propTypes2.default.node,
	  fixed: _propTypes2.default.bool,
	  sidebarMini: _propTypes2.default.bool,
	  initialCollapse: _propTypes2.default.bool,
	  theme: _propTypes2.default.string
	};

	Dashboard.defaultProps = {
	  fixed: false,
	  initialCollapse: false,
	  sidebarMini: false,
	  theme: 'skin-blue'
	};

	exports.default = Dashboard;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var ReactBaseClasses = __webpack_require__(6);
	var ReactChildren = __webpack_require__(15);
	var ReactDOMFactories = __webpack_require__(23);
	var ReactElement = __webpack_require__(17);
	var ReactPropTypes = __webpack_require__(29);
	var ReactVersion = __webpack_require__(34);

	var createReactClass = __webpack_require__(35);
	var onlyChild = __webpack_require__(37);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var lowPriorityWarning = __webpack_require__(14);
	  var canDefineProperty = __webpack_require__(11);
	  var ReactElementValidator = __webpack_require__(24);
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;
	var createMixin = function (mixin) {
	  return mixin;
	};

	if (process.env.NODE_ENV !== 'production') {
	  var warnedForSpread = false;
	  var warnedForCreateMixin = false;
	  __spread = function () {
	    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
	    warnedForSpread = true;
	    return _assign.apply(null, arguments);
	  };

	  createMixin = function (mixin) {
	    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}

	var React = {
	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: createReactClass,
	  createFactory: createFactory,
	  createMixin: createMixin,

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	if (process.env.NODE_ENV !== 'production') {
	  var warnedForCreateClass = false;
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });

	    Object.defineProperty(React, 'createClass', {
	      get: function () {
	        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
	        warnedForCreateClass = true;
	        return createReactClass;
	      }
	    });
	  }

	  // React.DOM factories are deprecated. Wrap these methods so that
	  // invocations of the React.DOM namespace and alert users to switch
	  // to the `react-dom-factories` package.
	  React.DOM = {};
	  var warnedForFactories = false;
	  Object.keys(ReactDOMFactories).forEach(function (factory) {
	    React.DOM[factory] = function () {
	      if (!warnedForFactories) {
	        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
	        warnedForFactories = true;
	      }
	      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
	    };
	  });
	}

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7),
	    _assign = __webpack_require__(5);

	var ReactNoopUpdateQueue = __webpack_require__(8);

	var canDefineProperty = __webpack_require__(11);
	var emptyObject = __webpack_require__(12);
	var invariant = __webpack_require__(13);
	var lowPriorityWarning = __webpack_require__(14);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(9);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = lowPriorityWarning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(16);
	var ReactElement = __webpack_require__(17);

	var emptyFunction = __webpack_require__(10);
	var traverseAllChildren = __webpack_require__(20);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var invariant = __webpack_require__(13);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var ReactCurrentOwner = __webpack_require__(18);

	var warning = __webpack_require__(9);
	var canDefineProperty = __webpack_require__(11);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(19);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	module.exports = ReactCurrentOwner;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(18);
	var REACT_ELEMENT_TYPE = __webpack_require__(19);

	var getIteratorFn = __webpack_require__(21);
	var invariant = __webpack_require__(13);
	var KeyEscapeUtils = __webpack_require__(22);
	var warning = __webpack_require__(9);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(17);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(24);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(18);
	var ReactComponentTreeHook = __webpack_require__(25);
	var ReactElement = __webpack_require__(17);

	var checkReactTypeSpec = __webpack_require__(26);

	var canDefineProperty = __webpack_require__(11);
	var getIteratorFn = __webpack_require__(21);
	var warning = __webpack_require__(9);
	var lowPriorityWarning = __webpack_require__(14);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	        }

	        var sourceInfo = getSourceInfoErrorAddendum(props);
	        if (sourceInfo) {
	          info += sourceInfo;
	        } else {
	          info += getDeclarationErrorAddendum();
	        }

	        info += ReactComponentTreeHook.getCurrentStackAddendum();

	        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
	        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	        ReactComponentTreeHook.popNonStandardWarningStack();
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2016-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(18);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(9);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty
	  // Strip regex characters so we can use it for regex
	  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
	  // Remove hasOwnProperty from the template to make it generic
	  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs,

	  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
	    if (typeof console.reactStack !== 'function') {
	      return;
	    }

	    var stack = [];
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    try {
	      if (isCreatingElement) {
	        stack.push({
	          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
	          fileName: currentSource ? currentSource.fileName : null,
	          lineNumber: currentSource ? currentSource.lineNumber : null
	        });
	      }

	      while (id) {
	        var element = ReactComponentTreeHook.getElement(id);
	        var parentID = ReactComponentTreeHook.getParentID(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
	        var source = element && element._source;
	        stack.push({
	          name: ownerName,
	          fileName: source ? source.fileName : null,
	          lineNumber: source ? source.lineNumber : null
	        });
	        id = parentID;
	      }
	    } catch (err) {
	      // Internal state is messed up.
	      // Stop building the stack (it's just a nice to have).
	    }

	    console.reactStack(stack);
	  },
	  popNonStandardWarningStack: function () {
	    if (typeof console.reactStackEnd !== 'function') {
	      return;
	    }
	    console.reactStackEnd();
	  }
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactPropTypeLocationNames = __webpack_require__(27);
	var ReactPropTypesSecret = __webpack_require__(28);

	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(9);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(25);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(25);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(17),
	    isValidElement = _require.isValidElement;

	var factory = __webpack_require__(30);

	module.exports = factory(isValidElement);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(31);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(9);
	var assign = __webpack_require__(5);

	var ReactPropTypesSecret = __webpack_require__(32);
	var checkPropTypes = __webpack_require__(33);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(13);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(32);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	module.exports = '15.6.2';

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _require = __webpack_require__(6),
	    Component = _require.Component;

	var _require2 = __webpack_require__(17),
	    isValidElement = _require2.isValidElement;

	var ReactNoopUpdateQueue = __webpack_require__(8);
	var factory = __webpack_require__(36);

	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(5);

	var emptyObject = __webpack_require__(12);
	var _invariant = __webpack_require__(13);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(9);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactElement = __webpack_require__(17);

	var invariant = __webpack_require__(13);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(31)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(39)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(10);
	var invariant = __webpack_require__(13);
	var ReactPropTypesSecret = __webpack_require__(32);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, module) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

	var isPlainObject = _interopDefault(__webpack_require__(42));
	var Stylis = _interopDefault(__webpack_require__(44));
	var _insertRulePlugin = _interopDefault(__webpack_require__(45));
	var React = __webpack_require__(2);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(38));
	var hoist = _interopDefault(__webpack_require__(46));
	var reactIs = __webpack_require__(47);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate$2(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	var hyphenate_1 = hyphenate$2;

	var hyphenate = hyphenate_1;

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	var hyphenateStyleName_1 = hyphenateStyleName;

	// 
	var objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).filter(function (key) {
	    var chunk = obj[key];
	    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
	  }).map(function (key) {
	    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
	    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};

	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
	      return ruleSet;
	    }
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) {
	      return [].concat(ruleSet, flatten(chunk, executionContext));
	    }

	    /* Handle other components */
	    if (chunk.hasOwnProperty('styledComponentId')) {
	      // $FlowFixMe not sure how to make this pass
	      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	    }

	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }

	    /* Handle objects */
	    return ruleSet.concat(
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};

	// 
	// NOTE: This stylis instance is only used to split rules from SSR'd style tags
	var stylisSplitter = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: false,
	  compress: false,
	  semicolon: true
	});

	var stylis = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: false // NOTE: This means "autocomplete missing semicolons"
	});

	// Wrap `insertRulePlugin to build a list of rules,
	// and then make our own plugin to return the rules. This
	// makes it easier to hook into the existing SSR architecture

	var parsingRules = [];
	// eslint-disable-next-line consistent-return
	var returnRulesPlugin = function returnRulesPlugin(context) {
	  if (context === -2) {
	    var parsedRules = parsingRules;
	    parsingRules = [];
	    return parsedRules;
	  }
	};

	var parseRulesPlugin = _insertRulePlugin(function (rule) {
	  parsingRules.push(rule);
	});

	stylis.use([parseRulesPlugin, returnRulesPlugin]);
	stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments

	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};

	var splitByRules = function splitByRules(css) {
	  return stylisSplitter('', css);
	};

	// 

	function isStyledComponent(target) /* : %checks */{
	  return (
	    // $FlowFixMe TODO: flow for styledComponentId
	    typeof target === 'function' && typeof target.styledComponentId === 'string'
	  );
	}

	// 

	/* This function is DEPRECATED and will be removed on the next major version release.
	 * It was needed to rehydrate all style blocks prepended to chunks before React
	 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
	 * the use of streamed style tags and will perform the rehydration earlier when needed
	 * this function will not be needed anymore */
	function consolidateStreamedStyles() {
	  if (process.env.NODE_ENV !== 'production') {
	    // eslint-disable-next-line no-console
	    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
	  }
	}

	// 
	/* eslint-disable no-bitwise */

	/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
	 * counterparts */
	var charsLength = 52;

	/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
	var getAlphabeticChar = function getAlphabeticChar(code) {
	  return String.fromCharCode(code + (code > 25 ? 39 : 97));
	};

	/* input a number, usually a hash and convert it to base-52 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;

	  /* get a char and divide by alphabet-length */
	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = getAlphabeticChar(x % charsLength) + name;
	  }

	  return getAlphabeticChar(x % charsLength) + name;
	};

	// 

	var interleave = (function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};











	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();







	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};



	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};









	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	// 
	var css = (function (styles) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  if (!Array.isArray(styles) && (typeof styles === 'undefined' ? 'undefined' : _typeof(styles)) === 'object') {
	    return flatten(interleave([], [styles].concat(interpolations)));
	  }
	  return flatten(interleave(styles, interpolations));
	});

	var stream = {}

	// 


	var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled-components';
	var SC_STREAM_ATTR = 'data-styled-streamed';
	var CONTEXT_KEY = '__styled-components-stylesheet__';

	var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

	var DISABLE_SPEEDY = typeof false === 'boolean' && false || process.env.NODE_ENV !== 'production';

	// 
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

	var extractComps = (function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;

	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	});

	// 
	/* eslint-disable camelcase, no-undef */

	var getNonce = (function () {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	});

	// 
	// Helper to call a given function, only once
	var once = (function (cb) {
	  var called = false;

	  return function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  };
	});

	// 
	/* These are helpers for the StyleTags to keep track of the injected
	 * rule names for each (component) ID that they're keeping track of.
	 * They're crucial for detecting whether a name has already been
	 * injected.
	 * (This excludes rehydrated names) */

	/* adds a new ID:name pairing to a names dictionary */
	var addNameForId = function addNameForId(names, id, name) {
	  if (name) {
	    // eslint-disable-next-line no-param-reassign
	    var namesForId = names[id] || (names[id] = Object.create(null));
	    namesForId[name] = true;
	  }
	};

	/* resets an ID entirely by overwriting it in the dictionary */
	var resetIdNames = function resetIdNames(names, id) {
	  // eslint-disable-next-line no-param-reassign
	  names[id] = Object.create(null);
	};

	/* factory for a names dictionary checking the existance of an ID:name pairing */
	var hasNameForId = function hasNameForId(names) {
	  return function (id, name) {
	    return names[id] !== undefined && names[id][name];
	  };
	};

	/* stringifies names for the html/element output */
	var stringifyNames = function stringifyNames(names) {
	  var str = '';
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    str += Object.keys(names[id]).join(' ') + ' ';
	  }
	  return str.trim();
	};

	/* clones the nested names dictionary */
	var cloneNames = function cloneNames(names) {
	  var clone = Object.create(null);
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    clone[id] = _extends({}, names[id]);
	  }
	  return clone;
	};

	// 
	/* These are helpers that deal with the insertRule (aka speedy) API
	 * They are used in the StyleTags and specifically the speedy tag
	 */

	/* retrieve a sheet for a given style tag */
	var sheetForTag = function sheetForTag(tag) {
	  // $FlowFixMe
	  if (tag.sheet) return tag.sheet;

	  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
	  var size = document.styleSheets.length;
	  for (var i = 0; i < size; i += 1) {
	    var sheet = document.styleSheets[i];
	    // $FlowFixMe
	    if (sheet.ownerNode === tag) return sheet;
	  }

	  /* we should always be able to find a tag */
	  throw new Error();
	};

	/* insert a rule safely and return whether it was actually injected */
	var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
	  /* abort early if cssRule string is falsy */
	  if (!cssRule) return false;

	  var maxIndex = sheet.cssRules.length;

	  try {
	    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
	    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
	  } catch (err) {
	    /* any error indicates an invalid rule */
	    return false;
	  }

	  return true;
	};

	/* deletes `size` rules starting from `removalIndex` */
	var deleteRules = function deleteRules(sheet, removalIndex, size) {
	  var lowerBound = removalIndex - size;
	  for (var i = removalIndex; i > lowerBound; i -= 1) {
	    sheet.deleteRule(i);
	  }
	};

	// 
	/* eslint-disable flowtype/object-type-delimiter */
	/* eslint-disable react/prop-types */

	/* this error is used for makeStyleTag */
	var parentNodeUnmountedErr = process.env.NODE_ENV !== 'production' ? '\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn\'t mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n'.trim() : '';

	/* this error is used for tags */
	var throwCloneTagErr = function throwCloneTagErr() {
	  throw new Error(process.env.NODE_ENV !== 'production' ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim() : '');
	};

	/* this marker separates component styles and is important for rehydration */
	var makeTextMarker = function makeTextMarker(id) {
	  return '\n/* sc-component-id: ' + id + ' */\n';
	};

	/* add up all numbers in array up until and including the index */
	var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
	  var totalUpToIndex = 0;
	  for (var i = 0; i <= index; i += 1) {
	    totalUpToIndex += sizes[i];
	  }

	  return totalUpToIndex;
	};

	/* create a new style tag after lastEl */
	var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
	  var el = document.createElement('style');
	  el.setAttribute(SC_ATTR, '');

	  var nonce = getNonce();
	  if (nonce) {
	    el.setAttribute('nonce', nonce);
	  }

	  /* Work around insertRule quirk in EdgeHTML */
	  el.appendChild(document.createTextNode(''));

	  if (target && !tagEl) {
	    /* Append to target when no previous element was passed */
	    target.appendChild(el);
	  } else {
	    if (!tagEl || !target || !tagEl.parentNode) {
	      throw new Error(parentNodeUnmountedErr);
	    }

	    /* Insert new style tag after the previous one */
	    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
	  }

	  return el;
	};

	/* takes a css factory function and outputs an html styled tag factory */
	var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
	  return function (additionalAttrs) {
	    var nonce = getNonce();
	    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];

	    var htmlAttr = attrs.filter(Boolean).join(' ');
	    return '<style ' + htmlAttr + '>' + css() + '</style>';
	  };
	};

	/* takes a css factory function and outputs an element factory */
	var wrapAsElement = function wrapAsElement(css, names) {
	  return function () {
	    var _props;

	    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);

	    var nonce = getNonce();
	    if (nonce) {
	      // $FlowFixMe
	      props.nonce = nonce;
	    }

	    // eslint-disable-next-line react/no-danger
	    return React__default.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
	  };
	};

	var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
	  return function () {
	    return Object.keys(markers);
	  };
	};

	/* speedy tags utilise insertRule */
	var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);
	  var sizes = [];

	  var extractImport = getImportRuleTag !== undefined;
	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;

	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }

	    markers[id] = sizes.length;
	    sizes.push(0);
	    resetIdNames(names, id);

	    return markers[id];
	  };

	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var sheet = sheetForTag(el);
	    var insertIndex = addUpUntilIndex(sizes, marker);

	    var injectedRules = 0;
	    var importRules = [];
	    var cssRulesSize = cssRules.length;

	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var cssRule = cssRules[i];
	      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
	      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
	        importRules.push(cssRule);
	      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
	        mayHaveImport = false;
	        injectedRules += 1;
	      }
	    }

	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }

	    sizes[marker] += injectedRules; /* add up no of injected rules */
	    addNameForId(names, id, name);
	  };

	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;

	    var size = sizes[marker];
	    var sheet = sheetForTag(el);
	    var removalIndex = addUpUntilIndex(sizes, marker);
	    deleteRules(sheet, removalIndex, size);
	    sizes[marker] = 0;
	    resetIdNames(names, id);

	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };

	  var css = function css() {
	    var _sheetForTag = sheetForTag(el),
	        cssRules = _sheetForTag.cssRules;

	    var str = '';

	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += makeTextMarker(id);
	      var marker = markers[id];
	      var end = addUpUntilIndex(sizes, marker);
	      var size = sizes[marker];
	      for (var i = end - size; i < end; i += 1) {
	        var rule = cssRules[i];
	        if (rule !== undefined) {
	          str += rule.cssText;
	        }
	      }
	    }

	    return str;
	  };

	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};

	var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);

	  var extractImport = getImportRuleTag !== undefined;
	  var makeTextNode = function makeTextNode(id) {
	    return document.createTextNode(makeTextMarker(id));
	  };

	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;

	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }

	    markers[id] = makeTextNode(id);
	    el.appendChild(markers[id]);
	    names[id] = Object.create(null);

	    return markers[id];
	  };

	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var importRules = [];
	    var cssRulesSize = cssRules.length;

	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var rule = cssRules[i];
	      var mayHaveImport = extractImport;
	      if (mayHaveImport && rule.indexOf('@import') !== -1) {
	        importRules.push(rule);
	      } else {
	        mayHaveImport = false;
	        var separator = i === cssRulesSize - 1 ? '' : ' ';
	        marker.appendData('' + rule + separator);
	      }
	    }

	    addNameForId(names, id, name);

	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }
	  };

	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;

	    /* create new empty text node and replace the current one */
	    var newMarker = makeTextNode(id);
	    el.replaceChild(newMarker, marker);
	    markers[id] = newMarker;
	    resetIdNames(names, id);

	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };

	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += markers[id].data;
	    }
	    return str;
	  };

	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};

	var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
	  var names = namesArg === undefined ? Object.create(null) : namesArg;
	  var markers = markersArg === undefined ? Object.create(null) : markersArg;

	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }

	    return markers[id] = [''];
	  };

	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    marker[0] += cssRules.join(' ');
	    addNameForId(names, id, name);
	  };

	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	    marker[0] = '';
	    resetIdNames(names, id);
	  };

	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      var cssForId = markers[id][0];
	      if (cssForId) {
	        str += makeTextMarker(id) + cssForId;
	      }
	    }
	    return str;
	  };

	  var clone = function clone() {
	    var namesClone = cloneNames(names);
	    var markersClone = Object.create(null);

	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      markersClone[id] = [markers[id][0]];
	    }

	    return makeServerTagInternal(namesClone, markersClone);
	  };

	  var tag = {
	    styleTag: null,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: clone
	  };

	  return tag;
	};

	var makeServerTag = function makeServerTag() {
	  return makeServerTagInternal();
	};

	var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
	  if (IS_BROWSER && !forceServer) {
	    var el = makeStyleTag(target, tagEl, insertBefore);
	    if (DISABLE_SPEEDY) {
	      return makeBrowserTag(el, getImportRuleTag);
	    } else {
	      return makeSpeedyTag(el, getImportRuleTag);
	    }
	  }

	  return makeServerTag();
	};

	/* wraps a given tag so that rehydration is performed once when necessary */
	var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, names, immediateRehydration) {
	  /* rehydration function that adds all rules to the new tag */
	  var rehydrate = once(function () {
	    /* add all extracted components to the new tag */
	    for (var i = 0; i < extracted.length; i += 1) {
	      var _extracted$i = extracted[i],
	          componentId = _extracted$i.componentId,
	          cssFromDOM = _extracted$i.cssFromDOM;

	      var cssRules = splitByRules(cssFromDOM);
	      tag.insertRules(componentId, cssRules);
	    }

	    /* remove old HTMLStyleElements, since they have been rehydrated */
	    for (var _i = 0; _i < els.length; _i += 1) {
	      var el = els[_i];
	      if (el.parentNode) {
	        el.parentNode.removeChild(el);
	      }
	    }
	  });

	  if (immediateRehydration) rehydrate();

	  return _extends({}, tag, {
	    /* add rehydration hook to insertion methods */
	    insertMarker: function insertMarker(id) {
	      rehydrate();
	      return tag.insertMarker(id);
	    },
	    insertRules: function insertRules(id, cssRules, name) {
	      rehydrate();
	      return tag.insertRules(id, cssRules, name);
	    }
	  });
	};

	// 

	/* determine the maximum number of components before tags are sharded */
	var MAX_SIZE = void 0;
	if (IS_BROWSER) {
	  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
	  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
	} else {
	  /* for servers we do not need to shard at all */
	  MAX_SIZE = -1;
	}

	var sheetRunningId = 0;
	var master = void 0;

	var StyleSheet = function () {
	  /* a map from ids to tags */
	  /* deferred rules for a given id */
	  /* this is used for not reinjecting rules via hasNameForId() */
	  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
	  /* a list of tags belonging to this StyleSheet */
	  /* a tag for import rules */
	  /* current capacity until a new tag must be created */
	  /* children (aka clones) of this StyleSheet inheriting all and future injections */

	  function StyleSheet() {
	    var _this = this;

	    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
	    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    classCallCheck(this, StyleSheet);

	    this.getImportRuleTag = function () {
	      var importRuleTag = _this.importRuleTag;

	      if (importRuleTag !== undefined) {
	        return importRuleTag;
	      }

	      var firstTag = _this.tags[0];
	      var insertBefore = true;

	      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
	    };

	    sheetRunningId += 1;
	    this.id = sheetRunningId;
	    this.sealed = false;
	    this.forceServer = forceServer;
	    this.target = forceServer ? null : target;
	    this.tagMap = {};
	    this.deferred = {};
	    this.rehydratedNames = {};
	    this.ignoreRehydratedNames = {};
	    this.tags = [];
	    this.capacity = 1;
	    this.clones = [];
	  }

	  /* rehydrate all SSR'd style tags */


	  StyleSheet.prototype.rehydrate = function rehydrate() {
	    if (!IS_BROWSER || this.forceServer) {
	      return this;
	    }

	    var els = [];
	    var names = [];
	    var extracted = [];
	    var isStreamed = false;

	    /* retrieve all of our SSR style elements from the DOM */
	    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
	    var nodesSize = nodes.length;

	    /* abort rehydration if no previous style tags were found */
	    if (nodesSize === 0) {
	      return this;
	    }

	    for (var i = 0; i < nodesSize; i += 1) {
	      // $FlowFixMe: We can trust that all elements in this query are style elements
	      var el = nodes[i];

	      /* check if style tag is a streamed tag */
	      isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed;

	      /* retrieve all component names */
	      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(/\s+/);
	      var elNamesSize = elNames.length;
	      for (var j = 0; j < elNamesSize; j += 1) {
	        var name = elNames[j];
	        /* add rehydrated name to sheet to avoid readding styles */
	        this.rehydratedNames[name] = true;
	        names.push(name);
	      }

	      /* extract all components and their CSS */
	      extracted = extracted.concat(extractComps(el.textContent));
	      /* store original HTMLStyleElement */
	      els.push(el);
	    }

	    /* abort rehydration if nothing was extracted */
	    var extractedSize = extracted.length;
	    if (extractedSize === 0) {
	      return this;
	    }

	    /* create a tag to be used for rehydration */
	    var tag = this.makeTag(null);
	    var rehydrationTag = makeRehydrationTag(tag, els, extracted, names, isStreamed);

	    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
	    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
	    this.tags.push(rehydrationTag);

	    /* retrieve all component ids */
	    for (var _j = 0; _j < extractedSize; _j += 1) {
	      this.tagMap[extracted[_j].componentId] = rehydrationTag;
	    }

	    return this;
	  };

	  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
	   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
	    * StyleSheetManager's context */


	  /* reset the internal "master" instance */
	  StyleSheet.reset = function reset() {
	    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    master = new StyleSheet(undefined, forceServer).rehydrate();
	  };

	  /* adds "children" to the StyleSheet that inherit all of the parents' rules
	   * while their own rules do not affect the parent */


	  StyleSheet.prototype.clone = function clone() {
	    var sheet = new StyleSheet(this.target, this.forceServer);
	    /* add to clone array */
	    this.clones.push(sheet);

	    /* clone all tags */
	    sheet.tags = this.tags.map(function (tag) {
	      var ids = tag.getIds();
	      var newTag = tag.clone();

	      /* reconstruct tagMap */
	      for (var i = 0; i < ids.length; i += 1) {
	        sheet.tagMap[ids[i]] = newTag;
	      }

	      return newTag;
	    });

	    /* clone other maps */
	    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
	    sheet.deferred = _extends({}, this.deferred);

	    return sheet;
	  };

	  /* force StyleSheet to create a new tag on the next injection */


	  StyleSheet.prototype.sealAllTags = function sealAllTags() {
	    this.capacity = 1;
	    this.sealed = true;
	  };

	  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
	    var lastEl = tag ? tag.styleTag : null;
	    var insertBefore = false;

	    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
	  };

	  /* get a tag for a given componentId, assign the componentId to one, or shard */
	  StyleSheet.prototype.getTagForId = function getTagForId(id) {
	    /* simply return a tag, when the componentId was already assigned one */
	    var prev = this.tagMap[id];
	    if (prev !== undefined && !this.sealed) {
	      return prev;
	    }

	    var tag = this.tags[this.tags.length - 1];

	    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
	    this.capacity -= 1;
	    if (this.capacity === 0) {
	      this.capacity = MAX_SIZE;
	      this.sealed = false;
	      tag = this.makeTag(tag);
	      this.tags.push(tag);
	    }

	    return this.tagMap[id] = tag;
	  };

	  /* mainly for injectGlobal to check for its id */


	  StyleSheet.prototype.hasId = function hasId(id) {
	    return this.tagMap[id] !== undefined;
	  };

	  /* caching layer checking id+name to already have a corresponding tag and injected rules */


	  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
	    /* exception for rehydrated names which are checked separately */
	    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
	      return true;
	    }

	    var tag = this.tagMap[id];
	    return tag !== undefined && tag.hasNameForId(id, name);
	  };

	  /* registers a componentId and registers it on its tag */


	  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
	    /* don't inject when the id is already registered */
	    if (this.tagMap[id] !== undefined) return;

	    var clones = this.clones;

	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].deferredInject(id, cssRules);
	    }

	    this.getTagForId(id).insertMarker(id);
	    this.deferred[id] = cssRules;
	  };

	  /* injects rules for a given id with a name that will need to be cached */


	  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
	    var clones = this.clones;

	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].inject(id, cssRules, name);
	    }

	    /* add deferred rules for component */
	    var injectRules = cssRules;
	    var deferredRules = this.deferred[id];
	    if (deferredRules !== undefined) {
	      injectRules = deferredRules.concat(injectRules);
	      delete this.deferred[id];
	    }

	    var tag = this.getTagForId(id);
	    tag.insertRules(id, injectRules, name);
	  };

	  /* removes all rules for a given id, which doesn't remove its marker but resets it */


	  StyleSheet.prototype.remove = function remove(id) {
	    var tag = this.tagMap[id];
	    if (tag === undefined) return;

	    var clones = this.clones;

	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].remove(id);
	    }

	    /* remove all rules from the tag */
	    tag.removeRules(id);
	    /* ignore possible rehydrated names */
	    this.ignoreRehydratedNames[id] = true;
	    /* delete possible deferred rules */
	    delete this.deferred[id];
	  };

	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };

	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    var id = this.id;


	    return this.tags.map(function (tag, i) {
	      var key = 'sc-' + id + '-' + i;
	      return React.cloneElement(tag.toElement(), { key: key });
	    });
	  };

	  createClass(StyleSheet, null, [{
	    key: 'master',
	    get: function get$$1() {
	      return master || (master = new StyleSheet().rehydrate());
	    }

	    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

	  }, {
	    key: 'instance',
	    get: function get$$1() {
	      return StyleSheet.master;
	    }
	  }]);
	  return StyleSheet;
	}();

	var _StyleSheetManager$ch;

	// 
	/* this error is used for makeStyleTag */
	var targetPropErr = process.env.NODE_ENV !== 'production' ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim() : '';

	var StyleSheetManager = function (_Component) {
	  inherits(StyleSheetManager, _Component);

	  function StyleSheetManager() {
	    classCallCheck(this, StyleSheetManager);
	    return possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;

	    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
	  };

	  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
	    if (this.props.sheet) {
	      this.sheetInstance = this.props.sheet;
	    } else if (this.props.target) {
	      this.sheetInstance = new StyleSheet(this.props.target);
	    } else {
	      throw new Error(targetPropErr);
	    }
	  };

	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return React__default.Children.only(this.props.children);
	  };

	  return StyleSheetManager;
	}(React.Component);

	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);

	process.env.NODE_ENV !== "production" ? StyleSheetManager.propTypes = {
	  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
	  target: PropTypes.shape({
	    appendChild: PropTypes.func.isRequired
	  })
	} : void 0;

	// 
	/* eslint-disable no-underscore-dangle */
	/* this error is used for makeStyleTag */
	var sheetClosedErr = process.env.NODE_ENV !== 'production' ? '\nCan\'t collect styles once you\'ve consumed a ServerStyleSheet\'s styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n'.trim() : '';

	var streamBrowserErr = process.env.NODE_ENV !== 'production' ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.' : '';

	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    classCallCheck(this, ServerStyleSheet);

	    /* The master sheet might be reset, so keep a reference here */
	    this.masterSheet = StyleSheet.master;
	    this.instance = this.masterSheet.clone();
	    this.closed = false;
	  }

	  ServerStyleSheet.prototype.complete = function complete() {
	    if (!this.closed) {
	      /* Remove closed StyleSheets from the master sheet */
	      var index = this.masterSheet.clones.indexOf(this.instance);
	      this.masterSheet.clones.splice(index, 1);
	      this.closed = true;
	    }
	  };

	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) {
	      throw new Error(sheetClosedErr);
	    }

	    return React__default.createElement(
	      StyleSheetManager,
	      { sheet: this.instance },
	      children
	    );
	  };

	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    this.complete();
	    return this.instance.toHTML();
	  };

	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    this.complete();
	    return this.instance.toReactElements();
	  };

	  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
	    var _this = this;

	    {
	      throw new Error(streamBrowserErr);
	    }

	    /* the tag index keeps track of which tags have already been emitted */
	    var instance = this.instance;

	    var instanceTagIndex = 0;

	    var streamAttr = SC_STREAM_ATTR + '="true"';

	    var transformer = new stream.Transform({
	      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
	        var tags = instance.tags;

	        var html = '';

	        /* retrieve html for each new style tag */
	        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
	          var tag = tags[instanceTagIndex];
	          html += tag.toHTML(streamAttr);
	        }

	        /* force our StyleSheets to emit entirely new tags */
	        instance.sealAllTags();

	        /* prepend style html to chunk */
	        this.push(html + chunk);
	        callback();
	      }
	    });

	    readableStream.on('end', function () {
	      return _this.complete();
	    });
	    readableStream.on('error', function (err) {
	      _this.complete();

	      // forward the error to the transform stream
	      transformer.emit('error', err);
	    });

	    return readableStream.pipe(transformer);
	  };

	  return ServerStyleSheet;
	}();

	// 

	var LIMIT = 200;

	var createWarnTooManyClasses = (function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;

	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	});

	// 

	var determineTheme = (function (props, fallbackTheme, defaultProps) {
	  // Props should take precedence over ThemeProvider, which should take precedence over
	  // defaultProps, but React automatically puts defaultProps on props.

	  /* eslint-disable react/prop-types */
	  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
	  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
	  /* eslint-enable */

	  return theme;
	});

	// 
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
	var dashesAtEnds = /(^-|-$)/g;

	/**
	 * TODO: Explore using CSS.escape when it becomes more available
	 * in evergreen browsers.
	 */
	function escape(str) {
	  return str
	  // Replace all possible CSS selectors
	  .replace(escapeRegex, '-')

	  // Remove extraneous hyphens at the start and end
	  .replace(dashesAtEnds, '');
	}

	// 

	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}

	// 

	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}

	// 
	function generateDisplayName(target) {
	  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
	}

	// 
	/* eslint-disable max-len */
	/**
	 * Trying to avoid the unknown-prop errors on styled components by filtering by
	 * React's attribute whitelist.
	 *
	 * To regenerate this regex:
	 *
	 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
	 * 2. Run `regexgen` with the list of space-separated words below as input
	 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
	 *    and no false positives from partials
	 * */
	/*
	children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
	*/
	/* eslint-enable max-len */

	var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|onPointerOu|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|unicodeRange|mathematical|vAlphabetic|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|autoPlay|o(?:verflow|pen)|f(?:o(?:ntSize|rm)|il(?:ter|l))|r(?:e(?:quired|sult|f))?|divisor|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|i(?:temRef|n2|s)|t(?:arget[XY]|o)|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|prefix|typeof|itemID|s(?:t(?:roke|art)|hape|cope|rc)|t(?:arget|ype)|(?:stri|la)ng|a(?:ccept|s)|m(?:edia|a(?:sk|x)|in)|x(?:mlns)?|width|value|size|href|k(?:ey)?|end|low|by|i[dn]|y[12]|g[12]|x[12]|f[xy]|[yz])$/;

	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

	var validAttr = (function (name) {
	  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
	});

	// 

	function hasInInheritanceChain(child, parent) {
	  var target = child;

	  while (target) {
	    target = Object.getPrototypeOf(target);

	    if (target && target === parent) {
	      return true;
	    }
	  }

	  return false;
	}

	// 
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */

	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;

	  function publish(nextState) {
	    state = nextState;

	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in listeners) {
	      var listener = listeners[key];
	      if (listener === undefined) {
	        // eslint-disable-next-line no-continue
	        continue;
	      }

	      listener(state);
	    }
	  }

	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }

	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }

	  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
	};

	var _ThemeProvider$childC;
	var _ThemeProvider$contex;

	// 
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var CHANNEL = '__styled-components__';
	var CHANNEL_NEXT = CHANNEL + 'next__';

	var CONTEXT_CHANNEL_SHAPE = PropTypes.shape({
	  getTheme: PropTypes.func,
	  subscribe: PropTypes.func,
	  unsubscribe: PropTypes.func
	});

	var warnChannelDeprecated = void 0;
	if (process.env.NODE_ENV !== 'production') {
	  warnChannelDeprecated = once(function () {
	    // eslint-disable-next-line no-console
	    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
	  });
	}

	var isFunction = function isFunction(test) {
	  return typeof test === 'function';
	};

	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */

	var ThemeProvider = function (_Component) {
	  inherits(ThemeProvider, _Component);

	  function ThemeProvider() {
	    classCallCheck(this, ThemeProvider);

	    var _this = possibleConstructorReturn(this, _Component.call(this));

	    _this.unsubscribeToOuterId = -1;

	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }

	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    var outerContext = this.context[CHANNEL_NEXT];
	    if (outerContext !== undefined) {
	      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
	        _this2.outerTheme = theme;

	        if (_this2.broadcast !== undefined) {
	          _this2.publish(_this2.props.theme);
	        }
	      });
	    }

	    this.broadcast = createBroadcast(this.getTheme());
	  };

	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _this3 = this,
	        _babelHelpers$extends;

	    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
	      getTheme: this.getTheme,
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
	      if (process.env.NODE_ENV !== 'production') {
	        warnChannelDeprecated();
	      }

	      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
	      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
	      return function () {
	        return _this3.broadcast.unsubscribe(unsubscribeId);
	      };
	    }, _babelHelpers$extends));
	  };

	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };

	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribeToOuterId !== -1) {
	      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
	    }
	  };

	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation


	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if (isFunction(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
	      }
	      return mergedTheme;
	    }
	    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
	      throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please make your theme prop an object' : '');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };

	  ThemeProvider.prototype.publish = function publish(theme) {
	    this.broadcast.publish(this.getTheme(theme));
	  };

	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return React__default.Children.only(this.props.children);
	  };

	  return ThemeProvider;
	}(React.Component);

	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = PropTypes.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);

	// 

	// HACK for generating all static styles without needing to allocate
	// an empty execution context every single time...
	var STATIC_EXECUTION_CONTEXT = {};

	var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
	  var identifiers = {};

	  /* We depend on components having unique IDs */
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

	    var componentId = void 0;

	    /**
	     * only fall back to hashing the component injection order if
	     * a proper displayName isn't provided by the babel plugin
	     */
	    if (!_displayName) {
	      var nr = (identifiers[displayName] || 0) + 1;
	      identifiers[displayName] = nr;

	      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
	    } else {
	      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
	    }

	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };

	  // $FlowFixMe

	  var BaseStyledComponent = function (_Component) {
	    inherits(BaseStyledComponent, _Component);

	    function BaseStyledComponent() {
	      var _temp, _this, _ret;

	      classCallCheck(this, BaseStyledComponent);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };

	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;

	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }

	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' && !hasInInheritanceChain(attr, React.Component) ? attr(context) : attr;
	        return acc;
	      }, {});

	      return _extends({}, context, this.attrs);
	    };

	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          attrs = _constructor.attrs,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;

	      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;

	      // staticaly styled-components don't need to build an execution context object,
	      // and shouldn't be increasing the number of class names
	      if (componentStyle.isStatic && attrs === undefined) {
	        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
	      } else {
	        var executionContext = this.buildExecutionContext(theme, props);
	        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);

	        if (process.env.NODE_ENV !== 'production' && warnTooManyClasses !== undefined) {
	          warnTooManyClasses(className);
	        }

	        return className;
	      }
	    };

	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;

	      var componentStyle = this.constructor.componentStyle;

	      var styledContext = this.context[CHANNEL_NEXT];

	      // If this is a staticaly-styled component, we don't need to the theme
	      // to generate or build styles.
	      if (componentStyle.isStatic) {
	        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
	        this.setState({ generatedClassName: generatedClassName });
	        // If there is a theme in the context, subscribe to the event emitter. This
	        // is necessary due to pure components blocking context updates, this circumvents
	        // that by updating when an event is emitted
	      } else if (styledContext !== undefined) {
	        var subscribe = styledContext.subscribe;

	        this.unsubscribeId = subscribe(function (nextTheme) {
	          // This will be called once immediately
	          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);

	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        // eslint-disable-next-line react/prop-types
	        var theme = this.props.theme || {};
	        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
	        this.setState({ theme: theme, generatedClassName: _generatedClassName });
	      }
	    };

	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      // If this is a statically-styled component, we don't need to listen to
	      // props changes to update styles
	      var componentStyle = this.constructor.componentStyle;

	      if (componentStyle.isStatic) {
	        return;
	      }

	      this.setState(function (prevState) {
	        var theme = determineTheme(nextProps, prevState.theme, _this3.constructor.defaultProps);
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };

	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.unsubscribeFromContext();
	    };

	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;

	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;


	      var isTargetTag = isTag(target);

	      var className = [
	      // eslint-disable-next-line react/prop-types
	      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');

	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });

	      if (isStyledComponent(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }

	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }

	        return acc;
	      }, baseProps);

	      return React.createElement(target, propsForElement);
	    };

	    return BaseStyledComponent;
	  }(React.Component);

	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;

	    var _options$isClass = options.isClass,
	        isClass = _options$isClass === undefined ? !isTag(target) : _options$isClass,
	        _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;


	    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;

	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);

	    var StyledComponent = function (_ParentComponent) {
	      inherits(StyledComponent, _ParentComponent);

	      function StyledComponent() {
	        classCallCheck(this, StyledComponent);
	        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }

	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = objectWithoutProperties(options, ['componentId']);


	        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });

	        return createStyledComponent(tag, newOptions, rules);
	      };

	      createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get$$1() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);


	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);

	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });

	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	      return StyledComponent;
	    }(ParentComponent);

	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = PropTypes.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);


	    if (process.env.NODE_ENV !== 'production') {
	      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
	    }

	    if (isClass) hoist(StyledComponent, target);

	    // we do this after hoisting to ensure we're overwriting existing
	    // rules when wrapping another styled component class
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.target = target;

	    return StyledComponent;
	  };

	  return createStyledComponent;
	});

	// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash(str) {
	  var l = str.length | 0,
	      h = l | 0,
	      i = 0,
	      k;

	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

	    l -= 4;
	    ++i;
	  }

	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }

	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;

	  return h >>> 0;
	}

	// 
	var areStylesCacheable = IS_BROWSER;

	var isStaticRules = function isStaticRules(rules, attrs) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];

	    // recursive case
	    if (Array.isArray(rule) && !isStaticRules(rule)) {
	      return false;
	    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled component
	      return false;
	    }
	  }

	  if (attrs !== undefined) {
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in attrs) {
	      var value = attrs[key];
	      if (typeof value === 'function') {
	        return false;
	      }
	    }
	  }

	  return true;
	};

	var isHMREnabled = typeof module !== 'undefined' && module.hot && process.env.NODE_ENV !== 'production';

	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
	  /* combines hashStr (murmurhash) and nameGenerator for convenience */
	  var generateRuleHash = function generateRuleHash(str) {
	    return nameGenerator(murmurhash(str));
	  };

	  var ComponentStyle = function () {
	    function ComponentStyle(rules, attrs, componentId) {
	      classCallCheck(this, ComponentStyle);

	      this.rules = rules;
	      this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
	      this.componentId = componentId;

	      if (!StyleSheet.master.hasId(componentId)) {
	        var placeholder = process.env.NODE_ENV !== 'production' ? ['.' + componentId + ' {}'] : [];

	        StyleSheet.master.deferredInject(componentId, placeholder);
	      }
	    }

	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */


	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var isStatic = this.isStatic,
	          componentId = this.componentId,
	          lastClassName = this.lastClassName;

	      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
	        return lastClassName;
	      }

	      var flatCSS = flatten(this.rules, executionContext);
	      var name = generateRuleHash(this.componentId + flatCSS.join(''));

	      if (!styleSheet.hasNameForId(componentId, name)) {
	        var css = stringifyRules(flatCSS, '.' + name);
	        styleSheet.inject(this.componentId, css, name);
	      }

	      this.lastClassName = name;
	      return name;
	    };

	    ComponentStyle.generateName = function generateName(str) {
	      return generateRuleHash(str);
	    };

	    return ComponentStyle;
	  }();

	  return ComponentStyle;
	});

	// 
	// Thanks to ReactDOMFactories for this handy list!

	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

	// 
	var _styled = (function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };

	  // Shorthands for all valid HTML Elements
	  domElements.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });

	  return styled;
	});

	// 
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};

	var _keyframes = (function (nameGenerator, stringifyRules, css) {
	  return function () {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
	    var id = 'sc-keyframes-' + name;

	    if (!styleSheet.hasNameForId(id, name)) {
	      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
	    }

	    return name;
	  };
	});

	// 
	var _injectGlobal = (function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal() {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var hash = murmurhash(JSON.stringify(rules));
	    var id = 'sc-global-' + hash;

	    if (!styleSheet.hasId(id)) {
	      styleSheet.inject(id, stringifyRules(rules));
	    }
	  };

	  return injectGlobal;
	});

	// 
	var _constructWithOptions = (function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    if (!reactIs.isValidElementType(tag)) {
	      throw new Error(process.env.NODE_ENV !== 'production' ? 'Cannot create styled-component for component: ' + String(tag) : '');
	    }

	    /* This is callable directly as a template function */
	    // $FlowFixMe: Not typed to avoid destructuring arguments
	    var templateFunction = function templateFunction() {
	      return componentConstructor(tag, options, css.apply(undefined, arguments));
	    };

	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs)
	      }));
	    };

	    return templateFunction;
	  };

	  return constructWithOptions;
	});

	// 
	var wrapWithTheme = function wrapWithTheme(Component$$1) {
	  var _WithTheme$contextTyp;

	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
	  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' &&
	  // $FlowFixMe TODO: flow for prototype
	  !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);

	  // NOTE: We can't pass a ref to a stateless functional component
	  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;

	  var WithTheme = function (_React$Component) {
	    inherits(WithTheme, _React$Component);

	    function WithTheme() {
	      var _temp, _this, _ret;

	      classCallCheck(this, WithTheme);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }

	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping


	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;

	      var defaultProps = this.constructor.defaultProps;

	      var styledContext = this.context[CHANNEL_NEXT];
	      var themeProp = determineTheme(this.props, undefined, defaultProps);
	      if (styledContext === undefined && themeProp === undefined && process.env.NODE_ENV !== 'production') {
	        // eslint-disable-next-line no-console
	        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
	      } else if (styledContext === undefined && themeProp !== undefined) {
	        this.setState({ theme: themeProp });
	      } else {
	        var subscribe = styledContext.subscribe;

	        this.unsubscribeId = subscribe(function (nextTheme) {
	          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
	          _this2.setState({ theme: theme });
	        });
	      }
	    };

	    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var defaultProps = this.constructor.defaultProps;

	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, defaultProps);

	        return { theme: theme };
	      });
	    };

	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };

	    WithTheme.prototype.render = function render() {
	      var props = _extends({
	        theme: this.state.theme
	      }, this.props);

	      if (!shouldSetInnerRef) {
	        props.ref = props.innerRef;
	        delete props.innerRef;
	      }

	      return React__default.createElement(Component$$1, props);
	    };

	    return WithTheme;
	  }(React__default.Component);

	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = PropTypes.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);


	  return hoist(WithTheme, Component$$1);
	};

	// 

	/* eslint-disable */
	var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
	  StyleSheet: StyleSheet
	};

	// 

	/* Import singletons */
	/* Import singleton constructors */
	/* Import components */
	/* Import Higher Order Components */
	/* Warning if you've imported this file on React Native */
	if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	  // eslint-disable-next-line no-console
	  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
	}

	/* Warning if there are several instances of styled-components */
	if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
	  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

	  if (window['__styled-components-init__'] === 1) {
	    // eslint-disable-next-line no-console
	    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
	  }

	  window['__styled-components-init__'] += 1;
	}

	/* Instantiate singletons */
	var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
	var constructWithOptions = _constructWithOptions(css);
	var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);

	/* Instantiate exported singletons */
	var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
	var injectGlobal = _injectGlobal(stringifyRules, css);
	var styled = _styled(StyledComponent, constructWithOptions);

	exports['default'] = styled;
	exports.css = css;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.isStyledComponent = isStyledComponent;
	exports.consolidateStreamedStyles = consolidateStreamedStyles;
	exports.ThemeProvider = ThemeProvider;
	exports.withTheme = wrapWithTheme;
	exports.ServerStyleSheet = ServerStyleSheet;
	exports.StyleSheetManager = StyleSheetManager;
	exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;
	//# sourceMappingURL=styled-components.browser.cjs.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(41)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(43);

	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	module.exports = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	(function (factory) {/* eslint-disable */
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {/* eslint-disable */

		'use strict'

		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ----
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */

		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
		var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
		var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
		var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
		var trimptn = /[ \t]+$/ /* match tail whitspace */
		var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available

		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'

		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */

		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 169 /* <at>i */
		var CHARSET = 163 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
		var PAGE = 112 /* <at>p */

		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */

		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var prefix = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */

		/* empty reference */
		var array = []

		/* plugins */
		var plugins = []
		var plugged = 0
		var should = null

		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3

		/* plugin newline context */
		var unkwn = 0

		/* keyframe animation */
		var keyed = 1
		var key = ''

		/* selector namespace */
		var nscopealt = ''
		var nscope = ''

		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @param {number} depth
		 * @return {string}
		 */
		function compile (parent, current, body, id, depth) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */

			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */

			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */

			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */

			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)

				// eof varient
				if (caret === eol) {
					// last character + noop context, add synthetic padding for noop context to terminate
					if (comment + quote + parentheses + bracket !== 0) {
						if (comment !== 0) {
							code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
						}

						quote = parentheses = bracket = 0
						eof++
						eol++
					}
				}

				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}

						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}

							code = SEMICOLON
						}
					}

					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case CLOSEBRACES:
							case SEMICOLON:
							case DOUBLEQUOTE:
							case SINGLEQUOTE:
							case OPENPARENTHESES:
							case CLOSEPARENTHESES:
							case COMMA: {
								insert = 0
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								insert = 0
								length = caret
								first = code
								caret--
								code = SEMICOLON

								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON: {
											++caret
											code = first
											length = eof
											break
										}
										case COLON: {
											if (format > 0) {
												++caret
												code = first
											}
										}
										case OPENBRACES: {
											length = eof
										}
									}
								}
							}
						}
					}

					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret

							while (caret < eof) {
								code = body.charCodeAt(caret)

								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}

								if (counter === 0) {
									break
								}

								caret++
							}

							child = body.substring(length, caret)

							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}

							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}

									second = chars.charCodeAt(1)

									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS:
										case DASH: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}

									child = compile(current, selector, child, second, depth+1)
									length = child.length

									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}

									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
										chars = selector.join('')

										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}

									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA:
											case DASH: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'

												if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
													child = '@' + webkit + child + '@' + child
												} else {
													child = '@' + child
												}
												break
											}
											default: {
												child = chars + child

												if (id === PAGE) {
													child = (out += child, '')
												}
											}
										}
									} else {
										child = ''
									}

									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id, depth+1)
								}
							}

							children += child

							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()

							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)

									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123)) {
										length = (chars = chars.replace(' ', ':')).length
									}
								}

								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0'
										}
									}
								}

								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)

								switch (first + second) {
									case NULL: {
										break
									}
									case IMPORT:
									case CHARSET: {
										flat += chars + body.charAt(caret)
										break
									}
									default: {
										if (chars.charCodeAt(length-1) === COLON)
											break

										out += property(chars, first, second, chars.charCodeAt(2))
									}
								}
							}

							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}

				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}

						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						} else if (cascade + context === 0) {
							format = 1
							chars += '\0'
						}

						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
						}

						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++

						// current character
						char = body.charAt(caret)

						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket + comment === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}

									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}

								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												length = caret
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											// /*<!> ... */, !
											if (body.charCodeAt(length+2) === 33) {
												out += body.substring(length, caret+1)
											}
											char = ''
											comment = 0
										}
									}
								}
							}
						}

						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case TAB:
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}

							// concat buffer of characters
							chars += char

							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code
							}
						}
					}
				}

				// tail character codes
				trail = tail
				tail = code

				// visit every character
				caret++
			}

			length = out.length

			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2
	 				}
	 			}
			}

			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current

				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)

					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}

				out = selector.join(',') + '{' + out + '}'

				if (prefix*pattern !== 0) {
					if (prefix === 2 && !vendor(out, 2))
						pattern = 0

					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}

					pattern = 0
				}
			}

			return flat + out + children
		}

		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors

			var length = selectors.length
			var l = parent.length

			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}

			return out
		}

		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)

			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}

			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}

			return parent + selector
		}

		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache

			// animation: a, n, i characters
			if (hash === 944) {
				return animation(out)
			} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
				return out
			}

			// vendor prefix
			switch (hash) {
				// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
				case 1015: {
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out
				}
				// filter/fill f, i, l
				case 951: {
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out
				}
				// color/column, c, o, l
				case 963: {
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out
				}
				// box-decoration-break, b, o, x
				case 1009: {
					if (out.charCodeAt(4) !== 100) {
						break
					}
				}
				// mask, m, a, s
				// clip-path, c, l, i
				case 969:
				case 942: {
					return webkit + out + out
				}
				// appearance: a, p, p
				case 978: {
					return webkit + out + moz + out + out
				}
				// hyphens: h, y, p
				// user-select: u, s, e
				case 1019:
				case 983: {
					return webkit + out + moz + out + ms + out + out
				}
				// background/backface-visibility, b, a, c
				case 883: {
					// backface-visibility, -
					return out.charCodeAt(8) === DASH ? webkit + out + out : out
				}
				// flex: f, l, e
				case 932: {
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103: {
								return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
							}
							// flex-shrink, s
							case 115: {
								return webkit + out + ms + out.replace('shrink', 'negative') + out
							}
							// flex-basis, b
							case 98: {
								return webkit + out + ms + out.replace('basis', 'preferred-size') + out
							}
						}
					}

					return webkit + out + ms + out + out
				}
				// order: o, r, d
				case 964: {
					return webkit + out + ms + 'flex' + '-' + out + out
				}
				// justify-items/justify-content, j, u, s
				case 1023: {
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break
					}

					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
				}
				// cursor, c, u, r
				case 1005: {
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
				}
				// writing-mode, w, r, i
				case 1000: {
					cache = out.substring(13).trim()
					index = cache.indexOf('-') + 1

					switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
						// vertical-lr
						case 226: {
							cache = out.replace(writingptn, 'tb')
							break
						}
						// vertical-rl
						case 232: {
							cache = out.replace(writingptn, 'tb-rl')
							break
						}
						// horizontal-tb
						case 220: {
							cache = out.replace(writingptn, 'lr')
							break
						}
						default: {
							return out
						}
					}

					return webkit + out + ms + cache + out
				}
				// position: sticky
				case 1017: {
					if (out.indexOf('sticky', 9) === -1) {
						return out
					}
				}
				// display(flex/inline-flex/inline-box): d, i, s
				case 975: {
					index = (out = input).length - 10
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()

					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
						// inline-
						case 203: {
							// inline-box
							if (cache.charCodeAt(8) < 111) {
								break
							}
						}
						// inline-box/sticky
						case 115: {
							out = out.replace(cache, webkit+cache)+';'+out
							break
						}
						// inline-flex
						// flex
						case 207:
						case 102: {
							out = (
								out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
								out.replace(cache, webkit+cache)+';'+
								out.replace(cache, ms+cache+'box')+';'+
								out
							)
						}
					}

					return out + ';'
				}
				// align-items, align-center, align-self: a, l, i, -
				case 938: {
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105: {
								cache = out.replace('-items', '')
								return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
							}
							// align-self, s
							case 115: {
								return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
							}
							// align-content
							default: {
								return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
							}
						}
					}
					break
				}
				// min/max
				case 973:
				case 989: {
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break
					}
				}
				// height/width: min-content / width: max-content
				case 931:
				case 953: {
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
							return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
						else
							return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
					}
					break
				}
				// transform, transition: t, r, a
				case 962: {
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
					}

					break
				}
			}

			return out
		}

		/**
		 * Vendor
		 *
		 * @param {string} content
		 * @param {number} context
		 * @return {boolean}
		 */
		function vendor (content, context) {
			var index = content.indexOf(context === 1 ? ':' : '{')
			var key = content.substring(0, context !== 3 ? index : 10)
			var value = content.substring(index + 1, content.length - 1)

			return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
		}

		/**
		 * Supports
		 *
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))

			return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
		}

		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var out = input.substring(index, length-1).trim()

			switch (input.charCodeAt(9)*keyed) {
				case 0: {
					break
				}
				// animation-*, -
				case DASH: {
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break
					}
				}
				// animation/animation-name
				default: {
					// split in case of multiple animations
					var list = out.split((out = '', animationptn))

					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i]
						var items = value.split(propertiesptn)

						while (value = items[index]) {
							var peak = value.charCodeAt(0)

							if (keyed === 1 && (
								// letters
								(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
								// dash but not in sequence i.e --
								(peak === DASH && value.charCodeAt(1) !== DASH)
							)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1: {
										switch (value) {
											// not a valid reserved keyword
											case 'infinite': case 'alternate': case 'backwards': case 'running':
											case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
											case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
											case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
											case 'initial': case 'unset': case 'step-start': case 'step-end': {
												break
											}
											default: {
												value += key
											}
										}
									}
								}
							}

							items[index++] = value
						}

						out += (i === 0 ? '' : ',') + items.join(' ')
					}
				}
			}

			out = declare + out + ';'

			if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
				return webkit + out + out

			return out
		}

		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''

				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}

					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''

					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}

					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}

					out += element
				}

				selector[i] = out.replace(formatptn, '').trim()
			}

			return selector
		}

		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @param {number} depth
		 * @param {number} at
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}

			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}

		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}

		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}

	 		return use
		}

		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
					case 'prefix':
						should = null

						if (!value) {
							prefix = 0
						} else if (typeof value !== 'function') {
							prefix = 1
						} else {
							prefix = 2
							should = value
						}
				}
			}

			return set
		}

		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}

			// setup
			var ns = selector
			var code = ns.charCodeAt(0)

			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}

			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}

			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1

			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}

			var selectors = [nscope]
			var result

			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)

				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}

			// build
			var output = compile(array, selectors, input, 0, 0)

			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)

				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}

			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1

			return compress*code === 0 ? output : minify(output)
		}

		stylis['use'] = use
		stylis['set'] = set

		if (options !== void 0) {
			set(options)
		}

		return stylis
	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function (factory) {
		 true ? (module['exports'] = factory()) :
			typeof define === 'function' && define['amd'] ? define(factory()) :
				(window['stylisRuleSheet'] = factory())
	}(function () {

		'use strict'

		return function (insertRule) {
			var delimiter = '/*|*/'
			var needle = delimiter+'}'

			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}')
					} catch (e) {}
			}

			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet)
				}
			}
		}
	}))

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.hoistNonReactStatics = factory());
	}(this, (function () {
	    'use strict';
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(48);
	} else {
	  module.exports = __webpack_require__(49);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	/** @license React v16.4.0
	 * react-is.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.forward_ref"):60112,n=b?Symbol.for("react.timeout"):60113;
	function q(a){if("object"===typeof a&&null!==a){var p=a.$$typeof;switch(p){case c:switch(a=a.type,a){case l:case e:case g:case f:return a;default:switch(a=a&&a.$$typeof,a){case k:case m:case h:return a;default:return p}}case d:return p}}}exports.typeOf=q;exports.AsyncMode=l;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=m;exports.Fragment=e;exports.Profiler=g;exports.Portal=d;exports.StrictMode=f;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===l||a===g||a===f||a===n||"object"===typeof a&&null!==a&&(a.$$typeof===h||a.$$typeof===k||a.$$typeof===m)};exports.isAsyncMode=function(a){return q(a)===l};exports.isContextConsumer=function(a){return q(a)===k};exports.isContextProvider=function(a){return q(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return q(a)===m};
	exports.isFragment=function(a){return q(a)===e};exports.isProfiler=function(a){return q(a)===g};exports.isPortal=function(a){return q(a)===d};exports.isStrictMode=function(a){return q(a)===f};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.4.0
	 * react-is.development.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;

	function isAsyncMode(object) {
	  return typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Profiler = Profiler;
	exports.Portal = Portal;
	exports.StrictMode = StrictMode;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isProfiler = isProfiler;
	exports.isPortal = isPortal;
	exports.isStrictMode = isStrictMode;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  position: ', ';\n  width: ', ';\n  max-height: 100px;\n  z-index: 1030;\n\n  /* theme */\n  ', '\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _Navbar = __webpack_require__(51);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Logo = __webpack_require__(55);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _UserMenu = __webpack_require__(56);

	var _UserMenu2 = _interopRequireDefault(_UserMenu);

	var _NavItem = __webpack_require__(58);

	var _NavItem2 = _interopRequireDefault(_NavItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledHeader = _styledComponents2.default.header(_templateObject, function (props) {
	  return props.fixed ? 'fixed' : 'relative';
	}, function (props) {
	  return props.boxed ? '1024px' : '100%';
	}, function (props) {
	  return props.theme.headerBoxShadow && '\n    -webkit-box-shadow: ' + props.theme.headerBoxShadow + ';\n    box-shadow: ' + props.theme.headerBoxShadow + ';\n  ';
	});

	var Header = function Header(props) {
	  return _react2.default.createElement(
	    StyledHeader,
	    { fixed: props.fixed },
	    _react2.default.createElement(_Logo2.default, {
	      collapse: props.sidebarCollapse,
	      sidebarMini: props.sidebarMini,
	      onClick: props.logoOnClick,
	      href: props.logoHref,
	      logoLg: props.logoLg,
	      logoSm: props.logoSm
	    }),
	    _react2.default.createElement(
	      _Navbar2.default,
	      {
	        toggle: props.sidebarToggle,
	        collapse: props.sidebarCollapse,
	        sidebarMini: props.sidebarMini
	      },
	      props.children
	    )
	  );
	};

	Header.propTypes = {
	  children: _propTypes2.default.node,
	  fixed: _propTypes2.default.bool,
	  logoOnClick: _propTypes2.default.func,
	  logoHref: _propTypes2.default.string,
	  logoLg: _propTypes2.default.element,
	  logoSm: _propTypes2.default.element,
	  sidebarMini: _propTypes2.default.bool,
	  sidebarCollapse: _propTypes2.default.bool,
	  sidebarToggle: _propTypes2.default.func.isRequired
	};

	Header.defaultProps = {
	  fixed: false,
	  sidebarMini: false,
	  sidebarCollapse: false,
	  logoLg: _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(
	      'b',
	      null,
	      'Admin'
	    ),
	    'LTE'
	  ),
	  logoSm: _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(
	      'b',
	      null,
	      'A'
	    ),
	    'LT'
	  )
	};

	Header.UserMenu = _UserMenu2.default;
	Header.Item = _NavItem2.default;

	exports.default = Header;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n'], ['\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  box-sizing: border-box;\n  display: block;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    float: left;\n  }\n  @media (min-width: ', ') {\n    float: right;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n'], ['\n  box-sizing: border-box;\n  display: block;\n  float: right;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* transitions */\n  -webkit-transition: margin-left ', ' ', ';\n  -o-transition: margin-left ', ' ', ';\n  transition: margin-left ', ' ', ';\n\n  color: ', ';\n  display: block;\n  font-weight: 400;\n  position: relative;\n  min-height: ', ';\n  z-index: 1000;\n  margin-bottom: 0;\n  margin-left: ', ';\n  border: none;\n  border-radius: 0;\n  background-color: ', ';\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    margin: 0;\n  }\n  @media (min-width: ', ') {\n    margin-left: ', ';\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _ToggleButton = __webpack_require__(52);

	var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledNavbarMenuList = _styledComponents2.default.ul(_templateObject, _variables.screenHeaderCollapse, _variables.screenSmMin);

	var StyledNavbarMenu = _styledComponents2.default.div(_templateObject2);

	var StyledNavbar = _styledComponents2.default.nav(_templateObject3, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.theme.navbarFontColor || '#333';
	}, _variables.navbarHeight, function (props) {
	  return props.topNav ? '0' : _variables.sidebarWidth;
	}, function (props) {
	  return props.theme.backgroundColor || '#fff';
	}, _variables.screenHeaderCollapse, _variables.screenSmMin, function (props) {
	  return !props.topNav && props.sidebarMini && props.collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
	});

	var Navbar = function Navbar(props) {
	  return _react2.default.createElement(
	    StyledNavbar,
	    {
	      topNav: props.topNav,
	      sidebarMini: props.sidebarMini,
	      collapse: props.collapse
	    },
	    _react2.default.createElement(_ToggleButton2.default, { name: 'sidebar-toggle', className: 'fa fa-bars', onClick: props.toggle }),
	    _react2.default.createElement(
	      StyledNavbarMenu,
	      null,
	      _react2.default.createElement(
	        StyledNavbarMenuList,
	        { name: 'navbar-menu-wrapper' },
	        props.children
	      )
	    )
	  );
	};

	Navbar.propTypes = {
	  children: _propTypes2.default.node,
	  toggle: _propTypes2.default.func.isRequired,
	  topNav: _propTypes2.default.bool,
	  sidebarMini: _propTypes2.default.bool,
	  collapse: _propTypes2.default.bool
	};

	exports.default = Navbar;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: ', ';\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', 'px ', ';\n  text-decoration: none;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var ToggleButton = _styledComponents2.default.button(_templateObject, _variables.fontWeightBase, _variables.fontSizeBase, parseInt(_variables.navbarPaddingVertical, 10) + 3, _variables.navbarPaddingHorizontal, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder && '\n    border-right: ' + props.theme.navbarItemBorder + ';\n  ';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	});

	exports.default = ToggleButton;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navbarItemVariant = exports.sidebarVariant = exports.logoVariant = exports.navbarVariant = exports.transitionFn = exports.transitionSpeed = exports.attachmentBorderRadius = exports.directChatDefaultMsgBorderColor = exports.directChatDefaultFontColor = exports.directChatDefaultMsgBg = exports.directChatHeight = exports.btnBorderRadius = exports.inputRadius = exports.progressBarXsBorderRadius = exports.progressBarSmBorderRadius = exports.progressBarBorderRadius = exports.btnBoxshadow = exports.boxDefaultBorderTopColor = exports.boxPadding = exports.boxBoxshadow = exports.boxFooterBg = exports.boxBorderRadius = exports.boxBorderColor = exports.controlSidebarWidth = exports.sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuColor = exports.sidebarLightSubmenuBg = exports.sidebarLightHoverColor = exports.sidebarLightColor = exports.sidebarLightHoverBg = exports.sidebarLightBg = exports.sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuBg = exports.sidebarDarkHoverColor = exports.sidebarDarkColor = exports.sidebarDarkHoverBg = exports.sidebarDarkBg = exports.linkHoverColor = exports.linkColor = exports.screenHeaderCollapse = exports.boxedLayoutMaxWidth = exports.sidebarMiniWidth = exports.sidebarWidth = exports.navbarPaddingVertical = exports.navbarPaddingHorizontal = exports.navbarHeight = exports.gridGutterWidth = exports.lineHeightComputed = exports.fontWeightBase = exports.lineHeightBase = exports.fontSizeBase = exports.fontFamilyBase = exports.screenMdMax = exports.screenSmMax = exports.screenXsMax = exports.screenLgMin = exports.screenMdMin = exports.screenSmMin = exports.screenXsMin = exports.white = exports.gray = exports.black = exports.maroon = exports.purple = exports.fuchsia = exports.orange = exports.lime = exports.olive = exports.teal = exports.navy = exports.blue = exports.yellow = exports.aqua = exports.green = exports.red = exports.lightBlue = exports.baseColor = undefined;

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// COLORS
	// --------------------------------------------------------
	var baseColor = exports.baseColor = '#333';
	// Primary
	/* eslint-disable import/prefer-default-export */
	var lightBlue = exports.lightBlue = '#3c8dbc';
	// Danger
	var red = exports.red = '#dd4b39';
	// Success
	var green = exports.green = '#00a65a';
	// Info
	var aqua = exports.aqua = '#00c0ef';
	// Warning
	var yellow = exports.yellow = '#f39c12';
	var blue = exports.blue = '#0073b7';
	var navy = exports.navy = '#001f3f';
	var teal = exports.teal = '#39cccc';
	var olive = exports.olive = '#3d9970';
	var lime = exports.lime = '#01ff70';
	var orange = exports.orange = '#ff851b';
	var fuchsia = exports.fuchsia = '#f012be';
	var purple = exports.purple = '#605ca8';
	var maroon = exports.maroon = '#d81b60';
	var black = exports.black = '#111';
	var gray = exports.gray = '#d2d6de';
	var white = exports.white = '#fff';

	// LAYOUT
	// --------------------------------------------------------

	// BOOTSTRAP
	// Screen sizes
	// Extra small screen
	var screenXsMin = exports.screenXsMin = '500px';
	// Small screen / tablet
	var screenSmMin = exports.screenSmMin = '768px';
	// Medium screen / desktop
	var screenMdMin = exports.screenMdMin = '992px';
	// Large screen / wide desktop
	var screenLgMin = exports.screenLgMin = '1200px';
	// So media queries don't overlap when required, provide a maximum
	var screenXsMax = exports.screenXsMax = parseInt(screenSmMin, 10) - 1 + 'px';
	var screenSmMax = exports.screenSmMax = parseInt(screenMdMin, 10) - 1 + 'px';
	var screenMdMax = exports.screenMdMax = parseInt(screenLgMin, 10) - 1 + 'px';
	// Boostrap sizing
	var fontFamilyBase = exports.fontFamilyBase = "'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif";
	var fontSizeBase = exports.fontSizeBase = '14px';
	var lineHeightBase = exports.lineHeightBase = 1.428571429;
	var fontWeightBase = exports.fontWeightBase = '400';
	var lineHeightComputed = exports.lineHeightComputed = Math.floor(parseInt(fontSizeBase, 10) * lineHeightBase) + 'px';
	var gridGutterWidth = exports.gridGutterWidth = '30px';

	// Navbar heights
	var navbarHeight = exports.navbarHeight = '50px';
	var navbarPaddingHorizontal = exports.navbarPaddingHorizontal = Math.floor(parseInt(gridGutterWidth, 10) / 2) + 'px';
	var navbarPaddingVertical = exports.navbarPaddingVertical = (parseInt(navbarHeight, 10) - parseInt(lineHeightComputed, 10)) / 2 + 'px';
	// Side bar and logo width
	var sidebarWidth = exports.sidebarWidth = '230px';
	var sidebarMiniWidth = exports.sidebarMiniWidth = '50px';
	// Boxed layout maximum width
	var boxedLayoutMaxWidth = exports.boxedLayoutMaxWidth = '1024px';
	// When the logo should go to the top of the screen
	var screenHeaderCollapse = exports.screenHeaderCollapse = screenXsMax;

	// Link colors (Aka = <a> tags)
	var linkColor = exports.linkColor = lightBlue;
	var linkHoverColor = exports.linkHoverColor = (0, _tinycolor2.default)(linkColor).lighten(15).toString();

	// SIDEBAR SKINS
	// --------------------------------------------------------

	// Dark sidebar
	var sidebarDarkBg = exports.sidebarDarkBg = '#222d32';
	var sidebarDarkHoverBg = exports.sidebarDarkHoverBg = (0, _tinycolor2.default)(sidebarDarkBg).darken(2).toString();
	var sidebarDarkColor = exports.sidebarDarkColor = (0, _tinycolor2.default)(sidebarDarkBg).lighten(60).toString();
	var sidebarDarkHoverColor = exports.sidebarDarkHoverColor = '#fff';
	var sidebarDarkSubmenuBg = exports.sidebarDarkSubmenuBg = (0, _tinycolor2.default)(sidebarDarkBg).lighten(5).toString();
	var sidebarDarkSubmenuColor = exports.sidebarDarkSubmenuColor = (0, _tinycolor2.default)(sidebarDarkSubmenuBg).lighten(40).toString();
	var sidebarDarkSubmenuHoverColor = exports.sidebarDarkSubmenuHoverColor = '#fff';

	// Light sidebar
	var sidebarLightBg = exports.sidebarLightBg = '#f9fafc';
	var sidebarLightHoverBg = exports.sidebarLightHoverBg = (0, _tinycolor2.default)('#f0f0f1').lighten(1.5).toString();
	var sidebarLightColor = exports.sidebarLightColor = '#444';
	var sidebarLightHoverColor = exports.sidebarLightHoverColor = '#000';
	var sidebarLightSubmenuBg = exports.sidebarLightSubmenuBg = sidebarLightHoverBg;
	var sidebarLightSubmenuColor = exports.sidebarLightSubmenuColor = '#777';
	var sidebarLightSubmenuHoverColor = exports.sidebarLightSubmenuHoverColor = '#000';

	// CONTROL SIDEBAR
	//--------------------------------------------------------
	var controlSidebarWidth = exports.controlSidebarWidth = sidebarWidth;

	// BOXES
	//--------------------------------------------------------
	var boxBorderColor = exports.boxBorderColor = '#f4f4f4';
	var boxBorderRadius = exports.boxBorderRadius = '3px';
	var boxFooterBg = exports.boxFooterBg = '#fff';
	var boxBoxshadow = exports.boxBoxshadow = '0 1px 1px rgba(0, 0, 0, .1)';
	var boxPadding = exports.boxPadding = '10px';

	// Box variants
	var boxDefaultBorderTopColor = exports.boxDefaultBorderTopColor = '#d2d6de';

	// BUTTONS
	//--------------------------------------------------------
	var btnBoxshadow = exports.btnBoxshadow = 'none';

	// PROGRESS BARS
	//--------------------------------------------------------
	var progressBarBorderRadius = exports.progressBarBorderRadius = '1px';
	var progressBarSmBorderRadius = exports.progressBarSmBorderRadius = '1px';
	var progressBarXsBorderRadius = exports.progressBarXsBorderRadius = '1px';

	// FORMS
	//--------------------------------------------------------
	var inputRadius = exports.inputRadius = '0';

	// BUTTONS
	//--------------------------------------------------------

	// Border radius for non flat buttons
	var btnBorderRadius = exports.btnBorderRadius = '3px';

	// DIRECT CHAT
	//--------------------------------------------------------
	var directChatHeight = exports.directChatHeight = '250px';
	var directChatDefaultMsgBg = exports.directChatDefaultMsgBg = gray;
	var directChatDefaultFontColor = exports.directChatDefaultFontColor = '#444';
	var directChatDefaultMsgBorderColor = exports.directChatDefaultMsgBorderColor = gray;

	// CHAT WIDGET
	//--------------------------------------------------------
	var attachmentBorderRadius = exports.attachmentBorderRadius = '3px';

	// TRANSITIONS SETTINGS
	//--------------------------------------------------------

	// Transition global options
	var transitionSpeed = exports.transitionSpeed = '.3s';
	var transitionFn = exports.transitionFn = 'ease-in-out';

	// MIXINS
	//--------------------------------------------------------
	var navbarVariant = exports.navbarVariant = function navbarVariant(color) {
	  var fontColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.8)';
	  var hoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#f6f6f6';
	  var hoverBg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rgba(0, 0, 0, 0.1)';
	  return {
	    backgroundColor: color,
	    navbarFontColor: fontColor,
	    navbarHoverColor: hoverColor,
	    navbarHoverBg: hoverBg
	  };
	};

	var logoVariant = exports.logoVariant = function logoVariant(bgColor) {
	  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
	  var borderBottomColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'transparent';
	  var borderBottomWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0';
	  return {
	    logoBgColor: bgColor,
	    logoColor: color,
	    logoBorderBottom: borderBottomWidth + ' solid ' + borderBottomColor,
	    logoHover: (0, _tinycolor2.default)(bgColor).darken(1).toString()
	  };
	};

	var sidebarVariant = exports.sidebarVariant = function sidebarVariant(color) {
	  var light = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  return !light ? {
	    sidebarBg: sidebarDarkBg,
	    userPanelColor: '#fff',
	    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarDarkBg).lighten(20).toString(),
	    sidebarHeaderBg: (0, _tinycolor2.default)(sidebarDarkBg).darken(4).toString(),
	    sidebarLinkColor: sidebarDarkColor,
	    sidebarLinkBorderLeft: '3px solid transparent',
	    sidebarLinkActiveColor: sidebarDarkHoverColor,
	    sidebarLinkActiveBg: sidebarDarkHoverBg,
	    sidebarLinkActiveBorderLeftColor: color,
	    sidebarLinkHoverDec: 'none',
	    sidebarSubmenuMargin: '0 1px',
	    sidebarSubmenuBg: sidebarDarkSubmenuBg,
	    sidebarSubmenuLinkColor: sidebarDarkSubmenuColor,
	    sidebarSubmenuLinkHoverColor: sidebarDarkSubmenuHoverColor,
	    sidebarFormBorderRadius: '3px',
	    sidebarFormBorder: '1px solid ' + (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
	    sidebarFormMargin: '10px 10px',
	    sidebarFormInputBoxShadow: 'none',
	    sidebarFormInputBg: (0, _tinycolor2.default)(sidebarDarkBg).lighten(10).toString(),
	    sidebarFormInputBorder: '1px solid transparent',
	    sidebarFormInputHeight: '35px',
	    sidebarFormInputColor: '#666',
	    sidebarFormInputBorderRadius: '2px 0 0 2px',
	    sidebarFormInputFocusBg: '#fff',
	    sidebarFormInputFocusColor: '#666',
	    sidebarFormInputFocusBorderLeftColor: '#fff',
	    sidebarFormButtonColor: '#999',
	    sidebarFormButtonBorderRadius: '0 2px 2px 0'
	  } : {
	    sidebarBg: sidebarLightBg,
	    contentLeftBorder: '1px solid ' + gray,
	    footerLeftBorder: '1px solid ' + gray,
	    userPanelColor: sidebarLightColor,
	    sidebarHeaderColor: (0, _tinycolor2.default)(sidebarLightColor).lighten(25).toString(),
	    sidebarHeaderBg: sidebarLightBg,
	    sidebarLinkColor: sidebarLightColor,
	    sidebarLinkTransition: 'border-left-color .3s ease',
	    sidebarLinkBorderLeft: '3px solid transparent',
	    sidebarLinkFontWeight: '600',
	    sidebarLinkActiveColor: sidebarLightHoverColor,
	    sidebarLinkActiveBg: sidebarLightHoverBg,
	    sidebarLinkActiveBorderLeftColor: color,
	    sidebarLinkActiveFontWeight: '600',
	    sidebarLinkHoverDec: 'none',
	    sidebarSubmenuBg: sidebarLightSubmenuBg,
	    sidebarFormBorderRadius: '3px',
	    sidebarFormBorder: '1px solid ' + gray,
	    sidebarFormMargin: '10px 10px',
	    sidebarFormInputBoxShadow: 'none',
	    sidebarFormInputBg: '#fff',
	    sidebarFormInputBorder: '1px solid transparent',
	    sidebarFormInputHeight: '35px',
	    sidebarFormInputColor: '#666',
	    sidebarFormInputBorderRadius: '2px 0 2px 0',
	    sidebarFormInputFocusBg: '#fff',
	    sidebarFormInputFocusColor: '#666',
	    sidebarFormInputFocusBorderLeftColor: '#fff',
	    sidebarFormButtonColor: '#999',
	    sidebarFormButtonBorderRadius: '0 2px 0 2px',
	    sidebarSubmenuLgBorderLeft: '1px solid ' + gray
	  };
	};

	var navbarItemVariant = exports.navbarItemVariant = function navbarItemVariant(color) {
	  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(255, 255, 255, 0.1)';
	  var itemLinkColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#fff';
	  return {
	    navbarItemDividerBg: dividerColor,
	    navbarItemLinkColor: itemLinkColor,
	    navbarItemLinkHoverBg: (0, _tinycolor2.default)(color).darken(5).toString()
	  };
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License

	(function(Math) {

	var trimLeft = /^\s+/,
	    trimRight = /\s+$/,
	    tinyCounter = 0,
	    mathRound = Math.round,
	    mathMin = Math.min,
	    mathMax = Math.max,
	    mathRandom = Math.random;

	function tinycolor (color, opts) {

	    color = (color) ? color : '';
	    opts = opts || { };

	    // If input is already a tinycolor, return itself
	    if (color instanceof tinycolor) {
	       return color;
	    }
	    // If we are called as a function, call using new instead
	    if (!(this instanceof tinycolor)) {
	        return new tinycolor(color, opts);
	    }

	    var rgb = inputToRGB(color);
	    this._originalInput = color,
	    this._r = rgb.r,
	    this._g = rgb.g,
	    this._b = rgb.b,
	    this._a = rgb.a,
	    this._roundA = mathRound(100*this._a) / 100,
	    this._format = opts.format || rgb.format;
	    this._gradientType = opts.gradientType;

	    // Don't let the range of [0,255] come back in [0,1].
	    // Potentially lose a little bit of precision here, but will fix issues where
	    // .5 gets interpreted as half of the total, instead of half of 1
	    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
	    if (this._r < 1) { this._r = mathRound(this._r); }
	    if (this._g < 1) { this._g = mathRound(this._g); }
	    if (this._b < 1) { this._b = mathRound(this._b); }

	    this._ok = rgb.ok;
	    this._tc_id = tinyCounter++;
	}

	tinycolor.prototype = {
	    isDark: function() {
	        return this.getBrightness() < 128;
	    },
	    isLight: function() {
	        return !this.isDark();
	    },
	    isValid: function() {
	        return this._ok;
	    },
	    getOriginalInput: function() {
	      return this._originalInput;
	    },
	    getFormat: function() {
	        return this._format;
	    },
	    getAlpha: function() {
	        return this._a;
	    },
	    getBrightness: function() {
	        //http://www.w3.org/TR/AERT#color-contrast
	        var rgb = this.toRgb();
	        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
	    },
	    getLuminance: function() {
	        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	        var rgb = this.toRgb();
	        var RsRGB, GsRGB, BsRGB, R, G, B;
	        RsRGB = rgb.r/255;
	        GsRGB = rgb.g/255;
	        BsRGB = rgb.b/255;

	        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
	        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
	        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
	        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
	    },
	    setAlpha: function(value) {
	        this._a = boundAlpha(value);
	        this._roundA = mathRound(100*this._a) / 100;
	        return this;
	    },
	    toHsv: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
	    },
	    toHsvString: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
	        return (this._a == 1) ?
	          "hsv("  + h + ", " + s + "%, " + v + "%)" :
	          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
	    },
	    toHsl: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
	    },
	    toHslString: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
	        return (this._a == 1) ?
	          "hsl("  + h + ", " + s + "%, " + l + "%)" :
	          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
	    },
	    toHex: function(allow3Char) {
	        return rgbToHex(this._r, this._g, this._b, allow3Char);
	    },
	    toHexString: function(allow3Char) {
	        return '#' + this.toHex(allow3Char);
	    },
	    toHex8: function(allow4Char) {
	        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
	    },
	    toHex8String: function(allow4Char) {
	        return '#' + this.toHex8(allow4Char);
	    },
	    toRgb: function() {
	        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
	    },
	    toRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
	          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
	    },
	    toPercentageRgb: function() {
	        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
	    },
	    toPercentageRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
	          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
	    },
	    toName: function() {
	        if (this._a === 0) {
	            return "transparent";
	        }

	        if (this._a < 1) {
	            return false;
	        }

	        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
	    },
	    toFilter: function(secondColor) {
	        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
	        var secondHex8String = hex8String;
	        var gradientType = this._gradientType ? "GradientType = 1, " : "";

	        if (secondColor) {
	            var s = tinycolor(secondColor);
	            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
	        }

	        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
	    },
	    toString: function(format) {
	        var formatSet = !!format;
	        format = format || this._format;

	        var formattedString = false;
	        var hasAlpha = this._a < 1 && this._a >= 0;
	        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

	        if (needsAlphaFormat) {
	            // Special case for "transparent", all other non-alpha formats
	            // will return rgba when there is transparency.
	            if (format === "name" && this._a === 0) {
	                return this.toName();
	            }
	            return this.toRgbString();
	        }
	        if (format === "rgb") {
	            formattedString = this.toRgbString();
	        }
	        if (format === "prgb") {
	            formattedString = this.toPercentageRgbString();
	        }
	        if (format === "hex" || format === "hex6") {
	            formattedString = this.toHexString();
	        }
	        if (format === "hex3") {
	            formattedString = this.toHexString(true);
	        }
	        if (format === "hex4") {
	            formattedString = this.toHex8String(true);
	        }
	        if (format === "hex8") {
	            formattedString = this.toHex8String();
	        }
	        if (format === "name") {
	            formattedString = this.toName();
	        }
	        if (format === "hsl") {
	            formattedString = this.toHslString();
	        }
	        if (format === "hsv") {
	            formattedString = this.toHsvString();
	        }

	        return formattedString || this.toHexString();
	    },
	    clone: function() {
	        return tinycolor(this.toString());
	    },

	    _applyModification: function(fn, args) {
	        var color = fn.apply(null, [this].concat([].slice.call(args)));
	        this._r = color._r;
	        this._g = color._g;
	        this._b = color._b;
	        this.setAlpha(color._a);
	        return this;
	    },
	    lighten: function() {
	        return this._applyModification(lighten, arguments);
	    },
	    brighten: function() {
	        return this._applyModification(brighten, arguments);
	    },
	    darken: function() {
	        return this._applyModification(darken, arguments);
	    },
	    desaturate: function() {
	        return this._applyModification(desaturate, arguments);
	    },
	    saturate: function() {
	        return this._applyModification(saturate, arguments);
	    },
	    greyscale: function() {
	        return this._applyModification(greyscale, arguments);
	    },
	    spin: function() {
	        return this._applyModification(spin, arguments);
	    },

	    _applyCombination: function(fn, args) {
	        return fn.apply(null, [this].concat([].slice.call(args)));
	    },
	    analogous: function() {
	        return this._applyCombination(analogous, arguments);
	    },
	    complement: function() {
	        return this._applyCombination(complement, arguments);
	    },
	    monochromatic: function() {
	        return this._applyCombination(monochromatic, arguments);
	    },
	    splitcomplement: function() {
	        return this._applyCombination(splitcomplement, arguments);
	    },
	    triad: function() {
	        return this._applyCombination(triad, arguments);
	    },
	    tetrad: function() {
	        return this._applyCombination(tetrad, arguments);
	    }
	};

	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
	    if (typeof color == "object") {
	        var newColor = {};
	        for (var i in color) {
	            if (color.hasOwnProperty(i)) {
	                if (i === "a") {
	                    newColor[i] = color[i];
	                }
	                else {
	                    newColor[i] = convertToPercentage(color[i]);
	                }
	            }
	        }
	        color = newColor;
	    }

	    return tinycolor(color, opts);
	};

	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//     "red"
	//     "#f00" or "f00"
	//     "#ff0000" or "ff0000"
	//     "#ff000000" or "ff000000"
	//     "rgb 255 0 0" or "rgb (255, 0, 0)"
	//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {

	    var rgb = { r: 0, g: 0, b: 0 };
	    var a = 1;
	    var s = null;
	    var v = null;
	    var l = null;
	    var ok = false;
	    var format = false;

	    if (typeof color == "string") {
	        color = stringInputToObject(color);
	    }

	    if (typeof color == "object") {
	        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
	            rgb = rgbToRgb(color.r, color.g, color.b);
	            ok = true;
	            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
	        }
	        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
	            s = convertToPercentage(color.s);
	            v = convertToPercentage(color.v);
	            rgb = hsvToRgb(color.h, s, v);
	            ok = true;
	            format = "hsv";
	        }
	        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
	            s = convertToPercentage(color.s);
	            l = convertToPercentage(color.l);
	            rgb = hslToRgb(color.h, s, l);
	            ok = true;
	            format = "hsl";
	        }

	        if (color.hasOwnProperty("a")) {
	            a = color.a;
	        }
	    }

	    a = boundAlpha(a);

	    return {
	        ok: ok,
	        format: color.format || format,
	        r: mathMin(255, mathMax(rgb.r, 0)),
	        g: mathMin(255, mathMax(rgb.g, 0)),
	        b: mathMin(255, mathMax(rgb.b, 0)),
	        a: a
	    };
	}


	// Conversion Functions
	// --------------------

	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
	    return {
	        r: bound01(r, 255) * 255,
	        g: bound01(g, 255) * 255,
	        b: bound01(b, 255) * 255
	    };
	}

	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {

	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);

	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min) {
	        h = s = 0; // achromatic
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }

	        h /= 6;
	    }

	    return { h: h, s: s, l: l };
	}

	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
	    var r, g, b;

	    h = bound01(h, 360);
	    s = bound01(s, 100);
	    l = bound01(l, 100);

	    function hue2rgb(p, q, t) {
	        if(t < 0) t += 1;
	        if(t > 1) t -= 1;
	        if(t < 1/6) return p + (q - p) * 6 * t;
	        if(t < 1/2) return q;
	        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	        return p;
	    }

	    if(s === 0) {
	        r = g = b = l; // achromatic
	    }
	    else {
	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }

	    return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {

	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);

	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, v = max;

	    var d = max - min;
	    s = max === 0 ? 0 : d / max;

	    if(max == min) {
	        h = 0; // achromatic
	    }
	    else {
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return { h: h, s: s, v: v };
	}

	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {

	    h = bound01(h, 360) * 6;
	    s = bound01(s, 100);
	    v = bound01(v, 100);

	    var i = Math.floor(h),
	        f = h - i,
	        p = v * (1 - s),
	        q = v * (1 - f * s),
	        t = v * (1 - (1 - f) * s),
	        mod = i % 6,
	        r = [v, q, p, p, t, v][mod],
	        g = [t, v, v, q, p, p][mod],
	        b = [p, p, t, v, v, q][mod];

	    return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {

	    var hex = [
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];

	    // Return a 3 character hex if possible
	    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
	        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	    }

	    return hex.join("");
	}

	// `rgbaToHex`
	// Converts an RGBA color plus alpha transparency to hex
	// Assumes r, g, b are contained in the set [0, 255] and
	// a in [0, 1]. Returns a 4 or 8 character rgba hex
	function rgbaToHex(r, g, b, a, allow4Char) {

	    var hex = [
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16)),
	        pad2(convertDecimalToHex(a))
	    ];

	    // Return a 4 character hex if possible
	    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
	        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
	    }

	    return hex.join("");
	}

	// `rgbaToArgbHex`
	// Converts an RGBA color to an ARGB Hex8 string
	// Rarely used, but required for "toFilter()"
	function rgbaToArgbHex(r, g, b, a) {

	    var hex = [
	        pad2(convertDecimalToHex(a)),
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];

	    return hex.join("");
	}

	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
	    if (!color1 || !color2) { return false; }
	    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};

	tinycolor.random = function() {
	    return tinycolor.fromRatio({
	        r: mathRandom(),
	        g: mathRandom(),
	        b: mathRandom()
	    });
	};


	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

	function desaturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s -= amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}

	function saturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s += amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}

	function greyscale(color) {
	    return tinycolor(color).desaturate(100);
	}

	function lighten (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l += amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}

	function brighten(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var rgb = tinycolor(color).toRgb();
	    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
	    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
	    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
	    return tinycolor(rgb);
	}

	function darken (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l -= amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}

	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
	    var hsl = tinycolor(color).toHsl();
	    var hue = (hsl.h + amount) % 360;
	    hsl.h = hue < 0 ? 360 + hue : hue;
	    return tinycolor(hsl);
	}

	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

	function complement(color) {
	    var hsl = tinycolor(color).toHsl();
	    hsl.h = (hsl.h + 180) % 360;
	    return tinycolor(hsl);
	}

	function triad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
	    ];
	}

	function tetrad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
	    ];
	}

	function splitcomplement(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
	        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
	    ];
	}

	function analogous(color, results, slices) {
	    results = results || 6;
	    slices = slices || 30;

	    var hsl = tinycolor(color).toHsl();
	    var part = 360 / slices;
	    var ret = [tinycolor(color)];

	    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
	        hsl.h = (hsl.h + part) % 360;
	        ret.push(tinycolor(hsl));
	    }
	    return ret;
	}

	function monochromatic(color, results) {
	    results = results || 6;
	    var hsv = tinycolor(color).toHsv();
	    var h = hsv.h, s = hsv.s, v = hsv.v;
	    var ret = [];
	    var modification = 1 / results;

	    while (results--) {
	        ret.push(tinycolor({ h: h, s: s, v: v}));
	        v = (v + modification) % 1;
	    }

	    return ret;
	}

	// Utility Functions
	// ---------------------

	tinycolor.mix = function(color1, color2, amount) {
	    amount = (amount === 0) ? 0 : (amount || 50);

	    var rgb1 = tinycolor(color1).toRgb();
	    var rgb2 = tinycolor(color2).toRgb();

	    var p = amount / 100;

	    var rgba = {
	        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
	        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
	        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
	        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
	    };

	    return tinycolor(rgba);
	};


	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
	    var c1 = tinycolor(color1);
	    var c2 = tinycolor(color2);
	    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};

	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

	// *Example*
	//    tinycolor.isReadable("#000", "#111") => false
	//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
	tinycolor.isReadable = function(color1, color2, wcag2) {
	    var readability = tinycolor.readability(color1, color2);
	    var wcag2Parms, out;

	    out = false;

	    wcag2Parms = validateWCAG2Parms(wcag2);
	    switch (wcag2Parms.level + wcag2Parms.size) {
	        case "AAsmall":
	        case "AAAlarge":
	            out = readability >= 4.5;
	            break;
	        case "AAlarge":
	            out = readability >= 3;
	            break;
	        case "AAAsmall":
	            out = readability >= 7;
	            break;
	    }
	    return out;

	};

	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
	tinycolor.mostReadable = function(baseColor, colorList, args) {
	    var bestColor = null;
	    var bestScore = 0;
	    var readability;
	    var includeFallbackColors, level, size ;
	    args = args || {};
	    includeFallbackColors = args.includeFallbackColors ;
	    level = args.level;
	    size = args.size;

	    for (var i= 0; i < colorList.length ; i++) {
	        readability = tinycolor.readability(baseColor, colorList[i]);
	        if (readability > bestScore) {
	            bestScore = readability;
	            bestColor = tinycolor(colorList[i]);
	        }
	    }

	    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
	        return bestColor;
	    }
	    else {
	        args.includeFallbackColors=false;
	        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
	    }
	};


	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
	    aliceblue: "f0f8ff",
	    antiquewhite: "faebd7",
	    aqua: "0ff",
	    aquamarine: "7fffd4",
	    azure: "f0ffff",
	    beige: "f5f5dc",
	    bisque: "ffe4c4",
	    black: "000",
	    blanchedalmond: "ffebcd",
	    blue: "00f",
	    blueviolet: "8a2be2",
	    brown: "a52a2a",
	    burlywood: "deb887",
	    burntsienna: "ea7e5d",
	    cadetblue: "5f9ea0",
	    chartreuse: "7fff00",
	    chocolate: "d2691e",
	    coral: "ff7f50",
	    cornflowerblue: "6495ed",
	    cornsilk: "fff8dc",
	    crimson: "dc143c",
	    cyan: "0ff",
	    darkblue: "00008b",
	    darkcyan: "008b8b",
	    darkgoldenrod: "b8860b",
	    darkgray: "a9a9a9",
	    darkgreen: "006400",
	    darkgrey: "a9a9a9",
	    darkkhaki: "bdb76b",
	    darkmagenta: "8b008b",
	    darkolivegreen: "556b2f",
	    darkorange: "ff8c00",
	    darkorchid: "9932cc",
	    darkred: "8b0000",
	    darksalmon: "e9967a",
	    darkseagreen: "8fbc8f",
	    darkslateblue: "483d8b",
	    darkslategray: "2f4f4f",
	    darkslategrey: "2f4f4f",
	    darkturquoise: "00ced1",
	    darkviolet: "9400d3",
	    deeppink: "ff1493",
	    deepskyblue: "00bfff",
	    dimgray: "696969",
	    dimgrey: "696969",
	    dodgerblue: "1e90ff",
	    firebrick: "b22222",
	    floralwhite: "fffaf0",
	    forestgreen: "228b22",
	    fuchsia: "f0f",
	    gainsboro: "dcdcdc",
	    ghostwhite: "f8f8ff",
	    gold: "ffd700",
	    goldenrod: "daa520",
	    gray: "808080",
	    green: "008000",
	    greenyellow: "adff2f",
	    grey: "808080",
	    honeydew: "f0fff0",
	    hotpink: "ff69b4",
	    indianred: "cd5c5c",
	    indigo: "4b0082",
	    ivory: "fffff0",
	    khaki: "f0e68c",
	    lavender: "e6e6fa",
	    lavenderblush: "fff0f5",
	    lawngreen: "7cfc00",
	    lemonchiffon: "fffacd",
	    lightblue: "add8e6",
	    lightcoral: "f08080",
	    lightcyan: "e0ffff",
	    lightgoldenrodyellow: "fafad2",
	    lightgray: "d3d3d3",
	    lightgreen: "90ee90",
	    lightgrey: "d3d3d3",
	    lightpink: "ffb6c1",
	    lightsalmon: "ffa07a",
	    lightseagreen: "20b2aa",
	    lightskyblue: "87cefa",
	    lightslategray: "789",
	    lightslategrey: "789",
	    lightsteelblue: "b0c4de",
	    lightyellow: "ffffe0",
	    lime: "0f0",
	    limegreen: "32cd32",
	    linen: "faf0e6",
	    magenta: "f0f",
	    maroon: "800000",
	    mediumaquamarine: "66cdaa",
	    mediumblue: "0000cd",
	    mediumorchid: "ba55d3",
	    mediumpurple: "9370db",
	    mediumseagreen: "3cb371",
	    mediumslateblue: "7b68ee",
	    mediumspringgreen: "00fa9a",
	    mediumturquoise: "48d1cc",
	    mediumvioletred: "c71585",
	    midnightblue: "191970",
	    mintcream: "f5fffa",
	    mistyrose: "ffe4e1",
	    moccasin: "ffe4b5",
	    navajowhite: "ffdead",
	    navy: "000080",
	    oldlace: "fdf5e6",
	    olive: "808000",
	    olivedrab: "6b8e23",
	    orange: "ffa500",
	    orangered: "ff4500",
	    orchid: "da70d6",
	    palegoldenrod: "eee8aa",
	    palegreen: "98fb98",
	    paleturquoise: "afeeee",
	    palevioletred: "db7093",
	    papayawhip: "ffefd5",
	    peachpuff: "ffdab9",
	    peru: "cd853f",
	    pink: "ffc0cb",
	    plum: "dda0dd",
	    powderblue: "b0e0e6",
	    purple: "800080",
	    rebeccapurple: "663399",
	    red: "f00",
	    rosybrown: "bc8f8f",
	    royalblue: "4169e1",
	    saddlebrown: "8b4513",
	    salmon: "fa8072",
	    sandybrown: "f4a460",
	    seagreen: "2e8b57",
	    seashell: "fff5ee",
	    sienna: "a0522d",
	    silver: "c0c0c0",
	    skyblue: "87ceeb",
	    slateblue: "6a5acd",
	    slategray: "708090",
	    slategrey: "708090",
	    snow: "fffafa",
	    springgreen: "00ff7f",
	    steelblue: "4682b4",
	    tan: "d2b48c",
	    teal: "008080",
	    thistle: "d8bfd8",
	    tomato: "ff6347",
	    turquoise: "40e0d0",
	    violet: "ee82ee",
	    wheat: "f5deb3",
	    white: "fff",
	    whitesmoke: "f5f5f5",
	    yellow: "ff0",
	    yellowgreen: "9acd32"
	};

	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);


	// Utilities
	// ---------

	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
	    var flipped = { };
	    for (var i in o) {
	        if (o.hasOwnProperty(i)) {
	            flipped[o[i]] = i;
	        }
	    }
	    return flipped;
	}

	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
	    a = parseFloat(a);

	    if (isNaN(a) || a < 0 || a > 1) {
	        a = 1;
	    }

	    return a;
	}

	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
	    if (isOnePointZero(n)) { n = "100%"; }

	    var processPercent = isPercentage(n);
	    n = mathMin(max, mathMax(0, parseFloat(n)));

	    // Automatically convert percentage into number
	    if (processPercent) {
	        n = parseInt(n * max, 10) / 100;
	    }

	    // Handle floating point rounding errors
	    if ((Math.abs(n - max) < 0.000001)) {
	        return 1;
	    }

	    // Convert into [0, 1] range if it isn't already
	    return (n % max) / parseFloat(max);
	}

	// Force a number between 0 and 1
	function clamp01(val) {
	    return mathMin(1, mathMax(0, val));
	}

	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
	    return parseInt(val, 16);
	}

	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
	    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}

	// Check to see if string passed in is a percentage
	function isPercentage(n) {
	    return typeof n === "string" && n.indexOf('%') != -1;
	}

	// Force a hex value to have 2 characters
	function pad2(c) {
	    return c.length == 1 ? '0' + c : '' + c;
	}

	// Replace a decimal with it's percentage value
	function convertToPercentage(n) {
	    if (n <= 1) {
	        n = (n * 100) + "%";
	    }

	    return n;
	}

	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
	    return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
	    return (parseIntFromHex(h) / 255);
	}

	var matchers = (function() {

	    // <http://www.w3.org/TR/css3-values/#integers>
	    var CSS_INTEGER = "[-\\+]?\\d+%?";

	    // <http://www.w3.org/TR/css3-values/#number-value>
	    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

	    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
	    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

	    // Actual matching.
	    // Parentheses and commas are optional, but not required.
	    // Whitespace can take the place of commas or opening paren
	    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

	    return {
	        CSS_UNIT: new RegExp(CSS_UNIT),
	        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	    };
	})();

	// `isValidCSSUnit`
	// Take in a single string / number and check to see if it looks like a CSS unit
	// (see `matchers` above for definition).
	function isValidCSSUnit(color) {
	    return !!matchers.CSS_UNIT.exec(color);
	}

	// `stringInputToObject`
	// Permissive string parsing.  Take in a number of formats, and output an object
	// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {

	    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
	    var named = false;
	    if (names[color]) {
	        color = names[color];
	        named = true;
	    }
	    else if (color == 'transparent') {
	        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
	    }

	    // Try to match string input using regular expressions.
	    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
	    // Just return an object and let the conversion functions handle that.
	    // This way the result will be the same whether the tinycolor is initialized with string or object.
	    var match;
	    if ((match = matchers.rgb.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3] };
	    }
	    if ((match = matchers.rgba.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsl.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3] };
	    }
	    if ((match = matchers.hsla.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsv.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3] };
	    }
	    if ((match = matchers.hsva.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3], a: match[4] };
	    }
	    if ((match = matchers.hex8.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1]),
	            g: parseIntFromHex(match[2]),
	            b: parseIntFromHex(match[3]),
	            a: convertHexToDecimal(match[4]),
	            format: named ? "name" : "hex8"
	        };
	    }
	    if ((match = matchers.hex6.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1]),
	            g: parseIntFromHex(match[2]),
	            b: parseIntFromHex(match[3]),
	            format: named ? "name" : "hex"
	        };
	    }
	    if ((match = matchers.hex4.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1] + '' + match[1]),
	            g: parseIntFromHex(match[2] + '' + match[2]),
	            b: parseIntFromHex(match[3] + '' + match[3]),
	            a: convertHexToDecimal(match[4] + '' + match[4]),
	            format: named ? "name" : "hex8"
	        };
	    }
	    if ((match = matchers.hex3.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1] + '' + match[1]),
	            g: parseIntFromHex(match[2] + '' + match[2]),
	            b: parseIntFromHex(match[3] + '' + match[3]),
	            format: named ? "name" : "hex"
	        };
	    }

	    return false;
	}

	function validateWCAG2Parms(parms) {
	    // return valid WCAG2 parms for isReadable.
	    // If input parms are invalid, return {"level":"AA", "size":"small"}
	    var level, size;
	    parms = parms || {"level":"AA", "size":"small"};
	    level = (parms.level || "AA").toUpperCase();
	    size = (parms.size || "small").toLowerCase();
	    if (level !== "AA" && level !== "AAA") {
	        level = "AA";
	    }
	    if (size !== "small" && size !== "large") {
	        size = "small";
	    }
	    return {"level":level, "size":size};
	}

	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
	    module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
	    window.tinycolor = tinycolor;
	}

	})(Math);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;;\n  border-right: ', ' !important;;\n  &:hover {\n    background-color: ', ' !important;;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n'], ['\n  /* transitions */\n  -webkit-transition: width ', ' ', ';\n  -o-transition: width ', ' ', ';\n  transition: width ', ' ', ';\n\n  /* theme */\n  background-color: ', ' !important;\n  color: ', ' !important;\n  border-bottom: ', ' !important;;\n  border-right: ', ' !important;;\n  &:hover {\n    background-color: ', ' !important;;\n  }\n\n  display: block;\n  text-decoration: none;\n  float: left;\n  height: ', ';\n  font-size: 20px;\n  line-height: ', ';\n  text-align: center;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  font-weight: 300;\n  overflow: hidden;\n  &:hover, &:focus {\n    text-decoration: none !important;\n    outline: none;\n  }\n\n  /* media queries */\n  @media (max-width: ', ') {\n    width: 100%;\n    float: none;\n    ', '\n  }\n  @media (min-width: ', ') {\n    width: ', ';\n    ', ';\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: block;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n'], ['\n  display: none;\n  @media (min-width: ', ') {\n    display: ', '\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledLogo = _styledComponents2.default.a(_templateObject, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.theme.logoBgColor || '#fff';
	}, function (props) {
	  return props.theme.logoColor || '#000';
	}, function (props) {
	  return props.theme.logoBorderBottom || 'none';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.logoHover || '#f6f6f6';
	}, _variables.navbarHeight, _variables.navbarHeight, _variables.screenHeaderCollapse, function (props) {
	  return props.theme.logoSmallVariant || '';
	}, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? _variables.sidebarMiniWidth : _variables.sidebarWidth;
	}, function (props) {
	  return props.sidebarMini && props.collapse && 'padding: 0;';
	});

	var LargeLogo = _styledComponents2.default.div(_templateObject2, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? 'none' : 'block';
	});

	var SmallLogo = _styledComponents2.default.div(_templateObject3, _variables.screenSmMin, function (props) {
	  return props.sidebarMini && props.collapse ? 'block' : 'none';
	});

	var Logo = function Logo(_ref) {
	  var _ref$href = _ref.href,
	      href = _ref$href === undefined ? '/' : _ref$href,
	      onClick = _ref.onClick,
	      logoLg = _ref.logoLg,
	      logoSm = _ref.logoSm,
	      sidebarMini = _ref.sidebarMini,
	      collapse = _ref.collapse;
	  return onClick ? _react2.default.createElement(
	    StyledLogo,
	    { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo', onClick: onClick, href: null },
	    _react2.default.createElement(
	      LargeLogo,
	      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-lg' },
	      logoLg
	    ),
	    _react2.default.createElement(
	      SmallLogo,
	      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-sm' },
	      logoSm
	    )
	  ) : _react2.default.createElement(
	    StyledLogo,
	    { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo', href: href },
	    _react2.default.createElement(
	      LargeLogo,
	      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-lg' },
	      logoLg
	    ),
	    _react2.default.createElement(
	      SmallLogo,
	      { sidebarMini: sidebarMini, collapse: collapse, name: 'navbar-logo-sm' },
	      logoSm
	    )
	  );
	};

	Logo.propTypes = {
	  href: _propTypes2.default.string,
	  onClick: _propTypes2.default.func,
	  logoLg: _propTypes2.default.element,
	  logoSm: _propTypes2.default.element,
	  sidebarMini: _propTypes2.default.bool,
	  collapse: _propTypes2.default.bool
	};

	exports.default = Logo;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  @media (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  @media (max-width: ', ') {\n    display: none;\n  }\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n'], ['\n  background-color: ', ';\n  padding: 10px;\n  text-align: center;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n'], ['\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n'], ['\n  z-index: 5;\n  color: #fff;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 17px;\n  margin-top: 10px;\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: ', ') {\n      background-color: #f9f9f9;\n    }\n  }\n'], ['\n  color: #666666;\n  box-shadow: none;\n  border: 1px solid transparent;\n  border-width: 1px;\n  border-radius: 0;\n  background-color: #f4f4f4;\n  border-color: #ddd;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: ', ';\n  font-weight: ', ';\n  line-height: ', ';\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n\n  &:hover {\n    @media (max-width: ', ') {\n      background-color: #f9f9f9;\n    }\n  }\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before,\n  &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n'], ['\n  /* clearfix */\n  &:before,\n  &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  background-color: #f9f9f9;\n  padding: 10px;\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n'], ['\n  border-top-radius: 0;\n  border-top: 0;\n  padding: 1px 0 0 0;\n  width: 280px;\n']),
	    _templateObject9 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  padding: ', ' ', ';\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus,\n  &:active {\n    background: transparent;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _DropdownMenu = __webpack_require__(57);

	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
	var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
	var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

	var StyledUserImage = _styledComponents2.default.img(_templateObject, imageSize, imageSize, imageMarginTop, imageMarginBottom);

	var StyledUserName = _styledComponents2.default.span(_templateObject2, _variables.screenXsMin);

	var UserMenuHeader = _styledComponents2.default.li(_templateObject3, function (props) {
	  return props.theme.navbarUserMenuHeaderBg || props.theme.backgroundColor;
	});

	var UserMenuHeaderImage = _styledComponents2.default.img(_templateObject4);

	var UserMenuHeaderName = _styledComponents2.default.p(_templateObject5);

	var UserFooterButton = _styledComponents2.default.button(_templateObject6, _variables.fontSizeBase, _variables.fontWeightBase, _variables.lineHeightBase, _variables.screenSmMax);

	var UserFooter = _styledComponents2.default.li(_templateObject7);

	var UserDropDown = (0, _styledComponents2.default)(_DropdownMenu2.default)(_templateObject8);

	var StyledUserMenu = _styledComponents2.default.li(_templateObject9, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	}, _variables.screenXsMin, _variables.navbarPaddingVertical);

	var UserMenu = function (_React$Component) {
	  _inherits(UserMenu, _React$Component);

	  function UserMenu(props) {
	    _classCallCheck(this, UserMenu);

	    var _this = _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).call(this, props));

	    _this.state = {
	      open: false
	    };
	    _this._toggleMenu = _this.toggleMenu.bind(_this);
	    _this._closeMenu = _this.closeMenu.bind(_this);
	    return _this;
	  }

	  _createClass(UserMenu, [{
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      this.setState({
	        open: !this.state.open
	      });
	    }
	  }, {
	    key: 'closeMenu',
	    value: function closeMenu() {
	      this.setState({
	        open: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          userImageRenderer = _props.userImageRenderer,
	          headerImageRenderer = _props.headerImageRenderer,
	          image = _props.image,
	          profileAction = _props.profileAction,
	          signOutAction = _props.signOutAction,
	          name = _props.name,
	          className = _props.className;

	      return _react2.default.createElement(
	        StyledUserMenu,
	        {
	          onClick: this._toggleMenu,
	          onMouseLeave: this._closeMenu,
	          className: className
	        },
	        userImageRenderer ? userImageRenderer(image) : _react2.default.createElement(StyledUserImage, { src: image }),
	        _react2.default.createElement(
	          StyledUserName,
	          null,
	          name
	        ),
	        _react2.default.createElement(
	          UserDropDown,
	          { open: this.state.open },
	          _react2.default.createElement(
	            UserMenuHeader,
	            null,
	            headerImageRenderer ? headerImageRenderer(image) : _react2.default.createElement(UserMenuHeaderImage, { src: image }),
	            _react2.default.createElement(
	              UserMenuHeaderName,
	              null,
	              name
	            )
	          ),
	          _react2.default.createElement(
	            UserFooter,
	            null,
	            profileAction && _react2.default.createElement(
	              'div',
	              { style: { float: 'left' } },
	              _react2.default.createElement(
	                UserFooterButton,
	                { onClick: profileAction },
	                'Profile'
	              )
	            ),
	            signOutAction && _react2.default.createElement(
	              'div',
	              { style: { float: 'right' } },
	              _react2.default.createElement(
	                UserFooterButton,
	                { onClick: signOutAction },
	                'Sign Out'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return UserMenu;
	}(_react2.default.Component);

	UserMenu.propTypes = {
	  name: _propTypes2.default.string,
	  image: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  profileAction: _propTypes2.default.func,
	  signOutAction: _propTypes2.default.func,
	  headerImageRenderer: _propTypes2.default.func,
	  userImageRenderer: _propTypes2.default.func
	};

	exports.default = UserMenu;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 40px;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  color: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  text-align: left;\n  font-family: ', ';\n  font-weight: ', ';\n\n  position: absolute;\n  top: 100%;\n  left: auto;\n  right: 0;\n  z-index: 1000;\n  display: ', ';\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid rgba(0,0,0,.15);\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  border-color: #eee;\n\n  /* media queries */\n  @media (max-width: ', ') {\n    position: absolute;\n    right: 5%;\n    left: auto;\n    border: 1px solid #ddd;\n    background: #fff;\n  }\n']);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var DropdownMenu = _styledComponents2.default.ul(_templateObject, _variables.baseColor, _variables.fontSizeBase, _variables.lineHeightBase, _variables.fontFamilyBase, _variables.fontWeightBase, function (props) {
	  return props.open ? 'block' : 'none';
	}, _variables.screenSmMax);

	exports.default = DropdownMenu;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  @media (max-width: ', ') {\n    display: none;\n  }\n'], ['\n  @media (max-width: ', ') {\n    display: none;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: top;\n  border-radius: 50%;\n  margin-right: 10px;\n  max-width: none;\n  font-size: 28px;\n  margin-top: -4px;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: top;\n  border-radius: 50%;\n  margin-right: 10px;\n  max-width: none;\n  font-size: 28px;\n  margin-top: -4px;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  color: inherit;\n  box-sizing: border-box;\n  float: left;\n  border: 0;\n  vertical-align: middle;\n  width: ', ';\n  height: ', ';\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: ', ';\n  margin-bottom: ', ';\n  max-width: none;\n\n  &:hover {\n    color: inherit;\n  }\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  color: inherit;\n  display: block;\n  padding: ', ' ', ';\n  position: relative;\n  background-color: transparent;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none !important;\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n'], ['\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  color: inherit;\n  display: block;\n  padding: ', ' ', ';\n  position: relative;\n  background-color: transparent;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none !important;\n  }\n\n  @media (max-width: ', ') {\n    padding: ', ' 5px;\n  }\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  display: block;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active {\n    background: transparent;\n    outline: none;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  float: left;\n  display: block;\n  background-color: transparent;\n  background-image: none;\n  border: none;\n  outline: none;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  &:focus, &:active {\n    background: transparent;\n    outline: none;\n  }\n\n  /* theme */\n  color: ', ';\n  border-left: ', ';\n  &:hover {\n    color: ', ';\n    background-color: ', ';\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var imageSize = Math.floor(parseInt(_variables.navbarHeight, 10) / 2) + 'px';
	var imageMarginTop = '-' + Math.ceil((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';
	var imageMarginBottom = '-' + Math.floor((parseInt(imageSize, 10) + parseInt(_variables.navbarPaddingHorizontal, 10) + parseInt(_variables.navbarPaddingVertical, 10) - parseInt(_variables.navbarHeight, 10)) / 2) + 'px';

	var StyledSpan = _styledComponents2.default.span(_templateObject, _variables.screenXsMin);

	var StyledIcon = _styledComponents2.default.i(_templateObject2);

	var StyledImage = _styledComponents2.default.img(_templateObject3, imageSize, imageSize, imageMarginTop, imageMarginBottom);

	var StyledLink = _styledComponents2.default.a(_templateObject4, _variables.navbarPaddingVertical, _variables.navbarPaddingHorizontal, _variables.screenXsMin, _variables.navbarPaddingVertical);

	var StyledItem = _styledComponents2.default.li(_templateObject5, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
	  return props.theme.navbarFontColor || '#fff';
	}, function (props) {
	  return props.theme.navbarItemBorder || 'none';
	}, function (props) {
	  return props.theme.navbarHoverColor || '#fff';
	}, function (props) {
	  return props.theme.logoBgColor || 'transparent';
	});

	var displayImage = function displayImage(src, icon) {
	  if (src) {
	    return _react2.default.createElement(StyledImage, { src: src });
	  } else if (icon) {
	    return _react2.default.createElement(StyledIcon, { className: icon });
	  }
	  return null;
	};

	var NavItem = function NavItem(_ref) {
	  var title = _ref.title,
	      onClick = _ref.onClick,
	      href = _ref.href,
	      image = _ref.image,
	      iconClass = _ref.iconClass;
	  return _react2.default.createElement(
	    StyledItem,
	    null,
	    onClick && _react2.default.createElement(
	      StyledLink,
	      { onClick: onClick, href: null },
	      displayImage(image, iconClass),
	      _react2.default.createElement(
	        StyledSpan,
	        null,
	        title
	      )
	    ),
	    !onClick && href && _react2.default.createElement(
	      StyledLink,
	      { href: href },
	      displayImage(image, iconClass),
	      _react2.default.createElement(
	        StyledSpan,
	        null,
	        title
	      )
	    )
	  );
	};

	NavItem.propTypes = {
	  title: _propTypes2.default.string,
	  onClick: _propTypes2.default.func,
	  href: _propTypes2.default.string,
	  image: _propTypes2.default.string,
	  iconClass: _propTypes2.default.string
	};

	exports.default = NavItem;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n'], ['\n  height: auto;\n  padding-bottom: 10px;\n  display: block;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n'], ['\n  &:before, &:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  /* theme */\n  background-color: ', ';\n\n  position: ', ';\n  top: 0;\n  left: 0;\n  padding-top: 50px;\n  min-height: 100vh;\n  height: 100%;\n  width: ', ';\n  z-index: 810;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    margin-left: 0;\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    padding-top: 100px;\n    ', ';\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _UserPanel = __webpack_require__(60);

	var _UserPanel2 = _interopRequireDefault(_UserPanel);

	var _Search = __webpack_require__(61);

	var _Search2 = _interopRequireDefault(_Search);

	var _Menu = __webpack_require__(62);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledSection = _styledComponents2.default.section(_templateObject);

	var StyledAside = _styledComponents2.default.aside(_templateObject2, function (props) {
	  return props.theme.sidebarBg;
	}, function (props) {
	  return props.fixed ? 'fixed' : 'absolute';
	}, _variables.sidebarWidth, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.screenSmMin, function (props) {
	  if (props.collapse) {
	    if (props.mini) {
	      return '\n            width: ' + _variables.sidebarMiniWidth + ';\n            z-index: 850;\n          ';
	    }
	    return '\n          -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n          transform: translate(-' + _variables.sidebarWidth + ', 0);\n        ';
	  }
	  return '\n        -webkit-transform: translate(0, 0);\n        -ms-transform: translate(0, 0);\n        -o-transform: translate(0, 0);\n        transform: translate(0, 0);\n      ';
	}, _variables.screenXsMax, function (props) {
	  return props.collapse ? '\n      -webkit-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -ms-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      -o-transform: translate(-' + _variables.sidebarWidth + ', 0);\n      transform: translate(-' + _variables.sidebarWidth + ', 0);\n    ' : '\n      -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n      -o-transform: translate(0, 0);\n      transform: translate(0, 0);\n    ';
	});

	var renderChildren = function renderChildren(children, sidebarCollapse) {
	  return _react2.default.Children.map(children, function (child) {
	    return _react2.default.cloneElement(child, {
	      collapse: sidebarCollapse
	    });
	  });
	};

	var Sidebar = function Sidebar(_ref) {
	  var children = _ref.children,
	      _ref$fixed = _ref.fixed,
	      fixed = _ref$fixed === undefined ? false : _ref$fixed,
	      _ref$sidebarMini = _ref.sidebarMini,
	      sidebarMini = _ref$sidebarMini === undefined ? false : _ref$sidebarMini,
	      _ref$sidebarCollapse = _ref.sidebarCollapse,
	      sidebarCollapse = _ref$sidebarCollapse === undefined ? false : _ref$sidebarCollapse;
	  return _react2.default.createElement(
	    StyledAside,
	    {
	      fixed: fixed,
	      collapse: sidebarCollapse,
	      mini: sidebarMini
	    },
	    _react2.default.createElement(
	      StyledSection,
	      { name: 'sidebar-wrapper' },
	      renderChildren(children, sidebarCollapse)
	    )
	  );
	};

	Sidebar.propTypes = {
	  children: _propTypes2.default.node,
	  fixed: _propTypes2.default.bool,
	  sidebarMini: _propTypes2.default.bool,
	  sidebarCollapse: _propTypes2.default.bool
	};

	Sidebar.UserPanel = _UserPanel2.default;
	Sidebar.Search = _Search2.default;
	Sidebar.Menu = _Menu2.default;

	exports.default = Sidebar;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 3px;\n  color: ', ';\n'], ['\n  margin-right: 3px;\n  color: ', ';\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n'], ['\n  margin: 0 0 9px 0;\n  font-weight: 600;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  text-decoration: none !important;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ' !important;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  text-decoration: none !important;\n  padding-right: 5px;\n  margin-top: 3px;\n  font-size: 11px;\n  background-color: transparent;\n  color: ', ' !important;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  color: ', ';\n  display: ', ';\n  float: left !important;\n  padding: 5px 5px 5px 15px;\n  line-height: 1;\n  position: absolute;\n  left: 55px;\n\n  /* collapse transform */\n  ', '\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: block;\n  float: left!important;\n  width: 100%;\n  max-width: 45px;\n  vertical-align: middle;\n  height: auto;\n  border-radius: 50%;\n  border: 0;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  box-sizing: border-box;\n\n  position: relative;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: block;\n  white-space: nowrap;\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledIcon = _styledComponents2.default.i(_templateObject, function (props) {
	  return props.online ? '#3c763d' : '#a94442';
	});

	var StyledP = _styledComponents2.default.p(_templateObject2);

	var StyledLink = _styledComponents2.default.a(_templateObject3, function (props) {
	  return props.theme.userPanelColor || '#fff';
	});

	var StyledInfo = _styledComponents2.default.div(_templateObject4, function (props) {
	  return props.theme.userPanelColor || '#fff';
	}, function (props) {
	  return props.collapse ? 'none !important' : 'block';
	}, function (props) {
	  return props.collapse && '-webkit-transform: translateZ(0);';
	});

	var StyledImage = _styledComponents2.default.img(_templateObject5);

	var StyledPanel = _styledComponents2.default.div(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase);

	var UserPanel = function UserPanel(_ref) {
	  var name = _ref.name,
	      image = _ref.image,
	      _ref$href = _ref.href,
	      href = _ref$href === undefined ? null : _ref$href,
	      online = _ref.online,
	      collapse = _ref.collapse;
	  return _react2.default.createElement(
	    StyledPanel,
	    { collapse: collapse },
	    _react2.default.createElement(StyledImage, { src: image }),
	    _react2.default.createElement(
	      StyledInfo,
	      { collapse: collapse },
	      _react2.default.createElement(
	        StyledP,
	        null,
	        name
	      ),
	      _react2.default.createElement(
	        StyledLink,
	        { href: href },
	        _react2.default.createElement(StyledIcon, { className: 'fa fa-circle', online: online }),
	        online ? ' Online' : ' Offline'
	      )
	    )
	  );
	};

	UserPanel.propTypes = {
	  name: _propTypes2.default.string,
	  image: _propTypes2.default.string,
	  href: _propTypes2.default.string,
	  online: _propTypes2.default.bool,
	  collapse: _propTypes2.default.bool
	};

	exports.default = UserPanel;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n'], ['\n  z-index: 2;\n  margin-left: -1px;\n  font-size: ', ';\n  padding: 6px 12px;\n  background-image: none;\n  font-family: ', ';\n  line-height: ', ';\n  overflow: visible;\n  position: relative;\n  cursor: pointer;\n  vertical-align: middle;\n  touch-action: manipulation;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* theme */\n  color: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n'], ['\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n  width: 1%;\n  vertical-align: middle;\n  display: table-cell;\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n'], ['\n  -webkit-writing-mode: horizontal-tb;\n  -webkit-rtl-ordering: logical;\n  user-select: text;\n  cursor: auto;\n  text-rendering: auto;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  text-align: start;\n  background-image: none;\n\n  margin: 0;\n  font: inherit;\n  font-family: inherit;\n\n  /* form-control */\n  padding: 6px 12px;\n  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n\n  &:not(select) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n  display: table-cell;\n\n  /* theme */\n  box-shadow: ', ';\n  background-color: ', ';\n  border: ', ';\n  height: ', ';\n  color: ', ';\n  border-radius: ', ';\n\n  &:focus {\n    background-color: ', ';\n    color: ', ';\n    border-left-color: ', ';\n  }\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n'], ['\n  position: relative;\n  display: table;\n  border-collapse: separate;\n\n  &:focus { outline: -webkit-focus-ring-color auto 5px; }\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  overflow: hidden;\n  text-overflow: clip;\n  border-radius: ', ';\n  border: ', ';\n  margin: ', ';\n\n  /* collapse */\n  ', '\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledIcon = _styledComponents2.default.i(_templateObject);

	var StyledButton = _styledComponents2.default.button(_templateObject2, _variables.fontSizeBase, _variables.fontFamilyBase, _variables.lineHeightBase, function (props) {
	  return props.theme.sidebarFormButtonColor;
	}, function (props) {
	  return props.theme.sidebarFormButtonBorderRadius;
	}, function (props) {
	  return props.theme.sidebarFormInputBoxShadow;
	}, function (props) {
	  return props.theme.sidebarFormInputBg;
	}, function (props) {
	  return props.theme.sidebarFormInputBorder;
	}, function (props) {
	  return props.theme.sidebarFormInputHeight;
	});

	var StyledInputButton = _styledComponents2.default.span(_templateObject3);

	var StyledInput = _styledComponents2.default.input(_templateObject4, function (props) {
	  return props.theme.sidebarFormInputBoxShadow;
	}, function (props) {
	  return props.theme.sidebarFormInputBg;
	}, function (props) {
	  return props.theme.sidebarFormInputBorder;
	}, function (props) {
	  return props.theme.sidebarFormInputHeight;
	}, function (props) {
	  return props.theme.sidebarFormInputColor;
	}, function (props) {
	  return props.theme.sidebarFormInputBorderRadius;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusBg;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusColor;
	}, function (props) {
	  return props.theme.sidebarFormInputFocusBorderLeftColor;
	});

	var InputGroup = _styledComponents2.default.div(_templateObject5);

	var StyledForm = _styledComponents2.default.form(_templateObject6, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
	  return props.theme.sidebarFormBorderRadius || '0';
	}, function (props) {
	  return props.theme.sidebarFormBorder || '0';
	}, function (props) {
	  return props.theme.sidebarFormMargin || '0';
	}, function (props) {
	  return props.collapse && '\n    display: none !important;\n    -webkit-transform: translateZ(0);\n  ';
	});

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search(props) {
	    _classCallCheck(this, Search);

	    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

	    _this.state = {
	      value: ''
	    };
	    _this._changeValue = _this.changeValue.bind(_this);
	    _this._buttonClick = _this.buttonClick.bind(_this);
	    return _this;
	  }

	  _createClass(Search, [{
	    key: 'changeValue',
	    value: function changeValue(event) {
	      this.setState({ value: event.target.value });
	    }
	  }, {
	    key: 'buttonClick',
	    value: function buttonClick() {
	      this.props.onClick(this.state.value);
	      this.setState({ value: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        StyledForm,
	        { collapse: this.props.collapse },
	        _react2.default.createElement(
	          InputGroup,
	          null,
	          _react2.default.createElement(StyledInput, {
	            type: 'text',
	            name: this.props.name,
	            placeholder: this.props.placeholder,
	            value: this.state.value,
	            onChange: this._changeValue
	          }),
	          _react2.default.createElement(
	            StyledInputButton,
	            null,
	            _react2.default.createElement(
	              StyledButton,
	              { name: 'searchButton', onClick: this._buttonClick },
	              _react2.default.createElement(StyledIcon, { className: 'fa fa-search' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);

	Search.propTypes = {
	  name: _propTypes2.default.string,
	  placeholder: _propTypes2.default.string,
	  onClick: _propTypes2.default.func,
	  collapse: _propTypes2.default.bool
	};

	Search.defaultProps = {
	  placeholder: 'Search...',
	  onClick: function onClick(v) {
	    return alert('Searching for ' + v);
	  },
	  collapse: false
	};

	exports.default = Search;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', ';\n  background-color: ', ';\n'], ['\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  display: ', ';\n  text-align: -webkit-match-parent;\n  position: relative;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 10px 25px 10px 15px;\n  font-size: 12px;\n  background-attachment: scroll;\n  background-clip: initial;\n  background-image: none;\n  background-origin: initial;\n  background-position: initial;\n  background-repeat: initial;\n  background-size: initial;\n  text-overflow: clip;\n\n  /* collapse transform */\n  ', '\n\n  /* theme */\n  color: ', ';\n  background-color: ', ';\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n'], ['\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover {\n    overflow: visible;\n  }\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _MenuItem = __webpack_require__(63);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var StyledHeader = _styledComponents2.default.li(_templateObject, function (props) {
	  return props.collapse ? 'none !important' : 'list-item';
	}, function (props) {
	  return props.collapse && '-webkit-transform: translateZ(0);';
	}, function (props) {
	  return props.theme.sidebarHeaderColor || '#fff';
	}, function (props) {
	  return props.theme.sidebarHeaderBg || '#fff';
	});

	var StyledMenu = _styledComponents2.default.ul(_templateObject2);

	var renderChildren = function renderChildren(children, sidebarCollapse) {
	  return _react2.default.Children.map(children, function (child) {
	    return _react2.default.cloneElement(child, {
	      collapse: sidebarCollapse
	    });
	  });
	};

	var Menu = function Menu(_ref) {
	  var children = _ref.children,
	      header = _ref.header,
	      collapse = _ref.collapse;
	  return _react2.default.createElement(
	    StyledMenu,
	    { collapse: collapse },
	    _react2.default.createElement(
	      StyledHeader,
	      { collapse: collapse },
	      header
	    ),
	    renderChildren(children, collapse)
	  );
	};

	Menu.propTypes = {
	  children: _propTypes2.default.node,
	  header: _propTypes2.default.string,
	  collapse: _propTypes2.default.bool
	};

	Menu.Item = _MenuItem2.default;

	exports.default = Menu;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  display: inline;\n  padding: .2em .6em .3em .6em;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n  float: right!important;\n  color: #fff;\n  margin-right: 5px;\n\n  /* ----- color ----- */\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n'], ['\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -7px;\n\n  color: ', ';\n\n  /* ----- hover ----- */\n  ', '\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n'], ['\n  cursor: pointer;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently not supported by any browser */\n\n  /* collapse */\n  ', '\n']),
	    _templateObject4 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n'], ['\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin-right: 10px;\n  margin-left: .3em;\n  float: right;\n\n  ', '\n\n  /* ----- collapse ----- */\n  ', ';\n']),
	    _templateObject5 = _taggedTemplateLiteral(['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n'], ['\n  width: 20px;\n\n  /* ----- color ----- */\n  ', ';\n']),
	    _templateObject6 = _taggedTemplateLiteral(['\n  cursor: auto;\n  text-decoration: none !important;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none !important;\n    text-decoration: none !important;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ' !important;\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n'], ['\n  cursor: auto;\n  text-decoration: none !important;\n  display: block;\n  padding: ', ';\n  position: relative;\n  margin: 0;\n  font-size: ', ';\n  background-color: transparent;\n\n  &:active,\n  &:focus,\n  &:hover {\n    outline: none !important;\n    text-decoration: none !important;\n  }\n\n  /* ----- theme ----- */\n  /* text color - different in submenu */\n  color: ', ' !important;\n  /* left border - none in submenu */\n  border-left: ', ';\n  /* transition */\n  ', '\n  /* font weight */\n  ', '\n\n  /* ----- active or hover properties ----- */\n  ', '\n']),
	    _templateObject7 = _taggedTemplateLiteral(['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n'], ['\n  display: ', ';\n  list-style: none;\n  padding: 0 0 0 ', 'px;\n\n  /* ----- theme ----- */\n  margin: ', ';\n  background-color: ', ';\n\n  /* ----- collapse ----- */\n  ', '\n  ', '\n']),
	    _templateObject8 = _taggedTemplateLiteral(['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n'], ['\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  list-style: none;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(38);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable react/jsx-filename-extension */


	var Label = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, function (props) {
	  switch (props.type) {
	    case 'primary':
	      return _variables.lightBlue;
	    case 'success':
	      return _variables.green;
	    case 'danger':
	      return _variables.red;
	    case 'warning':
	      return _variables.yellow;
	    case 'information':
	      return _variables.aqua;
	    default:
	      return _variables.lightBlue;
	  }
	}, function (props) {
	  return props.collapse && '\n    display: ' + (props.hover ? 'block' : 'none') + ';\n    float: right;\n  ';
	});

	var RightSpan = _styledComponents2.default.span(_templateObject2, function (props) {
	  return props.theme.sidebarLinkColor || '#fff';
	}, function (props) {
	  return props.collapse && props.hover && !props.level && '\n    display: block;\n    left: ' + (parseInt(_variables.sidebarWidth, 10) - 30) + 'px;\n    top: 10px!important;\n    margin-left: -3px;\n    padding: 12px 5px 12px 20px;\n    float: right;\n    overflow-x: visible;\n  ';
	});

	var StyledTitle = _styledComponents2.default.span(_templateObject3, function (props) {
	  return !props.level && props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      border-top-right-radius: 4px;\n      ' + (props.hover ? '\n          display: block !important;\n          position: absolute;\n          width: ' + (parseInt(_variables.sidebarWidth, 10) - parseInt(_variables.sidebarMiniWidth, 10)) + 'px;\n          left: ' + _variables.sidebarMiniWidth + ';\n          top: 0;\n          margin-left: -3px;\n          padding: 12px 5px 12px 20px;\n          background-color: inherit;\n        ' : '\n          display: none !important;\n          -webkit-transform: translateZ(0);\n        ') + '\n    }';
	});

	var StyledRightIcon = _styledComponents2.default.i(_templateObject4, function (props) {
	  return props.open && '\n    -ms-transform: rotate(-90deg);\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n  ';
	}, function (props) {
	  return props.collapse && !props.hover && 'display: none !important;';
	});

	var StyledLeftIcon = _styledComponents2.default.i(_templateObject5, function (props) {
	  switch (props.color) {
	    case 'primary':
	      return 'color: ' + _variables.lightBlue + ';';
	    case 'success':
	      return 'color: ' + _variables.green + ';';
	    case 'danger':
	      return 'color: ' + _variables.red + ';';
	    case 'warning':
	      return 'color: ' + _variables.yellow + ';';
	    case 'information':
	      return 'color: ' + _variables.aqua + ';';
	    default:
	      {
	        var c = (0, _tinycolor2.default)(props.color);
	        return c.isValid() ? 'color: ' + c.toString() + ';' : null;
	      }
	  }
	});

	var StyledLink = _styledComponents2.default.a(_templateObject6, function (props) {
	  return !props.level ? '12px 5px 12px 15px' : '5px 5px 5px 15px';
	}, _variables.fontSizeBase, function (props) {
	  return props.level ? props.theme.sidebarSubmenuLinkColor : props.theme.sidebarLinkColor;
	}, function (props) {
	  return !props.level ? props.theme.sidebarLinkBorderLeft : 'none';
	}, function (props) {
	  return props.theme.sidebarLinkTransition && '\n    -webkit-transition: ' + props.theme.sidebarLinkTransition + ';\n    -moz-transition: ' + props.theme.sidebarLinkTransition + ';\n    -o-transition: ' + props.theme.sidebarLinkTransition + ';\n    transition: ' + props.theme.sidebarLinkTransition + ';\n  ';
	}, function (props) {
	  return props.theme.sidebarLinkFontWeight && '\n    font-weight: ' + props.theme.sidebarLinkFontWeight + ';\n  ';
	}, function (props) {
	  return (props.active || props.hover) && '\n    color: ' + (props.theme.sidebarLinkActiveColor || '#fff') + ' !important;\n    background: ' + (!props.level && props.theme.sidebarLinkActiveBg) + ';\n    border-left-color: ' + (props.theme.sidebarLinkActiveBorderLeftColor || '#3c8dbc') + ';\n    font-weight: ' + (props.theme.sidebarLinkActiveFontWeight || 'normal') + ';\n    text-decoration: none !important;\n  ';
	});

	var StyledSubMenu = _styledComponents2.default.ul(_templateObject7, function (props) {
	  return props.open ? 'block' : 'none';
	}, function (props) {
	  return (props.level + 1) * 5;
	}, function (props) {
	  return props.theme.sidebarSubmenuMargin || '0';
	}, function (props) {
	  return props.theme.sidebarSubmenuBg || '#222d32';
	}, function (props) {
	  return props.collapse && '@media (min-width: ' + _variables.screenSmMin + ') {\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
	}, function (props) {
	  return props.collapse && props.open && !props.level && '@media (min-width: ' + _variables.screenSmMin + ') {\n      position: absolute;\n      width: ' + (parseInt(_variables.sidebarWidth, 10) - 50) + 'px;\n      left: ' + _variables.sidebarMiniWidth + ';\n      top: 44px;\n      margin-left: 0;\n      border-bottom-right-radius: 4px;\n      ' + (props.theme.sidebarSubmenuLgBorderLeft && 'border-left: ' + props.theme.sidebarSubmenuLgBorderLeft) + '\n    }';
	});

	var StyledMenuItem = _styledComponents2.default.li(_templateObject8, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase);

	var renderChildren = function renderChildren(children, sidebarCollapse, level, hover) {
	  var newLevel = level + 1;
	  return _react2.default.Children.map(children, function (child, index) {
	    return _react2.default.cloneElement(child, {
	      key: index.toString(),
	      collapse: sidebarCollapse,
	      level: newLevel,
	      parentHover: hover
	    });
	  });
	};

	var renderLabels = function renderLabels(labels, collapse, hover) {
	  return labels.map(function (l) {
	    if (l.key && l.type && l.text) {
	      if (l.key === 1) {
	        return _react2.default.createElement(
	          Label,
	          {
	            collapse: collapse,
	            hover: hover,
	            key: l.key.toString(),
	            type: l.type
	          },
	          l.text
	        );
	      } else if (!collapse) {
	        return _react2.default.createElement(
	          Label,
	          {
	            collapse: collapse,
	            hover: hover,
	            key: l.key.toString(),
	            type: l.type
	          },
	          l.text
	        );
	      }
	    }
	    return null;
	  });
	};

	var MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);

	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);

	    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

	    _this.state = {
	      open: false,
	      hover: false
	    };
	    _this._toggleMenu = _this.toggleMenu.bind(_this);
	    _this._toggleHover = _this.toggleHover.bind(_this);
	    return _this;
	  }

	  _createClass(MenuItem, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      nextProps.collapse !== this.props.collapse && this.setState({ open: false });
	    }
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      this.props.children && this.setState({ open: !this.state.open });
	    }
	  }, {
	    key: 'toggleHover',
	    value: function toggleHover(state) {
	      this.setState({ hover: state });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        StyledMenuItem,
	        {
	          collapse: this.props.collapse,
	          hover: this.props.parentHover,
	          level: this.props.level,
	          onMouseLeave: function onMouseLeave() {
	            return _this2._toggleHover(false);
	          }
	        },
	        _react2.default.createElement(
	          StyledLink,
	          {
	            active: this.props.active,
	            collapse: this.props.collapse,
	            hover: this.state.hover,
	            href: this.props.children || this.props.onClick ? null : this.props.href,
	            level: this.props.level,
	            onClick: this.props.children ? this._toggleMenu : this.props.onClick,
	            onMouseEnter: function onMouseEnter() {
	              return _this2._toggleHover(true);
	            }
	          },
	          _react2.default.createElement(StyledLeftIcon, {
	            className: 'fa ' + (this.props.icon.className || 'fa-circle-o'),
	            color: this.props.icon.color || 'none'
	          }),
	          _react2.default.createElement(
	            StyledTitle,
	            {
	              collapse: this.props.collapse,
	              hover: this.state.hover,
	              level: this.props.level
	            },
	            this.props.title
	          ),
	          _react2.default.createElement(
	            RightSpan,
	            {
	              collapse: this.props.collapse,
	              hover: this.state.hover,
	              level: this.props.level
	            },
	            this.props.labels ? renderLabels(this.props.labels, this.props.collapse, this.state.hover) : this.props.children && _react2.default.createElement(StyledRightIcon, {
	              className: 'fa fa-angle-left',
	              open: this.state.open,
	              collapse: this.props.collapse,
	              hover: this.state.hover
	            })
	          )
	        ),
	        this.props.children && _react2.default.createElement(
	          StyledSubMenu,
	          {
	            collapse: this.props.collapse,
	            hover: this.state.hover,
	            level: this.props.level,
	            open: this.state.open
	          },
	          renderChildren(this.props.children, this.props.collapse, this.props.level, this.state.hover || this.props.parentHover)
	        )
	      );
	    }
	  }]);

	  return MenuItem;
	}(_react2.default.Component);

	MenuItem.propTypes = {
	  children: _propTypes2.default.node,
	  active: _propTypes2.default.bool,
	  collapse: _propTypes2.default.bool,
	  icon: _propTypes2.default.objectOf(_propTypes2.default.string),
	  href: _propTypes2.default.string,
	  labels: _propTypes2.default.arrayOf(_propTypes2.default.object),
	  level: _propTypes2.default.number,
	  onClick: _propTypes2.default.func,
	  parentHover: _propTypes2.default.bool,
	  title: _propTypes2.default.string
	};

	MenuItem.defaultProps = {
	  collapse: false,
	  icon: { className: 'fa-circle-o' },
	  href: null,
	  level: 0,
	  parentHover: false,
	  title: 'Title'
	};

	exports.default = MenuItem;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n'], ['\n  /* clearfix */\n  &:before, &:after {\n    display: table;\n    content: " ";\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  &:after {\n    clear: both;\n  }\n\n  /* shared */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: ', ';\n  font-weight: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  box-sizing: border-box;\n\n  /* theme */\n  ', '\n  background-color: transparent;\n\n  min-height: 100%;\n  margin-left: ', ';\n  z-index: 800;\n\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  /* fixed layout */\n  ', ';\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n  /* sidebar on small screens */\n  @media (max-width: ', ') {\n    margin-left: 0;\n    ', ';\n  }\n']);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Content = _styledComponents2.default.div(_templateObject, _variables.fontFamilyBase, _variables.fontWeightBase, _variables.fontSizeBase, _variables.lineHeightBase, function (props) {
	  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
	}, function (props) {
	  return props.topNav ? '0' : _variables.sidebarWidth;
	}, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, function (props) {
	  return props.fixed && 'padding-top: ' + _variables.navbarHeight + ';';
	}, _variables.screenSmMin, function (props) {
	  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + _variables.sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
	}, function (props) {
	  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
	}, _variables.screenXsMax, function (props) {
	  return props.fixed && 'padding-top: ' + parseInt(_variables.navbarHeight, 10) * 2 + 'px;';
	});

	exports.default = Content;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _templateObject = _taggedTemplateLiteral(['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n'], ['\n  -webkit-transition: ', ' ', ', width ', ' ', ';\n  -moz-transition: ', ' ', ', width ', ' ', ';\n  -o-transition: ', ' ', ', width ', ' ', ';\n  transition: ', ' ', ', width ', ' ', ';\n\n  box-sizing: border-box;\n  display: block;\n  z-index: 820;\n  background: ', ';\n  padding: 15px;\n  color: #444;\n  border-top: 1px solid ', ';\n  margin-left: ', ';\n\n  /* theme */\n  ', '\n\n  /* media queries */\n  /* sidebar on large screens */\n  @media (min-width: ', ') {\n    ', '\n    ', '\n  }\n']);

	var _styledComponents = __webpack_require__(40);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	var Footer = _styledComponents2.default.footer(_templateObject, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.transitionSpeed, _variables.transitionFn, _variables.white, _variables.gray, function (props) {
	  return props.topNav ? '0' : _variables.sidebarWidth;
	}, function (props) {
	  return props.theme.contentLeftBorder && 'border-left: ' + props.theme.contentLeftBorder + ';';
	}, _variables.screenSmMin, function (props) {
	  return props.sidebarCollapse && props.sidebarMini && '\n      margin-left: ' + _variables.sidebarMiniWidth + ' !important;\n      z-index: 840;\n    ';
	}, function (props) {
	  return props.sidebarCollapse && !props.sidebarMini && 'margin-left: 0;';
	});

	exports.default = Footer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _skinBlack = __webpack_require__(67);

	var _skinBlack2 = _interopRequireDefault(_skinBlack);

	var _skinBlackLight = __webpack_require__(68);

	var _skinBlackLight2 = _interopRequireDefault(_skinBlackLight);

	var _skinBlue = __webpack_require__(69);

	var _skinBlue2 = _interopRequireDefault(_skinBlue);

	var _skinBlueLight = __webpack_require__(70);

	var _skinBlueLight2 = _interopRequireDefault(_skinBlueLight);

	var _skinGreen = __webpack_require__(71);

	var _skinGreen2 = _interopRequireDefault(_skinGreen);

	var _skinGreenLight = __webpack_require__(72);

	var _skinGreenLight2 = _interopRequireDefault(_skinGreenLight);

	var _skinPurple = __webpack_require__(73);

	var _skinPurple2 = _interopRequireDefault(_skinPurple);

	var _skinPurpleLight = __webpack_require__(74);

	var _skinPurpleLight2 = _interopRequireDefault(_skinPurpleLight);

	var _skinRed = __webpack_require__(75);

	var _skinRed2 = _interopRequireDefault(_skinRed);

	var _skinRedLight = __webpack_require__(76);

	var _skinRedLight2 = _interopRequireDefault(_skinRedLight);

	var _skinYellow = __webpack_require__(77);

	var _skinYellow2 = _interopRequireDefault(_skinYellow);

	var _skinYellowLight = __webpack_require__(78);

	var _skinYellowLight2 = _interopRequireDefault(_skinYellowLight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  'skin-black': _skinBlack2.default,
	  'skin-black-light': _skinBlackLight2.default,
	  'skin-blue': _skinBlue2.default,
	  'skin-blue-light': _skinBlueLight2.default,
	  'skin-green': _skinGreen2.default,
	  'skin-green-light': _skinGreenLight2.default,
	  'skin-purple': _skinPurple2.default,
	  'skin-purple-light': _skinPurpleLight2.default,
	  'skin-red': _skinRed2.default,
	  'skin-red-light': _skinRedLight2.default,
	  'skin-yellow': _skinYellow2.default,
	  'skin-yellow-light': _skinYellowLight2.default
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, {
	  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
	  navbarToggleColor: _variables.baseColor,
	  navbarBrandColor: _variables.baseColor,
	  navbarItemBorder: '1px solid #eee',
	  navbarUserMenuHeaderBg: '#222',
	  logoSmallVariant: '\n      background-color: #222;\n      color: ' + _variables.white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + (0, _tinycolor2.default)('#222').darken(1).toString() + ';\n      }\n      '
	}, (0, _variables.navbarVariant)(_variables.white, _variables.baseColor, '#999', _variables.white), (0, _variables.logoVariant)(_variables.white, _variables.baseColor), (0, _variables.sidebarVariant)(_variables.white));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, {
	  headerBoxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
	  navbarToggleColor: _variables.baseColor,
	  navbarBrandColor: _variables.baseColor,
	  navbarItemBorder: '1px solid #eee',
	  navbarUserMenuHeaderBg: '#222',
	  logoSmallVariant: '\n      background-color: #222;\n      color: ' + _variables.white + ';\n      border-bottom: 0 solid transparent;\n\n      &:hover {\n        background-color: ' + (0, _tinycolor2.default)('#222').darken(1).toString() + ';\n      }\n      '
	}, (0, _variables.navbarVariant)(_variables.white, _variables.baseColor, '#999', _variables.white), (0, _variables.logoVariant)(_variables.white, _variables.baseColor), (0, _variables.sidebarVariant)(_variables.white, true));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.lightBlue, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.lightBlue).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.lightBlue), (0, _variables.navbarItemVariant)(_variables.lightBlue));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.lightBlue, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.lightBlue).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.lightBlue, true), (0, _variables.navbarItemVariant)(_variables.lightBlue));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.green, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.green).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.green), (0, _variables.navbarItemVariant)(_variables.green));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.green, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.green).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.green, true), (0, _variables.navbarItemVariant)(_variables.green));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.purple, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.purple).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.purple), (0, _variables.navbarItemVariant)(_variables.purple));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.purple, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.purple).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.purple, true), (0, _variables.navbarItemVariant)(_variables.purple));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.red, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.red).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.red), (0, _variables.navbarItemVariant)(_variables.red));

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.red, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.red).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.red, true), (0, _variables.navbarItemVariant)(_variables.red));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.yellow, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.yellow).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.yellow), (0, _variables.navbarItemVariant)(_variables.yellow));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tinycolor = __webpack_require__(54);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	var _variables = __webpack_require__(53);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = Object.assign({}, (0, _variables.navbarVariant)(_variables.yellow, _variables.white), (0, _variables.logoVariant)((0, _tinycolor2.default)(_variables.yellow).darken(5).toString()), (0, _variables.sidebarVariant)(_variables.yellow, true), (0, _variables.navbarItemVariant)(_variables.yellow));

/***/ })
/******/ ])
});
;