"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUploadDir = exports.parse = exports.getRelativeURI = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getRelativeURI = function getRelativeURI(uri1, uri2) {
  // Get from URI1 to URI2
  // Caveats: Probably doesn't handle root dir correctly at all.
  // I think it also requires that the first component is always the same (in this case it's always `src`)
  // Grab components of URI without empty strings
  var uri1_components = uri1.split('/').filter(String);
  var uri2_components = uri2.split('/').filter(String); // Below block finds the index of the first different component

  var uri2_idx = 0;
  var index, component;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = uri1_components.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      index = _step$value[0];
      component = _step$value[1];

      if (uri2_components[uri2_idx] !== component) {
        break;
      }

      uri2_idx += 1;
    } // Find the correct amount of `..` needed from uri1.

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var upRoots = Array(uri1_components.length - index - 1).fill('..'); // Grab the rest of uri2 to append to the `..`'s of above.

  return upRoots.concat(uri2_components.slice(uri2_idx)).join('/');
};

exports.getRelativeURI = getRelativeURI;

var parse = function parse(media, rawImage, blogDataPath) {
  if (!media) {
    return rawImage;
  }

  return media.filename ? getRelativeURI(blogDataPath, media.id) : null;
};

exports.parse = parse;

var getUploadDir = function getUploadDir(blogPost) {
  var postPathParts = blogPost.initialValues.jsonNode.fileRelativePath.split('/');
  var postDirectory = postPathParts.splice(0, postPathParts.length - 1).join('/');
  return postDirectory;
};

exports.getUploadDir = getUploadDir;