var postList=document.getElementsByClassName("post-desc");
var trashhtml='<i class="fa fa-trash" id="trashicon"></i>';
var ellipsishtml='<a href="post.html"><i class="fa fa-ellipsis-h" id="ellipicon"></i></a>';
for(var i=0;i<postList.length;i++)
{
    postList[i].innerHTML+=trashhtml+ellipsishtml;
}
