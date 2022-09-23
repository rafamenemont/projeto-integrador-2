const baseURL = "http://localhost/walletServer/api/routes/"
export class Fetch<T> {
    private _url: string
    constructor(url: string) {
        this._url = baseURL + url
    }

    async get() {
        return await fetch(this._url).then(
            async response => { return await response.json() }
        ).catch(
            err => { return err }
        )
    }

    async post(body: T) {
        return await fetch(this._url, { method: "POST", body: JSON.stringify(body) }).then(
            async response => { return { status: response.status, data: await response.json() } }
        ).catch(
            err => { return err }
        )
    }
}