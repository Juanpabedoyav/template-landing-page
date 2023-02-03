import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { PortadaEbook } from '../../components/PortadaEbook'
export const EbookScreen = () => {
  return (
    <>
      <Header />
      <PortadaEbook />
      <Form text={'Descarga el E-book'} textButton={'DESCARGAR'} />
      <Footer />
    </>
  )
}
