import { Module } from '@nestjs/common';
import { JokesController } from 'src/Controllers/jokes/jokes.controller';
import { JokesService } from 'src/Services/jokes/jokes.service';

@Module({
    controllers: [JokesController],
    providers: [JokesService],
})
export class JokesModule { }
