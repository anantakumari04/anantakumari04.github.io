//closure -> always access to parent function

function main(){
    let b = 1

    function sub(){
        return b++;
    }
    return sub;
}

const f1 = main();
console.log(f1());