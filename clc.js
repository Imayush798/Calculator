
        let outputScreen = document.getElementById("output-screen");
        function display(num){
            outputScreen.value += num;
        }
        
        function calculate(){
            try {
                outputScreen.value = eval(outputScreen.value);
            } 
            catch (error) 
            {
                alert("invalid")
            }
        }
        function del(){
            outputScreen.value = outputScreen.value.slice(0, -1);
        }
        function clr(){
            outputScreen.value = "";
        }
        function sqrt(){
            outputScreen.value = Math.sqrt(outputScreen.value,2);
        }
        function log() {
            outputScreen.value = Math.log(outputScreen.value);
    }