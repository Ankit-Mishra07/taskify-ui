(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/employee/employee.component */ "./src/app/pages/employee/employee.component.ts");
/* harmony import */ var _pages_task_view_edit_task_view_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/task-view-edit/task-view-edit.component */ "./src/app/pages/task-view-edit/task-view-edit.component.ts");
/* harmony import */ var _pages_worklog_report_worklog_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/worklog-report/worklog-report.component */ "./src/app/pages/worklog-report/worklog-report.component.ts");









var routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: []
    },
    {
        path: '',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'employee',
        component: _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'task/:id',
        component: _pages_task_view_edit_task_view_edit_component__WEBPACK_IMPORTED_MODULE_7__["TaskViewEditComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'logreport',
        component: _pages_worklog_report_worklog_report_component__WEBPACK_IMPORTED_MODULE_8__["WorklogReportComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<toaster-container [toasterconfig]=\"toasterconfig\">\n</toaster-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Taskify';
        this.toasterconfig = new angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 2000,
            mouseoverTimerStop: false,
            animation: 'fade',
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/logo/logo.component */ "./src/app/common/logo/logo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _common_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/side-nav/side-nav.component */ "./src/app/common/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/employee/employee.component */ "./src/app/pages/employee/employee.component.ts");
/* harmony import */ var _components_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/employee-create-edit/employee-create-edit.component */ "./src/app/components/employee-create-edit/employee-create-edit.component.ts");
/* harmony import */ var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/loader/loader.component */ "./src/app/common/loader/loader.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/task-list/task-list.component */ "./src/app/pages/task-list/task-list.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _components_task_create_edit_task_create_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/task-create-edit/task-create-edit.component */ "./src/app/components/task-create-edit/task-create-edit.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _components_worklog_create_edit_worklog_create_edit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/worklog-create-edit/worklog-create-edit.component */ "./src/app/components/worklog-create-edit/worklog-create-edit.component.ts");
/* harmony import */ var _pages_task_view_edit_task_view_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/task-view-edit/task-view-edit.component */ "./src/app/pages/task-view-edit/task-view-edit.component.ts");
/* harmony import */ var _common_profile_icon_profile_icon_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/profile-icon/profile-icon.component */ "./src/app/common/profile-icon/profile-icon.component.ts");
/* harmony import */ var _pipes_seconds_to_log_time_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/seconds-to-log-time.pipe */ "./src/app/pipes/seconds-to-log-time.pipe.ts");
/* harmony import */ var _common_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./common/confirmation-popup/confirmation-popup.component */ "./src/app/common/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _pages_worklog_report_worklog_report_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/worklog-report/worklog-report.component */ "./src/app/pages/worklog-report/worklog-report.component.ts");







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_13__["LogoComponent"],
                _common_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"],
                _pages_employee_employee_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeComponent"],
                _components_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_20__["EmployeeCreateEditComponent"],
                _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
                _pages_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_24__["TaskListComponent"],
                _components_task_create_edit_task_create_edit_component__WEBPACK_IMPORTED_MODULE_27__["TaskCreateEditComponent"],
                _components_worklog_create_edit_worklog_create_edit_component__WEBPACK_IMPORTED_MODULE_30__["WorklogCreateEditComponent"],
                _pages_task_view_edit_task_view_edit_component__WEBPACK_IMPORTED_MODULE_31__["TaskViewEditComponent"],
                _common_profile_icon_profile_icon_component__WEBPACK_IMPORTED_MODULE_32__["ProfileIconComponent"],
                _pipes_seconds_to_log_time_pipe__WEBPACK_IMPORTED_MODULE_33__["SecondsToLogTimePipe"],
                _common_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmationPopupComponent"],
                _pages_worklog_report_worklog_report_component__WEBPACK_IMPORTED_MODULE_37__["WorklogReportComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_15__["ToasterModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _common_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmationPopupComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/confirmation-popup/confirmation-popup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/common/confirmation-popup/confirmation-popup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ data.title || 'Confirm' }}</h2>\n\n<mat-dialog-content>\n  <p>{{ data.message || 'Are you sure?' }}</p>\n</mat-dialog-content>\n\n<mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"cancel()\">Cancel</button>\n  <button mat-raised-button color=\"warn\" (click)=\"confirm()\">\n    Ok\n  </button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/common/confirmation-popup/confirmation-popup.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/common/confirmation-popup/confirmation-popup.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/confirmation-popup/confirmation-popup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common/confirmation-popup/confirmation-popup.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmationPopupComponent = /** @class */ (function () {
    function ConfirmationPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmationPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmationPopupComponent.prototype.confirm = function () {
        this.dialogRef.close(true);
    };
    ConfirmationPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmationPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-popup',
            template: __webpack_require__(/*! ./confirmation-popup.component.html */ "./src/app/common/confirmation-popup/confirmation-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-popup.component.scss */ "./src/app/common/confirmation-popup/confirmation-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmationPopupComponent);
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "./src/app/common/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-outer\">\n  <div class=\"loader-content\">\n    <div class=\"lds-spinner\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n    <p [innerHTML]=\"msg\"></p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/common/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-outer {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.loader-content {\n  color: #001F3D;\n  background: #fff;\n  padding: 20px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  border-radius: 10px;\n  padding: 10px;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px; }\n\n.lds-spinner div {\n  transform-origin: 32px 32px;\n  animation: lds-spinner 1.2s linear infinite; }\n\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #CBDCEB; }\n\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s; }\n\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s; }\n\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s; }\n\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s; }\n\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s; }\n\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s; }\n\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s; }\n\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s; }\n\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s; }\n\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s; }\n\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s; }\n\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s; }\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tbW9uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxjQ2JzQjtFRGN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUViLGdDQUFnQztFQUNoQyxzSEFBc0gsRUFBQTs7QUFHMUg7RUFDSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLDJCQUEyQjtFQUMzQiwyQ0FBMkMsRUFBQTs7QUFHL0M7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQ2hEcUIsRUFBQTs7QURtRHpCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHdCQUF3QjtFQUN4QixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx3QkFBd0I7RUFDeEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksd0JBQXdCO0VBQ3hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx5QkFBeUI7RUFDekIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHlCQUF5QjtFQUN6QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFHZDtJQUNJLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY29uZmlnLnNjc3NcIjtcblxuLmxvYWRlci1vdXRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5sb2FkZXItY29udGVudCB7XG4gICAgY29sb3I6ICRidXR0b24tYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmxkcy1zcGlubmVyIHtcbiAgICBjb2xvcjogb2ZmaWNpYWw7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5sZHMtc3Bpbm5lciBkaXYge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbiAgICBhbmltYXRpb246IGxkcy1zcGlubmVyIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMjlweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcbn1cblxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG5cbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg5KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cblxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XG59XG5cbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1zcGlubmVyIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufSIsIiRwcmltYXJ5LWNvbG9yOiAjRUVGNUZGOztcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRibGFjay1jb2xvcjogIzAwMDtcbiRidXR0b24tYmFja2dyb3VuZDojMDAxRjNEO1xuJHNlY29uZGFyeS1jb2xvcjogI0NCRENFQjtcbiRidXR0b24taG92ZXItYmFja2dyb3VuZDogIzAwMjQ1NTtcbiRzaGFkb3cxOiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuJHNoYWRvdzI6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG5cbiRzdWNjZXNzLWNvbG9yOiMwOWU4MDk7XG4kZXJyb3ItY29sb3I6I2Q4MjEyMTtcbiRkYW5nZXItY29sb3I6I2Q4MjEyMTtcbiR3YXJuaW5nLWNvbG9yOiNjZTc3MTQ7XG4kaW5mby1jb2xvcjojNTY5MGZmO1xuJGxpZ2h0LWdyYXk6I0M5Q0RDRjtcbiRkYXJrLWdyYXk6ICM5NTk3OTg7Il19 */"

/***/ }),

/***/ "./src/app/common/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.msg = 'Loading...';
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('msg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoaderComponent.prototype, "msg", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/common/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/common/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/common/logo/logo.component.html":
/*!*************************************************!*\
  !*** ./src/app/common/logo/logo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">Taskify</div>"

/***/ }),

/***/ "./src/app/common/logo/logo.component.scss":
/*!*************************************************!*\
  !*** ./src/app/common/logo/logo.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  text-shadow: 3px 3px 6px #a085de;\n  font-size: 24px;\n  color: #001F3D;\n  font-family: cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tbW9uL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9jb25maWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdDQUErQztFQUMvQyxlQUFlO0VBQ2YsY0NGc0I7RURHdEIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi5sb2dvIHtcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgxNjAsIDEzMywgMjIyLCAxKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICRidXR0b24tYmFja2dyb3VuZDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI0VFRjVGRjs7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG4kYnV0dG9uLWJhY2tncm91bmQ6IzAwMUYzRDtcbiRzZWNvbmRhcnktY29sb3I6ICNDQkRDRUI7XG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICMwMDI0NTU7XG4kc2hhZG93MTogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiRzaGFkb3cyOiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuXG4kc3VjY2Vzcy1jb2xvcjojMDllODA5O1xuJGVycm9yLWNvbG9yOiNkODIxMjE7XG4kZGFuZ2VyLWNvbG9yOiNkODIxMjE7XG4kd2FybmluZy1jb2xvcjojY2U3NzE0O1xuJGluZm8tY29sb3I6IzU2OTBmZjtcbiRsaWdodC1ncmF5OiNDOUNEQ0Y7XG4kZGFyay1ncmF5OiAjOTU5Nzk4OyJdfQ== */"

/***/ }),

/***/ "./src/app/common/logo/logo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/logo/logo.component.ts ***!
  \***********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/common/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/common/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-head\">\n  <div>\n    <app-logo></app-logo>\n  </div>\n\n  <div class=\"search-create-box\">\n      <mat-form-field class=\"search-input-form-field\">\n        <button mat-button matPrefix mat-icon-button>\n          <mat-icon>search</mat-icon>\n        </button>\n        <input matInput placeholder=\"Search task\" (keyup)=\"onSearch()\" [(ngModel)]=\"searchTaskText\">\n        <button mat-button matSuffix mat-icon-button (click)=\"clearSearch()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n      <button class=\"primary-button create-task-btn\" (click)=\"createNewTask()\"><mat-icon>add</mat-icon> Create</button>\n\n      <div class=\"search-result-box\" *ngIf=\"_taskService.searchTaskResult.length && searchTaskText\">\n        <div class=\"search-result-list\" *ngFor=\"let res of _taskService.searchTaskResult\" (click)=\"open_in_new(res)\">\n            <span class=\"search-id\">{{res.taskUniqueId}}</span>\n            <span class=\"search-sum\">{{res.summary}}</span>\n        </div>\n      </div>\n  </div>\n\n  \n  <div class=\"nav-options\">\n    <div>\n      <div #profileIcon [matMenuTriggerFor]=\"menu\" class=\"firstletterProfile\">{{firstLetter}}</div>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item class=\"profile-menu\">{{userDetail.userName}}</button>\n        <button mat-menu-item class=\"profile-menu\">{{userDetail.email}}</button>\n        <button (click)=\"logout()\" mat-menu-item class=\"profile-menu logout\">Logout</button>\n      </mat-menu>\n    </div>\n  </div>\n</nav>\n<app-side-nav></app-side-nav>"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  height: 75px;\n  background-color: #EEF5FF;\n  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px; }\n\n.search-create-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 12px;\n  width: 40%;\n  position: relative; }\n\n.search-input-form-field {\n  width: 70%; }\n\n.create-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12x;\n  padding: 6px 12px;\n  box-shadow: none; }\n\n.nav-options {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 12px; }\n\n.firstletterProfile {\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  border: 1px solid #CBDCEB;\n  background-color: #ffffff;\n  color: #60c381;\n  font-size: 24px;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  transition: all 0.8s ease;\n  font-weight: bold; }\n\n.firstletterProfile:hover {\n    background-color: #CBDCEB; }\n\n.profile-menu {\n  font-size: 16px;\n  color: #000; }\n\n.profile-menu:hover {\n    background-color: #EEF5FF; }\n\n.logout {\n  color: #d82121; }\n\n.search-result-box {\n  position: absolute;\n  top: 80px;\n  padding: 10px;\n  background-color: #f6f8e6;\n  border: 1px solid #CBDCEB;\n  z-index: 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 4px; }\n\n.search-result-list {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  padding: 8px 0;\n  font-size: 14px;\n  background-color: rgba(0, 0, 0, 0.1);\n  cursor: pointer; }\n\n.search-result-list:hover {\n    background-color: rgba(0, 0, 0, 0.08); }\n\n.search-result-list .search-id {\n    width: 25%; }\n\n.search-result-list .search-sum {\n    width: 70%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tbW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQ1JtQjtFRFNuQiwyUUFBMlEsRUFBQTs7QUFHL1E7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJDdkNxQjtFRHdDckIseUJDM0NpQjtFRDRDakIsY0FBaUQ7RUFDakQsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFackI7SUFjUSx5QkNqRGlCLEVBQUE7O0FEb0R6QjtFQUNJLGVBQWU7RUFDZixXQ3hEYyxFQUFBOztBRHNEbEI7SUFJUSx5QkM1RGUsRUFBQTs7QUQrRHZCO0VBQ0ksY0NyRGlCLEVBQUE7O0FEd0RyQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkNwRXFCO0VEcUVyQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztFQUNYLDJDQ3ZFcUM7RUR3RXJDLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixjQUFjO0VBQ2QsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxlQUFlLEVBQUE7O0FBUm5CO0lBVVEscUNBQXFDLEVBQUE7O0FBVjdDO0lBYVEsVUFBVSxFQUFBOztBQWJsQjtJQWdCUSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi5uYXYtaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQsIDYzLCAxMjYsIDAuMDQpIDBweCAwcHggMHB4IDFweCwgcmdiYSg0MiwgNTEsIDY5LCAwLjA0KSAwcHggMXB4IDFweCAtMC41cHgsIHJnYmEoNDIsIDUxLCA3MCwgMC4wNCkgMHB4IDNweCAzcHggLTEuNXB4LCByZ2JhKDQyLCA1MSwgNzAsIDAuMDQpIDBweCA2cHggNnB4IC0zcHgsIHJnYmEoMTQsIDYzLCAxMjYsIDAuMDQpIDBweCAxMnB4IDEycHggLTZweCwgcmdiYSgxNCwgNjMsIDEyNiwgMC4wNCkgMHB4IDI0cHggMjRweCAtMTJweDtcbn1cblxuLnNlYXJjaC1jcmVhdGUtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoLWlucHV0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA3MCU7XG59XG4uY3JlYXRlLXRhc2stYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMng7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5hdi1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5maXJzdGxldHRlclByb2ZpbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgY29sb3I6IHJnYihyYW5kb20oMjU1KSwgcmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIH1cbn1cbi5wcm9maWxlLW1lbnUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB9XG59XG4ubG9nb3V0IHtcbiAgICBjb2xvcjogJGRhbmdlci1jb2xvcjtcbn1cblxuLnNlYXJjaC1yZXN1bHQtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhlNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2VhcmNoLXJlc3VsdC1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cbiAgICAuc2VhcmNoLWlkIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgLnNlYXJjaC1zdW0ge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG59IiwiJHByaW1hcnktY29sb3I6ICNFRUY1RkY7O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMwMDFGM0Q7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQ0JEQ0VCO1xuJGJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiAjMDAyNDU1O1xuJHNoYWRvdzE6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4kc2hhZG93MjogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcblxuJHN1Y2Nlc3MtY29sb3I6IzA5ZTgwOTtcbiRlcnJvci1jb2xvcjojZDgyMTIxO1xuJGRhbmdlci1jb2xvcjojZDgyMTIxO1xuJHdhcm5pbmctY29sb3I6I2NlNzcxNDtcbiRpbmZvLWNvbG9yOiM1NjkwZmY7XG4kbGlnaHQtZ3JheTojQzlDRENGO1xuJGRhcmstZ3JheTogIzk1OTc5ODsiXX0= */"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subtask.service */ "./src/app/services/subtask.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_commonService, _taskService, _router, _subtaskService) {
        this._commonService = _commonService;
        this._taskService = _taskService;
        this._router = _router;
        this._subtaskService = _subtaskService;
        this.firstLetter = '';
        this.userDetail = this._commonService.getUserDetails();
        this.searchTaskText = '';
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstLetter = this._commonService.getFirstLetter();
        this.profileIcon.nativeElement.style.color = this._commonService.getRandomRgbColor();
        this.searchSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (value) { return value.trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (value) { return value.length >= 3; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500)).subscribe(function (value) {
            _this.searchTask(value);
        });
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach(function (cookie) {
            document.cookie = cookie
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
        });
        this._router.navigateByUrl('/login');
        window.location.reload();
    };
    NavbarComponent.prototype.createNewTask = function () {
        this._taskService.taskPopupModeType = 'Task';
        this._taskService.taskPopupUpdateData = null;
        this._taskService.taskPopupMode = 'Create';
        this._taskService.showCreateEditTaskPopup = true;
        this._subtaskService.taskIdToCreateUpdateSubTask = '';
    };
    NavbarComponent.prototype.onSearch = function () {
        if (this.searchTaskText.length >= 3) {
            this.searchSubject.next(this.searchTaskText);
        }
        if (!this.searchTaskText) {
            this.clearSearch();
        }
    };
    NavbarComponent.prototype.searchTask = function (value) {
        var _this = this;
        this._taskService.searchTaskByText(value).subscribe(function (res) {
            if (res.success) {
                _this._taskService.searchTaskResult = res.data;
            }
            else {
                _this._taskService.searchTaskResult = [];
            }
        });
    };
    NavbarComponent.prototype.open_in_new = function (elem) {
        this.clearSearch();
        window.open("/task/" + elem._id + "?type=" + elem.workType);
    };
    NavbarComponent.prototype.clearSearch = function () {
        this._taskService.searchTaskResult = [];
        this.searchTaskText = '';
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.searchSubject.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "profileIcon", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/common/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_4__["SubtaskService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/common/profile-icon/profile-icon.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/common/profile-icon/profile-icon.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #profileIcon class=\"firstletterProfile\">{{firstLetter}}</div>"

/***/ }),

