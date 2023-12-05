---
# the default layout is 'page'
icon: fas fa-wrench
order: 5
---

## Text Processing
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script  src="../public/javascript/main.js"></script>
<textarea id="content" name="content" rows="20" cols="100"></textarea><br/>
<p>
    Find:&nbsp;<input type="text" id="searchfor">&nbsp;Replace:&nbsp;<input type="text" id="replacewith">&nbsp;<span class="btn btn-outline-primary" id="replace">Replace</span>
</p>
<p>
    Add Enter After:&nbsp;<input type="text" id="searchforaddenter">&nbsp;<span class="btn btn-outline-primary" id="addenter">Add Enter</span>
</p>
<p>
    <span class="btn btn-outline-primary" id="addenterbeforeuppercase">Add Enter Before Uppercase</span>
    <span class="btn btn-outline-primary" id="removeextraspaces">Remove Extra Spaces</span>
    <span class="btn btn-outline-primary" id="removeenter">Remove Enter</span>
</p>
<p>
    <span class="btn btn-outline-success" id="copy">Copy to Clipboard</span>&nbsp;
    <span class="btn btn-outline-danger" id="clear">Clear</span>
</p>