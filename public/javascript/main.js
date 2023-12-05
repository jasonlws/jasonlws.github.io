$(document).ready(function () { 

    $("#replace").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var searchfor = $("#searchfor").val();
        var replacewith = $("#replacewith").val();
        var replacedText = content.replaceAll(searchfor, replacewith);
        $("#content").val(replacedText);
    });

    $("#addenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var searchforaddenter = $("#searchforaddenter").val();
        var newlines = content.replaceAll(searchforaddenter, searchforaddenter+"\n");
        newlines = $.map(newlines.split("\n"), $.trim).join("\n");
        $("#content").val(newlines);
    });

    $("#addenterbeforeuppercase").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var newlines = content.replace(/([A-Z])/g, '\n$1').trim();
        $("#content").val(newlines);
    });

    $("#removeextraspaces").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var removeextraspaces = content.replace(/\s+/g, ' ').trim();
        $("#content").val(removeextraspaces);
    });

    $("#removeenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var newlines = content.replace(/(\r\n|\n|\r)/gm, " ");
        $("#content").val(newlines);
    });

    $("#copy").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var tempTextarea = $('<textarea>');
        $('body').append(tempTextarea);
        tempTextarea.val(content).select();
        document.execCommand('copy');
        tempTextarea.remove();
    });

    $("#clear").click(function (d) {
        d.preventDefault();    
        $("#content").val(null);
        $("#searchfor").val(null);
        $("#replacewith").val(null);
    });

});