var G ={}
var app = function(req,res){
    if(G["login"]){
        G["login"](req,res)
    }

}

app.get = function(str,callback){
    G[str] = callback;
    //G["login"] = function(req,res){}

}

app.get("login",function(req,res){
    console.log("login"+req+res);
})

setTimeout(function(){
    app(" req"," res")
},1)

console.log(G)