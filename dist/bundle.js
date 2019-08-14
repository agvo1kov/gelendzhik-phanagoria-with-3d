/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"O_RDONLY\\\":0,\\\"O_WRONLY\\\":1,\\\"O_RDWR\\\":2,\\\"S_IFMT\\\":61440,\\\"S_IFREG\\\":32768,\\\"S_IFDIR\\\":16384,\\\"S_IFCHR\\\":8192,\\\"S_IFBLK\\\":24576,\\\"S_IFIFO\\\":4096,\\\"S_IFLNK\\\":40960,\\\"S_IFSOCK\\\":49152,\\\"O_CREAT\\\":512,\\\"O_EXCL\\\":2048,\\\"O_NOCTTY\\\":131072,\\\"O_TRUNC\\\":1024,\\\"O_APPEND\\\":8,\\\"O_DIRECTORY\\\":1048576,\\\"O_NOFOLLOW\\\":256,\\\"O_SYNC\\\":128,\\\"O_SYMLINK\\\":2097152,\\\"O_NONBLOCK\\\":4,\\\"S_IRWXU\\\":448,\\\"S_IRUSR\\\":256,\\\"S_IWUSR\\\":128,\\\"S_IXUSR\\\":64,\\\"S_IRWXG\\\":56,\\\"S_IRGRP\\\":32,\\\"S_IWGRP\\\":16,\\\"S_IXGRP\\\":8,\\\"S_IRWXO\\\":7,\\\"S_IROTH\\\":4,\\\"S_IWOTH\\\":2,\\\"S_IXOTH\\\":1,\\\"E2BIG\\\":7,\\\"EACCES\\\":13,\\\"EADDRINUSE\\\":48,\\\"EADDRNOTAVAIL\\\":49,\\\"EAFNOSUPPORT\\\":47,\\\"EAGAIN\\\":35,\\\"EALREADY\\\":37,\\\"EBADF\\\":9,\\\"EBADMSG\\\":94,\\\"EBUSY\\\":16,\\\"ECANCELED\\\":89,\\\"ECHILD\\\":10,\\\"ECONNABORTED\\\":53,\\\"ECONNREFUSED\\\":61,\\\"ECONNRESET\\\":54,\\\"EDEADLK\\\":11,\\\"EDESTADDRREQ\\\":39,\\\"EDOM\\\":33,\\\"EDQUOT\\\":69,\\\"EEXIST\\\":17,\\\"EFAULT\\\":14,\\\"EFBIG\\\":27,\\\"EHOSTUNREACH\\\":65,\\\"EIDRM\\\":90,\\\"EILSEQ\\\":92,\\\"EINPROGRESS\\\":36,\\\"EINTR\\\":4,\\\"EINVAL\\\":22,\\\"EIO\\\":5,\\\"EISCONN\\\":56,\\\"EISDIR\\\":21,\\\"ELOOP\\\":62,\\\"EMFILE\\\":24,\\\"EMLINK\\\":31,\\\"EMSGSIZE\\\":40,\\\"EMULTIHOP\\\":95,\\\"ENAMETOOLONG\\\":63,\\\"ENETDOWN\\\":50,\\\"ENETRESET\\\":52,\\\"ENETUNREACH\\\":51,\\\"ENFILE\\\":23,\\\"ENOBUFS\\\":55,\\\"ENODATA\\\":96,\\\"ENODEV\\\":19,\\\"ENOENT\\\":2,\\\"ENOEXEC\\\":8,\\\"ENOLCK\\\":77,\\\"ENOLINK\\\":97,\\\"ENOMEM\\\":12,\\\"ENOMSG\\\":91,\\\"ENOPROTOOPT\\\":42,\\\"ENOSPC\\\":28,\\\"ENOSR\\\":98,\\\"ENOSTR\\\":99,\\\"ENOSYS\\\":78,\\\"ENOTCONN\\\":57,\\\"ENOTDIR\\\":20,\\\"ENOTEMPTY\\\":66,\\\"ENOTSOCK\\\":38,\\\"ENOTSUP\\\":45,\\\"ENOTTY\\\":25,\\\"ENXIO\\\":6,\\\"EOPNOTSUPP\\\":102,\\\"EOVERFLOW\\\":84,\\\"EPERM\\\":1,\\\"EPIPE\\\":32,\\\"EPROTO\\\":100,\\\"EPROTONOSUPPORT\\\":43,\\\"EPROTOTYPE\\\":41,\\\"ERANGE\\\":34,\\\"EROFS\\\":30,\\\"ESPIPE\\\":29,\\\"ESRCH\\\":3,\\\"ESTALE\\\":70,\\\"ETIME\\\":101,\\\"ETIMEDOUT\\\":60,\\\"ETXTBSY\\\":26,\\\"EWOULDBLOCK\\\":35,\\\"EXDEV\\\":18,\\\"SIGHUP\\\":1,\\\"SIGINT\\\":2,\\\"SIGQUIT\\\":3,\\\"SIGILL\\\":4,\\\"SIGTRAP\\\":5,\\\"SIGABRT\\\":6,\\\"SIGIOT\\\":6,\\\"SIGBUS\\\":10,\\\"SIGFPE\\\":8,\\\"SIGKILL\\\":9,\\\"SIGUSR1\\\":30,\\\"SIGSEGV\\\":11,\\\"SIGUSR2\\\":31,\\\"SIGPIPE\\\":13,\\\"SIGALRM\\\":14,\\\"SIGTERM\\\":15,\\\"SIGCHLD\\\":20,\\\"SIGCONT\\\":19,\\\"SIGSTOP\\\":17,\\\"SIGTSTP\\\":18,\\\"SIGTTIN\\\":21,\\\"SIGTTOU\\\":22,\\\"SIGURG\\\":16,\\\"SIGXCPU\\\":24,\\\"SIGXFSZ\\\":25,\\\"SIGVTALRM\\\":26,\\\"SIGPROF\\\":27,\\\"SIGWINCH\\\":28,\\\"SIGIO\\\":23,\\\"SIGSYS\\\":12,\\\"SSL_OP_ALL\\\":2147486719,\\\"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION\\\":262144,\\\"SSL_OP_CIPHER_SERVER_PREFERENCE\\\":4194304,\\\"SSL_OP_CISCO_ANYCONNECT\\\":32768,\\\"SSL_OP_COOKIE_EXCHANGE\\\":8192,\\\"SSL_OP_CRYPTOPRO_TLSEXT_BUG\\\":2147483648,\\\"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS\\\":2048,\\\"SSL_OP_EPHEMERAL_RSA\\\":0,\\\"SSL_OP_LEGACY_SERVER_CONNECT\\\":4,\\\"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER\\\":32,\\\"SSL_OP_MICROSOFT_SESS_ID_BUG\\\":1,\\\"SSL_OP_MSIE_SSLV2_RSA_PADDING\\\":0,\\\"SSL_OP_NETSCAPE_CA_DN_BUG\\\":536870912,\\\"SSL_OP_NETSCAPE_CHALLENGE_BUG\\\":2,\\\"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG\\\":1073741824,\\\"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG\\\":8,\\\"SSL_OP_NO_COMPRESSION\\\":131072,\\\"SSL_OP_NO_QUERY_MTU\\\":4096,\\\"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION\\\":65536,\\\"SSL_OP_NO_SSLv2\\\":16777216,\\\"SSL_OP_NO_SSLv3\\\":33554432,\\\"SSL_OP_NO_TICKET\\\":16384,\\\"SSL_OP_NO_TLSv1\\\":67108864,\\\"SSL_OP_NO_TLSv1_1\\\":268435456,\\\"SSL_OP_NO_TLSv1_2\\\":134217728,\\\"SSL_OP_PKCS1_CHECK_1\\\":0,\\\"SSL_OP_PKCS1_CHECK_2\\\":0,\\\"SSL_OP_SINGLE_DH_USE\\\":1048576,\\\"SSL_OP_SINGLE_ECDH_USE\\\":524288,\\\"SSL_OP_SSLEAY_080_CLIENT_DH_BUG\\\":128,\\\"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG\\\":0,\\\"SSL_OP_TLS_BLOCK_PADDING_BUG\\\":512,\\\"SSL_OP_TLS_D5_BUG\\\":256,\\\"SSL_OP_TLS_ROLLBACK_BUG\\\":8388608,\\\"ENGINE_METHOD_DSA\\\":2,\\\"ENGINE_METHOD_DH\\\":4,\\\"ENGINE_METHOD_RAND\\\":8,\\\"ENGINE_METHOD_ECDH\\\":16,\\\"ENGINE_METHOD_ECDSA\\\":32,\\\"ENGINE_METHOD_CIPHERS\\\":64,\\\"ENGINE_METHOD_DIGESTS\\\":128,\\\"ENGINE_METHOD_STORE\\\":256,\\\"ENGINE_METHOD_PKEY_METHS\\\":512,\\\"ENGINE_METHOD_PKEY_ASN1_METHS\\\":1024,\\\"ENGINE_METHOD_ALL\\\":65535,\\\"ENGINE_METHOD_NONE\\\":0,\\\"DH_CHECK_P_NOT_SAFE_PRIME\\\":2,\\\"DH_CHECK_P_NOT_PRIME\\\":1,\\\"DH_UNABLE_TO_CHECK_GENERATOR\\\":4,\\\"DH_NOT_SUITABLE_GENERATOR\\\":8,\\\"NPN_ENABLED\\\":1,\\\"RSA_PKCS1_PADDING\\\":1,\\\"RSA_SSLV23_PADDING\\\":2,\\\"RSA_NO_PADDING\\\":3,\\\"RSA_PKCS1_OAEP_PADDING\\\":4,\\\"RSA_X931_PADDING\\\":5,\\\"RSA_PKCS1_PSS_PADDING\\\":6,\\\"POINT_CONVERSION_COMPRESSED\\\":2,\\\"POINT_CONVERSION_UNCOMPRESSED\\\":4,\\\"POINT_CONVERSION_HYBRID\\\":6,\\\"F_OK\\\":0,\\\"R_OK\\\":4,\\\"W_OK\\\":2,\\\"X_OK\\\":1,\\\"UV_UDP_REUSEADDR\\\":4}\");\n\n//# sourceURL=webpack:///./node_modules/constants-browserify/constants.json?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_panorama_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/panorama.js */ \"./src/js/panorama.js\");\n/* harmony import */ var _js_WebGL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/WebGL.js */ \"./src/js/WebGL.js\");\n\n\n\nif ( !_js_WebGL_js__WEBPACK_IMPORTED_MODULE_1__[\"WEBGL\"].isWebGLAvailable() ) {\n    var warning = _js_WebGL_js__WEBPACK_IMPORTED_MODULE_1__[\"WEBGL\"].getWebGLErrorMessage();\n    document.getElementById( 'webgl_is_not_supported' ).appendChild( warning );\n}\n\nif ( _js_WebGL_js__WEBPACK_IMPORTED_MODULE_1__[\"WEBGL\"].isWebGL2Available() === false ) {\n\tdocument.body.appendChild( _js_WebGL_js__WEBPACK_IMPORTED_MODULE_1__[\"WEBGL\"].getWebGL2ErrorMessage() );\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/WebGL.js":
/*!*************************!*\
  !*** ./src/js/WebGL.js ***!
  \*************************/
