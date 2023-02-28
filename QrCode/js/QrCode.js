var botao = document.querySelector('#Gerar');

    botao.addEventListener("click", function(){
        
        var conteudo = document.querySelector('#conteudo').value;
        var googleApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
        var qrcode = googleApi + conteudo;
        document.querySelector('#QrCode').src = qrcode;
    })

    // https://developers.google.com