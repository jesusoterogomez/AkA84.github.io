(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(281)},127:function(e,t,a){},279:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),i=a.n(r),c=(a(127),a(129),a(120)),s=a(25),m=a(26),o=a(29),u=a(27),p=a(30),E=(a(133),a(65)),d=(a(136),a(10)),b=(a(282),a(13)),h=b.a.SubMenu,y=b.a.Divider,f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={current:"contributions"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal",theme:"dark",style:{lineHeight:"64px"}},l.a.createElement(b.a.Item,{key:"search"},l.a.createElement(d.a,{type:"search"})," Search"),l.a.createElement(h,{key:"contacts",title:l.a.createElement("span",null,l.a.createElement(d.a,{type:"user"}),l.a.createElement("span",null,"Contacts"))},l.a.createElement(h,{key:"new-individual",title:l.a.createElement("span",null,"New Individual")},l.a.createElement(b.a.Item,{key:"new-student"},"New Student"),l.a.createElement(b.a.Item,{key:"new-parent"},"New Parent"),l.a.createElement(b.a.Item,{key:"new-staff"},"New Staff")),l.a.createElement(b.a.Item,{key:"new-household"},"New Household"),l.a.createElement(h,{key:"new-organization",title:l.a.createElement("span",null,"New Organization")},l.a.createElement(b.a.Item,{key:"new-team"},"New Team"),l.a.createElement(b.a.Item,{key:"new-parent"},"New Sponsor")),l.a.createElement(y,null),l.a.createElement(b.a.Item,{key:"contact-reports"},"Contact reports"),l.a.createElement(y,null),l.a.createElement(b.a.Item,{key:"find-merge-duplicate"},"Find and merge duplicate contacts")),l.a.createElement(b.a.Item,{key:"contributions"},l.a.createElement(d.a,{type:"credit-card"})," Contributions"),l.a.createElement(b.a.Item,{key:"events"},l.a.createElement(d.a,{type:"calendar"})," Events"),l.a.createElement(b.a.Item,{key:"mailing"},l.a.createElement(d.a,{type:"mail"})," Mailing"),l.a.createElement(b.a.Item,{key:"memberships"},l.a.createElement(d.a,{type:"idcard"})," Memberships"),l.a.createElement(b.a.Item,{key:"reports"},l.a.createElement(d.a,{type:"bar-chart"})," Reports"),l.a.createElement(b.a.Item,{key:"administer"},l.a.createElement(d.a,{type:"setting"})," Administer"),l.a.createElement(b.a.Item,{key:"support"},l.a.createElement(d.a,{type:"question-circle"})," Support"))}}]),t}(n.Component),g=(a(206),a(50)),v=(a(211),a(119)),k=(a(214),a(34)),w=(a(110),a(44)),S=(a(106),a(39)),O=w.a.Item,j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(O,null,l.a.createElement(S.a,{type:"primary",htmlType:"submit",icon:"check",style:{marginRight:"10px"},loading:this.props.submitting},"Save"),l.a.createElement(S.a,{htmlType:"button",icon:"close",disabled:this.props.submitting},"Cancel"))}}]),t}(n.Component),C=w.a.Item,I=k.a.Group,U={resourceUrl:"[civicrm.root]/",imageUploadUrl:"[civicrm.files]/persist/contribute/",extensionUrl:"[civicrm.files]/ext/",disableCss:!1,forceSSL:!1,verifySSL:!0},R={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:10}}},L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={defaults:U,submitting:!1},a.handleSubmit=function(e){e.preventDefault(),a.setState({submitting:!0},function(){setTimeout(function(){a.setState({submitting:!1}),v.a.success("Settings saved!")},1e3)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement(w.a,{onSubmit:this.handleSubmit},l.a.createElement(j,{submitting:this.state.submitting}),l.a.createElement(C,Object.assign({},R,{label:"CiviCRM Resource URL"}),e("resource-url",{initialValue:this.state.defaults.resourceUrl})(l.a.createElement(g.a,null))),l.a.createElement(C,Object.assign({},R,{label:"Image Upload URL"}),e("image-upload-url",{initialValue:this.state.defaults.imageUploadUrl})(l.a.createElement(g.a,null))),l.a.createElement(C,Object.assign({},R,{label:"Custom CSS URL"}),e("custom-css-url")(l.a.createElement(g.a,null))),l.a.createElement(C,Object.assign({},R,{label:"Disable CiviCRM css"}),e("disable-civicrm-css",{initialValue:this.state.defaults.disableCss})(l.a.createElement(I,null,l.a.createElement(k.a,{value:!0},"Yes"),l.a.createElement(k.a,{value:!1},"No"))),l.a.createElement("div",{style:{lineHeight:1}},'Prevent the stylesheet "civicrm.css" from being loaded.')),l.a.createElement(C,Object.assign({},R,{label:"Extension Resource URL"}),e("extension-resource-url",{initialValue:this.state.defaults.extensionUrl})(l.a.createElement(g.a,null))),l.a.createElement(C,Object.assign({},R,{label:"Force Secure URLs (SSL)"}),e("force-secure-urls",{initialValue:this.state.defaults.forceSSL})(l.a.createElement(I,null,l.a.createElement(k.a,{value:!0},"Yes"),l.a.createElement(k.a,{value:!1},"No")))),l.a.createElement(C,Object.assign({},R,{label:"Verify SSL Certs"}),e("verify-ssl-certs",{initialValue:this.state.defaults.verifySSL})(l.a.createElement(I,null,l.a.createElement(k.a,{value:!0},"Yes"),l.a.createElement(k.a,{value:!1},"No"))),l.a.createElement("div",{style:{lineHeight:1,color:"red"}},"If disabled, outbound web-service requests will allow unverified, insecure HTTPS connections")),l.a.createElement(j,{submitting:this.state.submitting}))}}]),t}(n.Component),x=w.a.create()(L),N=(a(279),E.a.Header),T=E.a.Content,V=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement(N,null,l.a.createElement("nav",{className:"main-menu"},l.a.createElement(f,null))),l.a.createElement(T,{style:{padding:"25px 50px"}},l.a.createElement(c.a,{message:l.a.createElement("div",null,"These settings define the URLs used to access CiviCRM resources (CSS files, Javascript files, images, etc.)",l.a.createElement("br",null),"You may configure these settings using absolute URLs or URL variables."),type:"info"}),l.a.createElement("div",{style:{marginTop:"25px"}},l.a.createElement(x,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.3d749a24.chunk.js.map