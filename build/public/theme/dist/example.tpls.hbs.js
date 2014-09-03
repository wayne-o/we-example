Ember.TEMPLATES['components/bs-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    ");
  stack1 = helpers['if'].call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-connection-status'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("statusImageUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-html'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"form-group\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("name"),
    'value': ("value")
  },hashTypes:{'name': "ID",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("value"),
    'type': ("text"),
    'required': ("true"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "ID",'value': "ID",'type': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-sys-messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"alert alert-");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" alert-dismissable\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-timeline-loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Loading more", options) : helperMissing.call(depth0, "t", "Loading more", options))));
  data.buffer.push("... <img src=\"/imgs/loading.gif\">\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "haveMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a href='#' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getMore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Get More", options) : helperMissing.call(depth0, "t", "Get More", options))));
  data.buffer.push("</a>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "No more content", options) : helperMissing.call(depth0, "t", "No more content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"loading-more-content text-center\">\n  ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['partials/footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<hr>\n<div class=\"container\" id=\"footer\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <a href=\"https://github.com/wejs\">Github</a> <small class=\"text-muted\">|</small> <a href=\"https://wejs.org\">Site</a>\n    </div>\n    <div class=\"col-sm-6\">\n      <p>\n      <span class=\"pull-right\">\n        <a href=\"#\" >WE License MIT 2013</a> | Theme\n        from <a href=\"http://bootply.com/96266\" target=\"ext\">@Bootply</a>\n      </span>\n      </p>\n    </div>\n  </div>\n</div>\n\n<hr>\n<h4 class=\"text-center\">\n<a href=\"https://github.com/wejs/we\" target=\"ext\">We.js</a> | <a href=\"http://sailsjs.org\">Sails.js</a> | <a href=\"http://emberjs.com/\">Ember.js</a>\n</h4>\n");
  
});Ember.TEMPLATES['partials/home-about-site'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section role=\"section\" id=\"section-start\" class=\"section-start\">\n  <div>\n    <!-- welcome -->\n    <aside class=\"welcome\">\n      <h1 class=\"title\">We.js</h1>\n      <h3 class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Real time social network with node.js", options) : helperMissing.call(depth0, "t", "Real time social network with node.js", options))));
  data.buffer.push("</h3>\n      <p><a href=\"https://github.com/wejs/we\"><span class=\"glyphicon glyphicon-link\"></span> https://github.com/wejs/we</a></p>\n    </aside>\n  </div>\n</section>");
  return buffer;
  
});Ember.TEMPLATES['partials/home-not-authenticated'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/navbar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle</span>\n          <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        </button>\n        <a href=\"#\" class=\"navbar-brand site-logo-link logo\">\n          <img class=\"logo-img\" src=\"/imgs/we-logo-branco-small.png\" />\n        </a>\n      </div>\n      <nav class=\"collapse navbar-collapse\" role=\"navigation\">\n      <form class=\"navbar-form navbar-left\">\n          <div class=\"input-group input-group-sm\" style=\"max-width:360px;\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" id=\"srch-term\">\n            <div class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\n            </div>\n          </div>\n      </form>\n      <ul class=\"nav navbar-nav\">\n        <li>\n         <a href=\"#\">\n           <i class=\"glyphicon glyphicon-home\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Home", options) : helperMissing.call(depth0, "t", "Home", options))));
  data.buffer.push("\n         </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"glyphicon glyphicon-user\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options))));
  data.buffer.push("\n          </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"glyphicon glyphicon-globe\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Groups", options) : helperMissing.call(depth0, "t", "Groups", options))));
  data.buffer.push("\n          </a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"glyphicon glyphicon-bell\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Notifications", options) : helperMissing.call(depth0, "t", "Notifications", options))));
  data.buffer.push("\n          </a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li><div>\n          <a href=\"#\">\n            <i class=\"glyphicon glyphicon-log-in\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n          </a>\n        </div></li>\n        <li><div>\n          <a href=\"#\">\n            <i class=\"glyphicon glyphicon-plus\"></i>\n            <i class=\"glyphicon glyphicon-user\"></i>\n             ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Register", options) : helperMissing.call(depth0, "t", "Register", options))));
  data.buffer.push("\n          </a>\n        </div></li>\n\n      </nav>\n  </div>\n</div>\n\n");
  return buffer;
  
});