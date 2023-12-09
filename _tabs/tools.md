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
<textarea id="content" name="content" rows="20" style="white-space: nowrap; overflow-x: auto; width: 100%"></textarea><br/>
<p>
    Find:&nbsp;<input type="text" id="searchfor">&nbsp;Replace:&nbsp;<input type="text" id="replacewith">&nbsp;<span class="btn btn-outline-primary" id="replace">Replace</span>
</p>
<p>
    Before:&nbsp;<input type="text" id="searchforbeforeaddenter">&nbsp; After:&nbsp;<input type="text" id="searchforafteraddenter">&nbsp;<span class="btn btn-outline-primary" id="addenter">Add Enter</span>
</p>
<p>
    <span class="btn btn-outline-warning" id="addenterbeforeuppercase">Add Enter Before Uppercase</span>
    <span class="btn btn-outline-warning" id="addenterafterfullstop">Add Enter After Full Stop</span>
</p>
<p>
    <span class="btn btn-outline-info" id="removeextraspaces">Remove Extra Spaces</span>
    <span class="btn btn-outline-info" id="removeemptyline">Remove Empty Line</span>
    <span class="btn btn-outline-info" id="removeenter">Remove Enter</span>
</p>
<p>
    <span class="btn btn-outline-warning" id="addenterbeforebulletpoint">Add Enter Before Bullet Point</span>
    <span class="btn btn-outline-info" id="removebulletpoint">Remove Bullet Point</span>
    Bullet Points include [ • ‣ ⁃ ⁌ ⁍ ∙ ○ ● ◘ ◦ ☙ ❥ ❧ ⦾ ⦿ ◉ ]
</p>
<p>
    <span class="btn btn-outline-info" id="sort">Sort</span>
</p>
<p>
    <span class="btn btn-outline-success" id="copy">Copy to Clipboard</span>&nbsp;
    <span class="btn btn-outline-danger" id="clear">Clear</span>
</p>

<style type="text/css">
    table th, table td
    {
        width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
    }
    .selected
    {
        background-color: #666;
        color: #fff;
    }
    #sortable-8{ list-style-type: none; margin: 0; 
    padding: 0; width: 25%; float:left;}
    #sortable-8 li{ margin: 0 3px 3px 3px; padding: 0.4em; 
    padding-left: 1.5em; font-size: 17px; height: 55px; }
    .default {
        background: #d4d4d4;
        border: 1px solid #DDDDDD;
        color: #333333;
    }
</style>
<p>
    <span class="btn btn-outline-danger" id="runit">Run It</span>
    <span class="btn btn-outline-danger" id="add">Add</span>
</p>

<ul id="sortable-8">
    <li id="1" class="default"><i class="fa-solid fa-bars"></i>Product 1&nbsp;<span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></li>
    <li id="2" class="default"><i class="fa-solid fa-bars"></i>Product 2&nbsp;<span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></li>
    <li id="3" class="default"><i class="fa-solid fa-bars"></i>Product 3&nbsp;<span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></li>
    <li id="4" class="default"><i class="fa-solid fa-bars"></i>Product 4&nbsp;<span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></li>
</ul>

<table id="tblLocations" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th>Step </th>
        <th>Action</th>
    </tr>
    <tr>
        <td value="a"><i class="fa-solid fa-bars"></i>1</td>
        <td> Goa</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
    <tr>
        <td value="a">2</td>
        <td>Mahabaleshwar</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
    <tr>
        <td value="a">3</td>
        <td>Kerala</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
    <tr>
        <td value="a">4</td>
        <td>Kashmir</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
    <tr>
        <td value="a">5</td>
        <td>Ooty</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
    <tr>
        <td value="a">6</td>
        <td>Simla</td>
        <td><span class="btn btn-outline-danger" id="delete"><i class="fa-solid fa-trash"></i></span></td>
    </tr>
</table>
