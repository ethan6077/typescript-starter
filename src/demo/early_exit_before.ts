const buildItemListResponse =
(isModified: boolean, consumerId: String, fetchContent: (cId: String) => String, formatContent: (c: String) => String[]) => {

  if (isModified === false) {
    if (consumerId !== null) {
      const content = fetchContent(consumerId)
      if (content === null) {
        console.log("Error message: xxxx")
        return "content is null"
      } else {
        const formattedContent = formatContent(content)
        if (formattedContent.length > 100) {
          return "too much to display"
        } else {
          return formattedContent
        }
      }
    } else {
      console.log("Error message: xxxx")
      return "consumerId is null"
    }
  } else {
    console.log("Info: xxxx")
    return "result is not modified!"
  }

}