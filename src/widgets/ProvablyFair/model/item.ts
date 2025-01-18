import { IBody, IListItem } from "./type"

export const listItems: IListItem[] = [
    {
        id: '1',
        title: 'fair_list.review',
    },
    {
        id: '2',
        title: 'fair_list.implementation'
    },
    {
        id: '3',
        title: 'fair_list.conversion'
    },
    {
        id: '4',
        title: 'fair_list.game_events'
    },
    {
        id: '5',
        title: 'fair_list.decoding'
    },
    {
        id: '6',
        title: 'fair_list.calculation'
    }
]

export const listGames: string[] = [
    "fair_footer_select.mine",
    "fair_footer_select.game"
]

export const code: string = `
public generateServerSeed = (clientSeed: string | null = null): string => {
    let server_seed: string = this.Util.getRandomString(24);
    if (clientSeed) server_seed += \`@\${clientSeed}\`;

    return server_seed;
}

async retrieveRandomHashv2(n, gameHash) {
    try {
        const resp = await this.Request.post('https://api.random.org/json-rpc/2/invoke', {
            body: {
                jsonrpc: '2.0',
                method: 'generateSignedStrings',
                params: {
                    apiKey: this.Config.random.apiKey,
                    n,
                    length: 20,
                    characters: 'abcdefghijklmnopqrstuvwxyz0123456789',
                    replacement: false,
                    userData: gameHash,
                },
                id: 'skinwager',
            },
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        });

        return resp.result;
    } catch (e) {
        this.Logger.error(e);
        return Promise.reject({ code: this.Error.InternalError, message: 'INTERNAL_ERROR' });
    }
}
`

// Body data
export const bodyData: IBody[] = [
    {
        id: "review",
        title: "Review",
        contents: [
            "This is for Review section"
        ]
    },
    {
        id: "implementation",
        title: "Implementation",
        contents: [
            "This is for Implementation section"
        ]
    },
    {
        id: "conversion",
        title: "Conversion",
        contents: [
            "This is for Conversion section"
        ]
    },
    {
        id: "game-events",
        title: "Game events",
        contents: [
            "This is for Game events section"
        ]
    },
    {
        id: "decoding",
        title: "Decoding",
        contents: [
            "This is for Decoding section"
        ]
    },
    {
        id: "calculation",
        title: "Calculation",
        contents: [
            "This is for Calculation section"
        ]
    }
]