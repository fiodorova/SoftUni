function extract(path){
    let tokens = path.split('\\');
    let filename = tokens.pop();

    let index = filename.lastIndexOf('.');

    let name = filename.substring(0, index);
    let ext = filename.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}

extract('C:\\Internal\\training-internal\\Template.pptx')
extract('C:\\Internal\\training-internal\\Template.bak.pptx')
extract('C:\\Projects\\Data-Structures\\LinkedList.cs')