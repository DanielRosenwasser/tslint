class Members {
    get g() {
        return 1;
    }
    set s(o: any) {}

    public get publicG() {
        return 1;
    }
    public set publicS(o: any) {}
}

const obj = {
    get g() {
        return 1;
    }
};
