"use strict"
function showMessage() {
    alert('😍😍😍 yaayyyy I exist!!!')
}


// promise y aveli arag a katarvum, asynchronous
//symbol iterator y objectnery dardznum a iterable

let onj = {
    from: 0,
    to: 9,
    [Symbol.iterator]() { }
}
