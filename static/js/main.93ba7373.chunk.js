(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"MiddlePart","image":"https://imgix.bustle.com/lovelace/uploads/468/162d8e30-8b10-0133-3947-06e18a8a4ae5.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":2,"name":"Hair Flip","image":"https://imgix.bustle.com/lovelace/uploads/468/45bf9640-8b10-0133-b2e3-0e438b3b98d1.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":3,"name":"Bun","image":"https://imgix.bustle.com/lovelace/uploads/468/e134b880-8b0f-0133-389a-0e69ce4a0073.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":4,"name":"Braids","image":"https://imgix.bustle.com/lovelace/uploads/468/6a7eef70-8b10-0133-389d-0e69ce4a0073.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":5,"name":"Retro","image":"https://imgix.bustle.com/lovelace/uploads/468/7d7bb080-8b10-0133-9fe5-0e7c926a42af.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":6,"name":"Nails","image":"https://imgix.bustle.com/lovelace/uploads/903/f7c29650-9152-0133-982e-0a6c20e5e327.jpg?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":7,"name":"Makeup","image":"https://lovelace-media.imgix.net/uploads/903/6e20f010-9150-0133-6dce-0e87cd6e10c7.jpg"},{"id":8,"name":"Johnny Bravo","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpKF2yLFCnuSSqqlbCg4BSvlpQYS4CPLsHTUs95B3qB_L7OTh"},{"id":9,"name":"BubbleGum","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFokaPiEU_7P05qpqT70kz5_spPephafmVOcgsC2UlRJKvTXZl"},{"id":10,"name":"Blonde","image":"https://imgix.bustle.com/lovelace/uploads/468/339df6f0-8b10-0133-394e-06e18a8a4ae5.PNG?w=646&fit=max&auto=format&q=70&dpr=2"},{"id":11,"name":"Hands on Face","image":"https://data.whicdn.com/images/215331171/large.jpg"},{"id":12,"name":"Crying","image":"https://the-hollywood-gossip-res.cloudinary.com/iu/s--HMOuiSRp--/t_slideshow/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1450787238/slides/2370/krying-face.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),i=a.n(o),c=a(3),n=a.n(c),s=(a(14),a(4)),r=a(5),m=a(7),l=a(6),u=a(8);a(15);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},p=(a(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Top Score: ",e.topscore))}),f=a(1);a(17);var g=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={kims:f,score:0,topscore:0},a.gameOver=function(){return a.state.score>a.state.topscore&&a.setState({topscore:a.state.score},function(){console.log(this.state.topscore)}),a.state.kims.forEach(function(e){e.count=0}),alert("Game Over :( \nscore: ".concat(a.state.score)),a.setState({score:0}),!0},a.clickCount=function(e){a.state.kims.find(function(t,o){if(t.id===e){if(0===f[o].count)return f[o].count=f[o].count+1,a.setState({score:a.state.score+1},function(){console.log(this.state.score)}),a.state.kims.sort(function(){return Math.random()-.5}),!0;a.gameOver()}})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(p,{score:this.state.score,topscore:this.state.topscore},"Kimoji Game"),this.state.kims.map(function(t){return i.a.createElement(g,{clickCount:e.clickCount,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(o.Component);n.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.93ba7373.chunk.js.map