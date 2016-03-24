
function validateSubmit()
{
    if (document.getElementById("uploadedFile").value == "")
    {
        alert("Must choose a file!");
        return false;
    }
    
    alert("File Uploaded!");
    window.location.reload();
    return true;
}