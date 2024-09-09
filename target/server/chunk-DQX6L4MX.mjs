import './polyfills.server.mjs';
import{C as P,a as s,b as m,c as e,d as t,e as o,f as a,g as b,h as g,i as c,p as f,r as u,s as h,v as C,z as M}from"./chunk-67CRDKWZ.mjs";var O=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-navbar"]],standalone:!0,features:[c],decls:22,vars:0,consts:[["id","mainNav",1,"navbar","navbar-b","navbar-trans","navbar-expand-md","fixed-top"],[1,"container"],["href","#home",1,"navbar-brand"],["src","assets/bvm-logo-white.png","alt","byvitormendes",1,"navbar-logo"],["type","button","data-toggle","collapse","data-target","#navbarDefault","aria-controls","navbarDefault","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","collapsed"],["id","navbarDefault",1,"navbar-collapse","collapse","justify-content-end"],[1,"navbar-nav"],[1,"nav-item"],["href","#home",1,"nav-link"],["href","#about",1,"nav-link"],["href","#achievements",1,"nav-link"],["href","#hobbies",1,"nav-link"],["href","#contact",1,"nav-link"]],template:function(i,l){i&1&&(e(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"img",3),t(),o(4,"button",4),e(5,"div",5)(6,"ul",6)(7,"li",7)(8,"a",8),a(9,"Home"),t()(),e(10,"li",7)(11,"a",9),a(12,"About"),t()(),e(13,"li",7)(14,"a",10),a(15,"Achievements"),t()(),e(16,"li",7)(17,"a",11),a(18,"Hobbies"),t()(),e(19,"li",7)(20,"a",12),a(21,"Contact"),t()()()()()())},styles:['.navbar[_ngcontent-%COMP%]{display:flex;background-color:#101010}.navbar-logo[_ngcontent-%COMP%]{min-width:25vh;width:calc(50% - 10px);text-decoration:none}.navbar-b[_ngcontent-%COMP%]{transition:all .5s ease-in-out;padding-top:1.563rem;padding-bottom:1.563rem}.navbar-b.navbar-reduce[_ngcontent-%COMP%]{box-shadow:0 6px 9px #0000000f}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%], .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{position:relative;padding-right:10px;padding-left:0}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#f8f8ff;text-transform:uppercase;font-weight:600}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{content:"";position:absolute;margin-left:0;width:0%;bottom:0;left:0;height:2px;transition:all .5s ease}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#1b1b1b}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:before{width:35px}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]:before, .navbar-b.navbar-trans[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]:before, .navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%]:before, .navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%]:before, .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:before{width:35px}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{background-color:#24b67e}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#f8f8ff}.navbar-b.navbar-trans[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], .navbar-b.navbar-trans[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], .navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-b.navbar-trans[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#f8f8ff}.navbar-b.navbar-reduce[_ngcontent-%COMP%]{transition:all .5s ease-in-out;background-color:#212121;padding-top:15px;padding-bottom:15px}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#24b67e}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:before{background-color:#24b67e}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{color:#24b67e}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%], .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-b.navbar-reduce[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#24b67e}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#24b67e}.navbar-b.navbar-reduce[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#1b1b1b}.navbar-b[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#f8f8ff;font-size:1.6rem;font-weight:600}.navbar-b[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item.show[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], .navbar-b[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%], .navbar-b[_ngcontent-%COMP%]   .dropdown-btn.show[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{-webkit-transform:translate3d(0px,0px,0px);transform:translateZ(0);visibility:visible!important}.navbar-b[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{margin:1.12rem 0 0;border-radius:0}.navbar-b[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:.7rem 1.7rem;transition:all .5s ease}.navbar-b[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#24b67e;color:#f8f8ff;transition:all .5s ease}.navbar-b[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]{background-color:#24b67e}']});let r=n;return r})();var p=class{constructor(){this.nome="Vitor Mendes",this.email="contato@byvitormendes.com.br",this.telefone="+55 (11) 99647-5364",this.localizacao="S\xE3o Paulo, SP, Brazil",this.linkedin="https://www.linkedin.com/in/vitormendesdev/",this.instagram="https://instagram.com/byvitormendes/",this.perfil="Backend Developer"}};var x=(()=>{let n=class n{constructor(){this.personalData=new p}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-home"]],standalone:!0,features:[c],decls:9,vars:1,consts:[["id","home",1,"intro","route","bg-image",2,"background-image","url(assets/img/intro-bg.jpg)"],[1,"overlay-intro"],[1,"intro-content","display-table"],[1,"table-cell"],[1,"container"],[1,"intro-title","mb-4"],[1,"intro-subtitle"]],template:function(i,l){i&1&&(e(0,"div",0),o(1,"div",1),e(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),a(6),t(),e(7,"p",6),a(8,"Backend developer for over 10 years, focused on quality, continuous learning and improvement."),t()()()()()),i&2&&(m(6),g("I'm ",l.personalData.nome,""))},styles:[".intro[_ngcontent-%COMP%]{height:100vh;position:relative;color:#212121}.intro[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]{text-align:center;position:absolute}.intro[_ngcontent-%COMP%]   .overlay-intro[_ngcontent-%COMP%]{background-color:#000c;position:absolute;top:0;left:0;padding:0;height:100%;width:100%;opacity:.9}.intro[_ngcontent-%COMP%]   .intro-title[_ngcontent-%COMP%]{color:#f8f8ff;font-weight:600;font-size:3rem}.intro[_ngcontent-%COMP%]   .intro-subtitle[_ngcontent-%COMP%]{color:#f8f8ff;font-size:1.5rem;font-weight:300}"]});let r=n;return r})();var _=(()=>{let n=class n{constructor(){this.personalData=new p}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-about"]],standalone:!0,features:[c],decls:65,vars:4,consts:[["id","about",1,"about-mf","sect-pt8","route"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"box-shadow-full"],[1,"col-md-6"],[1,"col-sm-4","col-md-4"],[1,"about-img"],["src","assets/img/about-me.png","alt","Vitor Mendes",1,"img-fluid","rounded","b-shadow-a"],[1,"col-sm-6","col-md-8"],[1,"about-info"],[1,"title-s"],[1,"skill-mf"],[1,"skills"],[1,"row","gap"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","90"],["src","assets/icons/java-icon.png","alt","Java","title","Java",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","75"],["src","assets/icons/database-icon.png","alt","SQL Database","title","SQL Database",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","70"],["src","assets/icons/spring-icon.png","alt","Spring Framework","title","Spring Framework",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","60"],["src","assets/icons/angular-icon.png","alt","Angular","title","Angular",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","25"],["src","assets/icons/aws-icon.png","alt","AWS","title","AWS",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","10"],["src","assets/icons/docker-icon.png","alt","Docker","title","Docker",1,"img-fluid","rounded","b-shadow-a"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",2,"--value","80"],["src","assets/icons/jenkins-icon.png","alt","Jenkins","title","Jenkins",1,"img-fluid","rounded","b-shadow-a"],["src","assets/icons/git-icon.png","alt","Git","title","Git",1,"img-fluid","rounded","b-shadow-a"],["src","assets/icons/redis-icon.png","alt","Redis","title","Redis",1,"img-fluid","rounded","b-shadow-a"],[1,"about-me","pt-4","pt-md-0"],[1,"title-box-2"],[1,"title-left"],[1,"lead"]],template:function(i,l){i&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",2)(6,"div",5)(7,"div",2)(8,"div",6)(9,"div",7),o(10,"img",8),t()(),e(11,"div",9)(12,"div",10)(13,"p")(14,"span",11),a(15,"Name: "),t(),e(16,"span"),a(17),t()(),e(18,"p")(19,"span",11),a(20,"Profile: "),t(),e(21,"span"),a(22),t()(),e(23,"p")(24,"span",11),a(25,"Email: "),t(),e(26,"span"),a(27),t()(),e(28,"p")(29,"span",11),a(30,"Phone: "),t(),e(31,"span"),a(32),t()()()()(),e(33,"div",12)(34,"p",11),a(35,"Technical Skills"),t(),e(36,"div",13)(37,"div",14)(38,"div",15),o(39,"img",16),t(),e(40,"div",17),o(41,"img",18),t(),e(42,"div",19),o(43,"img",20),t(),e(44,"div",21),o(45,"img",22),t(),e(46,"div",23),o(47,"img",24),t(),e(48,"div",25),o(49,"img",26),t(),e(50,"div",27),o(51,"img",28),t(),e(52,"div",15),o(53,"img",29),t(),e(54,"div",25),o(55,"img",30),t()()()()(),e(56,"div",5)(57,"div",31)(58,"div",32)(59,"h5",33),a(60,"About me"),t()(),e(61,"p",34),a(62," I am a vibrant and innovative professional, recognized for tackling and overcoming complex challenges, consistently delivering high-value results. My experience shines through the successful creation of the UNIP app, showcasing my ability to swiftly master new technologies. With effective technical leadership and strong full-stack development skills, I have made significant contributions to cutting-edge projects. "),t(),e(63,"p",34),a(64," I am relentlessly pursuing the enhancement of my competencies and eager to apply them creatively and efficiently. Ready to add value and drive the collective success of the team and organization. "),t()()()()()()()()()),i&2&&(m(17),b(l.personalData.nome),m(5),b(l.personalData.perfil),m(5),b(l.personalData.email),m(5),b(l.personalData.telefone))},styles:['.about-mf[_ngcontent-%COMP%]   .box-shadow-full[_ngcontent-%COMP%]{padding-top:4rem;padding-bottom:4rem}.about-mf[_ngcontent-%COMP%]   .about-img[_ngcontent-%COMP%]{margin-bottom:2rem}.about-mf[_ngcontent-%COMP%]   .about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:10px}.skills[_ngcontent-%COMP%]{display:flex}.gap[_ngcontent-%COMP%]{gap:15px}@keyframes _ngcontent-%COMP%_progress{0%{--percentage: 0}to{--percentage: var(--value)}}@property --percentage{syntax: "<number>"; inherits: true; initial-value: 0;}[role=progressbar][_ngcontent-%COMP%]{--percentage: var(--value);--primary: #24b67e;--secondary: #bbf5df;--size: 100px;animation:_ngcontent-%COMP%_progress 2s .5s forwards;width:var(--size);aspect-ratio:1;border-radius:50%;position:relative;overflow:hidden;display:grid;place-items:center;font-size:40px}[role=progressbar][_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:conic-gradient(var(--primary) calc(var(--percentage) * 1%),var(--secondary) 0);mask:radial-gradient(white 55%,transparent 0);mask-mode:alpha;-webkit-mask:radial-gradient(#0000 55%,#000 0);-webkit-mask-mode:alpha}[role=progressbar][_ngcontent-%COMP%]:after{color:var(--primary)}']});let r=n;return r})();var y=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-hobbies"]],standalone:!0,features:[c],decls:51,vars:0,consts:[["id","hobbies",1,"route","sect-pt8"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"title-box","text-center"],[1,"title-a"],[1,"subtitle-a"],[1,"line-mf"],[1,"col-md-3"],[1,"hobby-box"],[1,"hobby-ico"],[1,"ico-circle"],[1,"fas","fa-gamepad"],[1,"hobby-content"],[1,"s-title"],[1,"s-description","text-center"],[1,"fas","fa-camera"],[1,"fas","fa-film"],[1,"fas","fa-book"]],template:function(i,l){i&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),a(6,"Hobbies"),t(),e(7,"p",6),a(8," Things I like to do to relax and have fun. "),t(),o(9,"div",7),t()()(),e(10,"div",2)(11,"div",8)(12,"div",9)(13,"div",10)(14,"span",11),o(15,"i",12),t()(),e(16,"div",13)(17,"h2",14),a(18,"Games"),t(),e(19,"p",15),a(20," I really enjoy playing videogames. It's a great way to pass the time, relax and have fun. Open world games are definitely my favorite. I also enjoy playing games with friends, like multiplayer games and co-op games. I find it really fun to play with others and share the experience. "),t()()()(),e(21,"div",8)(22,"div",9)(23,"div",10)(24,"span",11),o(25,"i",16),t()(),e(26,"div",13)(27,"h2",14),a(28,"Photos"),t(),e(29,"p",15),a(30," I'm also a photographer. It allows me to freeze moments in time, capturing the essence of life's fleeting beauty and emotion for eternity. Through my eyes and my lens, I can paint stories and evoke feelings that resonate across languages and cultures, connecting hearts with a single image. "),t()()()(),e(31,"div",8)(32,"div",9)(33,"div",10)(34,"span",11),o(35,"i",17),t()(),e(36,"div",13)(37,"h2",14),a(38,"Movies and Series"),t(),e(39,"p",15),a(40," Movies and series are windows into countless worlds. They influenced and taught me several things, including English. Each new story is a journey that grows with me, offering insights into life's complexities. Films and series are my escape, my education, my dream space. "),t()()()(),e(41,"div",8)(42,"div",9)(43,"div",10)(44,"span",11),o(45,"i",18),t()(),e(46,"div",13)(47,"h2",14),a(48,"Learning"),t(),e(49,"p",15),a(50," Learning is a transformative process that helps me grow, adapt, and find innovative ways to solve daily challenges. Learning keeps me young at heart and open-minded. It's the antidote to stagnation, a constant invitation to explore new horizons, embrace change, and redefine my capabilities. "),t()()()()()()())},styles:[".hobbies-mf[_ngcontent-%COMP%]{margin-top:4rem}.hobby-box[_ngcontent-%COMP%]{background-color:#101010;padding:2.5rem 1.3rem;border-radius:1rem;margin-bottom:3rem}.hobby-box[_ngcontent-%COMP%]:hover   .ico-circle[_ngcontent-%COMP%]{transition:all .5s ease;color:#f8f8ff;background-color:#24b67e;box-shadow:0 0 0 10px #bbf5df}.hobby-box[_ngcontent-%COMP%]   .hobby-ico[_ngcontent-%COMP%]{margin-bottom:1rem;color:#f8f8ff}.hobby-box[_ngcontent-%COMP%]   .ico-circle[_ngcontent-%COMP%]{transition:all .5s ease;font-size:4rem}.hobby-box[_ngcontent-%COMP%]   .s-title[_ngcontent-%COMP%]{font-size:1.4rem;text-transform:uppercase;text-align:center;padding:.4rem 0}.hobby-box[_ngcontent-%COMP%]   .s-description[_ngcontent-%COMP%]{color:#f8f8ff}"]});let r=n;return r})();var w=(()=>{let n=class n{constructor(){this.personalData=new p}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-contact"]],standalone:!0,features:[c],decls:39,vars:3,consts:[["id","contact",1,"paralax-mf","footer-paralax","bg-image","sect-mt4","route",2,"background-image","url(assets/img/overlay-bg.jpg)"],[1,"overlay-mf"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"contact-mf"],["id","contact",1,"box-shadow-full"],[1,"col-md-12"],[1,"title-box-2","pt-4","pt-md-0"],[1,"title-left"],[1,"more-info"],[1,"lead"],[1,"list-ico"],[1,"fas","fa-location-dot"],[1,"fas","fa-mobile"],[1,"fas","fa-envelope"],[1,"socials"],["href",""],[1,"ico-circle"],[1,"fas","fa-instagram"],[1,"fas","fa-linkedin"]],template:function(i,l){i&1&&(e(0,"section",0),o(1,"div",1),e(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",3)(8,"div",7)(9,"div",8)(10,"h5",9),a(11,"Get in Touch"),t()(),e(12,"div",10)(13,"p",11),a(14," If you're looking for a dedicated professional to join your team or to develop your next project, please do not hesitate to reach out. I'm eager to learn about your ideas and how we can bring them to fruition together. Let's start a conversation and explore the possibilities. "),t(),e(15,"ul",12)(16,"li"),o(17,"span",13),a(18),t(),e(19,"li"),o(20,"span",14),a(21),t(),e(22,"li"),o(23,"span",15),a(24),t()()(),e(25,"div",16)(26,"ul")(27,"li")(28,"a",17)(29,"span",18),o(30,"i",19),t()()(),e(31,"li")(32,"a",17)(33,"span",18),o(34,"i",20),t()()()()()()()()()()()(),e(35,"footer")(36,"div",3)(37,"span"),a(38,"\xA0"),t()()()()),i&2&&(m(18),g(" ",l.personalData.localizacao," "),m(3),g(" ",l.personalData.telefone," "),m(3),g(" ",l.personalData.email," "))},styles:[".footer-paralax[_ngcontent-%COMP%]{padding:4rem 0 0}.contact-mf[_ngcontent-%COMP%]{margin-top:4rem}"]});let r=n;return r})();var k=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-achievements"]],standalone:!0,features:[c],decls:27,vars:0,consts:[["id","achievements",1,"paralax-mf","footer-paralax","bg-image","sect-mt4","route",2,"background-image","url(assets/img/achievement-bg.jpg)"],[1,"overlay-achievement"],[1,"container"],[1,"row","achievements-title"],[1,"col","text-center","mb-5"],[1,"title-a"],[1,"subtitle-a"],[1,"line-mf"],[1,"row"],[1,"col-sm-12","col-lg-6","mt-4"],[1,"card","mx-auto"],["src","/assets/img/unip-app.png"],[1,"info"],["src","/assets/img/iamspe-app.png"]],template:function(i,l){i&1&&(e(0,"section",0),o(1,"div",1),e(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),a(6,"Achievements"),t(),e(7,"p",6),a(8,"My favorite childs."),t(),o(9,"div",7),t()(),e(10,"div",8)(11,"div",9)(12,"div",10),o(13,"img",11),e(14,"div",12)(15,"h1"),a(16,"UNIP App: Android version"),t(),e(17,"p"),a(18," I was responsible for the Android version of the UNIP app. It was developed in 15 days, with no previous experience in app development, while still addressing daily demands. "),t()()()(),e(19,"div",9)(20,"div",10),o(21,"img",13),e(22,"div",12)(23,"h1"),a(24,"IAMSPE App: API and documentation"),t(),e(25,"p"),a(26," I was responsible for the API and documentation used by an external team for the development of the new IAMSPE app, where best practices for secure and protected access and information sharing were adopted. "),t()()()()()()())},styles:['.overlay-achievement[_ngcontent-%COMP%]{background-color:#000c;position:absolute;top:0;left:0;padding:0;height:100%;width:100%;opacity:.9}.achievements-title[_ngcontent-%COMP%]{position:relative}.card[_ngcontent-%COMP%]{width:280px;height:360px;border-radius:15px;padding:1.5rem;position:relative;display:flex;align-items:flex-end;transition:.4s ease-out;box-shadow:0 7px 10px #00000080;box-sizing:content-box}.card[_ngcontent-%COMP%]:hover{transform:translateY(20px)}.card[_ngcontent-%COMP%]:hover:before{opacity:1}.card[_ngcontent-%COMP%]:hover   .info[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;border-radius:15px;background:#0009;z-index:2;transition:.5s;opacity:0}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;border-radius:15px}.card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{position:relative;z-index:3;color:#f8f8ff;opacity:0;transform:translateY(30px);transition:.5s}']});let r=n;return r})();var S=(()=>{let n=class n{constructor(){this.title="Vitor Mendes"}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=s({type:n,selectors:[["app-root"]],standalone:!0,features:[c],decls:7,vars:0,template:function(i,l){i&1&&o(0,"app-navbar")(1,"app-home")(2,"app-about")(3,"app-achievements")(4,"app-hobbies")(5,"app-contact")(6,"router-outlet")},dependencies:[M,O,x,_,k,y,w]});let r=n;return r})();var E=[];var D={providers:[P(E),h()]};var A={providers:[C()]},I=f(D,A);var z=()=>u(S,I),de=z;export{de as a};
