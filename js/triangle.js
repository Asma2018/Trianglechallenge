
 function findTriangleType() { //Function is described by name findtringle type and the parseInt() function parses a string and returns an integer

       var a = parseInt(document.triangleform.txt1.value);//The parseInt function converts its first argument to a string, parses it, and returns an integer or NaN.
       var b = parseInt(document.triangleform.txt2.value);// get value-get elementbyname
       var c = parseInt(document.triangleform.txt3.value);//document.formName.ElementName.value;

    if (isNaN(a) || isNaN(b) || isNaN(c)) { //check if the input is not NAN
      //alert('Please enter Number only.');
      return;
       } else {
    if (a <= 0 || b <= 0 || c <= 0) {
      //alert('Please enter valid number.');
      //innerHTML property is used for getting or replacing the content of HTML elements
      //getElementById method used id="results" to find the element
      document.getElementById('results').innerHTML = 'please enter valid number';
      return;
    }
    
    else if (a == b && b ==c) {//check if a is equal to b and b is equal to c {Equi-lateral}
           document.getElementById('results').innerHTML = 'Triangle Type is Equilateral';
         //alert("Equalateral");
       } else if (a == b &&b !=c) {//check if A is equal to b but b is not equal to c{Iso-sce-les}
        // alert("Isosceles");
        document.getElementById('results').innerHTML = 'Triangle Type is Isosceles';
       }
       //else if (a != b!=c!= a) {//check if a is not equal to b and b is not equal to c {Sca-lene}
          //alert("Scalene!");
          //}
       else  {
         // alert("Scalene!");
         document.getElementById('results').innerHTML = 'Triangle Type is Scalene!';
          }
       }
       }

  