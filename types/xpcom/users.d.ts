declare namespace _ZoteroTypes {
    interface Users {
        init(): Promise<void>;
        getCurrentUserID(): number;
        setCurrentUserID(val: number): Promise<void>;
        getCurrentUsername(): string;
        setCurrentUsername(val: string): Promise<void>;
        getCurrentName(): string;
        setCurrentName(name: string): Promise<void>;
        getLocalUserKey(): string;
        getName(): string;
        setName(userID: number, name: string): Promise<void>;
    }
}
