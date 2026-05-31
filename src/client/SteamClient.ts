import SteamUser from "steam-user";

export class SteamClient {
    private client: any;

    constructor() {
        this.client = new SteamUser();
    }

    async login(
        accountName: string,
        password: string
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.logOn({
                accountName,
                password
            });

            this.client.once("loggedOn", () => {
                resolve();
            });

            this.client.once("error", (err: Error) => {
                reject(err);
            });
        });
    }

    getSteamID(): string | null {
        return this.client.steamID?.getSteamID64() ?? null;
    }

    logout(): void {
        this.client.logOff();
    }
}