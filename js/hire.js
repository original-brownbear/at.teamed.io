angular.module("teamed",[]).controller("Main",["$scope",function(o){"use strict";o.submit=function(e){email(e);var n="I would like to hire you\n\n"+o.info+"\n\n"+o.contact,t="http://www.netbout.com/start?post="+encodeURIComponent(n)+"&invite=bobby&invite=yegor256&rename="+encodeURIComponent("new estimate")+"&post="+encodeURIComponent("@bobby estimate");window.location=t}}]);