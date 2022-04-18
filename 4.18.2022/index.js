
window.onload = alert("Lists may not be up to date. Please check my GitHub page for recent developments. -yev");
function btn1() {

    document.getElementById('divbtn1Clicked').style.display='';
//others will be back to display:none when this runs:

      document.getElementById('divbtn2Clicked').style.display='none';
          document.getElementById('divbtn3Clicked').style.display='none';
    document.getElementById('divbtn4Clicked').style.display='none';

}


function btn2() {

    document.getElementById('divbtn2Clicked').style.display='';


  //others will be back to display:none when this runs:

      document.getElementById('divbtn1Clicked').style.display='none';
          document.getElementById('divbtn3Clicked').style.display='none';
    document.getElementById('divbtn4Clicked').style.display='none';
}


function btn3() {

    document.getElementById('divbtn3Clicked').style.display='';

  //others will be back to display:none when this runs:

      document.getElementById('divbtn1Clicked').style.display='none';
          document.getElementById('divbtn2Clicked').style.display='none';
    document.getElementById('divbtn4Clicked').style.display='none';

}


function btn4() {

    document.getElementById('divbtn4Clicked').style.display='';

  //others will be back to display:none when this runs:

      document.getElementById('divbtn1Clicked').style.display='none';
          document.getElementById('divbtn2Clicked').style.display='none';
    document.getElementById('divbtn3Clicked').style.display='none';

}

