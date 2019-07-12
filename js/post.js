function editblog()
{
    var buttonChange=document.getElementById('editButton');
    buttonChange.innerHTML='<button onclick="saveblog()">Save <i class="fa fa-save"></i></button>';
    changeBlog(1);
}
function saveblog()
{
    var buttonChange=document.getElementById('editButton');
    buttonChange.innerHTML='<button onclick="editblog()">Edit <i class="fa fa-edit"></i></button>';
    changeBlog(0);
}
function changeBlog(x)
{
    var blogT=document.getElementById('blogTitleNew');
    var blogB=document.getElementById('blogBody');
    console.log(blogT);
    console.log(blogB);
    if(x==1)
    {
        blogB.setAttribute('contentEditable','true');
        blogT.setAttribute('contentEditable','true');
    }
    else{
        blogB.setAttribute('contentEditable','false');
        blogT.setAttribute('contentEditable','false')

    }
}
