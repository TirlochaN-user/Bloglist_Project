var postList=document.getElementsByClassName("post-desc");
var trashhtml='<button onclick="showDeleteModal(1)"><i class="fa fa-trash" id="trashicon"></i></button>';
var ellipsishtml='<a href="post.html"><i class="fa fa-ellipsis-h" id="ellipicon"></i></a>';
for(var i=0;i<postList.length;i++)
{
    postList[i].innerHTML+=trashhtml+ellipsishtml;
}

function showDeleteModal(x)
{
    var modalhtml=document.getElementById('deletemodal');
    if(x==0)
        modalhtml.setAttribute('style','display:none');
    else
        modalhtml.style.display='block';
}
showDeleteModal(0);
function closeDeleteModal()
{
    var modalelement=document.getElementById('deletemodal');
    var body=document.querySelector('body');
    body.style.display='';
    modalelement.style.display='none';
}
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