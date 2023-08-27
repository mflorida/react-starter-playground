/**
 * Copy of jQuery's static `$.extend()` method. This also
 * adds `window.extend` and `window.merge` global functions.
 * (NOT the same as `jQuery.fn.extend()` instance method)
 */

window.$extend = (function($){

  const isArray = Array.isArray;

  $.isPlainObject = $.isPlainObject || function isPlainObject(it){
    return Object.prototype.toString.call(it) === '[object Object]';
  };

  $.isFunction = $.isFunction || function isFunction(it){
    return typeof it === 'function';
  };

  // Don't overwrite existing `$.extend` method (???)
  if (($ === window.jQuery) && $.isFunction($.extend)) {
    return $.extend;
  }

  $.extend = function(){

    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && !$.isFunction(target)) {
      target = {};
    }

    // // extend jQuery itself if only one argument is passed
    // How about not.
    // if (length === i) {
    //   target = this;
    //   --i;
    // }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];

            }
            else {
              clone = src && $.isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[name] = $.extend(deep, clone, copy);

            // Don't bring in undefined values
          }
          else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };

  return $.extend;

})(window.$ = (window.jQuery || function(x){ return x }));
