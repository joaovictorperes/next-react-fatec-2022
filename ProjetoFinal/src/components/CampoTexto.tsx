    interface AutProps {
        label: string
        valor: any
        tipo?: 'text' | 'email' | 'password'
        // valorAlterou: (novoValor:any) => void
    }

    export default function init(props: AutProps) {
        return (
            <div className="flex flex-col mt-4">
                <label>{props.label}</label>
                <input type={props.tipo ?? "text"} className="rounded-lg bg-gray-200 border focus:bg-white focus:outline-none focus:border-blue-500 px-4 py-3" />
            </div>
        )
    }