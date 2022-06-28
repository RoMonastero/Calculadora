const result = document.getElementById("result")

function clean() {
    if (result.textContent != "0") {
        result.innerText = "0"
    }
}

function addNumber(num) {
    if (result.textContent.length <= 19) {
        if (result.textContent == "0") {
            result.innerText = num
        }else{
            result.innerText += num
        } 
    }
    
}

function addoperator(operator) {
    if (result.textContent.length <= 19) {
        if (result.textContent != "0" && !(result.textContent.endsWith('+') || result.textContent.endsWith('-') || result.textContent.endsWith('*') || result.textContent.endsWith('/'))) {
            result.innerText += operator
         } 
    } 
}

function addDot(){  
    if (result.textContent.length <= 19) {
        var numberList = result.textContent.split(/[-+*/]+/)
        var lastNumber = numberList[numberList.length-1]
        if (!lastNumber.includes('.')) {
            if (lastNumber == '') {
                result.innerText += '0.'  
            } else {
                result.innerText += '.'  
            }
             
        }
         
    }
}

function calculate() {
    if (result.textContent.endsWith('+') || result.textContent.endsWith('-') || result.textContent.endsWith('*') || result.textContent.endsWith('/')) {
        alert("Não é possivel fazer uma conta com um operador como útlimo elemento")
    }else{
        result.innerText = eval(result.textContent)      
    } 
}

function backSpace() {
    if (result.textContent != "0") {
        if (result.textContent.substring(0, result.textContent.length -1) == '') {
            result.innerText = '0' 
        } else {
            result.innerText = result.textContent.substring(0, result.textContent.length -1)
        }    
    }  
}