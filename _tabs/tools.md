---
# the default layout is 'page'
icon: fas fa-wrench
order: 5
---

## Text Processing
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" defer></script>
<script  src="../public/javascript/main.js"></script>
<style type="text/css">
    #actiontable {
        width: 100%;
    }
    #actiontable th, #actiontable td {
        width: 50%;
        padding: 5px;
        border: 1px solid #ccc;
        vertical-align: top;
    }
    #actions { 
        list-style-type: none; 
        margin: 0; 
        padding: 0; 
        width: 100%; 
        float:left;
    }
    #actions li{ 
        margin: 0 3px 3px 3px; 
        padding: 0.4em; 
        padding-left: 1.5em; 
        font-size: 17px; 
        height: 55px; 
    }
    #stepslist { 
        list-style-type: none; 
        margin: 0; 
        padding: 0; 
        width: 100%; 
        float:left;
    }
    #stepslist li{ 
        margin: 0 3px 3px 3px; 
        padding: 0.4em; 
        padding-left: 1.5em; 
        font-size: 17px; 
        height: 55px; 
    }
    .default {
        background: #d4d4d4;
        border: 1px solid #DDDDDD;
        color: #333333;
    }
    .actionbutton {
        float: right;
    }
    #runsteps {
        width: 100%
    }
</style>
<p>
    <textarea id="content" name="content" rows="20" style="overflow-x: auto; width: 100%"></textarea><br/>
    Bullet Points include [ • ‣ ⁃ ⁌ ⁍ ∙ ○ ● ◘ ◦ ☙ ❥ ❧ ⦾ ⦿ ◉ ]
</p>
<table id="actiontable" cellpadding="0" cellspacing="0">
    <tr>
        <th colspan="2"><span class="btn btn-outline-success actionbutton" id="runsteps">Run Steps</span></th>
    </tr>
    <tr>
        <th>Actions</th>
        <th>Steps (Draggable)<span class="btn btn-outline-danger actionbutton" id="clearsteps">Clear Steps</span></th>
    </tr>
    <tr>
        <td>
            <ul id="actions">
                <li class="default">Add Enter After&nbsp;<input type="text" id="searchforafteraddenter" size="2"><span class="btn btn-outline-success actionbutton" id="addenterafter"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add Enter After Full Stop<span class="btn btn-outline-success actionbutton" id="addenterafterfullstop"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add Enter Before&nbsp;<input type="text" id="searchforbeforeaddenter" size="2"><span class="btn btn-outline-success actionbutton" id="addenterbefore"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add Enter Before Bullet Point<span class="btn btn-outline-success actionbutton" id="addenterbeforebulletpoint"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add Enter Before Uppercase<span class="btn btn-outline-success actionbutton" id="addenterbeforeuppercase"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add <input type="text" id="additatthebeginning" size="2"> At The Beginning<span class="btn btn-outline-success actionbutton" id="addatthebeginning"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Add <input type="text" id="additattheend" size="2"> At The End<span class="btn btn-outline-success actionbutton" id="addattheend"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Clear<span class="btn btn-outline-success actionbutton" id="clear"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Copy to Clipboard<span class="btn btn-outline-success actionbutton" id="copytoclipboard"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Find <input type="text" id="searchfor" size="2"> Replace With <input type="text" id="replacewith" size="2"><span class="btn btn-outline-success actionbutton" id="replace"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Remove Bullet Point<span class="btn btn-outline-success actionbutton" id="removebulletpoint"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Remove Empty Line<span class="btn btn-outline-success actionbutton" id="removeemptyline"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Remove Enter<span class="btn btn-outline-success actionbutton" id="removeenter"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Remove Extra Spaces<span class="btn btn-outline-success actionbutton" id="removeextraspaces"><i class="fa-solid fa-square-plus"></i></span></li>
                <li class="default">Sort<span class="btn btn-outline-success actionbutton" id="sort"><i class="fa-solid fa-square-plus"></i></span></li>
            </ul>
        </td>
        <td>
            <ul id="stepslist">
            </ul>
        </td>
    </tr>
</table>

