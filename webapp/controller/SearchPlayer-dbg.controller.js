sap.ui.define([
	"Kn/KnThrack/controller/BaseController",
	"Kn/KnThrack/model/models"
], function (BaseController, models) {
	"use strict";

	return BaseController.extend("Kn.KnThrack.controller.SearchPlayer", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Kn.KnThrack.view.SearchPlayer
		 */
		onInit: function () {

		},

		onSearch: function (oEvt) {

			// add filter for search
			var sQuery = oEvt.getSource().getValue();
			var sUrl = "/Destiny/Destiny2/SearchDestinyPlayer/-1/";
			sUrl = sUrl + sQuery + "/";
			this.getView().getModel("destiny").loadData(
				sUrl, "", "", "", "", "", this.getHeader()
			);

			// update list binding
			//var list = this.byId("idList");
			//var binding = list.getBinding("items");
			//binding.filter(aFilters, "Application");

		},

		onPlayerPress: function (oEvt) {
			var oItem, oCtx;

			oItem = oEvt.getSource();
			oCtx = oItem.getBindingContext('destiny');

			this.getRouter().navTo("PlayerDetail", {
				membershipId: oCtx.getProperty("membershipId")
			});

		}

	});

});