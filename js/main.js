function grade() {
    var eng = document.getElementById("engGrade").value;
    var mat = document.getElementById("mathGrade").value;
    var fil = document.getElementById("filGrade").value;
    var pe = document.getElementById("peGrade").value;
    var sci = document.getElementById("sciGrade").value;

    eng = parseInt(eng);
    mat = parseInt(mat);
    fil = parseInt(fil);
    pe = parseInt(pe);
    sci = parseInt(sci);

    
    if (eng <= 100 && eng >= 90)
    {
        document.getElementById("engRemarks").textContent= "Excellent";
    }
    else if (eng <= 89 && eng >= 80)
    {
        document.getElementById("engRemarks").textContent= "Good";
    }
    else if (eng <= 79 && eng >= 70)
    {
        document.getElementById("engRemarks").textContent= "Average";
    }
    else if (eng <= 69 && eng >= 60)
    {
        document.getElementById("engRemarks").textContent= "Poor";
    }
    else if (eng <= 59 && eng >= 0)
    {
        document.getElementById("engRemarks").textContent= "Fail";
    }

   
    if (mat <= 100 && mat >= 90)
    {
        document.getElementById("mathRemarks").textContent="Excellent";
    }
    else if (mat <= 89 && mat >= 80)
    {
        document.getElementById("mathRemarks").textContent="Good";
    }
    else if (mat <= 79 && eng >= 70)
    {
        document.getElementById("mathRemarks").textContent="Average";
    }
    else if (mat <= 69 && mat >= 60)
    {
        document.getElementById("mathRemarks").textContent= "Poor";
    }
    else if (mat <= 59 && mat >= 0)
    {
        document.getElementById("mathRemarks").textContent="Fail";
    }

     
     if (fil <= 100 && fil >= 90)
     {
         document.getElementById("filRemarks").textContent="Excellent";
     }
     else if (fil <= 89 && fil >= 80)
     {
         document.getElementById("filRemarks").textContent="Good";
     }
     else if (fil <= 79 && fil >= 70)
     {
         document.getElementById("filRemarks").textContent="Average";
     }
     else if (fil <= 69 && fil >= 60)
     {
         document.getElementById("filRemarks").textContent="Poor";
     }
     else if (fil <= 59 && fil >= 0)
     {
         document.getElementById("filRemarks").textContent="Fail";
     }

     
    if (pe <= 100 && pe >= 90)
    {
        document.getElementById("peRemarks").textContent="Excellent";
    }
    else if (pe <= 89 && pe >= 80)
    {
        document.getElementById("peRemarks").textContent="Good";
    }
    else if (pe <= 79 && pe >= 70)
    {
        document.getElementById("peRemarks").textContent="Average";
    }
    else if (pe <= 69 && pe >= 60)
    {
        document.getElementById("peRemarks").textContent="Poor";
    }
    else if (pe <= 59 && pe >= 0)
    {
        document.getElementById("peRemarks").textContent="Fail";
    }

    
     if (sci <= 100 && sci >= 90)
     {
         document.getElementById("sciRemarks").textContent="Excellent";
     }
     else if (sci <= 89 && sci >= 80)
     {
         document.getElementById("sciRemarks").textContent="Good";
     }
     else if (sci <= 79 && sci >= 70)
     {
         document.getElementById("sciRemarks").textContent="Average";
     }
     else if (sci <= 69 && sci >= 60)
     {
         document.getElementById("sciRemarks").textContent="Poor";
     }
     else if (sci <= 59 && sci >= 0)
     {
         document.getElementById("sciRemarks").textContent="Fail";
     }



     if (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90)
    {
        document.getElementById("rank").textContent="Top Honor Student";
    }
    else if (sci <= 69 && sci >= 0 && pe <= 69 && pe >= 0 && fil <= 69 && fil >= 0 && mat <= 69 && mat >= 0 && eng <= 69 && eng >= 0)
     {
         document.getElementById("rank").textContent="Repeater";
     }
    else if ((mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(mat <= 100 && mat >= 90 && sci <= 100 && sci >= 90 && eng <= 100 && eng >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && eng <= 100 && eng >= 90 && pe <= 100 && pe >= 90) || (mat <= 100 && mat >= 90 && fil <= 100 && fil >= 90 && eng <= 100 && eng >= 90) || (fil <= 100 && fil >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && pe <= 100 && pe >= 90) || (eng <= 100 && eng >= 90 && sci <= 100 && sci >= 90 && fil <= 100 && fil >= 90) ||(eng <= 100 && eng >= 90 && fil <= 100 && fil >= 90 && pe <= 100 && pe >= 90) )
    {
        document.getElementById("rank").textContent="Second Honorable Mention";
    }
    else
     {
         document.getElementById("rank").textContent="Normie";
     }
}

function getName(){
    var getname = prompt("Name:");

    if(getName != null)
    {
        document.getElementById("stdname").innerHTML = "Student Name:" + " " + getname;
    }
}