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
    Before:&nbsp;<input type="text" id="searchforbeforeaddenter">&nbsp; After:&nbsp;<input type="text" id="searchforafteraddenter">&nbsp;<span class="btn btn-outline-primary" id="addenter">Add Enter</span>
</p>
<p>
    <span class="btn btn-outline-warning" id="addenterbeforeuppercase">Add Enter Before Uppercase</span>
    <span class="btn btn-outline-warning" id="addenterafterfullstop">Add Enter After Full Stop</span>
</p>
<p>
    <span class="btn btn-outline-info" id="removeextraspaces">Remove Extra Spaces</span>
    <span class="btn btn-outline-info" id="removeextraenter">Remove Extra Enter</span>
    <span class="btn btn-outline-info" id="removeenter">Remove Enter</span>
</p>
<p>
    <span class="btn btn-outline-warning" id="addenterbeforebulletpoint">Add Enter Before Bullet Point</span>
    <span class="btn btn-outline-info" id="removebulletpoint">Remove Bullet Point</span>
    Bullet Points include [ • ‣ ⁃ ⁌ ⁍ ∙ ○ ● ◘ ◦ ☙ ❥ ❧ ⦾ ⦿ ◉ ]
</p>
<p>
    <span class="btn btn-outline-success" id="copy">Copy to Clipboard</span>&nbsp;
    <span class="btn btn-outline-danger" id="clear">Clear</span>
</p>



