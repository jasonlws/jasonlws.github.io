$(document).ready(function () { 

    $("#replace").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var searchfor = $("#searchfor").val();
        var replacewith = $("#replacewith").val();
        if(searchfor.length > 0) {
            content = content.replaceAll(searchfor, replacewith);
        }
        $("#content").val(content);
    });

    $("#addenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        var searchforafteraddenter = $("#searchforafteraddenter").val();
        var searchforbeforeaddenter = $("#searchforbeforeaddenter").val();
        if(searchforafteraddenter.length > 0) {
            content = $.map(content.split(searchforafteraddenter), $.trim).join(searchforafteraddenter+"\n");
        }
        if(searchforbeforeaddenter.length > 0) {
            content = $.map(content.split(searchforbeforeaddenter), $.trim).join("\n"+searchforbeforeaddenter);
        }
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#addenterbeforeuppercase").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/([A-Z])/g, '\n$1').trim();
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#addenterbeforebulletpoint").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replaceAll("•", "\n•");
        content = content.replaceAll("‣", "\n‣");
        content = content.replaceAll("⁃", "\n⁃");
        content = content.replaceAll("⁌", "\n⁌");
        content = content.replaceAll("⁍", "\n⁍");
        content = content.replaceAll("∙", "\n∙");
        content = content.replaceAll("○", "\n○");
        content = content.replaceAll("●", "\n●");
        content = content.replaceAll("◘", "\n◘");
        content = content.replaceAll("◦", "\n◦");
        content = content.replaceAll("☙", "\☙n");
        content = content.replaceAll("❥", "\❥n");
        content = content.replaceAll("❧", "\❧n");
        content = content.replaceAll("⦾", "\n⦾");
        content = content.replaceAll("⦿", "\n⦿");
        content = content.replaceAll("◉", "\n◉");
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content.trim());
    });

    $("#addenterafterfullstop").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replaceAll(".", ".\n");
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#removebulletpoint").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replaceAll("•", "");
        content = content.replaceAll("‣", "");
        content = content.replaceAll("⁃", "");
        content = content.replaceAll("⁌", "");
        content = content.replaceAll("⁍", "");
        content = content.replaceAll("∙", "");
        content = content.replaceAll("○", "");
        content = content.replaceAll("●", "");
        content = content.replaceAll("◘", "");
        content = content.replaceAll("◦", "");
        content = content.replaceAll("☙", "");
        content = content.replaceAll("❥", "");
        content = content.replaceAll("❧", "");
        content = content.replaceAll("⦾", "");
        content = content.replaceAll("⦿", "");
        content = content.replaceAll("◉", "");
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#removeextraspaces").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/\s+/g, ' ').trim();
        $("#content").val(content);
    });

    $("#removeextraenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/(\r\n|\n|\r)+/gm, "\n");
        $("#content").val(content);
    });

    $("#removeenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/(\r\n|\n|\r)/gm, " ");
        $("#content").val(content);
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
        $("#searchforbeforeaddenter").val(null);
        $("#searchforafteraddenter").val(null);
    });

});