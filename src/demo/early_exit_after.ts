
// Second best solution, requires minimal changes given OO project
const buildItemListResponseSimple =
(isModified: boolean, consumerId: String, fetchContent: (cId: String) => String, formatContent: (c: String) => String[]) => {

  if (isModified === true) {
    console.log("Info: xxxx")
    return "result is not modified!" 
  }

  if (consumerId === null) {
    console.log("Error message: xxxx")
    return "consumerId is null"
  }

  const content = fetchContent(consumerId)
  if (content === null) {
    console.log("Error message: xxxx")
    return "content is null"
  }

  const formattedContent = formatContent(content)
  if (formattedContent.length > 100) {
    return "too much to display"
  }

  return formattedContent

}

/* Best approach raised by Jing 
* Go fully PF, for example
* 1. introduce java.util.Optional
* 2. remove branches Option
* The only concern would be the time cost for a given OO project
*/

/* To further improve this code
* Stev mentioned we can write more pure functions to replace the small code blocks above
* e.g. pure function checkIfIsModified() 
*/
