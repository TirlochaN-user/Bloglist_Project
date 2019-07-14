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
var likes=0;
function likefunc()
{
    var lbutton=document.getElementById('likeB');
    var lpara=document.getElementById('likePara');
    if(likes==0)
    {
        lpara.innerHTML="Be the first one to like this!";
        likes++;
    }
    else
    {
        lpara.innerHTML=`${likes} people have liked this`;
        lbutton.innerHTML='<i class="fa fa-thumbs-up"></i>Liked';
        likes++;

    }
}
likefunc();
function commentadd()
{
    var comments=document.getElementById('allcomment');
    var commentbox=document.getElementById('commenttextarea');
    if(commentbox.value)
    {
        var newcomment=`<div class="comment">${commentbox.value}</div>`;
        comments.innerHTML=newcomment+comments.innerHTML;
        commentbox.value='';
    }
}
/* MODAL PART FOR SIGN AND SIGN UP */
function showSignInModal(x)
{
    var modalelement=document.getElementById('myModalSignin');
    if(x==0)
        modalelement.setAttribute('style','display:none');
    else
    modalelement.setAttribute('style','display:block');
}
showSignInModal(0);
function closeSignInModal()
{
    var modalelement=document.getElementById('myModalSignin');
    var body=document.querySelector('body');
    body.style.display='';
    modalelement.style.display='none';

}
function showSignUpModal(x)
{
    var modalelement=document.getElementById('myModalSignUp');
    if(x==0)
        modalelement.setAttribute('style','display:none');
    else if(x==1)
        modalelement.setAttribute('style','display:block');
    else
    {
        modalelement.setAttribute('style','display:block');
        closeSignInModal();
    }
}
showSignUpModal(0);
function closeSignUpModal()
{
    var modalelement=document.getElementById('myModalSignUp');
    var body=document.querySelector('body');
    body.style.display='';
    modalelement.style.display='none';

}
