import {rename,existsSync}  from "fs";
import {extname,join,dirname,basename} from "path";

const usedFileNames = new Set();
console.log(usedFileNames)

function generateUniqueFileName(directoryPath, fileName, index,) {
  const fileExtension = extname(directoryPath);
  const baseName = basename(fileName, fileExtension);

  const uniqueFileName = `${baseName}-${index}${fileExtension}`;
  const newPath = join(directoryPath, uniqueFileName);
console.log(fileExtension)
  return newPath;
}

function getUniqueFileName(directoryPath, newFileName ,ext) {
  let index = 1;
  let uniqueFilePath = generateUniqueFileName(  
    directoryPath,
    newFileName,
    index
  );

  while (existsSync(uniqueFilePath) || usedFileNames.has(uniqueFilePath)) {
    index++;
  const newName  = newFileName+ext
    uniqueFilePath = generateUniqueFileName(directoryPath, newName, index);
  }

  return uniqueFilePath;    
}

const renameFile =(oldFilePath, newFileName,ext, callback) =>{
  // Extract the directory path from the old file path
  const directoryPath = dirname(oldFilePath);

  // Check if the new file path already exists
  const newFilePath = getUniqueFileName(directoryPath, newFileName, ext);

  // Store the new file path in the usedFileNames set
  usedFileNames.add(newFilePath);

  // Perform the renaming operation
  rename(oldFilePath, newFilePath, (err) => {
    if (err) {
      // Handle any errors that occur during the renaming process
      console.error("Error renaming file:", err);
      if (callback) {
        callback(err);  
      }
    } else {
      // File renaming was successful
      console.log(`File renamed to: ${newFilePath}`);
      if (callback) {
        callback(null, newFilePath);
      }  
    }
  });
}
export default renameFile
