function C() {
    out.value = ""
}

function del() {
    let out = document.getElementById("out");
    out.value = out.value.substring(0, out.value.length - 1);
}

function add(object) {
    let out = document.getElementById("out");
    out.value += object.toString()
}

function calc() {
    let out = document.getElementById("out");
    out.value = eval(out.value)
}