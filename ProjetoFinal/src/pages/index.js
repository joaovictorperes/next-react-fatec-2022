import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Teste da página inicial">
      <p>Teste de conteúdo para página</p>
    </Layout>
  )
}

{/* <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center items-center">
    <h1 className="text-3xl font-bold">
    Hello world!
    </h1>
  
    <Cabecalho titulo="Pagina inicial" subtitulo="Subtítulo da pagina inicial" />

    <Cabecalho titulo="Outra pagina" subtitulo="Subtítulo da pagina" />

    <MenuItem url="/" texto="Incial" icone={iconeCasa}></MenuItem>
    
    <MenuItem url="/" texto="Ajuda" icone={iconeAjuda}></MenuItem>
</div> */}