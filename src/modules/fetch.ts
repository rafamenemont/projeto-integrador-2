export class Fetch {
    private _url: string
    constructor(url: string) {
        this._url = url
    }

    async get() {
        return await fetch(this._url).then(
            async response => { return await response.json() }
        ).catch(
            err => { return err }
        )
    }

    async post(body: {}) {
        return await fetch(this._url, { method: "POST", body: JSON.stringify(body) }).then(
            async response => { return await response.json() }
        ).catch(
            err => { return err }
        )
    }
}