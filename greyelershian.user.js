// ==UserScript==
// @name Greyelershian
// @description a more sedate notification label on Google sites
// @match http://*.google.com/*
// @match https://*.google.com/*
// @downloadURL https://raw.github.com/rektide/greyelershian/master/greyelershian.user.js
// ==/UserScript==
(function(){

function extractProperty(lookups,property){
	lookups.forEach(_makeExtractProperty(property))
	return lookups
}
function _makeExtractProperty(prop){
	function _extractProperty(val,key,arr){
		arr[key]= val?val[property]:undefined
	}
}
function validateHas(lookups){
	lookups.forEach(_validate)
}
function _validate(val,key,arr){
	//assert(val)
	if(!val)
		console.error("Missing element for key: ",key)
}

// VALIDATE AND EXTRACT DATA
//var els= lookupSelectors(concerns)
//validateHas(els)
//var colors= extractProperty("background-color")
// OR DONT
var colors= {label: "rgb(203, 68, 55)",
  icon: "rgb(102, 102, 102)"}

// DOMfunky https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet.insertRule
var styleSheet= document.createElement("style")
styleSheet.id= "greyelershianSheet"
document.body.appendChild(styleSheet)
styleSheet= styleSheet.sheet
var rule0= ".gb_jb { background-color: "+ colors.icon +"; transition: background-color 1.2s }",
  rule1= ".gb_jb:hover { background-color: "+ colors.label +" }"
//console.log("adding",rule1,rule2)
styleSheet.insertRule(rule0,0)
styleSheet.insertRule(rule1,1)

})()
