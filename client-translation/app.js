var textInp = document.querySelector("textarea[name='txtinput']");
const btn = document.querySelector("#btn");
var loader = $("#loader")
var fileNameUrl = ''
    // var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    // var serverUrl = "https://api.funtranslations.com/translate/minion.json";
    // var serverUrl = "http://localhost:8000/Translate_Vi_La";
async function tranlate() {
        chatGPT();

}
async function chatGPT() {
    $('#box2 .card-body').html(
            '<div class="d-flex justify-content-center">' +
            '<div class="spinner-border" role="status">' +
            ' <span class="visually-hidden">Loading...</span>' +
            '</div>' +
            ' </div>'
        )
        // outputValue = '';
    console.log("txtInput: ", textInp.value);
    var textValue = textInp.value;
    var serverUrl = `http://localhost:8000/chat_GPT?text=${textValue}`;
    const result = await fetch(serverUrl).then((response) => response.json());
    console.log("Hello: ", result);
    $('#box2 .card-body').html(result)
}

// $("#translate-btn").on('click', function() {
//     console.log('Translate file');
//     var blob = new Blob([uploadFile()], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "testfile1.txt");
// });

$('#pills-profile-tab').on('click', function() {
    $('#pills-home').css('display', 'none')
})
$('#pills-home-tab').on('click', function() {
    $('#pills-home').css('display', 'block')
})

$('.btn-wapper').on('click', function() {
    const dropArea = document.querySelector(".drop_box")
    const input = dropArea.querySelector("input");
    input.click()
})