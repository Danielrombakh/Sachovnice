function getcube() {

    var height = document.getElementById("collumn").value;
    var width = document.getElementById("row").value;

    for(var h = 0; h < height; h++) {
        for(var w = 0; w < width; w++)  {

            document.write("⌷");
        }
        document.write("<br>");
    }
    
}






