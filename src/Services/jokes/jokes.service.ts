import { Injectable } from '@nestjs/common';
import { Joke } from '../../Entities/joke.entity';

@Injectable()
export class JokesService {
    private jokes: Joke[] = [
        { id: 1, type: 'test type 1', content: 'test content 1' },
        { id: 2, type: 'test type 2', content: 'test content 2' },
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