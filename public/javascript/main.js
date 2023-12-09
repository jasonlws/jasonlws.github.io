$(document).ready(
    
    function () { 

        var bulletpoints = ["•", "‣", "⁃", "⁌", "⁍", "∙", "○", "●", "◘", "◦", "☙", "❥", "❧", "⦾", "⦿", "◉"];

        const fn_addenterbefore = function(content, searchforbeforeaddenter){
            content = $.map(content.split(searchforbeforeaddenter), $.trim).join("\n"+searchforbeforeaddenter);
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_addenterafterfullstop = function(content) {
            content = content.replaceAll(".", ".\n");
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_addenterafter = function(content, searchforafteraddenter){
            content = $.map(content.split(searchforafteraddenter), $.trim).join(searchforafteraddenter+"\n");
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_addenterbeforebulletpoint = function(content) {
            bulletpoints.forEach(function(bulletpoint){
                content = content.replaceAll(bulletpoint, "\n"+bulletpoint);
            });
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_addenterbeforeuppercase = function(content) {
            content = content.replace(/([A-Z])/g, '\n$1').trim();
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_addatthebeginning = function(content, additatthebeginning) {
            content = $.map(content.split("\n"), $.trim).join("\n" + additatthebeginning);
            return additatthebeginning + content;
        }

        const fn_addattheend = function(content, additattheend) {
            content = $.map(content.split("\n"), $.trim).join(additattheend + "\n");
            return content + additattheend;
        }

        const fn_copytoclipboard = function(content) {
            var tempTextarea = $('<textarea>');
            $('body').append(tempTextarea);
            tempTextarea.val(content).select();
            document.execCommand('copy');
            tempTextarea.remove();
            return content;
        }

        const fn_replace = function(content, searchfor, replacewith) {
            if(searchfor.length > 0) {
                content = content.replaceAll(searchfor, replacewith);
            }
            return content;
        }

        const fn_removebulletpoint = function(content) {
            bulletpoints.forEach(function(bulletpoint){
                content = content.replaceAll(bulletpoint, "");
            });
            bulletpoints.forEach(function(bulletpoint){
                content = content.replaceAll(bulletpoint, "");
            });
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_removeemptyline = function(content) {
            content = content.replace(/^\s*$(?:\r\n?|\n)/gm, "");
            content = $.map(content.split("\n"), $.trim).join("\n");
            return content;
        }

        const fn_removeenter = function(content) {
            content = content.replace(/(\r\n|\n|\r)/gm, " ").trim();
            return content;
        }

        const fn_removeextraspaces = function(content) {
            content = content.replace(/[ \t]{1,}/g, ' ')
            return content;
        }

        const fn_sort = function(content) {
            content = $.map(content.split("\n"), $.trim).sort().join("\n");
            return content;
        }

        $("#stepslist").sortable();

        $("#stepslist").on("click", "#delete", function() {
            $(this).closest("li").remove();
        });

        $("#addenterafter").click(function (d) {
            d.preventDefault();
            var searchforafteraddenter = $("#searchforafteraddenter").val();
            if(searchforafteraddenter.length > 0) {
                $("#searchforafteraddenter").val(null);
                $("#stepslist").append("<li actiontype=\"addenterafter," + encodeURIComponent(searchforafteraddenter) + "\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add Enter After [" + searchforafteraddenter + "]<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
            }
        });

        $("#addenterafterfullstop").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"addenterafterfullstop\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add Enter After Full Stop<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#addenterbefore").click(function (d) {
            d.preventDefault();
            var searchforbeforeaddenter = $("#searchforbeforeaddenter").val();
            if(searchforbeforeaddenter.length > 0) {
                $("#searchforbeforeaddenter").val(null);
                $("#stepslist").append("<li actiontype=\"addenterbefore," + encodeURIComponent(searchforbeforeaddenter) + "\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add Enter Before [" + searchforbeforeaddenter + "]<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
            }
        });

        $("#addenterbeforebulletpoint").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"addenterbeforebulletpoint\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add Enter Before Bullet Point<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#addenterbeforeuppercase").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"addenterbeforeuppercase\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add Enter Before Uppercase<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#addatthebeginning").click(function (d) {
            d.preventDefault();
            var additatthebeginning = $("#additatthebeginning").val();
            if(additatthebeginning.length > 0) {
                $("#additatthebeginning").val(null);
                $("#stepslist").append("<li actiontype=\"addatthebeginning," + encodeURIComponent(additatthebeginning) + "\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add [" + additatthebeginning + "] At the Beginning<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
            }
        });

        $("#addattheend").click(function (d) {
            d.preventDefault();
            var additattheend = $("#additattheend").val();
            if(additattheend.length > 0) {
                $("#additattheend").val(null);
                $("#stepslist").append("<li actiontype=\"addattheend," + encodeURIComponent(additattheend) + "\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Add [" + additattheend + "] At the End<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
            }
        });

        $("#clear").click(function (d) {
            d.preventDefault();    
            $("#stepslist").append("<li actiontype=\"clear\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Clear<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#copytoclipboard").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"copytoclipboard\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Copy to Clipboard<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#replace").click(function (d) {
            d.preventDefault();
            var searchfor = $("#searchfor").val();
            var replacewith = $("#replacewith").val();
            $("#searchfor").val(null);
            $("#replacewith").val(null);
            $("#stepslist").append("<li actiontype=\"replace," + encodeURIComponent(searchfor) + "," + encodeURIComponent(replacewith) + "\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Find [" + searchfor + "] Replace With [" + replacewith + "]<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });
        
        $("#removebulletpoint").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"removebulletpoint\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Remove Bullet Point<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#removeemptyline").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"removeemptyline\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Remove Empty Line<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#removeenter").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"removeenter\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Remove Enter<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#removeextraspaces").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"removeextraspaces\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Remove Extra Spaces<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#sort").click(function (d) {
            d.preventDefault();
            $("#stepslist").append("<li actiontype=\"sort\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>  Sort<span class=\"btn btn-outline-danger actionbutton\" id=\"delete\"><i class=\"fa-solid fa-trash\"></i></span></li>");
        });

        $("#runsteps").click(function (d) {
            d.preventDefault();
            var content = $("#content").val();
            $("#stepslist li").each(function() {
                var actiontype = $(this).attr("actiontype").split(",");
                console.log(actiontype);
                if (actiontype[0] == "addenterafter") {
                    content = fn_addenterafter(content, decodeURIComponent(actiontype[1]))
                } else if (actiontype[0] == "addenterafterfullstop") {
                    content = fn_addenterafterfullstop(content);
                } else if (actiontype[0] == "addenterbefore") {
                    content = fn_addenterbefore(content, decodeURIComponent(actiontype[1]))
                } else if (actiontype[0] == "addenterbeforebulletpoint") {
                    content = fn_addenterbeforebulletpoint(content);
                } else if (actiontype[0] == "addenterbeforeuppercase") {
                    content = fn_addenterbeforeuppercase(content);
                } else if (actiontype[0] == "addatthebeginning") {
                    content = fn_addatthebeginning(content, decodeURIComponent(actiontype[1]))
                } else if (actiontype[0] == "addattheend") {
                    content = fn_addattheend(content, decodeURIComponent(actiontype[1]))
                } else if (actiontype[0] == "clear") {
                    content = null;
                } else if (actiontype[0] == "copytoclipboard") {
                    content = fn_copytoclipboard(content);
                } else if (actiontype[0] == "replace") {
                    content = fn_replace(content, decodeURIComponent(actiontype[1]), decodeURIComponent(actiontype[2]))
                } else if (actiontype[0] == "removebulletpoint") {
                    content = fn_removebulletpoint(content);
                } else if (actiontype[0] == "removeemptyline") {
                    content = fn_removeemptyline(content);
                } else if (actiontype[0] == "removeenter") {
                    content = fn_removeenter(content);
                } else if (actiontype[0] == "removeextraspaces") {
                    content = fn_removeextraspaces(content);
                } else if (actiontype[0] == "sort") {
                    content = fn_sort(content);
                } 
                document.querySelector("#content").value = content;
            });
        });

        $("#clearsteps").click(function (d) {
            d.preventDefault();
            $("#stepslist").empty();
        });

        $("#add").click(function (d) {
            d.preventDefault();
            $("#stepslist li:last").after("<li id=\"4\" class=\"default\"><i class=\"fa-solid fa-bars\"></i>Product X</li>");
        });

    }
);
