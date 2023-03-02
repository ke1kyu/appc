var sum = 0; // 計算結果を保持する変数

// inputの値が変更された時
function inputCheck() {
    var inputMin = Number(document.getElementById("min").value);
    var inputSec = Number(document.getElementById("sec").value);
    var inputFps = Number(document.getElementById("fps").value);

    sum = (inputMin * 60 + inputSec) * inputFps + 1;

    document.getElementById("result").innerHTML = '計算結果 = ' + sum;
}

// コピーボタンを押下した時
function copy(){
    navigator.clipboard.writeText(sum);
}
