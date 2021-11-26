export class ICP {
    private constructor(private e8s: bigint) {}

    public static fromE8s(amount: bigint): ICP {
        return new ICP(amount);
    }

    public toE8s(): bigint {
        return this.e8s;
    }
}
