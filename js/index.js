function sum(){
    a=Number.parseInt(document.getElementById("input_a").value)
    b=Number.parseInt(document.getElementById("input_b").value)
    c=Number.parseInt(document.getElementById("input_c").value)
    d=Math.sqrt((b*b)-(4*a*c))
    document.getElementById("input_sol1").value= ((-b+d)/(2*a))
    document.getElementById("input_sol2").value=((-b-d)/(2*a))
alert(value)
}