/*! exports provided: WEBGL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEBGL\", function() { return WEBGL; });\n/**\n * @author alteredq / http://alteredqualia.com/\n * @author mr.doob / http://mrdoob.com/\n */\n\n\n\nvar WEBGL = {\n\n\tisWebGLAvailable: function () {\n\n\t\ttry {\n\n\t\t\tvar canvas = document.createElement( 'canvas' );\n\t\t\treturn !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );\n\n\t\t} catch ( e ) {\n\n\t\t\treturn false;\n\n\t\t}\n\n\t},\n\n\tisWebGL2Available: function () {\n\n\t\ttry {\n\n\t\t\tvar canvas = document.createElement( 'canvas' );\n\t\t\treturn !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );\n\n\t\t} catch ( e ) {\n\n\t\t\treturn false;\n\n\t\t}\n\n\t},\n\n\tgetWebGLErrorMessage: function () {\n\n\t\treturn this.getErrorMessage( 1 );\n\n\t},\n\n\tgetWebGL2ErrorMessage: function () {\n\n\t\treturn this.getErrorMessage( 2 );\n\n\t},\n\n\tgetErrorMessage: function ( version ) {\n\n\t\tvar names = {\n\t\t\t1: 'WebGL',\n\t\t\t2: 'WebGL 2'\n\t\t};\n\n\t\tvar contexts = {\n\t\t\t1: window.WebGLRenderingContext,\n\t\t\t2: window.WebGL2RenderingContext\n\t\t};\n\n\t\tvar message = 'Your $0 does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">$1</a>';\n\n\t\tvar element = document.createElement( 'div' );\n\t\telement.id = 'webglmessage';\n\t\telement.style.fontFamily = 'monospace';\n\t\telement.style.fontSize = '13px';\n\t\telement.style.fontWeight = 'normal';\n\t\telement.style.textAlign = 'center';\n\t\telement.style.background = '#fff';\n\t\telement.style.color = '#000';\n\t\telement.style.padding = '1.5em';\n\t\telement.style.width = '400px';\n\t\telement.style.margin = '5em auto 0';\n\n\t\tif ( contexts[ version ] ) {\n\n\t\t\tmessage = message.replace( '$0', 'graphics card' );\n\n\t\t} else {\n\n\t\t\tmessage = message.replace( '$0', 'browser' );\n\n\t\t}\n\n\t\tmessage = message.replace( '$1', names[ version ] );\n\n\t\telement.innerHTML = message;\n\n\t\treturn element;\n\n\t}\n\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/WebGL.js?");

