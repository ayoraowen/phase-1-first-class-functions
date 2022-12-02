function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function anf(){
        
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}