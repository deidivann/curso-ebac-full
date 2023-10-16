$(document).ready(function () {

    $('#formas').submit(function (e) {
        e.preventDefault();

        var novaTarefa = $('#formas input').val();

        if (novaTarefa.trim() !== '') {
            $('#lista-tarefa').append('<li>' + novaTarefa + '</li>');

            $('#formas input').val('');
        }
    });

    $('#lista-tarefa').on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});
