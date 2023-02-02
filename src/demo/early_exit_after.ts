const buildItemListResponseSimple =
(isModified: boolean, consumerId: String, fetchContent: (cId: String) => String, formatContent: (c: String) => String[]) => {

  if (isModified === false) {
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