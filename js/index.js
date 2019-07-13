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
function showpostmodal(x)
{
    var postmodal=document.getElementById('postmodal');
    if(x==0)
        postmodal.setAttribute('style','display:none');
    else
        postmodal.setAttribute('style','display:block');
}
showpostmodal(0);
function closePostModal()
{
    var modalelement=document.getElementById('postmodal');
    var body=document.querySelector('body');
    body.style.display='';
    modalelement.style.display='none';
}
