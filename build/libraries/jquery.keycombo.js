!function(t){var i={},l={};t.onKeyCombo=function(n,e){0!==n.length&&"function"==typeof e&&(l[n.length]||(l[n.length]=[]),l[n.length].push({trigger:n,handler:e}),t(document).keydown(function(n){i[n.which]=!0}).keyup(function(e){var n=_.map(_.keys(i),function(n){return parseInt(n,10)}),t=n.length,o=l[t],r=[];if(o)for(var g=0;g<o.length;g++){var f=o[g].trigger,h=o[g].handler;n.length==f.length&&0==_.difference(n,f).length&&r.push(h)}_.each(n,function(n){delete i[n]}),_.each(r,function(n){console.log("$.onKeyCombo: firing handler for keys "+f.toString()),n(e)})}))},t.offKeyCombo=function(e,t){var n,o;0!==e.length&&"function"==typeof t&&(!(n=l[e.length])||-1!=(o=_.findIndex(n,function(n){return n.trigger.length==e.length&&0==_.difference(n.trigger,e).length&&n.handler==t}))&&n.splice(o,1))}}($);