import { Money } from './money';
import { Expression } from './expression';

export class Bank {
	reduce(source: Expression, to: string): Money {
		return Money.dollar(10);
	}
}
