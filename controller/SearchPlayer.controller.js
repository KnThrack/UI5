sap.ui.define(["Kn/KnThrack/controller/BaseController","Kn/KnThrack/model/models"],function(e,t){"use strict";return e.extend("Kn.KnThrack.controller.SearchPlayer",{onInit:function(){},onSearch:function(e){var t=e.getSource().getValue();var n="/Destiny/Destiny2/SearchDestinyPlayer/-1/";n=n+t+"/";this.getView().getModel("destiny").loadData(n,"","","","","",this.getHeader())},onPlayerPress:function(e){var t,n;t=e.getSource();n=t.getBindingContext("destiny");this.getRouter().navTo("PlayerDetail",{membershipId:n.getProperty("membershipId")})}})});