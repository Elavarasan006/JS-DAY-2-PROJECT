function add()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a+b;
    document.getElementById("button1").innerHTML="addition is "+c;
}

function sub()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a-b;
    document.getElementById("button2").innerHTML="subtraction is "+c;
}

function mul()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a*b;
    document.getElementById("button3").innerHTML="Multiplication is "+c;
}

function div()
{
    let a=parseInt(document.getElementById("N1").value);
    let b=parseInt(document.getElementById("N2").value); 
    let c=a/b;
    document.getElementById("button4").innerHTML="Division is "+c;
}

function squ()
{
    let a=parseInt(document.getElementById("N3").value);
    let c=a**2;
    document.getElementById("button5").innerHTML="Square is "+c;
}

function cube()
{
    let a=parseInt(document.getElementById("N3").value);
    let c=a**3;
    document.getElementById("button6").innerHTML="Cube is "+c;
}

function ApowerA()
{
    let a=parseInt(document.getElementById("N3").value);
    let c=a**a;
    document.getElementById("button7").innerHTML="A power A is "+c;
}

