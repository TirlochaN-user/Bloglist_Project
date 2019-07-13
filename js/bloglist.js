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
