'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = domReady;
function domReady(fn) {
	function trigger() {
		window.document.removeEventListener('DOMContentLoaded', trigger);
		window.removeEventListener('load', trigger);
		fn();
	}

	// check if document is already loaded
	if (window.document.readyState === 'complete') {
		window.setTimeout(fn);
	} else {
		// We can not use jqLite since we are not done loading and jQuery could be loaded later.

		// Works for modern browsers and IE9
		window.document.addEventListener('DOMContentLoaded', trigger);

		// Fallback to window.onload for others
		window.addEventListener('load', trigger);
	}
}