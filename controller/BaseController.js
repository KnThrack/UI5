sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","Kn/KnThrack/model/models"],function(e,n,r,t){"use strict";return e.extend("Kn.KnThrack.controller.BaseController",{getRouter:function(){return r.getRouterFor(this)},getHeader:function(){var e={"X-API-Key":"91104b97ed624339b0f09e49ac63b3b9"};return e},onNavBack:function(){var e,r;e=n.getInstance();r=e.getPreviousHash();if(r!==undefined){window.history.go(-1)}else{this.getRouter().navTo("",{},true)}}})});