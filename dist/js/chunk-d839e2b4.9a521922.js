(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d839e2b4"],{"9efc":function(t,e,a){},ae9b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"catalog"},[a("div",{staticClass:"catalog__wrapper"},[a("div",{staticClass:"catalog__grid"},[a("div",{staticClass:"catalog__search"},[a("h1",{staticClass:"catalog__search-title"},[t._v("Категории")]),a("ul",{staticClass:"catalog__search-list"},t._l(t.getCategories,(function(e,s){return a("li",{key:s,ref:"li",refInFor:!0,staticClass:"catalog__search-item",on:{click:function(a){return t.activeCategory(e,s)}}},[t._v(" "+t._s(e)+" ")])})),0)]),a("ul",{staticClass:"catalog__list"},t._l(t.filterPositions(t.currentCategory),(function(e){return a("SingleCard",{key:e.id,attrs:{item:e},on:{showModal:function(a){return t.showModal(e)},addPosition:function(a){return t.addPositions(e)}}})})),1)])]),t.show?a("ShowMoreInfo",{attrs:{currentItem:t.currentItem},on:{closeModal:function(e){t.show=!1}}}):t._e()],1)},i=[],n=a("2909"),c=a("5530"),o=(a("c740"),a("99af"),a("fb6a"),a("159b"),a("9706")),r=a("2f62"),l=a("9155"),u={data:function(){return{show:!1,currentItem:"",currentCategory:"Платья",isActive:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(r["b"])(["allCatalog","getCategories","getPositions","filterPositions"])),{},{currentIndex:function(){var t=this;return this.getCategories.findIndex((function(e){return e===t.currentCategory}))}}),methods:Object(c["a"])(Object(c["a"])({},Object(r["c"])(["addPositions"])),{},{showModal:function(t){this.show=!0,this.currentItem=t},activeCategory:function(t,e){this.currentCategory=t;var a=this.$refs.li[e],s=[].concat(Object(n["a"])(this.$refs.li.slice(0,a)),Object(n["a"])(this.$refs.li.slice(a+1)));s.forEach((function(t){return t.classList.remove("active")})),a.classList.add("active")}}),components:{SingleCard:o["a"],ShowMoreInfo:l["a"]},mounted:function(){this.activeCategory(this.currentCategory,this.currentIndex),console.log(this.currentIndex)}},d=u,f=(a("eeed"),a("2877")),h=Object(f["a"])(d,s,i,!1,null,"6d3b8116",null);e["default"]=h.exports},eeed:function(t,e,a){"use strict";a("9efc")}}]);
//# sourceMappingURL=chunk-d839e2b4.9a521922.js.map