/***/ }),

/***/ "./src/js/panorama.js":
/*!****************************!*\
  !*** ./src/js/panorama.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants */ \"./node_modules/constants-browserify/constants.json\");\nvar constants__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ \"./node_modules/constants-browserify/constants.json\", 1);\n\n\n// Our Javascript will go here.\nvar scene = new THREE.Scene();\nscene.add( new THREE.AmbientLight( 0xffffff, 1.2 ) );\n\nvar renderer = new THREE.WebGLRenderer();\nrenderer.setSize( window.innerWidth, window.innerHeight );\n// renderer.setClearColor( 0xffffff, 1);\nvar camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\ncamera.position.z = 0;\ncamera.position.y = 0;\ncamera.position.x = 0;\nvar controls = new THREE.OrbitControls( camera, renderer.domElement );\ncontrols.target = new THREE.Vector3(.1, 0, 0);\ncontrols.mouseButtons = {\n\tLEFT: THREE.MOUSE.ROTATE,\n\tMIDDLE: THREE.MOUSE.ZOOM,\n\tRIGHT: THREE.MOUSE.PAN\n};\ncontrols.zoomSpeed = 1;\ncontrols.update();\n\ndocument.body.appendChild( renderer.domElement );\n\nvar cube_width = 100;\nvar geometry = new THREE.BoxBufferGeometry( cube_width, cube_width, cube_width, 80, 10, 80 ).toNonIndexed();\ngeometry.scale( - 1, 1, 1 );\nvar material = new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/panorama.min.jpg' )} );\nvar positions = geometry.attributes.position.array;\nvar uvs = geometry.attributes.uv.array;\nvar r = cube_width/2;\nfor ( var i = 0, l = positions.length / 3; i < l; i ++ ) {\n\tvar x = positions[ i * 3 + 0 ]/r;\n\tvar y = positions[ i * 3 + 1 ]/r;\n\tvar z = positions[ i * 3 + 2 ]/r;\n\tvar tmp_x = x;\n\tvar tmp_y = y;\n\tvar tmp_z = z;\n\tvar a = Math.sqrt(1.0/(x*x+y*y+z*z));\n\tx = a*x;\n\ty = a*y;\n\tz = a*z;\n\t\n\tvar phi, theta;\n\t\n\tphi = Math.asin(y);\n\ttheta = Math.atan2(x, z);\n\t\n\t\n\tif((tmp_x == 0) && (tmp_z < 0)){ //修补前后两端拼接区域的效果\n\t\tvar p = Math.floor(i/3)\n\t\tif((positions[p*3*3]<0)||(positions[(p+1)*3*3]<0)||(positions[(p+2)*3*3]<0)){\n\t\t\ttheta = -Math.PI;\n\t\t}\n\t}\n\t\n\t\n\tvar uvx = 1 - (theta+Math.PI)/Math.PI/2;\n\tvar uvy = (phi+Math.PI/2)/Math.PI;\n\t\n\tuvs[i*2] = uvx;\n\tuvs[i*2+1] = uvy;\n}\n\nvar mesh = new THREE.Mesh( geometry, material );\nvar meshBox = new THREE.Mesh( geometry, material );\nscene.add( meshBox );\n\nvar cameraY = 0, cameraZ = 0;\nfunction animate() {\n    requestAnimationFrame( animate );\n    renderer.render( scene, camera );\n\tcontrols.update();\n\t[cameraY, cameraZ] = [camera.position.y, camera.position.z];\n}\nanimate();\n\n// var ship = null;\n// var mesh = null;\n\n// var mtlLoader = new THREE.MTLLoader();\n// mtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/ship/\" );\n// mtlLoader.load( 'ship200k_1.mtl', function( materials ) {\n\n//   materials.preload();\n\n//   var objLoader = new THREE.OBJLoader();\n//   objLoader.setMaterials( materials );\n//   objLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/ship/\" );\n//   objLoader.load( 'ship200k_1.obj', function ( object ) {\n\n//     mesh = object;\n//     ship = mesh;\n//     // mesh.position.y = -50;\n//     scene.add( mesh );\n\n//   } );\n\n// } );\n\nvar loadedModelsCount = 0;\n\nvar mitridat = null;\nvar mtlLoader = new THREE.MTLLoader();\nmtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/mitridat/\" );\nmtlLoader.load( 'Mitridat.mtl', function( materials ) {\n\tmaterials.preload();\n\tvar objLoader = new THREE.OBJLoader();\n\t\tloadedModelsCount += 1;\n\t\tobjLoader.setMaterials( materials );\n\t\tobjLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/mitridat/\" );\n\t\tobjLoader.load( 'Mitridat.obj', function ( object ) {\n\t\tmitridat = object;\n\t\tmitridat.position.x = 18;\n\t\tmitridat.position.y = -2.9;\n\t\tmitridat.position.z = 2.9;\n\t\tmitridat.rotation.y = -1.2;\n\t} );\n} );\n\nvar klinopis = null;\nvar mtlLoader = new THREE.MTLLoader();\nmtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/klinopis/\" );\nmtlLoader.load( 'klinopis.mtl', function( materials ) {\n\tmaterials.preload();\n\tvar objLoader = new THREE.OBJLoader();\n\tobjLoader.setMaterials( materials );\n\tobjLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/klinopis/\" );\n\tobjLoader.load( 'klinopis.obj', function ( object ) {\n\t\tloadedModelsCount += 1;\n\t\tklinopis = object;\n\t\tklinopis.position.x = 0;\n\t\tklinopis.position.y = 0;\n\t\tklinopis.position.z = 0;\n\t\tklinopis.rotation.y = 3;\n\t\tklinopis.name = 'klinopis';\n\t\t// scene.add( klinopis );\n\t\t// scene.remove( klinopis );\n\t} );\n} );\n\nvar ship = null;\nvar mtlLoader = new THREE.MTLLoader();\nmtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/ship/\" );\nmtlLoader.load( 'ship200k_1.mtl', function( materials ) {\n\tmaterials.preload();\n\tvar objLoader = new THREE.OBJLoader();\n\tobjLoader.setMaterials( materials );\n\tobjLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/ship/\" );\n\tobjLoader.load( 'ship200k_1.obj', function ( object ) {\n\t\tloadedModelsCount += 1;\n\t\tship = object;\n\t\tship.position.x = 0;\n\t\tship.position.y = 0;\n\t\tship.position.z = 0;\n\t\tship.rotation.y = -1.3;\n\t\tship.rotation.z = 0.5;\n\t\tship.rotation.x = 0.6;\n\t\tship.name = 'ship';\n\t\t// scene.add( ship );\n\t\t// scene.remove( ship );\n\t} );\n} );\n\nvar taran = null;\nvar mtlLoader = new THREE.MTLLoader();\nmtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/taran/\" );\nmtlLoader.load( 'taran.mtl', function( materials ) {\n\tmaterials.preload();\n\tvar objLoader = new THREE.OBJLoader();\n\tobjLoader.setMaterials( materials );\n\tobjLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/taran/\" );\n\tobjLoader.load( 'taran.obj', function ( object ) {\n\t\tloadedModelsCount += 1;\n\t\ttaran = object;\n\t\ttaran.position.x = 0;\n\t\ttaran.position.y = -3;\n\t\ttaran.position.z = 0;\n\t\ttaran.rotation.y = -1.3;\n\t\ttaran.rotation.z = 0.5;\n\t\ttaran.rotation.x = 0.6;\n\t\ttaran.name = 'taran';\n\t\t// scene.add( taran );\n\t\t// scene.remove( taran );\n\t} );\n} );\n\nvar friz = null;\nvar mtlLoader = new THREE.MTLLoader();\nmtlLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/friz/\" );\nmtlLoader.load( 'friz_met_trig.mtl', function( materials ) {\n\tmaterials.preload();\n\tvar objLoader = new THREE.OBJLoader();\n\tobjLoader.setMaterials( materials );\n\tobjLoader.setPath( \"https://agvo1kov.github.io/gelendzhik-pahagoria-with-3d/models/friz/\" );\n\tobjLoader.load( 'friz_met_trig.obj', function ( object ) {\n\t\tloadedModelsCount += 1;\n\t\tfriz = object;\n\t\tfriz.position.x = 0;\n\t\tfriz.position.y = 0;\n\t\tfriz.position.z = 10;\n\t\t// friz.rotation.y = -1;\n\t\tfriz.name = 'friz';\n\t\t// scene.add( friz );\n\t\t// scene.remove( friz );\n\t} );\n} );\n\nvar darkCubeGeometry = new THREE.BoxGeometry(49,49,49);\ndarkCubeGeometry.scale( - 1, 1, 1 );\nvar darkCubeMaterial = new THREE.MeshLambertMaterial({color: 0x000000, wireframe: false, opacity: 0.6, transparent: true});  \nvar darkCube = new THREE.Mesh(darkCubeGeometry, darkCubeMaterial);\ndarkCube.position.x = 0;\ndarkCube.position.y = 0;\ndarkCube.position.z = 0;\ndarkCube.name = 'dark cube';\n\nvar $loadedModelsCount = document.getElementById('loadedModelsCount');\nvar $modelsLoader = document.getElementById('models-loader');\nscene.add(darkCube);\nvar loadingInterval = setInterval(() => {\n\tconsole.log('loaded: ', loadedModelsCount);\n\t$loadedModelsCount.innerHTML = loadedModelsCount;\n\tif (loadedModelsCount >= 5) {\n\t\tclearInterval(loadingInterval);\n\t\t$modelsLoader.style.display = 'none';\n\t\tscene.remove(darkCube);\n\t}\n}, 500);\n\nvar x = -25, y = -20;\nvar klinopisShape = new THREE.Shape();\nklinopisShape.moveTo( x+3, y );\nklinopisShape.lineTo( x + 3.4, y + 2.8 );\nklinopisShape.lineTo( x + 1.8, y + 4.7 );\nklinopisShape.lineTo( x-3.3, y + 4.7 );\nklinopisShape.lineTo( x-3.6, y );\nklinopisShape.lineTo( x-3, y-0.3 );\nvar klinopisAreaGeometry = new THREE.ShapeGeometry( klinopisShape );\nvar klinopisAreaMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.3, transparent: true } );\nvar klinopisAreaMesh = new THREE.Mesh( klinopisAreaGeometry, klinopisAreaMaterial ) ;\nklinopisAreaMesh.position.x = 10;\nklinopisAreaMesh.position.y = 0;\nklinopisAreaMesh.position.z = -49;\nklinopisAreaMesh.name = 'klinopis area';\nscene.add( klinopisAreaMesh );\n\nx = 0, y = 0;\nvar shipShape = new THREE.Shape();\nshipShape.moveTo( x+4, y-0.5 );\nshipShape.lineTo( x+4, y+4.5 );\nshipShape.lineTo( x-11, y+4 );\nshipShape.lineTo( x-11, y-1.3 );\nvar shipAreaGeometry = new THREE.ShapeGeometry( shipShape );\nvar shipAreaMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.4, transparent: true } );\nvar shipAreaMesh = new THREE.Mesh( shipAreaGeometry, shipAreaMaterial ) ;\nshipAreaMesh.position.x = 49;\nshipAreaMesh.position.y = -8;\nshipAreaMesh.position.z = -10;\nshipAreaMesh.rotation.y = -1.5;\nshipAreaMesh.name = 'ship area';\nscene.add( shipAreaMesh );\n\nx = 0, y = -5;\nvar taranShape = new THREE.Shape();\ntaranShape.moveTo( x+5.2, y-0.5 );\ntaranShape.lineTo( x+5.4, y+1 );\ntaranShape.lineTo( x+3, y+1 );\ntaranShape.lineTo( x, y+1.5 );\ntaranShape.lineTo( x-3, y+2.7 );\ntaranShape.lineTo( x-6, y+5.5 );\ntaranShape.lineTo( x-6.8, y+7.5 );\ntaranShape.lineTo( x-7.6, y+7.4 );\ntaranShape.lineTo( x-7, y+5.5 );\ntaranShape.lineTo( x-5, y+3 );\ntaranShape.lineTo( x-3.8, y+1.8 );\ntaranShape.lineTo( x-4.2, y+1.2 );\ntaranShape.lineTo( x-4, y+0.5 );\ntaranShape.lineTo( x-11.3, y+0.2 );\ntaranShape.lineTo( x-11.5, y-1.4 );\nvar taranAreaGeometry = new THREE.ShapeGeometry( taranShape );\nvar taranAreaMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, opacity: 0.3, transparent: true } );\nvar taranAreaMesh = new THREE.Mesh( taranAreaGeometry, taranAreaMaterial ) ;\ntaranAreaMesh.position.x = 48;\ntaranAreaMesh.position.y = -8;\ntaranAreaMesh.position.z = -10;\ntaranAreaMesh.rotation.y = -1.5;\ntaranAreaMesh.name = 'taran area';\nscene.add( taranAreaMesh );\n\nvar mitridatCubeGeometry = new THREE.BoxGeometry(1,2.3,2);\nvar mitridatCubeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false, opacity: 0.3, transparent: true});  \nvar mitridatCube = new THREE.Mesh(mitridatCubeGeometry, mitridatCubeMaterial);\nmitridatCube.position.x = 18;\nmitridatCube.position.y = -2.5;\nmitridatCube.position.z = 2.9;\nmitridatCube.rotation.y = 0.5;\nmitridatCube.name = 'mitridat area';\nscene.add( mitridatCube );\n\nvar frizCubeGeometry = new THREE.BoxGeometry(2.2,3,7);\nvar frizCubeMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false, opacity: 0.3, transparent: true});  \nvar frizCube = new THREE.Mesh(frizCubeGeometry, frizCubeMaterial);\nfrizCube.position.x = 28;\nfrizCube.position.y = -10;\nfrizCube.position.z = 15;\nfrizCube.rotation.y = 0.4;\nfrizCube.rotation.z = -1.3;\nfrizCube.name = 'friz area';\nscene.add( frizCube );\n\n// Clicking\nvar mouse = new THREE.Vector2(), INTERSECTED;\nvar raycaster = new THREE.Raycaster();\nvar startMouseDownTime = 0;\ndocument.addEventListener( 'mousedown', () => {\n\tstartMouseDownTime = new Date().getTime();\n}, false);\ndocument.addEventListener( 'mouseup', (e) => {\n\tvar mousePressDuration = new Date().getTime() - startMouseDownTime;\n\tif (mousePressDuration < 300) {\n\t\tonDocumentMouseDown(e, 'close model');\n\t}\n}, false);\n\nvar zDelta = 0;\nvar openedModel = null;\ndocument.addEventListener( 'click', onDocumentMouseDown, false );\nfunction onDocumentMouseDown( event, typeOfAction ) {\n    event.preventDefault();\n    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;\n\tmouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;\n\t// console.log(mouse.x, mouse.y);\n    \n    raycaster.setFromCamera( mouse, camera );\n\tvar intersects = raycaster.intersectObjects( scene.children );\n    if ( intersects.length > 0 ) {\n        INTERSECTED = intersects[ 0 ].object;\n\t\tif (INTERSECTED.name === 'mitridat area') {\n\t\t\topenedModel = 'mitridat';\n\t\t\tzDelta = 2;\n\t\t\tcamera.translateZ(zDelta);\n\t\t\tscene.add(darkCube);\n\t\t\tscene.add(mitridat);\n\t\t\tscene.remove(frizCube);\n\t\t\tscene.remove(mitridatCube);\n\t\t\tscene.remove(klinopisAreaMesh);\n\t\t\tscene.remove(shipAreaMesh);\n\t\t\tscene.remove(taranAreaMesh);\n\n\t\t\tmitridat.position.x = 0;\n\t\t\tmitridat.position.y = 0;\n\t\t\tmitridat.position.z = 0;\n\t\t}\n\t\tif (INTERSECTED.name === 'klinopis area') {\n\t\t\topenedModel = 'klinopis';\n\t\t\tzDelta = 4;\n\t\t\tcamera.translateZ(zDelta);\n\t\t\tscene.add(darkCube);\n\t\t\tscene.add(klinopis);\n\t\t\tscene.remove(frizCube);\n\t\t\tscene.remove(mitridatCube);\n\t\t\tscene.remove(klinopisAreaMesh);\n\t\t\tscene.remove(shipAreaMesh);\n\t\t\tscene.remove(taranAreaMesh);\n\t\t}\n\t\tif (INTERSECTED.name === 'friz area') {\n\t\t\topenedModel = 'friz';\n\t\t\tzDelta = 8;\n\t\t\tcamera.translateZ(zDelta);\n\t\t\tscene.add(darkCube);\n\t\t\tscene.add(friz);\n\t\t\tscene.remove(frizCube);\n\t\t\tscene.remove(mitridatCube);\n\t\t\tscene.remove(klinopisAreaMesh);\n\t\t\tscene.remove(shipAreaMesh);\n\t\t\tscene.remove(taranAreaMesh);\n\t\t}\n\t\tif (INTERSECTED.name === 'ship area') {\n\t\t\topenedModel = 'ship';\n\t\t\tzDelta = 8;\n\t\t\tcamera.translateZ(zDelta);\n\t\t\tscene.add(darkCube);\n\t\t\tscene.add(ship);\n\t\t\tscene.remove(frizCube);\n\t\t\tscene.remove(mitridatCube);\n\t\t\tscene.remove(klinopisAreaMesh);\n\t\t\tscene.remove(shipAreaMesh);\n\t\t\tscene.remove(taranAreaMesh);\n\t\t}\n\t\tif (INTERSECTED.name === 'taran area') {\n\t\t\topenedModel = 'taran';\n\t\t\tzDelta = 12;\n\t\t\tcamera.translateZ(zDelta);\n\t\t\tscene.add(darkCube);\n\t\t\tscene.add(taran);\n\t\t\tscene.remove(frizCube);\n\t\t\tscene.remove(mitridatCube);\n\t\t\tscene.remove(klinopisAreaMesh);\n\t\t\tscene.remove(shipAreaMesh);\n\t\t\tscene.remove(taranAreaMesh);\n\t\t}\n\t\tif (INTERSECTED.name === 'dark cube' && typeOfAction === 'close model') {\n\t\t\tscene.remove(darkCube);\n\t\t\tscene.remove(mitridat);\n\t\t\tscene.remove(klinopis);\n\t\t\tscene.remove(friz);\n\t\t\tscene.remove(ship);\n\t\t\tscene.remove(taran);\n\t\t\tscene.add(shipAreaMesh);\n\t\t\tscene.add(mitridatCube);\n\t\t\tscene.add(frizCube);\n\t\t\tscene.add(klinopisAreaMesh);\n\t\t\tscene.add(taranAreaMesh);\n\t\t\tcamera.translateZ(-zDelta);\n\t\t}\n\t\t// INTERSECTED.position.z += 1;\n\t\t//  console.log(INTERSECTED.position.z);\n         console.log(intersects.length);\n    //   }\n    } else {\n      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );\n      INTERSECTED = null;\n    }\n  }\n\n//# sourceURL=webpack:///./src/js/panorama.js?");

/***/ })

/******/ });