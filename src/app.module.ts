import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeudorModule } from './deudor/deudor.module';
import { ClienteIndividualModule } from './cliente_individual/cliente_individual.module';
import { ClienteEmpresaModule } from './cliente_empresa/cliente_empresa.module';
import { CarteraModule } from './cartera/cartera.module';
import { CobradorModule } from './cobrador/cobrador.module';
import { CreditoModule } from './credito/credito.module';
import { AbonoModule } from './abono/abono.module';
import { AccionCobroModule } from './accion_cobro/accion_cobro.module';
import { SolicitudCobranzaModule } from './solicitud_cobranza/solicitud_cobranza.module';
import { UsuarioModule } from './usuario/usuario.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from './config';
import { enviroments } from './environments';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    DeudorModule,
    ClienteIndividualModule,
    ClienteEmpresaModule,
    CarteraModule,
    CobradorModule,
    CreditoModule,
    AbonoModule,
    AccionCobroModule,
    SolicitudCobranzaModule,
    DatabaseModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
