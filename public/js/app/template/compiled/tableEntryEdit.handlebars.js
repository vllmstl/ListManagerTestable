define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['tableEntryEdit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class='col-sm-1 cid'>"
    + alias4(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cid","hash":{},"data":data}) : helper)))
    + "</td>\r\n<td><input class=\"form-control fname\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.fname || (depth0 != null ? depth0.fname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fname","hash":{},"data":data}) : helper)))
    + "\"></td>\r\n<td><input class=\"form-control lname\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.lname || (depth0 != null ? depth0.lname : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lname","hash":{},"data":data}) : helper)))
    + "\"></td>\r\n<td><input class=\"form-control phone\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\"></td>\r\n<td><input class=\"form-control email\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\"></td>\r\n<td><input class=\"form-control url\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"></td>\r\n<td class='col-sm-2'>\r\n	<a class=\"btn btn-warning save\" href=\"#save/"
    + alias4(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cid","hash":{},"data":data}) : helper)))
    + "\" role=\"button\"><i class=\"fa fa-floppy-o\"></i>&nbsp;Save</a>&nbsp;\r\n	<a class=\"btn btn-danger cancel\" href=\"#cancel\" role=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Cancel</a>\r\n</td>\r\n";
},"useData":true});
});