/***/ "./src/app/common/profile-icon/profile-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/profile-icon/profile-icon.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".firstletterProfile {\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  border: 1px solid #CBDCEB;\n  background-color: #ffffff;\n  color: #b80b2c;\n  font-size: 24px;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  transition: all 0.8s ease;\n  font-weight: bold; }\n  .firstletterProfile:hover {\n    background-color: #CBDCEB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tbW9uL3Byb2ZpbGUtaWNvbi9wcm9maWxlLWljb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkNGcUI7RURHckIseUJDTmlCO0VET2pCLGNBQWlEO0VBQ2pELGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7RUFackI7SUFjUSx5QkNaaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9wcm9maWxlLWljb24vcHJvZmlsZS1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi5maXJzdGxldHRlclByb2ZpbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XG4gICAgY29sb3I6IHJnYihyYW5kb20oMjU1KSwgcmFuZG9tKDI1NSksIHJhbmRvbSgyNTUpKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogI0VFRjVGRjs7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG4kYnV0dG9uLWJhY2tncm91bmQ6IzAwMUYzRDtcbiRzZWNvbmRhcnktY29sb3I6ICNDQkRDRUI7XG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICMwMDI0NTU7XG4kc2hhZG93MTogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiRzaGFkb3cyOiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuXG4kc3VjY2Vzcy1jb2xvcjojMDllODA5O1xuJGVycm9yLWNvbG9yOiNkODIxMjE7XG4kZGFuZ2VyLWNvbG9yOiNkODIxMjE7XG4kd2FybmluZy1jb2xvcjojY2U3NzE0O1xuJGluZm8tY29sb3I6IzU2OTBmZjtcbiRsaWdodC1ncmF5OiNDOUNEQ0Y7XG4kZGFyay1ncmF5OiAjOTU5Nzk4OyJdfQ== */"

/***/ }),

/***/ "./src/app/common/profile-icon/profile-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/profile-icon/profile-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileIconComponent", function() { return ProfileIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileIconComponent = /** @class */ (function () {
    function ProfileIconComponent() {
        this.firstLetter = '';
    }
    ProfileIconComponent.prototype.ngOnInit = function () {
        this.firstLetter = this.userName[0].toString().toUpperCase();
        this.profileIcon.nativeElement.style.color = this.getRandomRgbColor();
        this.profileIcon.nativeElement.style.width = this.width;
        this.profileIcon.nativeElement.style.height = this.height;
    };
    ProfileIconComponent.prototype.getRandomRgbColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfileIconComponent.prototype, "userName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfileIconComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfileIconComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('profileIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileIconComponent.prototype, "profileIcon", void 0);
    ProfileIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-icon',
            template: __webpack_require__(/*! ./profile-icon.component.html */ "./src/app/common/profile-icon/profile-icon.component.html"),
            styles: [__webpack_require__(/*! ./profile-icon.component.scss */ "./src/app/common/profile-icon/profile-icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileIconComponent);
    return ProfileIconComponent;
}());



/***/ }),

/***/ "./src/app/common/side-nav/side-nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/common/side-nav/side-nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav-container\">\n  \n  <div class=\"side-btnbox full-width\" routerLink=\"/\" routerLinkActive=\"side-active-link \" [routerLinkActiveOptions]=\"{exact: true}\">\n    <button mat-button class=\"side-nav-btn full-width\">\n      <div class=\"side-icon\"><mat-icon>work</mat-icon></div>\n      <span>Tasks</span>\n    </button>\n  </div>\n\n  <div class=\"side-btnbox full-width\" routerLink=\"/employee\" routerLinkActive=\"side-active-link \" [routerLinkActiveOptions]=\"{exact: true}\">\n    <button mat-button class=\"side-nav-btn full-width\">\n      <div class=\"side-icon\"><mat-icon>person</mat-icon></div>\n      <span>Employees</span>\n    </button>\n  </div>\n\n  <div class=\"side-btnbox full-width\" routerLink=\"/logreport\" routerLinkActive=\"side-active-link \" [routerLinkActiveOptions]=\"{exact: true}\">\n    <button mat-button class=\"side-nav-btn full-width\">\n      <div class=\"side-icon\"><mat-icon>timeline</mat-icon></div>\n      <span>Log report</span>\n    </button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/common/side-nav/side-nav.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/common/side-nav/side-nav.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-container {\n  width: 6%;\n  padding: 20px 2px;\n  position: fixed;\n  top: 76px;\n  left: 0;\n  bottom: 0;\n  background-color: #EEF5FF;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px; }\n\n.side-active-link {\n  background-color: #CBDCEB;\n  color: #002455; }\n\n.side-nav-btn {\n  line-height: 16px;\n  padding: 6px 12px;\n  min-width: 60px; }\n\n.side-nav-btn span {\n    font-size: 12px; }\n\n.side-nav-btn:hover {\n    background-color: #CBDCEB;\n    color: #002455; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tbW9uL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2Fua2l0bWlzaHJhL0Rlc2t0b3AvQWtraS90YXNraWZ5L3Rhc2tpZnktdWkvc3JjL2NvbmZpZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxTQUFTO0VBQ1QseUJDVm1CO0VEV25CLDJDQ0pxQztFREtyQyxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUyxFQUFBOztBQUViO0VBQ0kseUJDZnFCO0VEZ0JyQixjQ2Y2QixFQUFBOztBRGlCakM7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSxlQUFlLEVBQUE7O0FBTHZCO0lBUVEseUJDMUJpQjtJRDJCakIsY0MxQnlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY29uZmlnLnNjc3NcIjtcblxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XG5cbiAgICB3aWR0aDogNiU7XG4gICAgcGFkZGluZzogMjBweCAycHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNzZweDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuLnNpZGUtYWN0aXZlLWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgY29sb3I6ICRidXR0b24taG92ZXItYmFja2dyb3VuZDtcbn1cbi5zaWRlLW5hdi1idG4ge1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgY29sb3I6ICRidXR0b24taG92ZXItYmFja2dyb3VuZDtcbiAgICB9XG59IiwiJHByaW1hcnktY29sb3I6ICNFRUY1RkY7O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMwMDFGM0Q7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQ0JEQ0VCO1xuJGJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiAjMDAyNDU1O1xuJHNoYWRvdzE6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4kc2hhZG93MjogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcblxuJHN1Y2Nlc3MtY29sb3I6IzA5ZTgwOTtcbiRlcnJvci1jb2xvcjojZDgyMTIxO1xuJGRhbmdlci1jb2xvcjojZDgyMTIxO1xuJHdhcm5pbmctY29sb3I6I2NlNzcxNDtcbiRpbmZvLWNvbG9yOiM1NjkwZmY7XG4kbGlnaHQtZ3JheTojQzlDRENGO1xuJGRhcmstZ3JheTogIzk1OTc5ODsiXX0= */"

/***/ }),

/***/ "./src/app/common/side-nav/side-nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/side-nav/side-nav.component.ts ***!
  \*******************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent.prototype.ngOnInit = function () {
    };
    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/common/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/common/side-nav/side-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-create-edit/employee-create-edit.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/employee-create-edit/employee-create-edit.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-background-container\">\n  <div class=\"modal-background\">\n\n    <div class=\"employee-ce-container\">\n\n      <div class=\"heading\">\n        <p>{{mode == 'Create' ? 'Create' : 'Update'}} Employee</p>\n        <button mat-icon-button (click)=\"closeEmPopup()\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </div>\n\n      <form [formGroup]=\"emForm\" class=\"inputs-box\">\n\n        <mat-form-field class=\"full-width\">\n            <input class=\"user-name\" matInput placeholder=\"Enter name\" formControlName=\"userName\" required>\n            <mat-error>\n              Name is required\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input class=\"email\" matInput placeholder=\"Enter email\" formControlName=\"email\" required>\n            <mat-error>\n              valid email required\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input class=\"role\" matInput placeholder=\"Enter designation\" formControlName=\"role\" required>\n            <mat-error>\n              Designation required\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n            <input class=\"employee_id\" matInput placeholder=\"Enter employee id\" formControlName=\"employee_id\" required>\n            <mat-error>\n              Employee id is required\n            </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n            <input type=\"password\" class=\"password\" matInput placeholder=\"Create password\" formControlName=\"password\" required>\n            <mat-error>\n              Minimum 6 character required\n            </mat-error>\n        </mat-form-field>\n          <div class=\"toggle-box\">\n            <mat-slide-toggle formControlName=\"isAdmin\">Admin</mat-slide-toggle>\n            <mat-slide-toggle formControlName=\"isSuperAdmin\">Super Admin</mat-slide-toggle>\n          </div>\n\n          <div class=\"btn-box\">\n            <button mat-raised-button (click)=\"closeEmPopup()\" type=\"button\">Cancel</button>\n            <button [disabled]=\"isLoading\" class=\"primary-button\" (click)=\"onSaveEmployee()\">{{mode == 'Create' ? 'Save' :\n              'Update'}}</button>\n          </div>\n          \n\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/components/employee-create-edit/employee-create-edit.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/employee-create-edit/employee-create-edit.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-ce-container {\n  width: 30%;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: 2px solid #C9CDCF;\n  border-radius: 10px;\n  max-height: 90vh;\n  overflow-y: auto; }\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%; }\n\n.heading p {\n    font-size: 20px;\n    font-weight: bold; }\n\n.inputs-box {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px; }\n\n.btn-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px; }\n\n.toggle-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZS1jcmVhdGUtZWRpdC9lbXBsb3llZS1jcmVhdGUtZWRpdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9jb25maWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJDSmlCO0VES2pCLDJDQ0NxQztFREFyQyx5QkNPZTtFRE5mLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUpmO0lBTVEsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRlLWVkaXQvZW1wbG95ZWUtY3JlYXRlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vY29uZmlnLnNjc3NcIjtcblxuLmVtcGxveWVlLWNlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5pbnB1dHMtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4uYnRuLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLnRvZ2dsZS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNHB4O1xufVxuIiwiJHByaW1hcnktY29sb3I6ICNFRUY1RkY7O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMwMDFGM0Q7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQ0JEQ0VCO1xuJGJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiAjMDAyNDU1O1xuJHNoYWRvdzE6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4kc2hhZG93MjogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcblxuJHN1Y2Nlc3MtY29sb3I6IzA5ZTgwOTtcbiRlcnJvci1jb2xvcjojZDgyMTIxO1xuJGRhbmdlci1jb2xvcjojZDgyMTIxO1xuJHdhcm5pbmctY29sb3I6I2NlNzcxNDtcbiRpbmZvLWNvbG9yOiM1NjkwZmY7XG4kbGlnaHQtZ3JheTojQzlDRENGO1xuJGRhcmstZ3JheTogIzk1OTc5ODsiXX0= */"

/***/ }),

