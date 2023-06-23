var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var camera = document.getElementById('camera');
function start() {
    document.getElementById('textbox').innerHTML = '';
    recognition.start();
}
function speak() {
    var fala = window.speechSynthesis;
    conteudo = 'tirando sua selfie em 5 segundos';
    var converter = new SpeechSynthesisUtterance(conteudo);
    fala.speak(converter);
    Webcam.attach(camera);
}
recognition.onresult = function (event) {
    console.log(event);
    var texto = event.results[0][0].transcript;
    document.getElementById('textbox').innerHTML = texto;
    if (texto == 'tire minha selfie') {
        speak();
        setTimeout(function () {
            takeSelfie();
            Save();
        },5000);
    }

}
Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function takeSelfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById('result').innerHTML = '<img id = "selfie" src= "' + data_uri + '"/>';
    });
}
function Save(){
    imagem = document.getElementById('selfie').src;
    document.getElementById('link').href = imagem;
    document.getElementById('link').click();
}
