function callback(data){
    return data;
}

export function imageToBase64(path,callback){
   var filesSelected = path;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        var fileReader = new FileReader();

        fileReader.onload = function(fileLoadedEvent)
        {
            callback(fileLoadedEvent.target.result)
        };

        fileReader.readAsDataURL(fileToLoad);
    }
}
