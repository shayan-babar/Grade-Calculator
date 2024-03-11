function cal() {
    let phy = document.getElementById("phy").value
    comp = document.getElementById("comp").value;
    math = document.getElementById("math").value;
    eng = document.getElementById("eng").value;


    let sum = parseFloat(phy) + parseFloat(comp) + parseFloat(math) + parseFloat(eng);

    document.getElementById("demo").innerHTML = `Total marks is =${sum}`;
    let percentage = (sum / 400) * 100;

    document.getAnimations("demo1").innerHTML = `Percentage is =${percentage}%`;

    if (percentage >= 100) {
        document.getElementById("demo2").innerHTML = `Excellent`;
    } else if (percentage >= 80) {
        document.getElementById("demo2").innerHTML = `Very Good Work`;
    } else if (percentage >= 60) {
        document.getElementById("demo2").innerHTML = `Pass`;
    } else if (percentage >= 40) {
        document.getElementById("demo2").innerHTML = `Need Work Hard`;
    } else {
        document.getElementById("demo2").innerHTML = `Fail`;
    }
}