var inputBox = document.getElementById("input");

inputBox.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      doSpeak();
    }
});