/***/ "./src/app/components/employee-create-edit/employee-create-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/employee-create-edit/employee-create-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateEditComponent", function() { return EmployeeCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");





var EmployeeCreateEditComponent = /** @class */ (function () {
    function EmployeeCreateEditComponent(_employeeService, _toaster) {
        this._employeeService = _employeeService;
        this._toaster = _toaster;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoading = false;
    }
    EmployeeCreateEditComponent.prototype.ngOnInit = function () {
        this.mode = this.mode === 'Edit' ? 'Edit' : 'Create';
        if (this.mode == 'Create') {
            this.initForm();
        }
        else if (this.mode == 'Edit') {
            this.updateForm();
        }
    };
    EmployeeCreateEditComponent.prototype.initForm = function () {
        this.emForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            employee_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            isSuperAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
        });
    };
    EmployeeCreateEditComponent.prototype.updateForm = function () {
        this.emForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.role, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            employee_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.employee_id, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            isAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.isAdmin),
            isSuperAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.editData.isSuperAdmin),
        });
    };
    EmployeeCreateEditComponent.prototype.closeEmPopup = function () {
        this.closePopup.emit('');
    };
    EmployeeCreateEditComponent.prototype.onSaveEmployee = function () {
        var _this = this;
        this.isLoading = true;
        var payload = {
            userName: this.emForm.get('userName').value,
            email: this.emForm.get('email').value,
            role: this.emForm.get('role').value,
            employee_id: this.emForm.get('employee_id').value,
            isAdmin: this.emForm.get('isAdmin').value,
            isSuperAdmin: this.emForm.get('isSuperAdmin').value,
            password: this.emForm.get('password').value,
        };
        if (this.mode == 'Create') {
            this._employeeService.createEmployee(payload).subscribe(function (res) {
                if (res.success) {
                    _this._toaster.pop('success', res.message);
                    _this.closeEmPopup();
                }
                else {
                    _this._toaster.pop('error', res.message);
                }
                _this.isLoading = false;
            }, function (error) {
                _this._toaster.pop('error', 'Something went wrong');
                _this.isLoading = false;
            });
        }
        else if (this.mode === 'Edit') {
            this._employeeService.updateEmployee(this.editData._id, payload).subscribe(function (res) {
                if (res.success) {
                    _this._toaster.pop('success', res.message);
                    _this.closeEmPopup();
                }
                else {
                    _this._toaster.pop('error', res.message);
                }
                _this.isLoading = false;
            }, function (error) {
                _this._toaster.pop('error', 'Something went wrong');
                _this.isLoading = false;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmployeeCreateEditComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('editData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeCreateEditComponent.prototype, "editData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeCreateEditComponent.prototype, "closePopup", void 0);
    EmployeeCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-create-edit',
            template: __webpack_require__(/*! ./employee-create-edit.component.html */ "./src/app/components/employee-create-edit/employee-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-create-edit.component.scss */ "./src/app/components/employee-create-edit/employee-create-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], EmployeeCreateEditComponent);
    return EmployeeCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/task-create-edit/task-create-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/task-create-edit/task-create-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-background-container\">\n  <div class=\"modal-background\">\n     <div class=\"task-ce-container\">\n\n      <div class=\"heading\">\n        <p>Create {{taskModeType == 'Sub-Task' ? 'Sub Task' : 'Task'}}</p>\n        <button mat-icon-button (click)=\"closePopup()\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </div>\n\n      <form class=\"inputs-box\" [formGroup]=\"taskForm\">\n\n        <div class=\"project half-width\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"Project\" formControlName=\"projectName\" required>\n            <mat-option *ngFor=\"let p of _commonService.projectList\" [value]=\"p\">{{p}}</mat-option>\n            </mat-select>\n            </mat-form-field>\n        </div>\n        <div class=\"in-box\">\n          <div class=\"workType half-width\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"Work type\" formControlName=\"workType\" required>\n              <mat-option *ngFor=\"let w of _commonService.workTypes\" [value]=\"w\">{{w}}</mat-option>\n              </mat-select>\n              </mat-form-field>\n          </div>\n          <div class=\"status half-width\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"Status\" formControlName=\"status\" required>\n                <mat-option *ngIf=\"!statusList || !statusList.length\" class=\"text-center\">\n                  <mat-progress-spinner mode=\"indeterminate\" diameter=\"{{30}}\"></mat-progress-spinner>\n                </mat-option>\n                <mat-option *ngFor=\"let s of statusList\" [value]=\"s.status\" [disabled]=\"s.status == 'Sub-Task' && taskModeType != 'Sub-Task'\">{{s.status}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"summary\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Summary\" formControlName=\"summary\" required>\n              <mat-error>\n                Summary is <strong>required</strong>\n              </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div class=\"description\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n          </mat-form-field>\n        </div>\n\n        <div class=\"createdBy half-width\">\n          <mat-form-field class=\"full-width\">\n            <mat-select placeholder=\"Created by\" formControlName=\"createdBy\" required>\n              <mat-option *ngIf=\"!employeeList || !employeeList.length\" class=\"text-center\">\n                <mat-progress-spinner mode=\"indeterminate\" diameter=\"{{30}}\"></mat-progress-spinner>\n              </mat-option>\n              <mat-option *ngFor=\"let em of employeeList\" [value]=\"em._id\">{{em.userName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"in-box full-width\">\n          <div class=\"priority half-width\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"Priority\" formControlName=\"priority\" required>\n                <mat-option *ngFor=\"let p of _commonService.priorityList\" [value]=\"p\">{{p}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          \n          <div class=\"duedate half-width\">\n            <mat-form-field class=\"full-width\">\n              <input matInput [matDatepicker]=\"dueDatepicker\" placeholder=\"Due date\" formControlName=\"dueDate\" required>\n              <mat-datepicker-toggle matSuffix [for]=\"dueDatepicker\"></mat-datepicker-toggle>\n              <mat-datepicker #dueDatepicker></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n        \n        <div class=\"in-box full-width strat-end-date\">\n          <mat-form-field class=\"half-width\">\n            <input matInput [matDatepicker]=\"startDatepicker\" placeholder=\"Start date\" formControlName=\"startDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"startDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #startDatepicker></mat-datepicker>\n          </mat-form-field>\n          <mat-form-field class=\"half-width\">\n            <input matInput [matDatepicker]=\"endDatepicker\" placeholder=\"End date\" formControlName=\"endDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"endDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #endDatepicker></mat-datepicker>\n          </mat-form-field>\n        </div>\n\n        <div class=\"in-box full-width\">\n          <div class=\"half-width assignedTo\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"Assigned to\" required formControlName=\"assignedTo\">\n                <mat-option *ngIf=\"!employeeList || !employeeList.length\" class=\"text-center\">\n                  <mat-progress-spinner mode=\"indeterminate\" diameter=\"{{30}}\"></mat-progress-spinner>\n                </mat-option>\n                <mat-option *ngFor=\"let em of employeeList\" [value]=\"em._id\">{{em.userName}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"half-width reporter\">\n            <mat-form-field class=\"full-width\">\n              <mat-select placeholder=\"Reporter\" required formControlName=\"reporter\">\n                <mat-option *ngIf=\"!employeeList || !employeeList.length\" class=\"text-center\">\n                  <mat-progress-spinner mode=\"indeterminate\" diameter=\"{{30}}\"></mat-progress-spinner>\n                </mat-option>\n                <mat-option *ngFor=\"let em of employeeList\" [value]=\"em._id\">{{em.userName}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"btn-box\">\n          <button mat-raised-button (click)=\"closePopup()\" type=\"button\">Cancel</button>\n          <button class=\"primary-button\" (click)=\"createTask()\">{{mode == 'Create' ? 'Create' : 'Update'}}</button>\n        </div>\n      </form>\n\n\n      <div>\n\n      </div>\n\n     </div>\n  </div>\n</div>\n\n\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/components/task-create-edit/task-create-edit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/task-create-edit/task-create-edit.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-ce-container {\n  width: 50%;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: 2px solid #C9CDCF;\n  border-radius: 10px;\n  max-height: 90vh;\n  overflow-y: auto; }\n\n.inputs-box {\n  display: flex;\n  flex-direction: column;\n  gap: 10px; }\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%; }\n\n.heading p {\n    font-size: 20px;\n    font-weight: bold; }\n\n.in-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px; }\n\n.btn-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWNyZWF0ZS1lZGl0L3Rhc2stY3JlYXRlLWVkaXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQ0ppQjtFREtqQiwyQ0NDcUM7RURBckMseUJDT2U7RUROZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUyxFQUFBOztBQUdiO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUpmO0lBTVEsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay1jcmVhdGUtZWRpdC90YXNrLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi50YXNrLWNlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmlucHV0cy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLmluLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5idG4tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59IiwiJHByaW1hcnktY29sb3I6ICNFRUY1RkY7O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMwMDFGM0Q7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQ0JEQ0VCO1xuJGJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiAjMDAyNDU1O1xuJHNoYWRvdzE6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4kc2hhZG93MjogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcblxuJHN1Y2Nlc3MtY29sb3I6IzA5ZTgwOTtcbiRlcnJvci1jb2xvcjojZDgyMTIxO1xuJGRhbmdlci1jb2xvcjojZDgyMTIxO1xuJHdhcm5pbmctY29sb3I6I2NlNzcxNDtcbiRpbmZvLWNvbG9yOiM1NjkwZmY7XG4kbGlnaHQtZ3JheTojQzlDRENGO1xuJGRhcmstZ3JheTogIzk1OTc5ODsiXX0= */"

/***/ }),

/***/ "./src/app/components/task-create-edit/task-create-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/task-create-edit/task-create-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: TaskCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateEditComponent", function() { return TaskCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/subtask.service */ "./src/app/services/subtask.service.ts");









var TaskCreateEditComponent = /** @class */ (function () {
    function TaskCreateEditComponent(_taskService, _commonService, _statusService, _employeeService, _toaster, _subtaskService) {
        this._taskService = _taskService;
        this._commonService = _commonService;
        this._statusService = _statusService;
        this._employeeService = _employeeService;
        this._toaster = _toaster;
        this._subtaskService = _subtaskService;
        this.ontaskPopupClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusList = [];
        this.employeeList = [];
        this.userId = this._commonService.getUserId();
        this.isLoading = false;
    }
    TaskCreateEditComponent.prototype.ngOnInit = function () {
        this.mode = this.mode ? this.mode : 'Create';
        if (this.mode == 'Create') {
            this.initForm();
        }
        else if (this.mode == 'Edit') {
            this.updateForm();
        }
        if (this.taskModeType == 'Sub-Task') {
            this.taskForm.get('workType').setValue('Sub-Task');
            this.taskForm.get('workType').disable();
        }
        this.getAllStatusList();
        this.getAllEmployeeList();
    };
    TaskCreateEditComponent.prototype.initForm = function () {
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('Front Office Management', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            workType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('Task', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('Todo', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            createdBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('Medium', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            subTasks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]([]),
            workLogs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]([]),
        });
    };
    TaskCreateEditComponent.prototype.updateForm = function () {
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            workType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.workType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.summary, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.description),
            createdBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.createdBy._id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.startDate),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.endDate),
            dueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.dueDate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.assignedTo._id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            reporter: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.reporter._id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            subTasks: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.subTasks),
            workLogs: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.updateTaskData.workLogs),
        });
    };
    TaskCreateEditComponent.prototype.getAllStatusList = function () {
        var _this = this;
        this._statusService.fetchStatusList().subscribe(function (res) {
            if (res.success) {
                _this.statusList = res.data;
            }
            else {
                _this._toaster.pop('error', res.message);
            }
        });
    };
    TaskCreateEditComponent.prototype.getAllEmployeeList = function () {
        var _this = this;
        this._employeeService.fetchAllEmployees().subscribe(function (response) {
            try {
                if (response.success) {
                    _this.employeeList = JSON.parse(JSON.stringify(response.data));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    };
    TaskCreateEditComponent.prototype.closePopup = function () {
        this._taskService.taskPopupMode = '';
        this._taskService.taskPopupModeType = '';
        this._taskService.taskPopupUpdateData = null;
        this._taskService.showCreateEditTaskPopup = false;
        this._subtaskService.taskIdToCreateUpdateSubTask = '';
        this.ontaskPopupClose.emit('');
    };
    TaskCreateEditComponent.prototype.createTask = function () {
        if (!this.taskForm.valid) {
            return;
        }
        var payload = {
            projectName: this.taskForm.get('projectName').value,
            workType: this.taskForm.get('workType').value,
            status: this.taskForm.get('status').value,
            summary: this.taskForm.get('summary').value,
            description: this.taskForm.get('description').value,
            createdBy: this.taskForm.get('createdBy').value,
            priority: this.taskForm.get('priority').value,
            startDate: this.taskForm.get('startDate').value,
            endDate: this.taskForm.get('endDate').value,
            dueDate: this.taskForm.get('dueDate').value,
            assignedTo: this.taskForm.get('assignedTo').value,
            reporter: this.taskForm.get('reporter').value,
            userId: this.userId,
            subTasks: this.taskForm.get('subTasks').value,
            workLogs: this.taskForm.get('workLogs').value
        };
        if (this._taskService.taskPopupModeType === 'Task') {
            if (this.mode == 'Create') {
                this.createNewTask(payload);
            }
            else if (this.mode == 'Edit') {
                this.updateTask(payload);
            }
        }
        else if (this._taskService.taskPopupModeType === 'Sub-Task') {
            delete payload.subTasks;
            if (this.mode == 'Create') {
                payload.taskId = this.taskIdToCreateUpdateSubTask;
                this.createNewSubTask(payload);
            }
            else if (this.mode == 'Edit') {
                payload.taskId = this.updateTaskData.taskId;
                this.updateSubTask(payload);
            }
        }
    };
    TaskCreateEditComponent.prototype.updateSubTask = function (payload) {
        var _this = this;
        this.isLoading = true;
        this._subtaskService.updateSubTask(this.updateTaskData._id, payload).subscribe(function (res) {
            if (res.success) {
                _this._toaster.pop('success', res.message);
                _this.closePopup();
            }
            else {
                _this._toaster.pop('error', res.message);
            }
            _this.isLoading = false;
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
            _this.isLoading = false;
        });
    };
    TaskCreateEditComponent.prototype.createNewSubTask = function (payload) {
        var _this = this;
        if (!this.taskIdToCreateUpdateSubTask) {
            this._toaster.pop('error', 'Invalid parent task id');
            return;
        }
        this.isLoading = true;
        this._subtaskService.createSubTask(this.taskIdToCreateUpdateSubTask, payload).subscribe(function (res) {
            if (res.success) {
                _this._toaster.pop('success', res.message);
                _this.closePopup();
            }
            else {
                _this._toaster.pop('error', res.message);
            }
            _this.isLoading = false;
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
            _this.isLoading = false;
        });
    };
    TaskCreateEditComponent.prototype.createNewTask = function (payload) {
        var _this = this;
        this.isLoading = true;
        this._taskService.createNewTask(payload).subscribe(function (res) {
            if (res.success) {
                _this._toaster.pop('success', res.message);
                _this.closePopup();
            }
            else {
                _this._toaster.pop('error', res.message);
            }
            _this.isLoading = false;
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
            _this.isLoading = false;
        });
    };
    TaskCreateEditComponent.prototype.updateTask = function (payload) {
        var _this = this;
        this.isLoading = true;
        this._taskService.updateTask(this.updateTaskData._id, payload).subscribe(function (res) {
            if (res.success) {
                _this._toaster.pop('success', res.message);
                _this.closePopup();
            }
            else {
                _this._toaster.pop('error', res.message);
            }
            _this.isLoading = false;
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
            _this.isLoading = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCreateEditComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('taskModeType'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCreateEditComponent.prototype, "taskModeType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('updateTaskData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCreateEditComponent.prototype, "updateTaskData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('taskIdToCreateUpdateSubTask'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCreateEditComponent.prototype, "taskIdToCreateUpdateSubTask", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ontaskPopupClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskCreateEditComponent.prototype, "ontaskPopupClose", void 0);
    TaskCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-create-edit',
            template: __webpack_require__(/*! ./task-create-edit.component.html */ "./src/app/components/task-create-edit/task-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-create-edit.component.scss */ "./src/app/components/task-create-edit/task-create-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            src_app_services_status_service__WEBPACK_IMPORTED_MODULE_5__["StatusService"],
            src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
            src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_8__["SubtaskService"]])
    ], TaskCreateEditComponent);
    return TaskCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/worklog-create-edit/worklog-create-edit.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/worklog-create-edit/worklog-create-edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-background-container\">\n  <div class=\"modal-background\">\n\n    <div class=\"worklog-ce-center\">\n      \n      <div class=\"heading\">\n        <p>Time Tracking</p>\n        <button mat-icon-button (click)=\"closeworklogPopup()\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </div>\n\n      <form [formGroup]=\"worklogForm\" class=\"inputs-box\">\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\n          <input class=\"time-spent\" matInput placeholder=\"Time Spent\" formControlName=\"timeSpent\" required>\n          <mat-error>\n            Enter value like 1h or 30m\n          </mat-error>\n        </mat-form-field>\n\n        <div class=\"time-format-info\">\n          <p>Use the format: 1h or 60m</p>\n          <ul>\n            <li>h = hours</li>\n            <li>m = minutes</li>\n          </ul>\n        </div>\n\n        <mat-form-field class=\"full-width\">\n          <input matInput [matDatepicker]=\"logDatepicker\" placeholder=\"Date\" formControlName=\"dateTime\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"logDatepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #logDatepicker></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n          <textarea matInput placeholder=\"Leave a comment\" formControlName=\"description\"></textarea>\n        </mat-form-field>\n\n        <div class=\"btn-box\">\n          <button mat-raised-button (click)=\"closeworklogPopup()\" type=\"button\">Cancel</button>\n          <button [disabled]=\"isLoading\" class=\"primary-button\" (click)=\"saveWorklog()\">{{mode == 'Create' ? 'Save' : 'Update'}}</button>\n        </div>\n      </form>\n\n    </div>\n\n  </div>\n</div>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/components/worklog-create-edit/worklog-create-edit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/worklog-create-edit/worklog-create-edit.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".worklog-ce-center {\n  width: 30%;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: 2px solid #C9CDCF;\n  border-radius: 10px;\n  max-height: 90vh;\n  overflow-y: auto; }\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%; }\n\n.heading p {\n    font-size: 20px;\n    font-weight: bold; }\n\n.inputs-box {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 12px; }\n\n.btn-box {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px; }\n\n.time-format-info {\n  color: #959798; }\n\n.time-format-info ul {\n    margin: 6px 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvY29tcG9uZW50cy93b3JrbG9nLWNyZWF0ZS1lZGl0L3dvcmtsb2ctY3JlYXRlLWVkaXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQ0ppQjtFREtqQiwyQ0NDcUM7RURBckMseUJDT2U7RUROZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFKZjtJQU1RLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBR2I7RUFDSSxjQ3ZCZSxFQUFBOztBRHNCbkI7SUFHUSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29ya2xvZy1jcmVhdGUtZWRpdC93b3JrbG9nLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi53b3JrbG9nLWNlLWNlbnRlciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLmlucHV0cy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmJ0bi1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRpbWUtZm9ybWF0LWluZm8ge1xuICAgIGNvbG9yOiAkZGFyay1ncmF5O1xuICAgIHVsIHtcbiAgICAgICAgbWFyZ2luOiA2cHggMThweDtcbiAgICB9XG59IiwiJHByaW1hcnktY29sb3I6ICNFRUY1RkY7O1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJGJsYWNrLWNvbG9yOiAjMDAwO1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMwMDFGM0Q7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQ0JEQ0VCO1xuJGJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiAjMDAyNDU1O1xuJHNoYWRvdzE6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XG4kc2hhZG93MjogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcblxuJHN1Y2Nlc3MtY29sb3I6IzA5ZTgwOTtcbiRlcnJvci1jb2xvcjojZDgyMTIxO1xuJGRhbmdlci1jb2xvcjojZDgyMTIxO1xuJHdhcm5pbmctY29sb3I6I2NlNzcxNDtcbiRpbmZvLWNvbG9yOiM1NjkwZmY7XG4kbGlnaHQtZ3JheTojQzlDRENGO1xuJGRhcmstZ3JheTogIzk1OTc5ODsiXX0= */"

/***/ }),

/***/ "./src/app/components/worklog-create-edit/worklog-create-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/worklog-create-edit/worklog-create-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorklogCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklogCreateEditComponent", function() { return WorklogCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/worklog.service */ "./src/app/services/worklog.service.ts");






var WorklogCreateEditComponent = /** @class */ (function () {
    function WorklogCreateEditComponent(_commonService, _worklogService, _toaster) {
        this._commonService = _commonService;
        this._worklogService = _worklogService;
        this._toaster = _toaster;
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userId = this._commonService.getUserId();
        this.isLoading = false;
    }
    WorklogCreateEditComponent.prototype.ngOnInit = function () {
        if (!this.taskData) {
            this._toaster.pop('error', 'Something went wrong');
            this.closePopup.emit('');
            return;
        }
        this.mode = this.mode ? this.mode : 'Create';
        if (this.mode === 'Edit' && this.workLogEditData) {
            this.updateLogForm();
        }
        else {
            this.initForm();
        }
    };
    WorklogCreateEditComponent.prototype.initForm = function () {
        this.worklogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            timeSpent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('0h', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+(\.\d+)?[hm]$/)]),
            dateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userId),
            taskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.taskData._id),
        });
    };
    WorklogCreateEditComponent.prototype.updateLogForm = function () {
        this.worklogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            timeSpent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this._worklogService.convertSecondsToLogTime(this.workLogEditData.timeSpent), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+(\.\d+)?[hm]$/)]),
            dateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(this.workLogEditData.dateTime), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workLogEditData.description),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userId),
            taskId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workLogEditData.taskId),
        });
    };
    WorklogCreateEditComponent.prototype.closeworklogPopup = function () {
        this._worklogService.selectedTaskData = null;
        this._worklogService.worklogPopupMode = '';
        this._worklogService.workLogEditData = null;
        this._worklogService.openWorklogPopup = false;
        this.closePopup.emit('');
    };
    WorklogCreateEditComponent.prototype.saveWorklog = function () {
        var _this = this;
        if (!this.worklogForm.valid) {
            return;
        }
        if (!this._worklogService.isValidDuration(this.worklogForm.get('timeSpent').value)) {
            this._toaster.pop('error', 'Invalid time');
            return;
        }
        if (!this._commonService.isValidDate(this.worklogForm.get('dateTime').value)) {
            this._toaster.pop('error', 'Invalid date');
            return;
        }
        var payload = {
            timeSpent: this._worklogService.convertLogTime(this.worklogForm.get('timeSpent').value),
            dateTime: this.worklogForm.get('dateTime').value,
            description: this.worklogForm.get('description').value,
            userId: this.worklogForm.get('userId').value,
            taskId: this.mode === 'Edit' ? this.workLogEditData.taskId : this.worklogForm.get('taskId').value
        };
        this.isLoading = true;
        if (this.mode === 'Create') {
            this._worklogService.postworkLog(this.userId, payload.taskId, payload).subscribe(function (res) {
                if (res.success) {
                    _this._toaster.pop('success', res.message);
                    _this.closeworklogPopup();
                }
                else {
                    _this._toaster.pop('error', res.message);
                }
                _this.isLoading = false;
            }, function (error) {
                _this._toaster.pop('error', 'Something went wrong');
                _this.isLoading = false;
            });
        }
        else if (this.mode === 'Edit') {
            this._worklogService.patchWorkLog(this.workLogEditData._id, payload).subscribe(function (res) {
                if (res.success) {
                    _this._toaster.pop('success', res.message);
                    _this.closeworklogPopup();
                }
                else {
                    _this._toaster.pop('error', res.message);
                }
                _this.isLoading = false;
            }, function (error) {
                _this._toaster.pop('error', 'Something went wrong');
                _this.isLoading = false;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorklogCreateEditComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('taskData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorklogCreateEditComponent.prototype, "taskData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('workLogEditData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorklogCreateEditComponent.prototype, "workLogEditData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('closePopup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorklogCreateEditComponent.prototype, "closePopup", void 0);
    WorklogCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-worklog-create-edit',
            template: __webpack_require__(/*! ./worklog-create-edit.component.html */ "./src/app/components/worklog-create-edit/worklog-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./worklog-create-edit.component.scss */ "./src/app/components/worklog-create-edit/worklog-create-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_5__["WorklogService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], WorklogCreateEditComponent);
    return WorklogCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-task-list></app-task-list>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_commonService, _taskService) {
        this._commonService = _commonService;
        this._taskService = _taskService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this._commonService.isAdmin);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/employee/employee.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/employee/employee.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"employee-container\">\n    \n    <div class=\"full-width employee-table-container\">\n\n        <div class=\"employee-head\">\n            <mat-form-field class=\"filter-input\">\n                <input matInput placeholder=\"Filter\" (keyup)=\"searchEmlist()\" [(ngModel)]=\"searchEmText\">\n                <button mat-button matSuffix mat-icon-button (click)=\"clearEmSearch()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-form-field>\n            <div>\n                <button mat-flat-button class=\"btn-border\" (click)=\"addNewEmployee()\">Add new <mat-icon>add</mat-icon></button>\n            </div>\n        </div>\n        <div class=\"table-box\">\n            <table mat-table [dataSource]=\"dataSource\">\n        \n                <ng-container matColumnDef=\"employee_id\">\n                    <th mat-header-cell *matHeaderCellDef> ID </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.employee_id}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"role\">\n                    <th mat-header-cell *matHeaderCellDef> Role </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                </ng-container>\n        \n                <ng-container matColumnDef=\"userName\">\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.userName}}</td>\n                </ng-container>\n        \n                <ng-container matColumnDef=\"email\">\n                    <th mat-header-cell *matHeaderCellDef> Email </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n                </ng-container>\n        \n                <ng-container matColumnDef=\"createdAt\">\n                    <th mat-header-cell *matHeaderCellDef> Created at </th>\n                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.createdAt}} </td>\n                </ng-container>\n        \n                <ng-container matColumnDef=\"actions\">\n                    <th mat-header-cell *matHeaderCellDef></th>\n                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\">\n                        <button *ngIf=\"_commonService.isSuperAdmin\" mat-icon-button (click)=\"editEmployee(row)\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <button *ngIf=\"_commonService.isSuperAdmin\" mat-icon-button>\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </td>\n                </ng-container>\n        \n                <tr mat-header-row *matHeaderRowDef=\"_employeeService.displayedEmployeeColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: _employeeService.displayedEmployeeColumns;\">\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n\n<app-employee-create-edit *ngIf=\"_employeeService.showEmployeeCreateEditPopup\" [mode]=\"_employeeService.employeeCreateEditMode\" [editData]=\"_employeeService.employeeCreateEditData\" (closePopup)=\"onEmClosePopup()\" ></app-employee-create-edit>\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/pages/employee/employee.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/employee/employee.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-container {\n  width: 90%;\n  margin: 1% auto;\n  margin-left: 8%;\n  border: 1px solid #C9CDCF;\n  border-radius: 6px;\n  padding: 12px; }\n\n.table-box {\n  height: 70vh;\n  overflow-y: auto; }\n\n.table-box table {\n    width: 100%; }\n\n.employee-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center; }\n\n.filter-input {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvcGFnZXMvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkNRZTtFRFBmLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBS2pCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb25maWcuc2Nzc1wiO1xuXG4uZW1wbG95ZWUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG4uZW1wbG95ZWUtdGFibGUtY29udGFpbmVyIHtcblxufVxuLnRhYmxlLWJveCB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdGFibGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5lbXBsb3llZS1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uZmlsdGVyLWlucHV0IHtcbiAgICB3aWR0aDogMjUlO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjRUVGNUZGOztcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRibGFjay1jb2xvcjogIzAwMDtcbiRidXR0b24tYmFja2dyb3VuZDojMDAxRjNEO1xuJHNlY29uZGFyeS1jb2xvcjogI0NCRENFQjtcbiRidXR0b24taG92ZXItYmFja2dyb3VuZDogIzAwMjQ1NTtcbiRzaGFkb3cxOiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuJHNoYWRvdzI6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG5cbiRzdWNjZXNzLWNvbG9yOiMwOWU4MDk7XG4kZXJyb3ItY29sb3I6I2Q4MjEyMTtcbiRkYW5nZXItY29sb3I6I2Q4MjEyMTtcbiR3YXJuaW5nLWNvbG9yOiNjZTc3MTQ7XG4kaW5mby1jb2xvcjojNTY5MGZmO1xuJGxpZ2h0LWdyYXk6I0M5Q0RDRjtcbiRkYXJrLWdyYXk6ICM5NTk3OTg7Il19 */"

/***/ }),

/***/ "./src/app/pages/employee/employee.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/employee/employee.component.ts ***!
  \******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService, _toaster, _commonService) {
        this._employeeService = _employeeService;
        this._toaster = _toaster;
        this._commonService = _commonService;
        this.isLoading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.searchEmText = '';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.getEmployeesList();
    };
    EmployeeComponent.prototype.getEmployeesList = function () {
        var _this = this;
        this.isLoading = true;
        this._employeeService.fetchAllEmployees().subscribe(function (response) {
            try {
                if (response.success) {
                    _this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(JSON.stringify(response.data)));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
                _this.isLoading = false;
            }
            catch (error) {
                _this.isLoading = false;
                console.error(error);
            }
        });
    };
    EmployeeComponent.prototype.onEmClosePopup = function () {
        this._employeeService.onCloseEmployeeCreateEditPopup();
        this.getEmployeesList();
    };
    EmployeeComponent.prototype.editEmployee = function (elem) {
        this._employeeService.employeeCreateEditMode = 'Edit';
        this._employeeService.employeeCreateEditData = elem;
        this._employeeService.showEmployeeCreateEditPopup = true;
    };
    EmployeeComponent.prototype.addNewEmployee = function () {
        this._employeeService.employeeCreateEditMode = 'Create';
        this._employeeService.employeeCreateEditData = null;
        this._employeeService.showEmployeeCreateEditPopup = true;
    };
    EmployeeComponent.prototype.searchEmlist = function () {
        var _this = this;
        var list = this._employeeService.employeeList.filter(function (v) { return (v.userName.toLowerCase().includes(_this.searchEmText) || v.email.toLowerCase().includes(_this.searchEmText)); });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(JSON.stringify(list)));
        if (!this.searchEmText) {
            this.clearEmSearch();
        }
    };
    EmployeeComponent.prototype.clearEmSearch = function () {
        this.searchEmText = '';
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](JSON.parse(JSON.stringify(this._employeeService.employeeList)));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], EmployeeComponent.prototype, "paginator", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/pages/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/pages/employee/employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container-box\">\n  <div class=\"login-box\">\n    <div class=\"text-center\">\n      <app-logo></app-logo>\n    </div>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input type=\"password\" matInput placeholder=\"Password\" [formControl]=\"passwordFormControl\">\n        <mat-error *ngIf=\"passwordFormControl.hasError('minlength') && !passwordFormControl.hasError('required')\">\n          Password must be at least 6 characters\n        </mat-error>\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n          Password is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    <button (click)=\"onLogin()\" class=\"primary-button login-button\" [disabled]=\"isLoading\">{{isLoading ? 'Login...' : 'Login'}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container-box {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center; }\n\n.login-box {\n  width: 35%;\n  height: 400px;\n  background-color: #EEF5FF;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  position: relative; }\n\n.login-button {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n  right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQ1ptQjtFRGFuQiwyQ0NOcUM7RURPckMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb25maWcuc2Nzc1wiO1xuXG4ubG9naW4tY29udGFpbmVyLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1ib3gge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG5cbn0iLCIkcHJpbWFyeS1jb2xvcjogI0VFRjVGRjs7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG4kYnV0dG9uLWJhY2tncm91bmQ6IzAwMUYzRDtcbiRzZWNvbmRhcnktY29sb3I6ICNDQkRDRUI7XG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICMwMDI0NTU7XG4kc2hhZG93MTogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiRzaGFkb3cyOiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuXG4kc3VjY2Vzcy1jb2xvcjojMDllODA5O1xuJGVycm9yLWNvbG9yOiNkODIxMjE7XG4kZGFuZ2VyLWNvbG9yOiNkODIxMjE7XG4kd2FybmluZy1jb2xvcjojY2U3NzE0O1xuJGluZm8tY29sb3I6IzU2OTBmZjtcbiRsaWdodC1ncmF5OiNDOUNEQ0Y7XG4kZGFyay1ncmF5OiAjOTU5Nzk4OyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_web_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/web.service */ "./src/app/services/web.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_webService, toasterService, _commonService, _router) {
        this._webService = _webService;
        this.toasterService = toasterService;
        this._commonService = _commonService;
        this._router = _router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
        ]);
        this.isLoading = false;
        if (this._commonService.isLoggedIn()) {
            this._router.navigateByUrl('/');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.emailFormControl.invalid || this.passwordFormControl.invalid || !this.emailFormControl.value || !this.passwordFormControl.value) {
            this.toasterService.pop('error', 'Invalid email or password');
            return;
        }
        var payload = {
            email: this.emailFormControl.value,
            password: this.passwordFormControl.value
        };
        this.isLoading = true;
        this._webService.commonPostMethod('/user/login', payload).subscribe(function (response) {
            _this.isLoading = false;
            if (response.success) {
                _this.toasterService.pop('success', response.message);
                _this._commonService.setCookie('user_access', response.data.token);
                _this._commonService.setItemToLocal('user_data', response.data.user);
                _this._router.navigateByUrl('/');
            }
            else {
                _this.toasterService.pop('error', response.message);
            }
        }, function (error) {
            _this.isLoading = false;
            _this.toasterService.pop('error', 'Something went wrong');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_web_service__WEBPACK_IMPORTED_MODULE_6__["WebService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/task-list/task-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-list/task-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-container\">\n  <div class=\"full-width\">\n\n    <div class=\"full-width filter-options\">\n\n      <div class=\"filter-1\">\n        <div class=\"assigned-to\">\n          <mat-form-field>\n            <mat-select placeholder=\"Assignee\" [formControl]=\"selectedEmployeeList\" multiple>\n              <!-- <mat-option *ngIf=\"employeeList.length\" value=\"All\" (click)=\"selectAll('employeeList')\">All</mat-option> -->\n              <mat-option *ngFor=\"let user of employeeList\" [value]=\"user._id\">{{user.userName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"status\">\n          <mat-form-field>\n            <mat-select placeholder=\"Status\" [formControl]=\"selectedStatus\" multiple>\n              <!-- <mat-option *ngIf=\"statusList.length\" value=\"All\" (click)=\"selectAll('statusList')\">All</mat-option> -->\n              <mat-option *ngFor=\"let s of statusList\" [value]=\"s.status\">{{s.status}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"workType\">\n          <mat-form-field>\n            <mat-select placeholder=\"Type\" [formControl]=\"selectedWorkType\" multiple>\n              <!-- <mat-option *ngIf=\"_commonService.workTypes.length\" value=\"All\" (click)=\"selectAll('workTypes')\">All</mat-option> -->\n              <mat-option *ngFor=\"let w of _commonService.workTypes\" [value]=\"w\">{{w}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n  \n        <div>\n          <button mat-flat-button class=\"search\" (click)=\"searchSelectedFilter()\"><mat-icon>search</mat-icon>Search</button>\n        </div>\n        <div>\n          <button mat-flat-button class=\"reset-filter\" (click)=\"resetFilter()\">Reset</button>\n        </div>\n      </div>\n\n      <div class=\"filter-2\">\n        <div class=\"search-current-task\">\n          <mat-form-field>\n            <button mat-button matPrefix mat-icon-button>\n              <mat-icon>search</mat-icon>\n            </button>\n            <input matInput placeholder=\"Search task\" (keyup)=\"searchLoadedTask()\" [(ngModel)]=\"searchLoadedText\">\n            <button mat-button matSuffix mat-icon-button (click)=\"clearLoadedSearch()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </mat-form-field>\n        </div>\n        <div>\n          <button mat-flat-button class=\"refresh\" matTooltip=\"Refresh\" (click)=\"refersh()\"><mat-icon>autorenew</mat-icon></button>\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"table-container\">\n      <div class=\"table-box\">\n        <table mat-table [dataSource]=\"_taskService.all_task_subtask_list\">\n      \n          <ng-container matColumnDef=\"TaskId\">\n            <th mat-header-cell *matHeaderCellDef> Task ID </th>\n            <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.taskUniqueId}}\" > {{element.taskUniqueId}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"summary\">\n            <th mat-header-cell *matHeaderCellDef> Summary </th>\n            <td mat-cell *matCellDef=\"let element\" class=\"summary-text\" matTooltip=\"{{element.summary}}\" > {{element.summary}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef> Type </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.workType}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef> Status </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"assignedTo\">\n            <th mat-header-cell *matHeaderCellDef> Assigned To </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.assignedTo.userName}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"reporter\">\n            <th mat-header-cell *matHeaderCellDef> Reporter </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.reporter.userName}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"dueDate\">\n            <th mat-header-cell *matHeaderCellDef> Due Date </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.dueDate|date}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button routerLink=\"{{'task/'+element._id}}\" [queryParams]=\"{ type: element.workType }\">\n                <mat-icon>open_in_new</mat-icon>\n              </button>\n              <button *ngIf=\"_commonService.isSuperAdmin\"mat-icon-button (click)=\"editTask(element)\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button mat-flat-button (click)=\"enterWorkLog(element)\" class=\"btn-border\">\n                Log work\n              </button>\n              <button *ngIf=\"_commonService.isSuperAdmin\" mat-icon-button>\n                <mat-icon>delete</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n      \n          <tr mat-header-row *matHeaderRowDef=\"taskDisplayColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: taskDisplayColumns;\"></tr>\n        </table>\n        <div class=\"norecord\" *ngIf=\"!_taskService.all_task_subtask_list.length\">\n          No records found\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>\n<app-task-create-edit *ngIf=\"_taskService.showCreateEditTaskPopup\" \n  [mode]=\"_taskService.taskPopupMode\"\n  [taskModeType]=\"_taskService.taskPopupModeType\"\n  [updateTaskData]=\"_taskService.taskPopupUpdateData\" (ontaskPopupClose)=\"ontaskPopupClose()\" [taskIdToCreateUpdateSubTask]=\"_subTaskService.taskIdToCreateUpdateSubTask\">\n</app-task-create-edit>\n\n<app-worklog-create-edit *ngIf=\"_worklogService.openWorklogPopup\" [taskData]=\"_worklogService.selectedTaskData\"\n(closePopup)=\"closeWorklogPopup()\" [mode]=\"_worklogService.worklogPopupMode\"\n>\n</app-worklog-create-edit>"

/***/ }),

/***/ "./src/app/pages/task-list/task-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/task-list/task-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-container {\n  width: 90%;\n  margin: 1% auto;\n  margin-left: 8%;\n  border: 1px solid #C9CDCF;\n  border-radius: 6px;\n  padding: 12px; }\n\n.filter-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px; }\n\n.filter-1 {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px; }\n\n.filter-2 {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px; }\n\n.example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em; }\n\n.table-box {\n  height: 70vh;\n  overflow: auto;\n  width: 100%; }\n\n.table-box table {\n    width: 100%; }\n\n.table-box table tbody tr td {\n      margin: 0 50px; }\n\n.table-box table .summary-text {\n      width: 410px;\n      max-width: 410px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvcGFnZXMvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9jb25maWcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQ1FlO0VEUGYsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBSGI7SUFLSSxXQUFXLEVBQUE7O0FBTGY7TUFPTSxjQUFjLEVBQUE7O0FBUHBCO01BVVEsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb25maWcuc2Nzc1wiO1xuXG4udGFzay1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxJSBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMTJweDtcbn1cbi5maWx0ZXItb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4uZmlsdGVyLTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLmZpbHRlci0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi50YWJsZS1ib3gge1xuICBoZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRib2R5IHRyIHRkIHtcbiAgICAgIG1hcmdpbjogMCA1MHB4O1xuICAgIH1cbiAgICAuc3VtbWFyeS10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDQxMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogI0VFRjVGRjs7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG4kYnV0dG9uLWJhY2tncm91bmQ6IzAwMUYzRDtcbiRzZWNvbmRhcnktY29sb3I6ICNDQkRDRUI7XG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICMwMDI0NTU7XG4kc2hhZG93MTogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiRzaGFkb3cyOiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuXG4kc3VjY2Vzcy1jb2xvcjojMDllODA5O1xuJGVycm9yLWNvbG9yOiNkODIxMjE7XG4kZGFuZ2VyLWNvbG9yOiNkODIxMjE7XG4kd2FybmluZy1jb2xvcjojY2U3NzE0O1xuJGluZm8tY29sb3I6IzU2OTBmZjtcbiRsaWdodC1ncmF5OiNDOUNEQ0Y7XG4kZGFyay1ncmF5OiAjOTU5Nzk4OyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/task-list/task-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/task-list/task-list.component.ts ***!
  \********************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/subtask.service */ "./src/app/services/subtask.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/worklog.service */ "./src/app/services/worklog.service.ts");










var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(_taskService, _commonService, _employeeService, _statusService, _worklogService, _toaster, _subTaskService) {
        this._taskService = _taskService;
        this._commonService = _commonService;
        this._employeeService = _employeeService;
        this._statusService = _statusService;
        this._worklogService = _worklogService;
        this._toaster = _toaster;
        this._subTaskService = _subTaskService;
        this.userId = this._commonService.getUserId();
        this.employeeList = [];
        this.statusList = [];
        this.isLoading = false;
        this.selectedEmployeeList = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([this.userId]);
        this.selectedStatus = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](['Todo']);
        this.selectedWorkType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](['Task']);
        this.taskDisplayColumns = ['TaskId', 'summary', 'type', 'status', 'assignedTo', 'reporter', 'dueDate', 'actions'];
        this.searchLoadedText = '';
        this.backup_all_task_subtask_list = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.resetFilter();
    };
    TaskListComponent.prototype.getAllEmployeeList = function (callback) {
        var _this = this;
        this.isLoading = true;
        this._employeeService.fetchAllEmployees().subscribe(function (response) {
            try {
                if (response.success) {
                    _this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
                    _this.employeeList = JSON.parse(JSON.stringify(response.data));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
                callback();
                _this.isLoading = false;
            }
            catch (error) {
                _this.isLoading = false;
                console.error(error);
            }
        });
    };
    TaskListComponent.prototype.getAllStatusList = function (callback) {
        var _this = this;
        this.isLoading = true;
        this._statusService.fetchStatusList().subscribe(function (response) {
            try {
                if (response.success) {
                    // this._statusService.statusList = JSON.parse(JSON.stringify(response.data));
                    _this.statusList = JSON.parse(JSON.stringify(response.data));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
                callback();
                _this.isLoading = false;
            }
            catch (error) {
                _this.isLoading = false;
                console.error(error);
            }
        });
    };
    TaskListComponent.prototype.editTask = function (taskdata) {
        this._taskService.taskPopupUpdateData = taskdata;
        this._taskService.taskPopupModeType = 'Task';
        this._taskService.taskPopupMode = 'Edit';
        this._taskService.showCreateEditTaskPopup = true;
        this._subTaskService.taskIdToCreateUpdateSubTask = '';
    };
    TaskListComponent.prototype.ontaskPopupClose = function () {
        var _this = this;
        this.getAllEmployeeList(function () {
            _this.getAllStatusList(function () {
                _this.getAll_task_subtask_list();
            });
        });
    };
    TaskListComponent.prototype.getAll_task_subtask_list = function () {
        var _this = this;
        var emList = this.selectedEmployeeList.value;
        var statusList = this.selectedStatus.value;
        var worktypeList = this.selectedWorkType.value;
        var queryString = "assignedTo=" + emList.join(',') + "&status=" + statusList.join(',') + "&workType=" + worktypeList.join(',');
        this.isLoading = true;
        this._taskService.getAllTask_SubTaskList(queryString).subscribe(function (response) {
            try {
                if (response.success) {
                    _this._taskService.all_task_subtask_list = JSON.parse(JSON.stringify(response.data));
                    _this.backup_all_task_subtask_list = JSON.parse(JSON.stringify(response.data));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
                _this.isLoading = false;
            }
            catch (error) {
                _this.isLoading = false;
                console.error(error);
            }
        }, function (error) {
            _this.isLoading = false;
            console.error(error);
        });
    };
    TaskListComponent.prototype.searchLoadedTask = function () {
        var _this = this;
        this._taskService.all_task_subtask_list = this.backup_all_task_subtask_list.filter(function (v) { return (v.summary.toLowerCase().includes(_this.searchLoadedText.toLowerCase()) || v.taskUniqueId.toLowerCase().includes(_this.searchLoadedText.toLowerCase())); });
        if (!this.searchLoadedText) {
            this.clearLoadedSearch();
        }
    };
    TaskListComponent.prototype.clearLoadedSearch = function () {
        this.searchLoadedText = '';
        this._taskService.all_task_subtask_list = JSON.parse(JSON.stringify(this.backup_all_task_subtask_list));
    };
    TaskListComponent.prototype.searchSelectedFilter = function () {
        this.searchLoadedText = '';
        this.getAll_task_subtask_list();
    };
    TaskListComponent.prototype.resetFilter = function () {
        var _this = this;
        this.searchLoadedText = '';
        this.selectedEmployeeList.setValue([this.userId]);
        this.selectedStatus.setValue(['Todo']);
        this.selectedWorkType.setValue(['Task']);
        this.getAllEmployeeList(function () {
            _this.getAllStatusList(function () {
                _this.getAll_task_subtask_list();
            });
        });
    };
    TaskListComponent.prototype.refersh = function () {
        var _this = this;
        this.getAllEmployeeList(function () {
            _this.getAllStatusList(function () {
                _this.getAll_task_subtask_list();
            });
        });
    };
    TaskListComponent.prototype.enterWorkLog = function (element) {
        this._worklogService.selectedTaskData = element;
        this._worklogService.worklogPopupMode = 'Create';
        this._worklogService.workLogEditData = null;
        this._worklogService.openWorklogPopup = true;
    };
    TaskListComponent.prototype.closeWorklogPopup = function () {
        this.refersh();
    };
    TaskListComponent.prototype.selectAll = function (listParam) {
        if (listParam === 'employeeList') {
            if (this.selectedEmployeeList.value.includes('All')) {
                this.selectedEmployeeList.setValue(['All'].concat(this.employeeList.map(function (v) { return v._id.toString(); })));
            }
            else {
                this.selectedEmployeeList.setValue([]);
            }
        }
        if (listParam === 'statusList') {
            if (this.selectedStatus.value.includes('All')) {
                this.selectedStatus.setValue(['All'].concat(this.statusList.map(function (v) { return v.status.toString(); })));
            }
            else {
                this.selectedStatus.setValue([]);
            }
        }
        if (listParam === 'workTypes') {
            if (this.selectedWorkType.value.includes('All')) {
                this.selectedWorkType.setValue(['All'].concat(this._commonService.workTypes.map(function (v) { return v.toString(); })));
            }
            else {
                this.selectedWorkType.setValue([]);
            }
        }
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/pages/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/pages/task-list/task-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            src_app_services_status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"],
            src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_9__["WorklogService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_7__["SubtaskService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/pages/task-view-edit/task-view-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/task-view-edit/task-view-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"task-view-container\" *ngIf=\"currentTaskData\">\n\n  <div class=\"section-1\">\n\n    <div class=\"summary\">\n      <p>{{currentTaskData.taskUniqueId}} : {{currentTaskData.summary}}</p>\n    </div>\n    <div class=\"add-subtask-edit-box\">\n      <button mat-flat-button class=\"btn-border worktypeinfo\">{{currentTaskData.workType}} <mat-icon>info</mat-icon></button>\n      <button *ngIf=\"currentQueryTasktype == 'parenttask'\" mat-flat-button class=\"btn-border\" (click)=\"addSubtask()\">Add Subtask <mat-icon>add</mat-icon></button>\n      <button mat-flat-button class=\"btn-border\" (click)=\"editCurrentTask()\">Edit <mat-icon>edit</mat-icon></button>\n    </div>\n\n    <div class=\"description\">\n      <div class=\"description-head\">Description:</div>\n      <p>{{currentTaskData.description}}</p>\n    </div>\n\n    <div class=\"subtask-list-box\" *ngIf=\"currentQueryTasktype == 'parenttask'\">\n      <div class=\"subtask_row\" *ngFor=\"let sub of currentTaskData.subTasks\">\n        <div class=\"subtask-summary\">{{sub.taskUniqueId}} : {{sub.summary}}</div>\n        <div class=\"subtask-action-box\">\n          <div class=\"status-text\">{{sub.status}}</div>\n          <button mat-icon-button (click)=\"navigateSubTask('/task/'+sub._id)\">\n            <mat-icon>open_in_new</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"editSubTask(sub)\">\n              <mat-icon>edit</mat-icon>\n          </button>\n          <div matTooltip=\"{{sub.assignedTo.userName}}\">\n            <app-profile-icon [userName]=\"sub.assignedTo.userName\" [width]=\"'30px'\" [height]=\"'30px'\"></app-profile-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"worklog-box\">\n      <div class=\"work-log-head\">Work Log</div>\n      <hr/>\n      <div class=\"worklogs-row\" *ngFor=\"let log of currentTaskData.workLogs\">\n        <div class=\"name-log\">\n          <div class=\"name-icon\">\n            <app-profile-icon [userName]=\"log.userId.userName\" [width]=\"'35px'\" [height]=\"'35px'\"></app-profile-icon>\n          </div>\n          <div class=\"name\">{{log.userId.userName}}</div>\n          <div class=\"logtime\">\n            logged {{log.timeSpent | secondsToLogTime}}\n          </div>\n        </div>\n        <div class=\"date\">{{log.dateTime|date}}</div>\n        <div class=\"log-description\">\n          {{log.description}}\n        </div>\n        <div class=\"ed-btn-box\">\n          <button mat-raised-button (click)=\"editWorkLog(currentTaskData, log)\">Edit</button>\n          <button mat-raised-button *ngIf=\"userId === log.userId._id\" (click)=\"deleteWorkLog(log)\">Delete</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"section-2\">\n    <div class=\"status-log-btn-box\">\n      <button mat-flat-button class=\"btn-border status-btn\">{{currentTaskData.status}}</button>\n      <button mat-flat-button class=\"btn-border\" (click)=\"enterWorkLog()\">Log work <mat-icon>timeline</mat-icon></button>\n    </div>\n    <div class=\"project-name\">\n      {{currentTaskData.projectName}}\n      <hr/>\n    </div>\n    <div class=\"sec2-details-box\">\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Assignee</span> \n        <span class=\"name-sec\">\n          <app-profile-icon [userName]=\"currentTaskData.assignedTo.userName\" [width]=\"'30px'\" [height]=\"'30px'\"></app-profile-icon>\n          <span>{{currentTaskData.assignedTo.userName}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Reporter</span> \n        <span class=\"name-sec\">\n          <app-profile-icon [userName]=\"currentTaskData.reporter.userName\" [width]=\"'30px'\" [height]=\"'30px'\"></app-profile-icon>\n          <span>{{currentTaskData.reporter.userName}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Created by</span> \n        <span class=\"name-sec\">\n          <app-profile-icon [userName]=\"currentTaskData.createdBy.userName\" [width]=\"'30px'\" [height]=\"'30px'\"></app-profile-icon>\n          <span>{{currentTaskData.createdBy.userName}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Priority</span> \n        <span class=\"name-sec\">\n          <mat-icon>low_priority</mat-icon>\n          <span>{{currentTaskData.priority}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Due date</span> \n        <span class=\"name-sec\">\n          <mat-icon>date_range</mat-icon>\n          <span>{{currentTaskData.dueDate|date}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Start date</span> \n        <span class=\"name-sec\">\n          <mat-icon>date_range</mat-icon>\n          <span>{{currentTaskData.startDate|date}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">End date</span> \n        <span class=\"name-sec\">\n          <mat-icon>date_range</mat-icon>\n          <span>{{currentTaskData.endDate|date}}</span>\n        </span>\n      </div>\n      \n      <hr/>\n      <br/>\n      <br/>\n      <br/>\n      <br/>\n      \n      <div class=\"detail\">\n        <span class=\"det-left-text\">Created at</span> \n        <span class=\"name-sec\">\n          <mat-icon>date_range</mat-icon>\n          <span>{{currentTaskData.createdAt|date}}</span>\n        </span>\n      </div>\n      <div class=\"detail\">\n        <span class=\"det-left-text\">Updated at</span> \n        <span class=\"name-sec\">\n          <mat-icon>date_range</mat-icon>\n          <span>{{currentTaskData.updatedAt|date}}</span>\n        </span>\n      </div>\n      \n\n    </div>\n  </div>\n\n</div>\n\n<app-task-create-edit *ngIf=\"_taskService.showCreateEditTaskPopup\" [mode]=\"_taskService.taskPopupMode\"\n  [taskModeType]=\"_taskService.taskPopupModeType\" [updateTaskData]=\"_taskService.taskPopupUpdateData\" [taskIdToCreateUpdateSubTask]=\"_subTaskService.taskIdToCreateUpdateSubTask\"\n  (ontaskPopupClose)=\"onsubtaskPopupClose()\">\n</app-task-create-edit>\n\n\n<app-worklog-create-edit *ngIf=\"_worklogService.openWorklogPopup\" [taskData]=\"_worklogService.selectedTaskData\"\n  (closePopup)=\"closeWorklogPopup()\" [mode]=\"_worklogService.worklogPopupMode\" [workLogEditData]=\"_worklogService.workLogEditData\" >\n</app-worklog-create-edit>\n\n<app-loader *ngIf=\"isLoading\"></app-loader>"

/***/ }),

/***/ "./src/app/pages/task-view-edit/task-view-edit.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/task-view-edit/task-view-edit.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-view-container {\n  width: 90%;\n  margin: 1% auto;\n  margin-left: 8%;\n  border: 1px solid #C9CDCF;\n  border-radius: 6px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  height: 85vh; }\n\n.section-1 {\n  padding: 10px;\n  width: 65%;\n  border: 1px solid #C9CDCF;\n  height: 800vh;\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px; }\n\n.section-2 {\n  padding: 10px;\n  width: 35%;\n  border: 1px solid #C9CDCF;\n  height: 80vh;\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px; }\n\n.summary p {\n  font-size: 20px;\n  font-weight: bold;\n  width: 100%; }\n\n.subtask-list-box {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n  padding: 10px; }\n\n.subtask-list-box .subtask_row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid #C9CDCF;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    padding: 6px; }\n\n.subtask-list-box .subtask_row .subtask-summary {\n      font-size: 18px;\n      width: 70%;\n      max-width: 65%;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap; }\n\n.subtask-list-box .subtask_row .subtask-action-box {\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      gap: 5px;\n      width: 30%; }\n\n.description {\n  margin: 12px 0; }\n\n.description .description-head {\n    color: #959798;\n    margin-bottom: 4px; }\n\n.description p {\n    border: 1px solid #C9CDCF;\n    padding: 10px; }\n\n.worklog-box .work-log-head {\n  color: #ce7714;\n  margin: 10px 0;\n  font-size: 18px; }\n\n.worklogs-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 16px; }\n\n.worklogs-row .date {\n    font-size: 14px;\n    color: #959798; }\n\n.worklogs-row .name-log {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 8px; }\n\n.worklogs-row .name-log .name {\n      color: #002455; }\n\n.worklogs-row .log-description {\n    color: #000;\n    font-size: 16px; }\n\n.worklogs-row .ed-btn-box {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 4px;\n    margin: 6px; }\n\n.worklogs-row .ed-btn-box button {\n      font-size: 10px; }\n\n.add-subtask-edit-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px; }\n\n.status-btn {\n  padding: 0px 30px;\n  background-color: #aff6c1; }\n\n.status-log-btn-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 10px; }\n\n.project-name {\n  margin-top: 10px;\n  margin-bottom: 12px;\n  font-size: 18px;\n  color: chocolate; }\n\n.sec2-details-box {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%; }\n\n.sec2-details-box .detail {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    gap: 20px;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    padding: 6px;\n    cursor: pointer; }\n\n.sec2-details-box .detail:hover {\n      background-color: rgba(0, 0, 0, 0.08); }\n\n.sec2-details-box .detail .det-left-text {\n      font-family: monospace;\n      width: 40%; }\n\n.sec2-details-box .detail .name-sec {\n      width: 60%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      gap: 10px;\n      font-family: monospace; }\n\n.worktypeinfo {\n  background-color: #d68b55;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvcGFnZXMvdGFzay12aWV3LWVkaXQvdGFzay12aWV3LWVkaXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkNRZTtFRFBmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJDSGU7RURJZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJDZGU7RURlZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFFYjtFQUVRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUluQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBTGpCO0lBUVEsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIseUJDekNXO0lEMENYLDJDQ2xEaUM7SURtRGpDLFlBQVksRUFBQTs7QUFicEI7TUFlWSxlQUFlO01BQ2YsVUFBVTtNQUNWLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQXBCL0I7TUF3QlksYUFBYTtNQUNiLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsUUFBUTtNQUNSLFVBQVUsRUFBQTs7QUFNdEI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBSUssY0NuRWM7SURvRWQsa0JBQWtCLEVBQUE7O0FBTHZCO0lBUVEseUJDeEVXO0lEeUVYLGFBQWEsRUFBQTs7QUFJckI7RUFFUSxjQ2pGYztFRGtGZCxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGdCQUFnQixFQUFBOztBQUpwQjtJQU1RLGVBQWU7SUFDZixjQzNGVyxFQUFBOztBRG9GbkI7SUFXUSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixRQUFRLEVBQUE7O0FBZGhCO01BZ0JZLGNDOUdxQixFQUFBOztBRDhGakM7SUFvQlEsV0NySFU7SURzSFYsZUFBZSxFQUFBOztBQXJCdkI7SUF5QlEsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVcsRUFBQTs7QUE3Qm5CO01BK0JZLGVBQWUsRUFBQTs7QUFJM0I7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFFakIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUViO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUpmO0lBTVEsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBZHZCO01BZ0JZLHFDQUFxQyxFQUFBOztBQWhCakQ7TUFtQlksc0JBQXNCO01BQ3RCLFVBQVUsRUFBQTs7QUFwQnRCO01BdUJZLFVBQVU7TUFDVixhQUFhO01BQ2IsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQixTQUFTO01BQ1Qsc0JBQXNCLEVBQUE7O0FBS2xDO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2stdmlldy1lZGl0L3Rhc2stdmlldy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2NvbmZpZy5zY3NzXCI7XG5cbi50YXNrLXZpZXctY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICBtYXJnaW4tbGVmdDogOCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogODV2aDtcbn1cbi5zZWN0aW9uLTEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBoZWlnaHQ6IDgwMHZoO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xufVxuLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMzUlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmF5O1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbn1cbi5zdW1tYXJ5IHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uc3VidGFzay1saXN0LWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAuc3VidGFza19yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmF5O1xuICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93MTtcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAuc3VidGFzay1zdW1tYXJ5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY1JTtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc3VidGFzay1hY3Rpb24tYm94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMTJweCAwO1xuICAgIC5kZXNjcmlwdGlvbi1oZWFkIHtcbiAgICAvLyAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgIGNvbG9yOiAkZGFyay1ncmF5O1xuICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59XG5cbi53b3JrbG9nLWJveCB7XG4gICAgLndvcmstbG9nLWhlYWQge1xuICAgICAgICBjb2xvcjogJHdhcm5pbmctY29sb3I7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICB9XG59XG4ud29ya2xvZ3Mtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG5cbiAgICB9XG4gICAgLm5hbWUtbG9nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgY29sb3I6ICRidXR0b24taG92ZXItYmFja2dyb3VuZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG9nLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuZWQtYnRuLWJveCB7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYWRkLXN1YnRhc2stZWRpdC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLnN0YXR1cy1idG4ge1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmZjZjMTtcbn1cbi5zdGF0dXMtbG9nLWJ0bi1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuLnByb2plY3QtbmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuLnNlYzItZGV0YWlscy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmRldGFpbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCk7O1xuICAgICAgICB9XG4gICAgICAgIC5kZXQtbGVmdC10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICB9XG4gICAgICAgIC5uYW1lLXNlYyB7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ud29ya3R5cGVpbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY4YjU1O1xuICAgIGNvbG9yOiAjZmZmO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjRUVGNUZGOztcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcbiRibGFjay1jb2xvcjogIzAwMDtcbiRidXR0b24tYmFja2dyb3VuZDojMDAxRjNEO1xuJHNlY29uZGFyeS1jb2xvcjogI0NCRENFQjtcbiRidXR0b24taG92ZXItYmFja2dyb3VuZDogIzAwMjQ1NTtcbiRzaGFkb3cxOiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuJHNoYWRvdzI6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG5cbiRzdWNjZXNzLWNvbG9yOiMwOWU4MDk7XG4kZXJyb3ItY29sb3I6I2Q4MjEyMTtcbiRkYW5nZXItY29sb3I6I2Q4MjEyMTtcbiR3YXJuaW5nLWNvbG9yOiNjZTc3MTQ7XG4kaW5mby1jb2xvcjojNTY5MGZmO1xuJGxpZ2h0LWdyYXk6I0M5Q0RDRjtcbiRkYXJrLWdyYXk6ICM5NTk3OTg7Il19 */"

/***/ }),

/***/ "./src/app/pages/task-view-edit/task-view-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/task-view-edit/task-view-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskViewEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewEditComponent", function() { return TaskViewEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_common_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/confirmation-popup/confirmation-popup.component */ "./src/app/common/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/subtask.service */ "./src/app/services/subtask.service.ts");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/worklog.service */ "./src/app/services/worklog.service.ts");










var TaskViewEditComponent = /** @class */ (function () {
    function TaskViewEditComponent(route, _taskService, _subTaskService, _toaster, _commonService, router, _worklogService, dialog) {
        this.route = route;
        this._taskService = _taskService;
        this._subTaskService = _subTaskService;
        this._toaster = _toaster;
        this._commonService = _commonService;
        this.router = router;
        this._worklogService = _worklogService;
        this.dialog = dialog;
        this.isLoading = false;
        this.currentTaskData = null;
        this.userId = this._commonService.getUserId();
    }
    TaskViewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.paramMap.subscribe(function (params) {
            _this.currentParamTaskId = params.get('id');
        });
        this.routeSub = this.route.queryParams.subscribe(function (params) {
            _this.currentQueryTasktype = params['type'];
            if ((_this.currentQueryTasktype == 'Task' || _this.currentQueryTasktype == 'Bug')) {
                _this.currentQueryTasktype = "parenttask";
            }
            else {
                _this.currentQueryTasktype = 'subtask';
            }
        });
        this.fetchByIdAndType();
    };
    TaskViewEditComponent.prototype.fetchByIdAndType = function () {
        if (this.currentParamTaskId && this.currentQueryTasktype == 'parenttask') {
            this.getTaskById();
        }
        else if (this.currentParamTaskId && this.currentQueryTasktype == 'subtask') {
            this.getSubTaskById();
        }
        else {
            this._toaster.pop('error', 'Something went wrong');
        }
    };
    TaskViewEditComponent.prototype.getSubTaskById = function () {
        var _this = this;
        this._subTaskService.fetchSubTaskById(this.currentParamTaskId).subscribe(function (res) {
            if (res.success) {
                _this.currentTaskData = res.data;
            }
            else {
                _this._toaster.pop('error', res.message);
            }
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
        });
    };
    TaskViewEditComponent.prototype.getTaskById = function () {
        var _this = this;
        this._taskService.fetchOneTaskById(this.currentParamTaskId).subscribe(function (res) {
            if (res.success) {
                _this.currentTaskData = res.data;
            }
            else {
                _this._toaster.pop('error', res.message);
            }
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
        });
    };
    TaskViewEditComponent.prototype.addSubtask = function () {
        this._taskService.taskPopupUpdateData = null;
        this._subTaskService.taskIdToCreateUpdateSubTask = this.currentParamTaskId;
        this._taskService.taskPopupModeType = 'Sub-Task';
        this._taskService.taskPopupMode = 'Create';
        this._taskService.showCreateEditTaskPopup = true;
    };
    TaskViewEditComponent.prototype.onsubtaskPopupClose = function () {
        this._taskService.taskPopupUpdateData = null;
        this._subTaskService.taskIdToCreateUpdateSubTask = '';
        this._taskService.taskPopupModeType = '';
        this._taskService.taskPopupMode = '';
        this._taskService.showCreateEditTaskPopup = false;
        this.fetchByIdAndType();
    };
    TaskViewEditComponent.prototype.navigateSubTask = function (url) {
        window.open(url + '?type=Sub-Task');
    };
    TaskViewEditComponent.prototype.editSubTask = function (subdata) {
        this._taskService.taskPopupUpdateData = subdata;
        this._taskService.taskPopupModeType = 'Sub-Task';
        this._taskService.taskPopupMode = 'Edit';
        this._taskService.showCreateEditTaskPopup = true;
        this._subTaskService.taskIdToCreateUpdateSubTask = subdata._id;
    };
    TaskViewEditComponent.prototype.editWorkLog = function (taskData, logData) {
        this._worklogService.selectedTaskData = taskData;
        this._worklogService.worklogPopupMode = 'Edit';
        this._worklogService.workLogEditData = logData;
        this._worklogService.openWorklogPopup = true;
    };
    TaskViewEditComponent.prototype.closeWorklogPopup = function () {
        this._worklogService.selectedTaskData = null;
        this._worklogService.worklogPopupMode = '';
        this._worklogService.workLogEditData = null;
        this._worklogService.openWorklogPopup = false;
        this.fetchByIdAndType();
    };
    TaskViewEditComponent.prototype.deleteWorkLog = function (log) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_common_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupComponent"], {
            width: '350px',
            data: {
                title: 'Delete Work Log',
                message: 'Are you sure you want to delete this work log?'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._worklogService.deleteWorkLog(log._id).subscribe(function (res) {
                    if (res.success) {
                        _this._toaster.pop('success', res.message);
                        _this.fetchByIdAndType();
                    }
                    else {
                        _this._toaster.pop('success', res.message);
                    }
                });
            }
        });
    };
    TaskViewEditComponent.prototype.editCurrentTask = function () {
        this._taskService.taskPopupUpdateData = this.currentTaskData;
        this._taskService.taskPopupModeType = this.currentQueryTasktype == 'parenttask' ? 'Task' : 'Sub-Task';
        this._taskService.taskPopupMode = 'Edit';
        this._taskService.showCreateEditTaskPopup = true;
        this._subTaskService.taskIdToCreateUpdateSubTask = '';
    };
    TaskViewEditComponent.prototype.enterWorkLog = function () {
        this._worklogService.selectedTaskData = this.currentTaskData;
        this._worklogService.worklogPopupMode = 'Create';
        this._worklogService.workLogEditData = null;
        this._worklogService.openWorklogPopup = true;
    };
    TaskViewEditComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    TaskViewEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view-edit',
            template: __webpack_require__(/*! ./task-view-edit.component.html */ "./src/app/pages/task-view-edit/task-view-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-view-edit.component.scss */ "./src/app/pages/task-view-edit/task-view-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"],
            src_app_services_subtask_service__WEBPACK_IMPORTED_MODULE_7__["SubtaskService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_9__["WorklogService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TaskViewEditComponent);
    return TaskViewEditComponent;
}());



