function main({name:name=""}) {
    if(name!==""){
        return {
            body:{payload: `${name}`},
            statusCode:200,
            headers:{'Content-Type':'application/json'}
        };
    }
    else{
        return {
            body:{payload: ``},
            statusCode:200,
            headers:{'Content-Type':'application/json'}
        };

    }
};



/*
function main({name:name=""}) {
    //return {payload: `Hello, ${name}!`};
    return {
        body:{payload: `${name}`},
        statusCode:200,
        headers:{'Content-Type':'application/json'}
    };
};
*/