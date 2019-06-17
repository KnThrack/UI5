sap.ui.define([
	"Kn/KnThrack/controller/BaseController",
	"Kn/KnThrack/model/models"
], function (BaseController, models) {
	"use strict";

	return BaseController.extend("Kn.KnThrack.controller.PlayerDetail", {

		onInit: function () {
			var oRouter = this.getRouter();

			oRouter.getRoute("PlayerDetail").attachMatched(this._onRouteMatched, this);
			
			this.getView().setModel(models.createDestinyModel(), "player");
			var oContext = new sap.ui.model.Context(this.getView().getModel("player"), "/playerData");
			this.getView().setBindingContext(oContext, "player");
		},

		_onRouteMatched : function (oEvent) {
			var oArgs;

			oArgs = oEvent.getParameter("arguments");

			var sUrl = "/Destiny/Destiny2/2/Profile/"+oArgs.membershipId+"/?components=200";
		
			this.getView().getModel("player").loadData(
				sUrl, "", "", "", "", "", this.getHeader()
			);
/*
			oView.bindElement({
				path : "/Employees(" + oArgs.employeeId + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
			*/
		},

	});

});