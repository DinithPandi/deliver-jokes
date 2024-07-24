import { Injectable } from '@nestjs/common';
import { Joke } from '../../Entities/joke.entity';

@Injectable()
export class JokesService {
    private jokes: Joke[] = [
        { id: 1, type: 'knock-knock', content: 'Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!' },
    ];

    getRandomJoke(type?: string): Joke {
        const filteredJokes = type ? this.jokes.filter(joke => joke.type === type) : this.jokes;
        const randomIndex = Math.floor(Math.random() * filteredJokes.length);
        return filteredJokes[randomIndex];
    }

    getJokeTypes(): string[] {
        return [...new Set(this.jokes.map(joke => joke.type))];
    }
}