---
# the default layout is 'page'
icon: fas fa-wrench
order: 6
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-csharp.min.js"></script>
<script  src="../public/javascript/onenote/main.js"></script>
<style type="text/css">
/* This text is in Consolas */
#code-container { 
	font-family: Consolas,monaco,monospace !important;
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
</table>
<div id="code-container"></div>