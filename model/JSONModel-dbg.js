sap.ui.define(['sap/ui/model/json/JSONModel', 'sap/ui/model/Context', 'sap/ui/model/json/JSONListBinding', 'sap/ui/model/json/JSONPropertyBinding', 'sap/ui/model/json/JSONTreeBinding',
	"sap/base/Log", "sap/ui/thirdparty/jquery", "sap/base/util/isPlainObject"
], function (JSONModel, Context, JSONListBinding, JSONPropertyBinding, JSONTreeBinding, Log, jQuery, isPlainObject) {
	"use strict";

	var JSONModel2 = JSONModel.extend("Kn.KnThrack.model.JSONModel", {

		constructor: function (oData, bObserve) {
			this.pSequentialImportCompleted = Promise.resolve();
			JSONModel.apply(this, arguments);

			this.bObserve = bObserve;
			this.bObserve = true;
			if (oData && typeof oData == "object") {
				this.setData(oData);
			}
		},

		metadata: {
			publicMethods: ["setJSON", "getJSON"]
		}

	});

	JSONModel.prototype.setData = function(oData, bMerge){
		if (bMerge) {
			// do a deep copy
			this.oData = jQuery.extend(true, Array.isArray(this.oData) ? [] : {}, this.oData, oData.Response);
		} else {
			this.oData = oData.Response;
		}
		if (this.bObserve) {
			this.observeData();
		}
		this.checkUpdate();
	};
	
	return JSONModel2;

});