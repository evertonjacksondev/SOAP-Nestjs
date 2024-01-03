import { Inject, Injectable } from "@nestjs/common";
import { Client } from "nestjs-soap";

@Injectable()
export class SigepWebService {

  constructor(
    @Inject('SIGEPWEB')
    private readonly mySoapClient: Client,
  ) { }

  async rechargeLabels(method: string = 'SEDEX') {

    const methods = {
      SEDEX: 124849,
      PAC: 124884
    }
    const credentials = {
      tipoDestinatario: 'C',
      usuario: process.env.usuario,
      senha: process.env.senha,
      identificador: process.env.identificador,
      idServico: methods[method],
      qtdEtiquetas: Number(process.env.qtdEtiquetas),
    }

    await this.mySoapClient.solicitaEtiquetasAsync(credentials)

  }
}