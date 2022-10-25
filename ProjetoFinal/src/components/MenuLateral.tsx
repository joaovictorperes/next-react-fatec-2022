import MenuItem from "./MenuItem"
import {iconeAjuda, iconeCasa, ajustes} from "./icons/index"

export default function MenuLateral() {
    return (
        <aside>
            <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col items-center justify-center">
                LOGO
            </div>
            <ul>
                <MenuItem url="/" texto="Inicial" icone={iconeCasa}></MenuItem>
                <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda}></MenuItem>
                <MenuItem url="ajustes" texto="Ajustes" icone={ajustes}></MenuItem>
            </ul>
        </aside>
    )
}