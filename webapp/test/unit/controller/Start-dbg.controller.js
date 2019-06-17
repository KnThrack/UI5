/*global QUnit*/

sap.ui.define([
	"Kn/KnThrack/controller/Start.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Start Controller");

	QUnit.test("I should test the Start controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});