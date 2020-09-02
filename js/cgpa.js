$("#submit").on('click',function(e){
    const credit1 = parseInt($('#credit1').val())
    const credit2 = parseInt($('#credit2').val())
    const credit3 = parseInt($('#credit3').val())
    const credit4 = parseInt($('#credit4').val())
    const credit5 = parseInt($('#credit5').val())
    const credit6 = parseInt($('#credit6').val())
    const credit7 = parseInt($('#credit7').val())
    const credit8 = parseInt($('#credit8').val())

    const sem1 = parseInt($('#sem1').val())
    const sem2 = parseInt($('#sem2').val())
    const sem3 = parseInt($('#sem3').val())
    const sem4 = parseInt($('#sem4').val())
    const sem5 = parseInt($('#sem5').val())
    const sem6 = parseInt($('#sem6').val())
    const sem7 = parseInt($('#sem7').val())
    const sem8 = parseInt($('#sem8').val())


    console.log(credit1, credit2,credit8);
    var totalCredits = 0;
    if (credit1!==0 && !isNaN(credit1)){
        totalCredits += credit1
        console.log(credit1)
    }
    if (credit2!==0 && !isNaN(credit2)){
        totalCredits += credit2
        console.log(credit2)
    }
    if (credit3!==0 && !isNaN(credit3)){
        totalCredits += credit3
        console.log(credit3)
    }
    if (credit4!==0 && !isNaN(credit4)){
        totalCredits += credit4
        console.log(credit4)
    }
    if (credit5!==0 && !isNaN(credit5)){
        totalCredits += credit5
        console.log(credit5)
    }
    if (credit6!==0 && !isNaN(credit6)){
        totalCredits += credit6
        console.log(credit6)
    }
    if (credit7!==0 && !isNaN(credit7)){
        totalCredits += credit7
        console.log(credit7)
    }
    if (credit8!==0 && !isNaN(credit8)){
        totalCredits += credit8
        console.log(credit8)
    }

    var totalGPA = 0;
    if (sem1!==0 && !isNaN(sem1)){
        totalGPA += sem1
    }
    if (sem2!==0 && !isNaN(sem2)){
        totalGPA += sem2
    }
    if (sem3!==0 && !isNaN(sem3)){
        totalGPA += sem3
    }
    if (sem4!==0 && !isNaN(sem4)){
        totalGPA += sem4
    }
    if (sem5!==0 && !isNaN(sem5)){
        totalGPA += sem5
    }
    if (sem6!==0 && !isNaN(sem6)){
        totalGPA += sem6
    }
    if (sem7!==0 && !isNaN(sem7)){
        totalGPA += sem7
    }
    if (sem8!==0 && !isNaN(sem8)){
        totalGPA += sem8
    }
    var CGPA = totalGPA/totalCredits
    CGPA = CGPA * 1000;
    CGPA = Math.floor(CGPA)
    console.log(CGPA/100,totalGPA,totalCredits);
    $('#cgpa').val(CGPA/100)
})