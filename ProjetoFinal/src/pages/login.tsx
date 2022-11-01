import CampoTexto from "../components/CampoTexto"
import router, {useRouter} from "next/router"

export default function init() {
    return (
        <div className="flex items-center h-screen justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src="https://source.unsplash.com/random" className="h-screen w-full object-cover object-left-top"/>
            </div>
            <div className="m-10 w-full md:-1/2 lg:w-1/3">
                <CampoTexto label="E-mail" tipo="email" valor="teste"/>
                <CampoTexto label="Senha" tipo="password" valor="teste"/>
                <button className="bg-indigo-500 hover:bg-indigo-400 w-full rounded-lg px-4 py-3 text-white mt-6" onClick={() => router.push("/")}>Entrar</button>
            </div>
        </div>
    )
}