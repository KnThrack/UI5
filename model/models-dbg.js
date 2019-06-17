sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"Kn/KnThrack/model/JSONModel",
	"sap/ui/Device"
], function (JSONModel, JSONModel2, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createDestinyModel: function () {
			var oModel = new JSONModel2();
			oModel.setDefaultBindingMode("TwoWay");
			return oModel;
		}

	};
});