/***/ }),

/***/ "./src/app/pages/worklog-report/worklog-report.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/worklog-report/worklog-report.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"log-report-container\">\n  <div class=\"section-1\">\n    <h2 class=\"full-width\">Worklog Report</h2>\n    <form [formGroup]=\"logForm\" class=\"full-width\">\n      <mat-form-field class=\"full-width\">\n        <input matInput [max]=\"logForm.get('toDate')?.value\" [matDatepicker]=\"fromDatePicker\" placeholder=\"From date\" formControlName=\"fromDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"fromDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #fromDatePicker></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput [min]=\"logForm.get('fromDate')?.value\" [matDatepicker]=\"toDatePicker\" placeholder=\"To date\" formControlName=\"toDate\" required>\n        <mat-datepicker-toggle matSuffix [for]=\"toDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #toDatePicker></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\">\n        <mat-select placeholder=\"Assignee\" formControlName=\"userId\">\n          <mat-option *ngFor=\"let user of _employeeService.employeeList\" [value]=\"user._id\">{{user.userName}}</mat-option>\n          </mat-select>\n      </mat-form-field>\n\n      <div class=\"reportbtn-box\">\n        <button mat-raised-button (click)=\"getLogs()\">Generate report</button>\n      </div>\n\n    </form>\n  </div>\n\n\n  <div class=\"section-2\">\n\n    <div class=\"log-table-container\">\n      <div class=\"log-column\" *ngFor=\"let datelog of logDateWiseData\">\n        <div class=\"head-date\">{{datelog._id|date}}</div>\n        <div *ngFor=\"let log of datelog.logs\" class=\"log-row\">\n          <span *ngIf=\"log.task\" matTooltip=\"{{log.task.summary}}\" class=\"log-taskid\">{{log.task.taskUniqueId}}</span>:\n          <span class=\"log-timespent\">{{log.timeSpent|secondsToLogTime}}</span>\n        </div>\n        <div class=\"log-col-foot\">\n          {{datelog.totalTimeSpent|secondsToLogTime}}\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/worklog-report/worklog-report.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/worklog-report/worklog-report.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".log-report-container {\n  width: 90%;\n  margin: 1% auto;\n  margin-left: 8%;\n  border: 1px solid #C9CDCF;\n  border-radius: 6px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  height: 85vh; }\n\n.section-1 {\n  padding: 10px;\n  width: 35%;\n  border: 1px solid #C9CDCF;\n  height: 800vh;\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px; }\n\n.section-2 {\n  padding: 10px;\n  width: 65%;\n  border: 1px solid #C9CDCF;\n  height: 80vh;\n  max-height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px; }\n\n.log-table-container {\n  width: 100%;\n  height: 80vh;\n  max-height: 80vh;\n  max-width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: flex-start;\n  align-items: normal;\n  white-space: nowrap;\n  gap: 10px; }\n\n.section-1 > h2 {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 10px 0px; }\n\n.reportbtn-box {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 20px; }\n\n.log-column {\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 10px;\n  border: 1px solid #959798;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 4px;\n  width: 200px;\n  cursor: pointer;\n  height: 100%;\n  position: relative; }\n\n.log-column .log-col-foot {\n    font-size: 17px;\n    background-color: #CBDCEB;\n    padding: 4px;\n    border-radius: 3px;\n    font-family: monospace;\n    width: 100%;\n    color: #ae59ec;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    z-index: 5; }\n\n.head-date {\n  font-size: 17px;\n  background-color: #CBDCEB;\n  padding: 4px;\n  border-radius: 3px;\n  font-family: monospace;\n  width: 100%; }\n\n.log-row {\n  background-color: rgba(0, 0, 0, 0.02);\n  font-size: 16px;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.log-row .log-taskid {\n    color: #ce7714;\n    font-family: monospace;\n    font-size: 16px; }\n\n.log-row .log-timespent {\n    color: #ae59ec;\n    font-family: monospace;\n    font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmtpdG1pc2hyYS9EZXNrdG9wL0Fra2kvdGFza2lmeS90YXNraWZ5LXVpL3NyYy9hcHAvcGFnZXMvd29ya2xvZy1yZXBvcnQvd29ya2xvZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5raXRtaXNocmEvRGVza3RvcC9Ba2tpL3Rhc2tpZnkvdGFza2lmeS11aS9zcmMvY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkNRZTtFRFBmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJDSmU7RURLZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YseUJDZmU7RURnQmYsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTLEVBQUE7O0FBRWI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYix5QkNyRGU7RURzRGYsMkNDOURxQztFRCtEckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQWJ0QjtJQWVRLGVBQWU7SUFDZix5QkN6RWlCO0lEMEVqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBOztBQUlsQjtFQUNJLGVBQWU7RUFDZix5QkMxRnFCO0VEMkZyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBRWY7RUFDSSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkNDbkdxQztFRG9HckMsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7O0FBVHZCO0lBV1EsY0NuR2M7SURvR2Qsc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTs7QUFidkI7SUFnQlEsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3JrbG9nLXJlcG9ydC93b3JrbG9nLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jb25maWcuc2Nzc1wiO1xuXG4ubG9nLXJlcG9ydC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxJSBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiA4JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiA4NXZoO1xufVxuXG4uc2VjdGlvbi0xIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XG4gICAgaGVpZ2h0OiA4MDB2aDtcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbn1cbi5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEycHg7XG59XG4ubG9nLXRhYmxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGdhcDogMTBweDtcblxufVxuLnNlY3Rpb24tMSA+IGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuLnJlcG9ydGJ0bi1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5sb2ctY29sdW1uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmstZ3JheTtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93MjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5sb2ctY29sLWZvb3Qge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICNhZTU5ZWM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgIH1cbiAgICBcbn1cbi5oZWFkLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5sb2ctcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6ICRzaGFkb3cxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmxvZy10YXNraWQge1xuICAgICAgICBjb2xvcjogJHdhcm5pbmctY29sb3I7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmxvZy10aW1lc3BlbnQge1xuICAgICAgICBjb2xvcjogI2FlNTllYztcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogI0VFRjVGRjs7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4kYmxhY2stY29sb3I6ICMwMDA7XG4kYnV0dG9uLWJhY2tncm91bmQ6IzAwMUYzRDtcbiRzZWNvbmRhcnktY29sb3I6ICNDQkRDRUI7XG4kYnV0dG9uLWhvdmVyLWJhY2tncm91bmQ6ICMwMDI0NTU7XG4kc2hhZG93MTogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbiRzaGFkb3cyOiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xuXG4kc3VjY2Vzcy1jb2xvcjojMDllODA5O1xuJGVycm9yLWNvbG9yOiNkODIxMjE7XG4kZGFuZ2VyLWNvbG9yOiNkODIxMjE7XG4kd2FybmluZy1jb2xvcjojY2U3NzE0O1xuJGluZm8tY29sb3I6IzU2OTBmZjtcbiRsaWdodC1ncmF5OiNDOUNEQ0Y7XG4kZGFyay1ncmF5OiAjOTU5Nzk4OyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/worklog-report/worklog-report.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/worklog-report/worklog-report.component.ts ***!
  \******************************************************************/
