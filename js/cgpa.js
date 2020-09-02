function setValue(ar){
    for(i=0;i<ar.length;i++){
        $('#credit'+String(i+1)).val(ar[i])
        console.log('#credit'+String(i+1))
    }
}

$('#cse2017').on('click',function(e){
    var ar = [18, 19, 17, 20, 19, 17, 12]
    setValue(ar)    
})


$("#submit").on('click',function(e){
    const credit1 = parseInt($('#credit1').val())
    const credit2 = parseInt($('#credit2').val())
    const credit3 = parseInt($('#credit3').val())
    const credit4 = parseInt($('#credit4').val())
    const credit5 = parseInt($('#credit5').val())
    const credit6 = parseInt($('#credit6').val())
    const credit7 = parseInt($('#credit7').val())
    const credit8 = parseInt($('#credit8').val())

    const sem1 = parseFloat($('#sem1').val())
    const sem2 = parseFloat($('#sem2').val())
    const sem3 = parseFloat($('#sem3').val())
    const sem4 = parseFloat($('#sem4').val())
    const sem5 = parseFloat($('#sem5').val())
    const sem6 = parseFloat($('#sem6').val())
    const sem7 = parseFloat($('#sem7').val())
    const sem8 = parseFloat($('#sem8').val())


    console.log(credit1, credit2,credit8);
    var totalCredits = 0;
    var totalGPA = 0;
    if (credit1!==0 && !isNaN(credit1)){
        totalCredits += credit1
        if (sem1!==0 && !isNaN(sem1)){
            totalGPA += sem1*credit1
        }    
    }
    if (credit2!==0 && !isNaN(credit2)){
        totalCredits += credit2
        if (sem2!==0 && !isNaN(sem2)){
            totalGPA += sem2*credit2
        }
    }
    if (credit3!==0 && !isNaN(credit3)){
        if (sem3!==0 && !isNaN(sem3)){
            totalCredits += credit3
            totalGPA += sem3*credit3
        }    
    }
    if (credit4!==0 && !isNaN(credit4)){
        if (sem4!==0 && !isNaN(sem4)){
            totalCredits += credit4
            totalGPA += sem4*credit4
        }    
    }
    if (credit5!==0 && !isNaN(credit5)){
        if (sem5!==0 && !isNaN(sem5)){
            totalCredits += credit5
            totalGPA += sem5*credit5
        }    
    }
    if (credit6!==0 && !isNaN(credit6)){
        if (sem6!==0 && !isNaN(sem6)){
            totalCredits += credit6
            totalGPA += sem6*credit6
        }    
    }
    if (credit7!==0 && !isNaN(credit7)){
        if (sem7!==0 && !isNaN(sem7)){
            totalCredits += credit7
            totalGPA += sem7*credit7
        }    
    }
    if (credit8!==0 && !isNaN(credit8)){
        if (sem8!==0 && !isNaN(sem8)){
            totalCredits += credit8
            totalGPA += sem8*credit8
        }    
    }

    var CGPA = totalGPA/totalCredits
    CGPA = CGPA * 100;
    CGPA = Math.floor(CGPA)
    console.log(CGPA/100,totalGPA,totalCredits);
    $('#cgpa').val(CGPA/100)
})