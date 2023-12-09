$(document).ready(function () { 

    var bulletpoints = ["•", "‣", "⁃", "⁌", "⁍", "∙", "○", "●", "◘", "◦", "☙", "❥", "❧", "⦾", "⦿", "◉"];

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
        bulletpoints.forEach(function(bulletpoint){
            content = content.replaceAll(bulletpoint, "\n"+bulletpoint);
        });
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
        bulletpoints.forEach(function(bulletpoint){
            content = content.replaceAll(bulletpoint, "");
        });
        bulletpoints.forEach(function(bulletpoint){
            content = content.replaceAll(bulletpoint, "");
        });
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#removeextraspaces").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/[ \t]{1,}/g, ' ')
        $("#content").val(content);
    });

    $("#removeemptyline").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
        content = $.map(content.split("\n"), $.trim).join("\n");
        $("#content").val(content);
    });

    $("#removeenter").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = content.replace(/(\r\n|\n|\r)/gm, " ").trim();
        $("#content").val(content);
    });

    $("#sort").click(function (d) {
        d.preventDefault();
        var content = $("#content").val();
        content = $.map(content.split("\n"), $.trim).sort().join("\n");
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

    $("#runit").click(function (d) {
        d.preventDefault();    
        $('#tblLocations tr').each(function() {
            // need this to skip the first row
            if ($(this).find("td:first").length > 0) {
              console.log($(this).find("td:first").attr("value"));
            }
          });
          $('#sortable-8 li').each(function() {
            console.log($(this).attr("id"));
          });
    });

    $("#add").click(function (d) {
        d.preventDefault();
        $("#tblLocations tr:last").after("<tr><td value=\"t\">a</td><td>a</td><td>a</td></tr>");
        $("#sortable-8 li:last").after("<li id=\"4\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>Product X</li>");
    });

    $("#sortable-8").on("click", "#delete", function() {
        $(this).closest("li").remove();
     });

    $("#tblLocations").on("click", "#delete", function() {
        $(this).closest("tr").remove();
     });

    $("#sortable-8").sortable();

    $("#tblLocations").sortable({
        items: 'tr:not(tr:first-child)',
        cursor: 'pointer',
        axis: 'y',
        dropOnEmpty: false,
        placeholder: "sortable-placeholder",
        start: function (e, ui) {
            ui.item.addClass("selected");
        },
        stop: function (e, ui) {
            ui.item.removeClass("selected");
            // $(this).find("tr").each(function (index) {
            //     if (index > 0) {
            //         $(this).find("td").eq(2).html(index);
            //     }
            // });
        }
    });

});
