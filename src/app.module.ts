import { Module } from '@nestjs/common';
import { SoapModule } from 'nestjs-soap';

@Module({
  imports: [
    SoapModule.register(
      { clientName: 'SIGEPWEB', uri: `https://${process.env.TYPE_ENVIRONMENT}.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl` },
    ),
  ],
})
export class AppModule { }