/*! exports provided: WorklogReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklogReportComponent", function() { return WorklogReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/worklog.service */ "./src/app/services/worklog.service.ts");







var WorklogReportComponent = /** @class */ (function () {
    function WorklogReportComponent(_employeeService, _commonService, _workLogService, _toaster) {
        this._employeeService = _employeeService;
        this._commonService = _commonService;
        this._workLogService = _workLogService;
        this._toaster = _toaster;
        this.currentUserId = this._commonService.getUserId();
        this.logDateWiseData = [];
    }
    WorklogReportComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getEmployeesList();
    };
    WorklogReportComponent.prototype.initForm = function () {
        this.logForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.currentUserId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    WorklogReportComponent.prototype.getEmployeesList = function () {
        var _this = this;
        this._employeeService.fetchAllEmployees().subscribe(function (response) {
            try {
                if (response.success) {
                    _this._employeeService.employeeList = JSON.parse(JSON.stringify(response.data));
                }
                else {
                    _this._toaster.pop('error', response.message);
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    };
    WorklogReportComponent.prototype.getLogs = function () {
        var _this = this;
        var queryString = "userId=" + this.logForm.get('userId').value + "&fromDate=" + this.logForm.get('fromDate').value.toDateString() + "&toDate=" + this.logForm.get('toDate').value.toDateString();
        this._workLogService.getworkLogs(queryString).subscribe(function (res) {
            if (res.success) {
                _this.logDateWiseData = res.data;
            }
            else {
                _this._toaster.pop('error', res.message);
                _this.logDateWiseData = [];
            }
        }, function (error) {
            _this._toaster.pop('error', 'Something went wrong');
        });
    };
    WorklogReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-worklog-report',
            template: __webpack_require__(/*! ./worklog-report.component.html */ "./src/app/pages/worklog-report/worklog-report.component.html"),
            styles: [__webpack_require__(/*! ./worklog-report.component.scss */ "./src/app/pages/worklog-report/worklog-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_services_worklog_service__WEBPACK_IMPORTED_MODULE_6__["WorklogService"],
            angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], WorklogReportComponent);
    return WorklogReportComponent;
}());



/***/ }),

/***/ "./src/app/pipes/seconds-to-log-time.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/seconds-to-log-time.pipe.ts ***!
  \***************************************************/
/*! exports provided: SecondsToLogTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsToLogTimePipe", function() { return SecondsToLogTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondsToLogTimePipe = /** @class */ (function () {
    function SecondsToLogTimePipe() {
    }
    SecondsToLogTimePipe.prototype.transform = function (seconds) {
        if (!seconds || seconds <= 0) {
            return '0h';
        }
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var result = '';
        if (hours > 0) {
            result += hours + "h";
        }
        if (minutes > 0) {
            result += (result ? ' ' : '') + (minutes + "m");
        }
        return result || '0h';
    };
    SecondsToLogTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'secondsToLogTime'
        })
    ], SecondsToLogTimePipe);
    return SecondsToLogTimePipe;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_commonService, _router) {
        this._commonService = _commonService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this._commonService.getCookie('user_access')) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    // [
    //   {
    //     "Code": "FOM",
    //     "Name": "Front Office(FOM)",
    //     "ProductCode": "10021"
    //   },
    //   {
    //     "Code": "POS",
    //     "Name": "Point of Sale(POS)",
    //     "ProductCode": "10004"
    //   },
    //   {
    //     "Code": "SPA",
    //     "Name": "SPA",
    //     "ProductCode": "10029"
    //   },
    //   {
    //     "Code": "Banquets",
    //     "Name": "Banquets(SNC)",
    //     "ProductCode": "10035"
    //   },
    //   {
    //     "Code": "FAS",
    //     "Name": "Fx Finance(FAS)",
    //     "ProductCode": "10010"
    //   }
    // ]
    function CommonService() {
        this.statusList = [];
        this.workTypes = ['Task', 'Sub-Task', 'Bug'];
        this.projectList = ['Front Office Management'];
        this.priorityList = ['Showstopper', 'Critical', 'High', 'Medium', 'Low'];
    }
    CommonService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        return parts.pop().split(";").shift();
    };
    CommonService.prototype.setCookie = function (key, value) {
        document.cookie = key + '=' + value + '; path=/;';
    };
    CommonService.prototype.setItemToLocal = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    CommonService.prototype.getItemFromLocal = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    CommonService.prototype.isLoggedIn = function () {
        if (this.getCookie('user_access')) {
            return true;
        }
        return false;
    };
    CommonService.prototype.getUserDetails = function () {
        return this.getItemFromLocal('user_data');
    };
    CommonService.prototype.getUserId = function () {
        return this.getItemFromLocal('user_data')._id;
    };
    CommonService.prototype.getFirstLetter = function () {
        var user_data = this.getItemFromLocal('user_data');
        if (user_data) {
            return user_data.userName[0].toString().toUpperCase();
        }
    };
    CommonService.prototype.getUserName = function () {
        return this.getItemFromLocal('user_data').userName;
    };
    CommonService.prototype.getUserEmail = function () {
        return this.getItemFromLocal('user_data').email;
    };
    Object.defineProperty(CommonService.prototype, "isAdmin", {
        get: function () {
            var user_data = this.getItemFromLocal('user_data');
            return user_data.isAdmin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonService.prototype, "isSuperAdmin", {
        get: function () {
            var user_data = this.getItemFromLocal('user_data');
            return user_data.isSuperAdmin;
        },
        enumerable: true,
        configurable: true
    });
    CommonService.prototype.getRandomRgbColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
    CommonService.prototype.isValidDate = function (date) {
        if (!date || new Date(date).toString() == "Invalid Date") {
            return false;
        }
        return true;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(_webService) {
        this._webService = _webService;
        this.employeeList = [];
        this.displayedEmployeeColumns = ['employee_id', 'role', 'userName', 'email', 'createdAt', 'actions'];
        this.employeeCreateEditMode = '';
        this.employeeCreateEditData = null;
        this.showEmployeeCreateEditPopup = false;
    }
    EmployeeService.prototype.fetchAllEmployees = function () {
        return this._webService.commonGetMethod('/user/getallusers');
    };
    EmployeeService.prototype.createEmployee = function (data) {
        return this._webService.commonPostMethod('/user/create', data);
    };
    EmployeeService.prototype.updateEmployee = function (userid, data) {
        return this._webService.commonPatchMethod("/user/update/" + userid, data);
    };
    EmployeeService.prototype.onCloseEmployeeCreateEditPopup = function () {
        this.employeeCreateEditMode = '';
        this.employeeCreateEditData = null;
        this.showEmployeeCreateEditPopup = false;
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/status.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/status.service.ts ***!
  \********************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");



var StatusService = /** @class */ (function () {
    function StatusService(_webService) {
        this._webService = _webService;
        this.statusList = [];
    }
    StatusService.prototype.fetchStatusList = function () {
        return this._webService.commonGetMethod('/status/statuslist');
    };
    StatusService.prototype.postStatus = function (payload) {
        return this._webService.commonPostMethod('/status/createstatus', payload);
    };
    StatusService.prototype.patchStatus = function (payload) {
        return this._webService.commonPatchMethod('/status/updatestatus', payload);
    };
    StatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]])
    ], StatusService);
    return StatusService;
}());



