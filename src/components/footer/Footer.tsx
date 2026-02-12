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
                <a href="https://www.linkedin.com/in/fernanda-paoleschi/" target="_blank" className="hover:opacity-75 transition-opacity">
                    <LinkedinLogoIcon size={48} className="bold" />
                </a>
                <a href="https://www.instagram.com/fernanda.paoleschi/" target="_blank" className="hover:opacity-75 transition-opacity">
                    <InstagramLogoIcon size={48} className="bold" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61564712594771" target="_blank" className="hover:opacity-75 transition-opacity">
                    <FacebookLogoIcon size={48} className="bold" />
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
