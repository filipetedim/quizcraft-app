(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a(323)},321:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(325),s=a(20),c=a(22),u=a(24),d=a(23),h=a(25),p=a(139),m=a.n(p),g=a(16),f=a(138),v=a.n(f),b=a(37),E=a(21),w=a.n(E),y=a(40),O=a(17),j=a.n(O),C=a(53),x=a.n(C),k=a(121),N=a.n(k),T=a(122),P=a.n(T),S=a(36),W=a.n(S),R=a(81),I=a.n(R),Q=a(63),q=a.n(Q),A=a(83),F=a.n(A),M=a(120),B=a.n(M),L=a(117),z=a.n(L),D=a(118),_=a.n(D),G=a(119),J=a.n(G),U=Object(g.withStyles)({checkbox:{padding:0}})(Object(b.a)(function(e){var t=e.classes,a=e.type,n=e.data,i=e.handleToggle,l=e.handleCollapse,o=e.open,s=e.state;return r.a.createElement(I.a,null,r.a.createElement(q.a,{button:!0,onClick:l(a)},r.a.createElement(F.a,{primary:a.charAt(0).toUpperCase()+a.slice(1)}),o?r.a.createElement(z.a,null):r.a.createElement(_.a,null)),r.a.createElement(J.a,{in:o,timeout:"auto",unmountOnExit:!0},n.map(function(e){return r.a.createElement(q.a,{key:e.id,role:void 0,dense:!0,button:!0,onClick:i(a,e.id)},r.a.createElement(B.a,{className:t.checkbox,checked:!!s[e.id],tabIndex:-1,disableRipple:!0}),r.a.createElement(F.a,{primary:e.value}))})))})),H=a(19),K={expansions:[{id:0,value:"Classic"},{id:1,value:"TBC"},{id:2,value:"WotLK"},{id:3,value:"Cataclysm"},{id:4,value:"MoP"},{id:5,value:"WoD"},{id:6,value:"Legion"},{id:7,value:"BfA"}],difficulties:[{id:0,value:"Easy"},{id:1,value:"Normal"},{id:2,value:"Hard"}],types:[{id:0,value:"Ingame"},{id:1,value:"Lore"},{id:2,value:"Company"}],categories:[{id:0,value:"Characters"},{id:1,value:"Weapons"},{id:2,value:"Zones"},{id:3,value:"Races"},{id:4,value:"Dungeons"},{id:5,value:"Raids"},{id:6,value:"Spells"},{id:7,value:"Professions"},{id:8,value:"Classes"},{id:9,value:"Pets"},{id:10,value:"Mounts"},{id:11,value:"Talents"},{id:12,value:"WeaponSkills"},{id:13,value:"SecondarySkills"},{id:14,value:"Features"},{id:15,value:"Reputations"},{id:16,value:"Quests"},{id:17,value:"Chests"},{id:18,value:"Keys"},{id:19,value:"Secrets"},{id:20,value:"Items"},{id:21,value:"Achievements"},{id:22,value:"Ui"},{id:23,value:"Heroes"},{id:24,value:"General"},{id:25,value:"OldGods"},{id:26,value:"Cities"},{id:27,value:"Battles"},{id:28,value:"Employees"},{id:29,value:"Releases"},{id:30,value:"Development"},{id:31,value:"Technical"}],parseToFilterObject:function(e){return e.reduce(function(e,t){return e[t.id]=!1,e},{})},parseToObject:function(e){return e.reduce(function(e,t){return e[t.id]=t.value,e},{})}},V=new function e(){var t=this;Object(s.a)(this,e),this.resetFilters=function(){t.search="",t.expansions=K.parseToFilterObject(K.expansions),t.difficulties=K.parseToFilterObject(K.difficulties),t.types=K.parseToFilterObject(K.types),t.categories=K.parseToFilterObject(K.categories)},this.activeFilter=function(e){return K[e].filter(function(a){return t[e][a.id]}).map(function(e){return e.id})},Object(H.f)(this,{showAddQuestion:!1,search:"",expansions:K.parseToFilterObject(K.expansions),difficulties:K.parseToFilterObject(K.difficulties),types:K.parseToFilterObject(K.types),categories:K.parseToFilterObject(K.categories)})},X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleToggle=function(e,t){return function(){return V[e][t]=!V[e][t]}},a.handleCollapse=function(e){return function(){return a.setState(Object(y.a)({},e+"Open",!a.state[e+"Open"]))}},a.handleSearch=function(e){return V.search=e.target.value},a.handleResetFilters=function(){V.resetFilters(),["expansions","difficulties","types","categories"].forEach(function(e){return a.setState(Object(y.a)({},e+"Open",!1))})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=V.expansions,n=V.difficulties,i=V.types,l=V.categories;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{container:!0,spacing:16},r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,{fullWidth:!0,variant:"contained",size:"small",color:"primary",onClick:function(){return V.showAddQuestion=!0}},"Add Question")),r.a.createElement(w.a,{item:!0,xs:6},r.a.createElement(x.a,{fullWidth:!0,size:"small",onClick:this.handleResetFilters},"Reset filters"))),r.a.createElement("div",{className:t.search},r.a.createElement(j.a,{id:"standard-search",label:"Search",value:V.search,onChange:this.handleSearch,fullWidth:!0})),r.a.createElement("div",{className:t.filters},r.a.createElement(W.a,null,"Active filters"),["expansions","difficulties","types","categories"].map(function(a){return K[a].filter(function(e){return V[a][e.id]}).map(function(n){return r.a.createElement(N.a,{key:a+n.id,className:t.chip,label:n.value,deleteIcon:r.a.createElement(P.a,{fontSize:"small"}),onDelete:e.handleToggle(a,n.id)})})})),r.a.createElement("div",null,r.a.createElement(U,{type:"expansions",data:K.expansions,handleCollapse:this.handleCollapse,handleToggle:this.handleToggle,open:this.state.expansionsOpen,state:a}),r.a.createElement(U,{type:"difficulties",data:K.difficulties,handleCollapse:this.handleCollapse,handleToggle:this.handleToggle,open:this.state.difficultiesOpen,state:n}),r.a.createElement(U,{type:"types",data:K.types,handleCollapse:this.handleCollapse,handleToggle:this.handleToggle,open:this.state.typesOpen,state:i}),r.a.createElement(U,{type:"categories",data:K.categories,handleCollapse:this.handleCollapse,handleToggle:this.handleToggle,open:this.state.categoriesOpen,state:l})))}}]),t}(n.Component),Z=Object(g.withStyles)(function(){return{root:{width:"100%"},search:{padding:"20px 5px"},chip:{height:22,marginRight:3,marginBottom:3},cancelIcon:{height:22},filters:{padding:10}}})(Object(b.a)(X)),$=a(15),Y=a.n($),ee=a(29),te=a(126),ae=a.n(te),ne=a(128),re=a.n(ne),ie=a(28),le=a.n(ie),oe=a(127),se=a.n(oe),ce=a(129),ue=a.n(ce),de=a(65),he=a.n(de),pe=a(48),me=a.n(pe),ge=a(64),fe=a.n(ge),ve=a(123),be=a.n(ve),Ee=a(124),we=a.n(Ee);var ye=Object(g.withStyles)(function(e){return{root:{marginTop:15,backgroundColor:"#ef5350"},icon:{marginRight:15,fontSize:20},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,a=e.message;return r.a.createElement(be.a,{className:t.root,message:r.a.createElement("span",{className:t.message},r.a.createElement(we.a,{className:t.icon}),a||"Error: couldn't load data. Please refresh or try again later.")})}),Oe=a(30),je=a.n(Oe),Ce=a(125),xe=Object(Ce.a)({},{API_URL:"http://localhost:3050",SPINNER_TIME:500}),ke=a(32),Ne=Object(ke.a)();function Te(e){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(ee.a)(Y.a.mark(function e(t){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.status>=200&&t.status<300)){e.next=2;break}return e.abrupt("return",t);case 2:if(401!==t.status){e.next=5;break}return Ne.push("/unauthorized"),e.abrupt("return",Promise.reject());case 5:return t.status>=500&&t.status<500&&console.error("API Error:",t),e.abrupt("return",Se(t).then(function(e){throw{body:e,status:t.status}}));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Se(e){return We.apply(this,arguments)}function We(){return(We=Object(ee.a)(Y.a.mark(function e(t){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.json().catch(function(e){throw console.warn("API Response wasn't JSON serializable:",e),new Error("API Response was not JSON serializable.")}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Re(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(ee.a)(Y.a.mark(function e(t){var a,n,r,i,l,o,s,c;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.method,n=void 0===a?"GET":a,r=t.endpoint,i=void 0===r?"":r,l=t.data,o=void 0===l?null:l,s="".concat(xe.API_URL,"/").concat(i),c={method:n,headers:{"Content-Type":"application/json","x-access-token":je.a.get("qc-token")},mode:"cors"},o&&(c.body=JSON.stringify(o)),je.a.get("qc-token")){e.next=6;break}return e.abrupt("return",Promise.reject());case 6:return e.abrupt("return",fetch(s,c));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Qe(e){return qe.apply(this,arguments)}function qe(){return(qe=Object(ee.a)(Y.a.mark(function e(t){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Re(t).then(Te).then(Se));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Ae={getQuestions:function(){return Qe({endpoint:"questions"})},getQuestion:function(e){return Qe({endpoint:"questions/".concat(e)})},postQuestion:function(e){return Qe({method:"POST",endpoint:"questions",data:e})}},Fe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,error:!1,page:0,rowsPerPage:10,questions:[]},a.getQuestions=Object(ee.a)(Y.a.mark(function e(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae.getQuestions().then(function(e){return a.setState({questions:e})}).catch(function(){return a.setState({error:!0})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),a.handleChangePage=function(e,t){return a.setState({page:t})},a.handleChangeRowsPerPage=function(e){return a.setState({rowsPerPage:e.target.value})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ee.a)(Y.a.mark(function e(){var t=this;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.getQuestions();case 3:setTimeout(function(){t.setState({loading:!1})},xe.SPINNER_TIME);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(ee.a)(Y.a.mark(function e(){var t=this;return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.getQuestions();case 3:setTimeout(function(){t.setState({loading:!1})},xe.SPINNER_TIME);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.loading,n=t.error,i=t.page,l=t.rowsPerPage,o=t.questions;if(n)return r.a.createElement(ye,null);var s=o,c=V.activeFilter("expansions"),u=V.activeFilter("difficulties"),d=V.activeFilter("types"),h=V.activeFilter("categories");return c.length>0&&(s=s.filter(function(e){return c.indexOf(e.expansion)>-1})),u.length>0&&(s=s.filter(function(e){return u.indexOf(e.difficulty)>-1})),d.length>0&&(s=s.filter(function(e){return d.indexOf(e.type)>-1})),h.length>0&&(s=s.filter(function(e){return h.indexOf(e.category)>-1})),V.search&&(s=s.filter(function(e){return e.question.toLowerCase().indexOf(V.search.toLowerCase())>-1})),r.a.createElement(me.a,{className:e.root},r.a.createElement(ae.a,{className:e.table},r.a.createElement(se.a,null,r.a.createElement(he.a,null,r.a.createElement(le.a,null),r.a.createElement(le.a,{align:"right"},"Expansion"),r.a.createElement(le.a,{align:"right"},"Difficulty"),r.a.createElement(le.a,{align:"right"},"Question Type"),r.a.createElement(le.a,{align:"right"},"Category"))),r.a.createElement(re.a,null,a&&r.a.createElement(he.a,{className:e.tableRowLoading},r.a.createElement(le.a,{className:e.tableCellLoading,colSpan:5},r.a.createElement(fe.a,null))),s.slice(i*l,i*l+l).map(function(e){return r.a.createElement(he.a,{key:e._id},r.a.createElement(le.a,{component:"th",scope:"row"},e.question),r.a.createElement(le.a,{align:"right"},K.parseToObject(K.expansions)[e.expansion]),r.a.createElement(le.a,{align:"right"},K.parseToObject(K.difficulties)[e.difficulty]),r.a.createElement(le.a,{align:"right"},K.parseToObject(K.types)[e.type]),r.a.createElement(le.a,{align:"right"},K.parseToObject(K.categories)[e.category]))}))),r.a.createElement(ue.a,{rowsPerPageOptions:[5,10,25],component:"div",count:s.length,rowsPerPage:l,page:i,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(n.Component),Me=Object(g.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},tableRowLoading:{height:0},tableCellLoading:{padding:"0 !important"}}})(Object(b.a)(Fe)),Be=a(130),Le=a.n(Be),ze=a(131),De=a.n(ze),_e=a(133),Ge=a.n(_e),Je=a(49),Ue=a.n(Je),He=a(132),Ke=a.n(He),Ve=a(50),Xe=a.n(Ve),Ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:[],question:"",answer:"",wrong:[],expansion:0,difficulty:0,type:0,category:24,wrong0:"",wrong1:"",wrong2:"",wrong3:"",wrong4:"",wrong5:"",wrong6:""},a.addQuestion=function(){a.setState({loading:!0});var e=a.state,t=e.expansion,n=e.difficulty,r=e.type,i=e.category,l=e.question,o=e.answer,s=e.wrong;["wrong0","wrong1","wrong2","wrong3","wrong4","wrong5","wrong6"].forEach(function(e){a.state[e]&&a.state[e].trim()&&s.push(e)}),Ae.postQuestion({expansion:t,difficulty:n,type:r,category:i,question:l,answer:o,wrong:s}).then(function(){setTimeout(function(){Ne.push("/"),V.showAddQuestion=!1},xe.SPINNER_TIME)}).catch(function(e){setTimeout(function(){a.setState({loading:!1,error:e.body.validationErrors,wrong:[]})},xe.SPINNER_TIME)})},a.handleChange=function(e){return function(t){return a.setState(Object(y.a)({},e,t.target.value))}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.loading,n=t.error,i=t.question,l=t.answer,o=t.expansion,s=t.difficulty,c=t.type,u=t.category,d=t.wrong0,h=t.wrong1,p=t.wrong2,m=t.wrong3,g=t.wrong4,f=t.wrong5,v=t.wrong6;return r.a.createElement(Le.a,{className:e.root},r.a.createElement(De.a,{className:e.header,action:r.a.createElement(Ue.a,{onClick:function(){return V.showAddQuestion=!1}},r.a.createElement(Ke.a,null)),subheader:"NEW QUESTION"}),r.a.createElement(Ge.a,null,r.a.createElement(w.a,{className:e.extraMargin,container:!0,spacing:16},r.a.createElement(w.a,{item:!0,xs:12,md:6},r.a.createElement(j.a,{select:!0,variant:"filled",label:"Expansion",className:e.input,value:o,onChange:this.handleChange("expansion"),fullWidth:!0},K.expansions.map(function(e){return r.a.createElement(Xe.a,{key:e.id,value:e.id},e.value)})),r.a.createElement(j.a,{select:!0,variant:"filled",label:"Difficulty",className:e.input,value:s,onChange:this.handleChange("difficulty"),fullWidth:!0},K.difficulties.map(function(e){return r.a.createElement(Xe.a,{key:e.id,value:e.id},e.value)}))),r.a.createElement(w.a,{item:!0,xs:12,md:6},r.a.createElement(j.a,{select:!0,variant:"filled",label:"Question Type",className:e.input,value:c,onChange:this.handleChange("type"),fullWidth:!0},K.types.map(function(e){return r.a.createElement(Xe.a,{key:e.id,value:e.id},e.value)})),r.a.createElement(j.a,{select:!0,variant:"filled",label:"Category",className:e.input,value:u,onChange:this.handleChange("category"),fullWidth:!0},K.categories.map(function(e){return r.a.createElement(Xe.a,{key:e.id,value:e.id},e.value)})))),r.a.createElement(j.a,{variant:"filled",className:e.input,label:"Question?",value:i,onChange:this.handleChange("question"),fullWidth:!0}),r.a.createElement(w.a,{container:!0,spacing:16},r.a.createElement(w.a,{item:!0,xs:12,md:6},r.a.createElement(j.a,{variant:"filled",className:e.input,label:"Correct answer",value:l,onChange:this.handleChange("answer"),fullWidth:!0}),r.a.createElement(j.a,{variant:"filled",className:e.input,label:"Wrong answer 1",value:d,onChange:this.handleChange("wrong0"),fullWidth:!0}),r.a.createElement(j.a,{variant:"filled",className:e.input,label:"Wrong answer 2",value:h,onChange:this.handleChange("wrong1"),fullWidth:!0}),r.a.createElement(j.a,{variant:"filled",className:e.input,label:"Wrong answer 3",value:p,onChange:this.handleChange("wrong2"),fullWidth:!0})),r.a.createElement(w.a,{item:!0,xs:12,md:6},r.a.createElement(j.a,{variant:"outlined",className:e.input,label:"Wrong answer 4 (optional)",value:m,onChange:this.handleChange("wrong3"),fullWidth:!0}),r.a.createElement(j.a,{variant:"outlined",className:e.input,label:"Wrong answer 5 (optional)",value:g,onChange:this.handleChange("wrong4"),fullWidth:!0}),r.a.createElement(j.a,{variant:"outlined",className:e.input,label:"Wrong answer 6 (optional)",value:f,onChange:this.handleChange("wrong5"),fullWidth:!0}),r.a.createElement(j.a,{variant:"outlined",className:e.input,label:"Wrong answer 7 (optional)",value:v,onChange:this.handleChange("wrong6"),fullWidth:!0}))),r.a.createElement(x.a,{color:"primary",variant:"contained",onClick:this.addQuestion},"Add new question"),n&&n.map(function(e,t){return r.a.createElement(ye,{key:t,message:e.msg})})),a&&r.a.createElement(fe.a,null))}}]),t}(n.Component),$e=Object(g.withStyles)({root:{width:"100%",maxWidth:800,marginBottom:20},header:{paddingBottom:0},input:{marginBottom:15},extraMargin:{marginBottom:25}})(Ze),Ye=a(134),et=a.n(Ye),tt=a(82),at=a.n(tt);var nt=Object(g.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(et.a,{position:"static"},r.a.createElement(at.a,null,r.a.createElement(W.a,{variant:"h6",color:"inherit",className:t.grow},"QuizCraft Questions"))))}),rt=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,null),r.a.createElement(w.a,{className:e.root,container:!0},r.a.createElement(w.a,{item:!0,xs:12,md:4,lg:2,className:e.innerPadding},r.a.createElement(Z,null)),r.a.createElement(w.a,{item:!0,xs:12,md:8,lg:10},V.showAddQuestion&&r.a.createElement($e,null),r.a.createElement(Me,null))))}}]),t}(n.Component),it=Object(g.withStyles)({root:{padding:30},innerPadding:{paddingRight:15}})(Object(b.a)(rt)),lt=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"TODO:")}}]),t}(n.PureComponent),ot=a(136),st=a.n(ot),ct=a(135),ut=a.n(ct),dt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={token:"",error:!1,loading:!1},a.handleClick=function(){var e=a.state.token;a.setState({loading:!0}),je.a.set("qc-token",e),Ae.getQuestions().then(function(){return Ne.push("/")}).catch(function(){je.a.remove("qc-token"),setTimeout(function(){a.setState({error:!0,loading:!1})},xe.SPINNER_TIME)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){je.a.get("qc-token")&&Ne.push("/")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.token,i=a.error,l=a.loading;return r.a.createElement("div",{className:t.root},r.a.createElement(j.a,{error:i,variant:"outlined",className:t.input,label:"Password",value:n,onChange:function(t){return e.setState({token:t.target.value,error:!1})}}),r.a.createElement("div",{className:t.button},r.a.createElement(Ue.a,{onClick:this.handleClick},r.a.createElement(ut.a,null)),l&&r.a.createElement(st.a,{size:48,className:t.buttonProgress})))}}]),t}(n.Component),ht=Object(g.withStyles)({root:{display:"flex",justifyContent:"center"},input:{marginTop:50,marginRight:25,width:300},button:{position:"relative",marginTop:52},buttonProgress:{position:"absolute",left:0}})(dt),pt=a(140),mt=function(e){var t=e.component,a=e.props,n=Object(pt.a)(e,["component","props"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return je.a.get("qc-token")?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(o.a,{to:"/auth"})}}))},gt=function(){return r.a.createElement(o.d,null,r.a.createElement(mt,{exact:!0,path:"/",component:it}),r.a.createElement(o.b,{exact:!0,path:"/auth",component:ht}),r.a.createElement(o.b,{component:lt}))},ft=(a(320),a(321),Object(g.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:v.a,secondary:{main:"#2196f3"}}})),vt=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(g.MuiThemeProvider,{theme:ft},r.a.createElement(m.a,null),r.a.createElement(gt,null))}}]),t}(n.Component),bt=Object(o.e)(vt);l.a.render(r.a.createElement(o.c,{history:Ne,basename:"/quizcraft-app"},r.a.createElement(bt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,1,2]]]);
//# sourceMappingURL=main.8994e712.chunk.js.map