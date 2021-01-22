// Телефонная книга
var phoneBook = {};
const addPhone = (name, phonesForAdd) => {
    if (phoneBook.hasOwnProperty(name)) {
        let currentPhonesForAdd =[].concat(phoneBook[name],phonesForAdd)
        // проверку на уникальность номеров :??
        phoneBook[name] = currentPhonesForAdd;
        return phoneBook;
    } else {
        phoneBook[name] = phonesForAdd;
        return phoneBook;
    }
}

const showPhones = () => {
   let showArray = []
   for(key in phoneBook){
       if(phoneBook[key].length > 0){
           const showString = key + ":" + " " + (phoneBook[key].join(", "))
           showArray.unshift(showString)
       }
   }
     return showArray
}

const removePhone = (phones) => {
    const keys = Object.keys(phoneBook); // [ 'Ivan', 'Alex' ]
    for (var key of keys) {
        let arr = [].concat(phoneBook[key])
        arr.forEach((elem,i)=>{
       if( elem.includes(phones) ){
        arr.splice(i,1)
          }
        return true 
        })
phoneBook[key]=arr
    }
}
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let arr = command.split(` `);
    let commandName = arr[0];
    
    if (commandName === `ADD`) {
        let phones = arr.slice(2)
         let foo = phones.join().split(",")
         // console.log(foo + " - foo")
        const name = arr[1]
        addPhone(name, foo)
    }
    if (commandName === `REMOVE_PHONE`) {
        let removePhones = arr.slice(1).toString().split(" ")
        removePhone(removePhones)
        return true
    }
    if (commandName === `SHOW`) {
        return showPhones()
    }

};