/***/ }),

/***/ "./src/app/services/subtask.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subtask.service.ts ***!
  \*********************************************/
/*! exports provided: SubtaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskService", function() { return SubtaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");



var SubtaskService = /** @class */ (function () {
    function SubtaskService(_webService) {
        this._webService = _webService;
    }
    SubtaskService.prototype.createSubTask = function (parentTaskId, data) {
        return this._webService.commonPostMethod("/task/subtask/create/" + parentTaskId, data);
    };
    SubtaskService.prototype.updateSubTask = function (subTaskId, data) {
        return this._webService.commonPatchMethod("/task/subtask/update/" + subTaskId, data);
    };
    SubtaskService.prototype.fetchSubTaskById = function (subtaskId) {
        return this._webService.commonGetMethod("/task/subtask/getonesubtask/" + subtaskId);
    };
    SubtaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]])
    ], SubtaskService);
    return SubtaskService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");



var TaskService = /** @class */ (function () {
    function TaskService(_webService) {
        this._webService = _webService;
        this.all_task_subtask_list = [];
        this.taskPopupMode = '';
        this.taskPopupModeType = 'Task';
        this.showCreateEditTaskPopup = false;
        this.searchTaskResult = [];
    }
    TaskService.prototype.fetchUserTaskList = function (assignedToId) {
        return this._webService.commonGetMethod("/task/getusertasklist/" + assignedToId);
    };
    TaskService.prototype.fetchAllTaskList = function (query) {
        return this._webService.commonGetMethod("/gettasksubtasklist?");
    };
    TaskService.prototype.createNewTask = function (data) {
        return this._webService.commonPostMethod('/task/create', data);
    };
    TaskService.prototype.updateTask = function (id, data) {
        return this._webService.commonPatchMethod("/task/update/" + id, data);
    };
    TaskService.prototype.getAllTask_SubTaskList = function (query) {
        return this._webService.commonGetMethod("/task/gettasksubtasklist?" + query);
    };
    TaskService.prototype.fetchOneTaskById = function (taskId) {
        return this._webService.commonGetMethod("/task/getonetask/" + taskId);
    };
    TaskService.prototype.searchTaskByText = function (search) {
        return this._webService.commonGetMethod("/task/searchtask/?search=" + search);
    };
    TaskService.prototype.combineSubtaskToTask = function (tasklist) {
        var list = [];
        for (var _i = 0, tasklist_1 = tasklist; _i < tasklist_1.length; _i++) {
            var task = tasklist_1[_i];
            list.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task));
            task.subTasks.forEach(function (el) {
                list.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, el));
            });
        }
        return list;
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/web.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/web.service.ts ***!
  \*****************************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");




