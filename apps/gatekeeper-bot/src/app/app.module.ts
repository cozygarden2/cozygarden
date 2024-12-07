import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './update.telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TELEGRAM_BOT_TOKEN',
    })
  ],
  controllers: [AppController, AppUpdate],
  providers: [AppService],
})
export class AppModule {}
