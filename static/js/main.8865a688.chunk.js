(window["webpackJsonpClicky-Game"]=window["webpackJsonpClicky-Game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/4/47/Beedle_The_Wind_Waker_HD.png/169px-Beedle_The_Wind_Waker_HD.png?version=72d5be7c1782bace73c096c54897d82b","clicked":false},{"id":2,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/8/8e/Fado_The_Wind_Waker_HD.png/208px-Fado_The_Wind_Waker_HD.png?version=52c74d9cfa67a02b6242592d21292fc4","clicked":false},{"id":3,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/5/53/TWWHD_Fishman_Artwork.png/215px-TWWHD_Fishman_Artwork.png?version=a7ea5713711f7d3f9d1f23e884bc297d","clicked":false},{"id":4,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/6/66/TWWHD_Ganondorf_Artwork.png/227px-TWWHD_Ganondorf_Artwork.png?version=b904bb7030b25c25a7bfd7a8dfdfd6ee","clicked":false},{"id":5,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/9/9b/Laruto_The_Wind_Waker_HD.png/166px-Laruto_The_Wind_Waker_HD.png?version=a45bd91dce66c5ce54c78a63ff2b5700","clicked":false},{"id":6,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/1/19/WW_Link_HD_1.png/240px-WW_Link_HD_1.png?version=4f4d92bb90b97509b2fc5eac3956cd6b","clicked":false},{"id":7,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/f/fb/Princess_Zelda_The_Wind_Waker_HD.png/151px-Princess_Zelda_The_Wind_Waker_HD.png?version=bb6a0f5b1714906fdee79058075fbfa8","clicked":false},{"id":8,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/3/3a/Tetra_The_Wind_Waker_HD.png/156px-Tetra_The_Wind_Waker_HD.png?version=992dd47c9678382a628c5e9242d4e7e2","clicked":false},{"id":9,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/8/87/Aryll_HD.png/240px-Aryll_HD.png?version=def32b9ac803ff658b4c5896567ecc6e","clicked":false},{"id":10,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/3/3e/Medli_The_Wind_Waker_HD.png/171px-Medli_The_Wind_Waker_HD.png?version=0c5f915c49503491322a104a5173015c","clicked":false},{"id":11,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/e/e8/Tingle_The_Wind_Waker_HD.png/176px-Tingle_The_Wind_Waker_HD.png?version=8aa0afe2dbfdc93d4faaba0a7a76aabe","clicked":false},{"id":12,"image":"https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/a/a9/Makar_The_Wind_Waker_HD.png/205px-Makar_The_Wind_Waker_HD.png?version=870d63d87c4526554502095bcb7599a3","clicked":false}]')},,,,,,,,function(e,a,n){e.exports=n(20)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(3),r=n.n(i),d=(n(14),n(4)),l=n(5),s=n(7),g=n(6),o=n(8),m=(n(15),n(16),function(e){return c.a.createElement("h2",{className:"title"},e.children)}),_=(n(17),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.clickEvent(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),h=(n(18),function(e){return c.a.createElement("nav",{className:"navbar navbar-light bg-light nav"},c.a.createElement("ul",{className:"navbar navbar-light bg-light"},c.a.createElement("li",{className:"navbar navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"/Clicky-Game/",style:{float:"left"}},e.title)),c.a.createElement("li",{className:"navbar navbar-light bg-light",id:"rw"},e.rightWrong),c.a.createElement("li",{className:"navbar navbar-light bg-light",id:"current"},"Current Score: ",e.score),c.a.createElement("li",{className:"navbar navbar-light bg-light",id:"top"},"High Score: ",e.highScore)))}),p=(n(19),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),u=n(1);var f=function(e){function a(){var e,n;Object(d.a)(this,a);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).state={characters:u,currentScore:0,highScore:0,rightWrong:"",clicked:[]},n.clickEvent=function(e){-1===n.state.clicked.indexOf(e)?(n.increment(),n.setState({clicked:n.state.clicked.concat(e)})):n.reset()},n.reset=function(){n.setState({currentScore:0,highScore:n.state.highScore,rightWrong:"Try Again??",clicked:[]}),n.shuffle()},n.shuffle=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),t=[e[n],e[a]];e[a]=t[0],e[n]=t[1]}return e}(u);n.setState({cards:e})},n.increment=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>=n.state.highScore?n.setState({highScore:e}):12===e&&n.setState({rightWrong:"Congratulations! You've Won!!"}),n.shuffle()},n}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(p,null,c.a.createElement(h,{title:"Windwaker Clicky Game",score:this.state.currentScore,highScore:this.state.highScore,rightWrong:this.state.rightWrong}),c.a.createElement(m,null,"Click on each character, but not more than once!"),this.state.characters.map(function(a){return c.a.createElement(_,{key:a.id,clickEvent:e.clickEvent,increment:e.increment,reset:e.reset,shuffle:e.shuffle,id:a.id,image:a.image})}))}}]),a}(t.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.8865a688.chunk.js.map