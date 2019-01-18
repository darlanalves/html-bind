import {NEW_LINE} from './constants';

export interface HtmlNode {
    name: string,
    type: string,
    children: HtmlNode[]
}

export class HtmlParser {
    private line = 0;
    private column: number = 0;
    private position = 0;
    private maxPosition = 0;

    constructor(private source: string) {
        this.maxPosition = source.length - 1;
    }

    get next() {
        return this.position < this.maxPosition ?
            this.source.charAt(this.position) :
            null;
    }

    get current() {
        return this.source.charAt(this.position);
    }

    get previous() {
        return this.source.charAt(this.position);
    }

    inc() {
        this.position++;

        if (this.previous === NEW_LINE) [
            this.line++;
            this.column = 0;
        ] else {
            this.column++;
        }
    }

    parse(): HtmlNode[] {
        return []
    }

    readUntil(char: string) {
        const buffer = [];
        while (this.next !== char && this.next !== null) {
            buffer.push(this.next);
        }
    }
}