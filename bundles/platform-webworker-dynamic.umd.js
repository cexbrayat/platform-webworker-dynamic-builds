/**
 * @license Angular v7.0.0-rc.1-1c561a833c
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/compiler'), require('@angular/core'), require('@angular/platform-browser-dynamic')) :
	typeof define === 'function' && define.amd ? define('@angular/platform-webworker-dynamic', ['exports', '@angular/common', '@angular/compiler', '@angular/core', '@angular/platform-browser-dynamic'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.platformWebworkerDynamic = {}),global.ng.common,global.ng.compiler,global.ng.core,global.ng.platformBrowserDynamic));
}(this, (function (exports,_angular_common,_angular_compiler,_angular_core,_angular_platformBrowserDynamic) { 'use strict';

/**
 * @license Angular v7.0.0-rc.1-1c561a833c
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
var VERSION = new _angular_core.Version('7.0.0-rc.1-1c561a833c');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * \@experimental API related to bootstrapping are still under review.
  @type {?} */
var platformWorkerAppDynamic = _angular_core.createPlatformFactory(_angular_platformBrowserDynamic.ɵplatformCoreDynamic, 'workerAppDynamic', [
    {
        provide: _angular_core.COMPILER_OPTIONS,
        useValue: { providers: [{ provide: _angular_compiler.ResourceLoader, useClass: _angular_platformBrowserDynamic.ɵResourceLoaderImpl, deps: [] }] },
        multi: true
    },
    { provide: _angular_core.PLATFORM_ID, useValue: _angular_common.ɵPLATFORM_WORKER_UI_ID }
]);

exports.VERSION = VERSION;
exports.platformWorkerAppDynamic = platformWorkerAppDynamic;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-webworker-dynamic.umd.js.map
