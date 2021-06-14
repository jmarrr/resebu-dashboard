(this["webpackJsonpliq-dashboard"]=this["webpackJsonpliq-dashboard"]||[]).push([[0],{209:function(e,t,a){},584:function(e,t,a){},765:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(24),c=a.n(n),o=(a(584),a(294)),l=a(47),d=a.p+"static/media/logo.40e8e221.png",s=a(543),b=a(556),j=a(188),f=(a(587),a(29)),u=a(128),O=a.n(u),h=a(835),x=a(838),g=a(839),m=a(483),y=a(224),p=(a(209),a(10)),v=function(){var e=r.a.useState("one"),t=Object(f.a)(e,2),a=t[0],i=t[1],n=r.a.useState("one"),c=Object(f.a)(n,2),o=c[0],l=c[1],d=[{id:"germany",color:"hsl(195, 53%, 79%)",data:[{x:"plane",y:64},{x:"helicopter",y:128},{x:"boat",y:228},{x:"train",y:169},{x:"subway",y:221},{x:"bus",y:260},{x:"car",y:263},{x:"moto",y:201},{x:"bicycle",y:278},{x:"horse",y:193},{x:"skateboard",y:201},{x:"others",y:233}]}];return Object(p.jsxs)("div",{style:{height:"100%",width:"100%"},children:[Object(p.jsxs)(h.a,{container:!0,spacing:3,children:[Object(p.jsx)(h.a,{item:!0,xs:4,children:Object(p.jsx)(O.a,{title:"24 Hour Summary",options:{paging:!1,header:!1,search:!1,cellStyle:{textAlign:"left",BorderAll:1}},columns:[{title:"Name",field:"name"},{title:"Value",field:"value"}],data:[{name:"Total Trades",value:"510"},{name:"PnL($)",value:"20$"},{name:"PnL(%)",value:"10%"}]})}),Object(p.jsx)(h.a,{item:!0,xs:4,children:Object(p.jsx)(O.a,{title:"All Time Summary",options:{paging:!1,header:!1,search:!1,cellStyle:{textAlign:"left",BorderAll:1}},columns:[{title:"Name",field:"name"},{title:"Value",field:"value"}],data:[{name:"Portfolio Size",value:"51000$"},{name:"PnL($)",value:"20$"},{name:"PnL(%)",value:"10%"}]})}),Object(p.jsx)(h.a,{item:!0,xs:4,children:Object(p.jsx)(x.a,{bg:"primary",text:"white",style:{width:"18rem"},children:Object(p.jsxs)(g.a,{style:{padding:"0 25px 10px 25px"},children:[Object(p.jsx)("h3",{children:" Interest Rate Calculator "}),Object(p.jsx)(m.a,{label:"Investment Amount",id:"outlined-margin-dense",defaultValue:"1000",margin:"dense",variant:"outlined"}),Object(p.jsx)(m.a,{id:"outlined-select-currency-native",select:!0,label:"Interest Rate",margin:"dense",value:a,onChange:function(e){i(e.target.value)},SelectProps:{native:!0},helperText:"Please select your rate",variant:"outlined",children:[{value:"one",label:"1%"},{value:"two",label:"2%"},{value:"three",label:"3%"},{value:"four",label:"4%"}].map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))}),Object(p.jsx)(m.a,{id:"outlined-select-currency-native",select:!0,label:"Years",margin:"dense",value:o,onChange:function(e){l(e.target.value)},SelectProps:{native:!0},helperText:"How many years?",variant:"outlined",children:[{value:"one",label:"1"},{value:"two",label:"2"},{value:"three",label:"3"},{value:"four",label:"4"}].map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})})})]}),Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h3",{children:"24 Hour Profits"}),Object(p.jsx)(y.a,{data:d,margin:{right:40,bottom:50,left:80},yFormat:" >-.2f",axisTop:null,axisRight:null,lineWidth:1,enableArea:!0,enablePoints:!1,useMesh:!0,colors:{scheme:"paired"},axisBottom:{orient:"bottom",tickSize:1,tickPadding:5,tickRotation:0,legend:"Date",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"PnL in $",legendOffset:-40,legendPosition:"middle"}})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{style:{height:"50%"},children:[Object(p.jsx)("h3",{children:"Portfolio Size"}),Object(p.jsx)(y.a,{data:d,margin:{right:40,bottom:50,left:80},yFormat:" >-.2f",axisTop:null,axisRight:null,lineWidth:1,enableArea:!0,enablePoints:!1,useMesh:!0,colors:{scheme:"paired"},axisBottom:{orient:"bottom",tickSize:1,tickPadding:5,tickRotation:0,legend:"Date",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Balance in $",legendOffset:-40,legendPosition:"middle"}})]})]})},S=a(9),w=a(841),P=a(842),R=a(843),k=a(844),T=a(845),L=a(846),C=a(847),A=a(848),D=a(849),z=a(850),B=a(851),F=a(852),W=a(853),$=a(854),E=a(855);var H=function(){var e={Add:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(w.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Check:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(P.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Clear:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(R.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Delete:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(k.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),DetailPanel:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(T.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Edit:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(L.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Export:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(C.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Filter:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(A.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),FirstPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(D.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),LastPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(z.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),NextPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(T.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),PreviousPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(B.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ResetSearch:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(R.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Search:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(F.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),SortArrow:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(W.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(i.forwardRef)((function(e,t){return Object(p.jsx)($.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ViewColumn:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(E.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))}))};return Object(p.jsx)(O.a,{icons:e,options:{pageSize:15,emptyRowsWhenPaging:!0,pageSizeOptions:[15,30,45,60],cellStyle:{textAlign:"left"},headerStyle:{fontWeight:"bold",textAlign:"left"},rowStyle:function(e){if(e.tableData.id%2)return{backgroundColor:"#eee"}}},columns:[{title:"Date",field:"date"},{title:"Symbol",field:"symbol"},{title:"Direction",field:"direction"},{title:"PnL",field:"pnl"}],data:[{date:"May 4 2020, 11:14 PM",symbol:"BTCUSDT",direction:"LONG",avgTradeCount:50,pnl:"$1.82"}],title:"Live Trade Logs"})};var M=function(){var e={Add:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(w.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Check:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(P.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Clear:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(R.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Delete:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(k.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),DetailPanel:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(T.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Edit:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(L.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Export:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(C.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Filter:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(A.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),FirstPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(D.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),LastPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(z.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),NextPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(T.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),PreviousPage:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(B.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ResetSearch:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(R.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),Search:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(F.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),SortArrow:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(W.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(i.forwardRef)((function(e,t){return Object(p.jsx)($.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))})),ViewColumn:Object(i.forwardRef)((function(e,t){return Object(p.jsx)(E.a,Object(S.a)(Object(S.a)({},e),{},{ref:t}))}))};return Object(p.jsx)(O.a,{title:"Symbol Statistics",icons:e,options:{pageSize:15,emptyRowsWhenPaging:!0,pageSizeOptions:[15,30,45,60],cellStyle:{textAlign:"left"},headerStyle:{fontWeight:"bold",textAlign:"left"},rowStyle:function(e){if(e.tableData.id%2)return{backgroundColor:"#eee"}}},columns:[{title:"Symbol",field:"symbol"},{title:"Total Trades",field:"totalTrade"},{title:"Avg. Trade Count",field:"avgTradeCount"},{title:"Total PnL",field:"totalPnL"},{title:"Mean PnL",field:"meanPnL"}],data:[{symbol:"BTCUSDT",totalTrade:1254,avgTradeCount:50,totalPnL:"$63.00",meanPnL:"$1.82"},{symbol:"DODOUSDT",totalTrade:50,avgTradeCount:51,totalPnL:"$64.00",meanPnL:"$1.82"}]})},N=a(557);var I=function(){return Object(p.jsxs)("div",{style:{height:"90%",width:"100%"},children:[Object(p.jsx)("h2",{children:"Trades Chart"}),Object(p.jsx)(N.a,{data:[{country:"AD","hot dog":120},{country:"AE","hot dog":112},{country:"AF","hot dog":188},{country:"AG","hot dog":23},{country:"AI","hot dog":172},{country:"AL","hot dog":43},{country:"AM","hot dog":183}],keys:["hot dog","burger","sandwich","kebab","fries","donut"],indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"nivo"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Symbol",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Total Trades",legendPosition:"middle",legendOffset:-40},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],animate:!0,motionStiffness:90,motionDamping:15})]})},V=a(555);var X=function(){return Object(p.jsxs)("div",{style:{height:"100%",width:"100%"},children:[Object(p.jsx)("h2",{children:"All Time PnL"}),Object(p.jsx)("div",{style:{height:"45%",width:"100%"},children:Object(p.jsx)(V.a,{data:[{id:"BTC",label:"BTC",value:562,color:"hsl(57, 70%, 50%)"},{id:"ETH",label:"ETH",value:88,color:"hsl(289, 70%, 50%)"},{id:"XRP",label:"XRP",value:413,color:"hsl(88, 70%, 50%)"},{id:"LTC",label:"LTC",value:435,color:"hsl(350, 70%, 50%)"},{id:"SOL",label:"SOL",value:377,color:"hsl(279, 70%, 50%)"}],valueFormat:function(e){return"".concat(Number(e).toLocaleString("dollar",{minimumFractionDigits:2})," $")},margin:{top:40,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"ruby"},id:"dots"},{match:{id:"c"},id:"dots"},{match:{id:"go"},id:"dots"},{match:{id:"python"},id:"dots"},{match:{id:"scala"},id:"lines"},{match:{id:"lisp"},id:"lines"},{match:{id:"elixir"},id:"lines"},{match:{id:"javascript"},id:"lines"}],legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:100,itemHeight:18,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})}),Object(p.jsx)("div",{style:{height:"45%",width:"100%"},children:Object(p.jsx)(y.a,{data:[{id:"germany",color:"hsl(195, 53%, 79%)",data:[{x:"plane",y:64},{x:"helicopter",y:128},{x:"boat",y:228},{x:"train",y:169},{x:"subway",y:221},{x:"bus",y:260},{x:"car",y:263},{x:"moto",y:201},{x:"bicycle",y:278},{x:"horse",y:193},{x:"skateboard",y:201},{x:"others",y:233}]}],margin:{top:50,right:40,bottom:50,left:80},yFormat:" >-.2f",axisTop:null,axisRight:null,lineWidth:1,enableArea:!0,enablePoints:!1,useMesh:!0,colors:{scheme:"paired"},axisBottom:{orient:"bottom",tickSize:1,tickPadding:5,tickRotation:0,legend:"Date",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Balance",legendOffset:-40,legendPosition:"middle"}})})]})};var U=function(){return Object(p.jsx)(o.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)(j.c,{class:"pro-sidebar",children:[Object(p.jsx)(j.e,{children:Object(p.jsxs)("div",{class:"App-header",children:[Object(p.jsx)(s.a,{children:Object(p.jsx)("title",{children:" Resebu Strategy "})}),Object(p.jsx)("img",{src:d,width:"50",height:"50",alt:"Logo"}),Object(p.jsx)("h3",{children:"Strategy Portfolio"})]})}),Object(p.jsx)(j.d,{children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(j.b,{icon:Object(p.jsx)(b.a,{}),children:["Dashboard",Object(p.jsx)(o.b,{to:"/"})]})})})]}),Object(p.jsx)("div",{class:"content-wrapper",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,component:v}),Object(p.jsx)(l.a,{path:"/tradelog",component:H}),Object(p.jsx)(l.a,{path:"/symbolstats",component:M}),Object(p.jsx)(l.a,{path:"/tradeschart",component:I}),Object(p.jsx)(l.a,{path:"/pnlchart",component:X})]})})]})})},Y=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,1229)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),r(e),n(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),Y()}},[[765,1,2]]]);
//# sourceMappingURL=main.c32b498c.chunk.js.map