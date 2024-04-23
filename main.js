$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('00000000000')
    $('#cep').mask('00000000')

    $('form').validate({
        rules : {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true 
            },
            CPF :{
                required: true, 
            },
            rua: {
                required: true
            },
            número: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            },
            cep : {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Campo obrigatório.',
            telefone: 'Campo obrigatório.',
            email: 'Campo obrigatório. ',
            CPF: 'Campo obrigatório. ',
            rua: 'Campo obrigatório. ',
            número: 'Campo obrigatório. ',
            cidade: 'Campo obrigatório. ',
            estado: 'Campo obrigatório. ',
            cep: 'Campo obrigatório.' 
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});