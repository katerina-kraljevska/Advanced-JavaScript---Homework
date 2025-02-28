// Importing built-in Node.js modules
import path from "path"; // Handles file and directory paths
import fs from "fs"; // Provides file system operations (read/write files, directories, etc.)
import os from "os"; // Retrieves operating system information
import querystring from "querystring"; // Retrieves data from api query parameters
import { fileURLToPath } from "url";

// Importing NPM packages
import { v4 as uuidv4 } from "uuid";

const absoluteFilePath =
  "D:SEDCSEDC13\\04.NodeJSBasicmkwd13-js-05-nodejs-basicG1Class02-built_in_modulescode\filesystemindex.js";
// Get  __filename and __dirname equivalents for ES modules
const __filename = fileURLToPath(import.meta.url);
//current file path
console.log(__filename);
console.log(import.meta.url);

//current dirstory path
const __dirname = path.dirname(__filename);
console.log(__dirname);

//file extension
const fileExtension=path.extname(__filename);
console.log("File extension", fileExtension);

//file name
const fileName=path.basename(__filename);
console.log("File name",fileName);

//directory path, moze i da nema metoda koja go vrakja imeto na directory
const directoryName=path.dirname(__filename);
console.log(directoryName);

//directory name
const directoryName1=path.basename(path.dirname(__dirname));
console.log(directoryName1);

//WORKING WITH FILE SYSTEM
//defined directory path
const dirPath = path.join(__dirname, "test-folder");
console.log(dirPath); 
//working with filesystem, kreiranje na direktory sinhrono, ja racuna za asinhrono zosto se izvrsuva na masina na koja nema kontrola
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath)//creates a new directory synchronously
  console.log("Directory successfully created.");
}
else{
  console.log("Folder already exists");
}
//so sekoj refresh se rekreira ovoj test folder 

//define a file path inside the newly created folder
const filePath = path.join(dirPath, "hello.txt");

//write text content to file
fs.writeFileSync(filePath,"Hello, this text has been written via js code");
//dinamicno kreiranje na pateki

//kako da pristapime do file i ja procita cela sodrzina od file-ot

//read file content syncronously
const content= fs.readFileSync(filePath,"utf8"); //reads the content of the file
console.log(content);

//list all content in the current directory
const files= fs.readdirSync(__dirname);
console.log(files);

//OS MODULE

//operativen sistem 
const platform=os.platform();
console.log(platform); //win23 linux

const arhitecture=os.arch();
console.log(arhitecture); //CPU architecture

const cpuCores= os.cpus(); //CPU cores
console.log(cpuCores);

const cpuCoresNum= os.cpus().length; //number of CPU cores
console.log(cpuCoresNum);

const totalMemory=(os.totalmem()/1024/1024/1024).toFixed();
console.log(totalMemory); //bytes

const userHomeDirectory= os.homedir();
console.log(userHomeDirectory);

//UUID MODULE
//generira uniqe id

const uniqueId=uuidv4();
console.log(uniqueId);

//QUERYSTRING MODULE

//glavnoto url se sostoi do prasalniceto posle prasalniceto se pojavuva query parametar
//&&sort=ascending primer kje gi podeli po rastecki redosled
//https://www.anhoch.com/categories/telefoni-tableti-i-pametni-chasovnici/products?brand=&attribute=&toPrice=274980&inStockOnly=2&sort=priceHighToLow&perPage=20&page=1

const myQuerystring='brand=&attribute=&toPrice=274980&inStockOnly=2&sort=priceHighToLow&perPage=20&page=1';
const parseValues=querystring.parse(myQuerystring);
console.log(parseValues);

const sort=parseValues.sort;
console.log(sort);
const category=parseValues.category;
console.log(category);

//object null prototype znaci nema prototip bidejki globalniot objekt mu e protopip

const normalObject=Object.assign({},parseValues);
//avtomatski site prednosti odat vo prazniot objekt 
console.log(normalObject);

const noramlObject1={...parseValues};
console.log(noramlObject1);
//kje se dobijat dva posebni objekti 

//referance type i value type
//referenten tip 
let myName="Katerina"; //vo pozadina kreiram nova memoriska lokacija
let yourName=myName;
yourName="Maja";
console.log(myName);
console.log(yourName);
let myArray=["apple","banana","mango"]; //memoriska lokacija do taa niza
let yourArray=myArray; //ne se kreira nova memoriska lokacija samo e sozdaden pokazuvac, ako se smeni nesto vo prvoto avtomatski se menuva i vo vtoroto, 2 tipa na memorija stach i hip memorija
let yourArray1=[...myArray]; //kreira noma memoriska lokacija od istata vrednost, kopiranje na niza shallow copy ili ...(nez kako se vika) copy
myArray.push("orange");
console.log(myArray);
console.log(yourArray);
console.log(yourArray1);