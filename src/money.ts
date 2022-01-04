export class Money {
	public amount: number;

	equals(dollar: Money): boolean {
		return this.amount === dollar.amount;
	}
}
