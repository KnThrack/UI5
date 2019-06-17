sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"Kn/KnThrack/model/models"
], function (Controller, History, UIComponent, models) {
	"use strict";

	return Controller.extend("Kn.KnThrack.controller.BaseController", {

		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		getHeader: function () {

			var header = {
				"X-API-Key": "91104b97ed624339b0f09e49ac63b3b9"
			};

			return header;

		},

		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("", {}, true /*no history*/ );
			}
		}

	});

});