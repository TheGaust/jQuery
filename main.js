$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTRF = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${novaTRF}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $('#nova-tarefa').val('')
        $("li").click(function() {
            $(this).addClass("riscado");
        });
        $('#nova-tarefa').val("");
    })

    $('#cancel').click(function() {
        $('form').slideUp();
    })

})
