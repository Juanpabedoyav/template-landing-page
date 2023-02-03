import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { PortadaEbook } from '../../components/PortadaEbook'
import { CallAction } from '../../components/CallAction'

export const EbookScreen = () => {
  return (
    <>
      <Header />
      <PortadaEbook />
      <CallAction time={10000} />
      <Form text={'Descarga el E-book'} textButton={'DESCARGAR'} />
      <Footer />
    </>
  )
}
