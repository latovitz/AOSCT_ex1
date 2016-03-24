
function validateSubmit()
{
    if (document.getElementById("uploadedFile").value == "")
    {
        return false;
    }
    
    alert("File Uploaded!");
    //location.reload();
    return true;
}