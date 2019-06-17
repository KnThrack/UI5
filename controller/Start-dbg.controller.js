sap.ui.define([
	"Kn/KnThrack/controller/BaseController",
	"Kn/KnThrack/model/models"
], function (BaseController, models) {
	"use strict";

	return BaseController.extend("Kn.KnThrack.controller.Start", {

		onInit: function () {
			// creates a model and attach it to the view
			this.getView().setModel(models.createDestinyModel(), "destiny");

			// do a GET request

			/*
			var header = {
				"X-API-Key": "91104b97ed624339b0f09e49ac63b3b9"
			};
			this.getView().getModel("destiny").loadData(
				"/Destiny/Destiny2/SearchDestinyPlayer/-1/", "", "", "", "", "", header
			);
			*/
			var oContext = new sap.ui.model.Context(this.getView().getModel("destiny"), "/destinyData");
			this.getView().setBindingContext(oContext, "destiny");

			
			this.getView().getModel("destiny").attachRequestCompleted(function (oData) {
				var a = oData;
			});
			
		},

		onAfterRendering: function () {
			//var a = 1;
		},

		// View methods



	});
});