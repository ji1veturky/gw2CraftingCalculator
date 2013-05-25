$(document).ready(function(){  
    //var cIgnotQty = $("#cIgnotQty").val();
    
    var TestQoute = "This is a testQoute";
    
    
    // $("#cIgnotQty").keypress(function(e) {
        // if (e.which == 13) {
            // var cIgnotQty = $(this).val();
// 
            // var cOreQty = cIgnotQty * 2;
// 
            // $(".result").append("<div> Copper Ignot: " + cIgnotQty + "</div><div> Copper Ore: " + cOreQty + "</div>");
            // $(this).val("");
        // }
    // })
    
    
        $("#cIgnotQty").keypress(function(e) {
        if (e.which == 13) {
            var cIgnotQty = $(this).val();

            var cOreQty = cIgnotQty * 2;

            
            if (cIgnotQty == cIgnotQty) {
               console.log("Yay!"); 
            } else {
                $(".result").text(cIgnotQty);
                
            }
            
            $(this).val("");
            
           
        }
    })
   

    
   
    
       
})
