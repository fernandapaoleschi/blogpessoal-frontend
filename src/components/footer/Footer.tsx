import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()
  return (
    <div className="flex justify-center bg-indigo-900 text-white py-4">
        <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
                Blog Pessoal - Copyright © {data}
            </p>
            <p className="text-lg"> Acesse nossas redes sociais! </p>
            <div className="flex gap-2">
                <FacebookLogoIcon size={48} className="bold" />
                <InstagramLogoIcon size={48} className="bold" />
                <LinkedinLogoIcon size={48} className="bold" />
            </div>
        </div>
      
    </div>
  )
}

export default Footer
