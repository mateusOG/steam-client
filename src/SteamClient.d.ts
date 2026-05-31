export declare class SteamClient {
    private client;
    constructor();
    login(accountName: string, password: string): Promise<void>;
    getSteamID(): string | null;
    logout(): void;
}
