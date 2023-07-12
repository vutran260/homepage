import { useEffect, useState } from "react";
export const StringToHtml = () =>{
  const [html, setHtml] = useState<string>("")
  useEffect(() => {
    setHtml("<div >Html stored as a string</div>")
  }, [html])
  return(
      <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}