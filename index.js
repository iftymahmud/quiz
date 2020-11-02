document.querySelector("#start").addEventListener("click", start);

function start() {
    document.querySelector("#start").classList.toggle("vanish");
    document.querySelector("#q1").classList.toggle("vanish");
    card1();
}

document.querySelector("#n1").addEventListener("click", q1);

function q1() {
    document.querySelector("#q1").classList.toggle("vanish");
    document.querySelector("#q2").classList.toggle("vanish");
    card2();
}

document.querySelector("#n2").addEventListener("click", q2);

function q2() {
    document.querySelector("#q2").classList.toggle("vanish");
    document.querySelector("#q3").classList.toggle("vanish");
    card3();
}

document.querySelector("#n3").addEventListener("click", q3);

function q3() {
    document.querySelector("#q3").classList.toggle("vanish");
    document.querySelector("#q4").classList.toggle("vanish");
    card4();
}

document.querySelector("#n4").addEventListener("click", q4);

function q4() {
    document.querySelector("#q4").classList.toggle("vanish");
    document.querySelector("#q5").classList.toggle("vanish");
    card5();
}

document.querySelector("#n5").addEventListener("click", q5);

function q5() {
    document.querySelector("#q5").classList.toggle("vanish");
    document.querySelector("#q6").classList.toggle("vanish");
    card6();
}

document.querySelector("#n6").addEventListener("click", q6);

function q6() {
    document.querySelector("#q6").classList.toggle("vanish");
    document.querySelector("#q7").classList.toggle("vanish");
    card7();
}

document.querySelector("#n7").addEventListener("click", q7);

function q7() {
    document.querySelector("#q7").classList.toggle("vanish");
    document.querySelector("#q8").classList.toggle("vanish");
    card8();
}

document.querySelector("#n8").addEventListener("click", q8);

function q8() {
    document.querySelector("#q8").classList.toggle("vanish");
    document.querySelector("#q9").classList.toggle("vanish");
    card9();
}

document.querySelector("#n9").addEventListener("click", q9);

function q9() {
    document.querySelector("#q9").classList.toggle("vanish");
    document.querySelector("#q10").classList.toggle("vanish");
    card10();
}

document.querySelector("#n10").addEventListener("click", q10);