var WebService = /** @class */ (function () {
    function WebService(_http, _commonService) {
        this._http = _http;
        this._commonService = _commonService;
        // baseUrl = 'http://localhost:3000/api'
        this.baseUrl = 'https://taskify-api-qsdy.onrender.com/api';
        this.token = this._commonService.getCookie('user_access');
        this.token = this._commonService.getCookie('user_access');
    }
    WebService.prototype.commonPostMethod = function (endpoint, data) {
        try {
            endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
            var url = this.baseUrl + endpoint;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this._commonService.getCookie('user_access')
            });
            return this._http.post(url, data, {
                headers: header
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WebService.prototype.commonPatchMethod = function (endpoint, data) {
        try {
            endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
            var url = this.baseUrl + endpoint;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this._commonService.getCookie('user_access')
            });
            return this._http.patch(url, data, {
                headers: header
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WebService.prototype.commonGetMethod = function (endpoint) {
        try {
            endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
            var url = this.baseUrl + endpoint;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this._commonService.getCookie('user_access')
            });
            return this._http.get(url, {
                headers: header
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WebService.prototype.commonDeleteMethod = function (endpoint) {
        try {
            endpoint = endpoint[0] != '/' ? ('/' + endpoint) : endpoint;
            var url = this.baseUrl + endpoint;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this._commonService.getCookie('user_access')
            });
            return this._http.delete(url, {
                headers: header
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    WebService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], WebService);
    return WebService;
}());



/***/ }),

/***/ "./src/app/services/worklog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/worklog.service.ts ***!
  \*********************************************/
/*! exports provided: WorklogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklogService", function() { return WorklogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.service */ "./src/app/services/web.service.ts");



var WorklogService = /** @class */ (function () {
    function WorklogService(_webService) {
        this._webService = _webService;
        this.selectedTaskData = null;
        this.openWorklogPopup = false;
        this.worklogPopupMode = '';
        this.workLogEditData = null;
    }
    WorklogService.prototype.isValidDuration = function (value) {
        return /^\d+(\.\d+)?[hm]$/.test(value);
    };
    WorklogService.prototype.convertLogTime = function (time) {
        var regex = /^(\d+(?:\.\d+)?)([hm])$/;
        var match = time.match(regex);
        if (!match) {
            console.log('Invalid time format');
            return 0;
        }
        var value = parseFloat(match[1]);
        var unit = match[2];
        if (unit === 'h') {
            return value * 60 * 60;
        }
        return value * 60;
    };
    WorklogService.prototype.convertSecondsToLogTime = function (seconds) {
        if (!seconds || seconds <= 0)
            return '0h';
        // Prefer hours if >= 1 hour
        if (seconds >= 3600) {
            var hours = seconds / 3600;
            return parseFloat(hours.toFixed(2)) + "h";
        }
        // Otherwise return minutes
        var minutes = seconds / 60;
        return parseFloat(minutes.toFixed(2)) + "m";
    };
    WorklogService.prototype.postworkLog = function (userId, taskId, data) {
        return this._webService.commonPostMethod("/worklog/createlog/" + userId + "/" + taskId, data);
    };
    WorklogService.prototype.patchWorkLog = function (logId, data) {
        return this._webService.commonPatchMethod("/worklog/updatelog/" + logId, data);
    };
    WorklogService.prototype.deleteWorkLog = function (logId) {
        return this._webService.commonDeleteMethod("/worklog/deletelog/" + logId);
    };
    WorklogService.prototype.getworkLogs = function (queryString) {
        return this._webService.commonGetMethod("/worklog/getlogs?" + queryString);
    };
    WorklogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_service__WEBPACK_IMPORTED_MODULE_2__["WebService"]])
    ], WorklogService);
    return WorklogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ankitmishra/Desktop/Akki/taskify/taskify-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map