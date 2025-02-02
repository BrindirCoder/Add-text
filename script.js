$('button').on ('click',function(){
     var name = $("input").val();

    //  alert(name);   // When you press the Add button, anything you wrote on it will be changed to an alert

      $("tbody").prepend("<tr><td>"+ name +"</td><td><a class='text-danger' href='#''>Delete</a></td> </tr>")  // Anything you write on the button will be added to the top

     // $("tbody").append("<tr><td>"+ name +"</td><td><a class='text-danger' href='#''>Delete</a></td> </tr>")  // Anything you write on the button will be added to the down
})