function q10() {
    document.querySelector("#q10").classList.toggle("vanish");
    document.querySelector("#end").classList.toggle("vanish");
    play();
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var points = 0;
var flag = false;

function card1() {
    flag = false;
    document.querySelector("#q1 .btn-1").addEventListener("click", b11);
    document.querySelector("#q1 .btn-2").addEventListener("click", b12);
    document.querySelector("#q1 .btn-3").addEventListener("click", b13);
    document.querySelector("#q1 .btn-4").addEventListener("click", b14);
    function b11() {
        document.querySelector("#q1 .btn-1").classList.add("press-i");
        document.querySelector("#q1 .btn-2").classList.remove("press-i");
        document.querySelector("#q1 .btn-3").classList.remove("press-i");
        document.querySelector("#q1 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b12() {
        document.querySelector("#q1 .btn-2").classList.add("press-i");
        document.querySelector("#q1 .btn-1").classList.remove("press-i");
        document.querySelector("#q1 .btn-3").classList.remove("press-i");
        document.querySelector("#q1 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b13() {
        document.querySelector("#q1 .btn-3").classList.add("press-i");
        document.querySelector("#q1 .btn-2").classList.remove("press-i");
        document.querySelector("#q1 .btn-1").classList.remove("press-i");
        document.querySelector("#q1 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b14() {
        document.querySelector("#q1 .btn-4").classList.add("press-i");
        document.querySelector("#q1 .btn-2").classList.remove("press-i");
        document.querySelector("#q1 .btn-3").classList.remove("press-i");
        document.querySelector("#q1 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}







function card2() {
    flag = false;
    document.querySelector("#q2 .btn-1").addEventListener("click", b21);
    document.querySelector("#q2 .btn-2").addEventListener("click", b22);
    document.querySelector("#q2 .btn-3").addEventListener("click", b23);
    document.querySelector("#q2 .btn-4").addEventListener("click", b24);
    function b21() {
        document.querySelector("#q2 .btn-1").classList.add("press-i");
        document.querySelector("#q2 .btn-2").classList.remove("press-i");
        document.querySelector("#q2 .btn-3").classList.remove("press-i");
        document.querySelector("#q2 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b22() {
        document.querySelector("#q2 .btn-2").classList.add("press-i");
        document.querySelector("#q2 .btn-1").classList.remove("press-i");
        document.querySelector("#q2 .btn-3").classList.remove("press-i");
        document.querySelector("#q2 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b23() {
        document.querySelector("#q2 .btn-3").classList.add("press-i");
        document.querySelector("#q2 .btn-2").classList.remove("press-i");
        document.querySelector("#q2 .btn-1").classList.remove("press-i");
        document.querySelector("#q2 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b24() {
        document.querySelector("#q2 .btn-4").classList.add("press-i");
        document.querySelector("#q2 .btn-2").classList.remove("press-i");
        document.querySelector("#q2 .btn-3").classList.remove("press-i");
        document.querySelector("#q2 .btn-1").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }
}







function card3() {
    flag = false;
    document.querySelector("#q3 .btn-1").addEventListener("click", b31);
    document.querySelector("#q3 .btn-2").addEventListener("click", b32);
    document.querySelector("#q3 .btn-3").addEventListener("click", b33);
    document.querySelector("#q3 .btn-4").addEventListener("click", b34);
    function b31() {
        document.querySelector("#q3 .btn-1").classList.add("press-i");
        document.querySelector("#q3 .btn-2").classList.remove("press-i");
        document.querySelector("#q3 .btn-3").classList.remove("press-i");
        document.querySelector("#q3 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }
    function b32() {
        document.querySelector("#q3 .btn-2").classList.add("press-i");
        document.querySelector("#q3 .btn-1").classList.remove("press-i");
        document.querySelector("#q3 .btn-3").classList.remove("press-i");
        document.querySelector("#q3 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b33() {
        document.querySelector("#q3 .btn-3").classList.add("press-i");
        document.querySelector("#q3 .btn-2").classList.remove("press-i");
        document.querySelector("#q3 .btn-1").classList.remove("press-i");
        document.querySelector("#q3 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b34() {
        document.querySelector("#q3 .btn-4").classList.add("press-i");
        document.querySelector("#q3 .btn-2").classList.remove("press-i");
        document.querySelector("#q3 .btn-3").classList.remove("press-i");
        document.querySelector("#q3 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}





function card4() {
    flag = false;
    document.querySelector("#q4 .btn-1").addEventListener("click", b41);
    document.querySelector("#q4 .btn-2").addEventListener("click", b42);
    document.querySelector("#q4 .btn-3").addEventListener("click", b43);
    document.querySelector("#q4 .btn-4").addEventListener("click", b44);
    function b41() {
        document.querySelector("#q4 .btn-1").classList.add("press-i");
        document.querySelector("#q4 .btn-2").classList.remove("press-i");
        document.querySelector("#q4 .btn-3").classList.remove("press-i");
        document.querySelector("#q4 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }
    function b42() {
        document.querySelector("#q4 .btn-2").classList.add("press-i");
        document.querySelector("#q4 .btn-1").classList.remove("press-i");
        document.querySelector("#q4 .btn-3").classList.remove("press-i");
        document.querySelector("#q4 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b43() {
        document.querySelector("#q4 .btn-3").classList.add("press-i");
        document.querySelector("#q4 .btn-2").classList.remove("press-i");
        document.querySelector("#q4 .btn-1").classList.remove("press-i");
        document.querySelector("#q4 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b44() {
        document.querySelector("#q4 .btn-4").classList.add("press-i");
        document.querySelector("#q4 .btn-2").classList.remove("press-i");
        document.querySelector("#q4 .btn-3").classList.remove("press-i");
        document.querySelector("#q4 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}





function card5() {
    flag = false;
    document.querySelector("#q5 .btn-1").addEventListener("click", b51);
    document.querySelector("#q5 .btn-2").addEventListener("click", b52);
    document.querySelector("#q5 .btn-3").addEventListener("click", b53);
    document.querySelector("#q5 .btn-4").addEventListener("click", b54);
    function b51() {
        document.querySelector("#q5 .btn-1").classList.add("press-i");
        document.querySelector("#q5 .btn-2").classList.remove("press-i");
        document.querySelector("#q5 .btn-3").classList.remove("press-i");
        document.querySelector("#q5 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b52() {
        document.querySelector("#q5 .btn-2").classList.add("press-i");
        document.querySelector("#q5 .btn-1").classList.remove("press-i");
        document.querySelector("#q5 .btn-3").classList.remove("press-i");
        document.querySelector("#q5 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b53() {
        document.querySelector("#q5 .btn-3").classList.add("press-i");
        document.querySelector("#q5 .btn-2").classList.remove("press-i");
        document.querySelector("#q5 .btn-1").classList.remove("press-i");
        document.querySelector("#q5 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b54() {
        document.querySelector("#q5 .btn-4").classList.add("press-i");
        document.querySelector("#q5 .btn-2").classList.remove("press-i");
        document.querySelector("#q5 .btn-3").classList.remove("press-i");
        document.querySelector("#q5 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}





function card6() {
    flag = false;
    document.querySelector("#q6 .btn-1").addEventListener("click", b61);
    document.querySelector("#q6 .btn-2").addEventListener("click", b62);
    document.querySelector("#q6 .btn-3").addEventListener("click", b63);
    document.querySelector("#q6 .btn-4").addEventListener("click", b64);
    function b61() {
        document.querySelector("#q6 .btn-1").classList.add("press-i");
        document.querySelector("#q6 .btn-2").classList.remove("press-i");
        document.querySelector("#q6 .btn-3").classList.remove("press-i");
        document.querySelector("#q6 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b62() {
        document.querySelector("#q6 .btn-2").classList.add("press-i");
        document.querySelector("#q6 .btn-1").classList.remove("press-i");
        document.querySelector("#q6 .btn-3").classList.remove("press-i");
        document.querySelector("#q6 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b63() {
        document.querySelector("#q6 .btn-3").classList.add("press-i");
        document.querySelector("#q6 .btn-2").classList.remove("press-i");
        document.querySelector("#q6 .btn-1").classList.remove("press-i");
        document.querySelector("#q6 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b64() {
        document.querySelector("#q6 .btn-4").classList.add("press-i");
        document.querySelector("#q6 .btn-2").classList.remove("press-i");
        document.querySelector("#q6 .btn-3").classList.remove("press-i");
        document.querySelector("#q6 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}







function card7() {
    flag = false;
    document.querySelector("#q7 .btn-1").addEventListener("click", b71);
    document.querySelector("#q7 .btn-2").addEventListener("click", b72);
    document.querySelector("#q7 .btn-3").addEventListener("click", b73);
    document.querySelector("#q7 .btn-4").addEventListener("click", b74);
    function b71() {
        document.querySelector("#q7 .btn-1").classList.add("press-i");
        document.querySelector("#q7 .btn-2").classList.remove("press-i");
        document.querySelector("#q7 .btn-3").classList.remove("press-i");
        document.querySelector("#q7 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b72() {
        document.querySelector("#q7 .btn-2").classList.add("press-i");
        document.querySelector("#q7 .btn-1").classList.remove("press-i");
        document.querySelector("#q7 .btn-3").classList.remove("press-i");
        document.querySelector("#q7 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b73() {
        document.querySelector("#q7 .btn-3").classList.add("press-i");
        document.querySelector("#q7 .btn-2").classList.remove("press-i");
        document.querySelector("#q7 .btn-1").classList.remove("press-i");
        document.querySelector("#q7 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b74() {
        document.querySelector("#q7 .btn-4").classList.add("press-i");
        document.querySelector("#q7 .btn-2").classList.remove("press-i");
        document.querySelector("#q7 .btn-3").classList.remove("press-i");
        document.querySelector("#q7 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}




function card8() {
    flag = false;
    document.querySelector("#q8 .btn-1").addEventListener("click", b81);
    document.querySelector("#q8 .btn-2").addEventListener("click", b82);
    document.querySelector("#q8 .btn-3").addEventListener("click", b83);
    document.querySelector("#q8 .btn-4").addEventListener("click", b84);
    function b81() {
        document.querySelector("#q8 .btn-1").classList.add("press-i");
        document.querySelector("#q8 .btn-2").classList.remove("press-i");
        document.querySelector("#q8 .btn-3").classList.remove("press-i");
        document.querySelector("#q8 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b82() {
        document.querySelector("#q8 .btn-2").classList.add("press-i");
        document.querySelector("#q8 .btn-1").classList.remove("press-i");
        document.querySelector("#q8 .btn-3").classList.remove("press-i");
        document.querySelector("#q8 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b83() {
        document.querySelector("#q8 .btn-3").classList.add("press-i");
        document.querySelector("#q8 .btn-2").classList.remove("press-i");
        document.querySelector("#q8 .btn-1").classList.remove("press-i");
        document.querySelector("#q8 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b84() {
        document.querySelector("#q8 .btn-4").classList.add("press-i");
        document.querySelector("#q8 .btn-2").classList.remove("press-i");
        document.querySelector("#q8 .btn-3").classList.remove("press-i");
        document.querySelector("#q8 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}




function card9() {
    flag = false;
    document.querySelector("#q9 .btn-1").addEventListener("click", b91);
    document.querySelector("#q9 .btn-2").addEventListener("click", b92);
    document.querySelector("#q9 .btn-3").addEventListener("click", b93);
    document.querySelector("#q9 .btn-4").addEventListener("click", b94);
    function b91() {
        document.querySelector("#q9 .btn-1").classList.add("press-i");
        document.querySelector("#q9 .btn-2").classList.remove("press-i");
        document.querySelector("#q9 .btn-3").classList.remove("press-i");
        document.querySelector("#q9 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
    function b92() {
        document.querySelector("#q9 .btn-2").classList.add("press-i");
        document.querySelector("#q9 .btn-1").classList.remove("press-i");
        document.querySelector("#q9 .btn-3").classList.remove("press-i");
        document.querySelector("#q9 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }

    function b93() {
        document.querySelector("#q9 .btn-3").classList.add("press-i");
        document.querySelector("#q9 .btn-2").classList.remove("press-i");
        document.querySelector("#q9 .btn-1").classList.remove("press-i");
        document.querySelector("#q9 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b94() {
        document.querySelector("#q9 .btn-4").classList.add("press-i");
        document.querySelector("#q9 .btn-2").classList.remove("press-i");
        document.querySelector("#q9 .btn-3").classList.remove("press-i");
        document.querySelector("#q9 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }
}





function card10() {
    flag = false;
    document.querySelector("#q10 .btn-1").addEventListener("click", b101);
    document.querySelector("#q10 .btn-2").addEventListener("click", b102);
    document.querySelector("#q10 .btn-3").addEventListener("click", b103);
    document.querySelector("#q10 .btn-4").addEventListener("click", b104);
    function b101() {
        document.querySelector("#q10 .btn-1").classList.add("press-i");
        document.querySelector("#q10 .btn-2").classList.remove("press-i");
        document.querySelector("#q10 .btn-3").classList.remove("press-i");
        document.querySelector("#q10 .btn-4").classList.remove("press-i");
        if (flag == false) {
            points = ++points;
            flag = true;
        }
    }
    function b102() {
        document.querySelector("#q10 .btn-2").classList.add("press-i");
        document.querySelector("#q10 .btn-1").classList.remove("press-i");
        document.querySelector("#q10 .btn-3").classList.remove("press-i");
        document.querySelector("#q10 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b103() {
        document.querySelector("#q10 .btn-3").classList.add("press-i");
        document.querySelector("#q10 .btn-2").classList.remove("press-i");
        document.querySelector("#q10 .btn-1").classList.remove("press-i");
        document.querySelector("#q10 .btn-4").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

    function b104() {
        document.querySelector("#q10 .btn-4").classList.add("press-i");
        document.querySelector("#q10 .btn-2").classList.remove("press-i");
        document.querySelector("#q10 .btn-3").classList.remove("press-i");
        document.querySelector("#q10 .btn-1").classList.remove("press-i");
        if (flag == true) {
            flag = false;
            points = --points;
        }
    }

}


function play() {
    document.querySelector("#end .start-text-i").innerHTML = points + "/10";
}