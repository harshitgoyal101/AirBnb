export const apiService = {
    get: async function (url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch(error => {
                reject(error)
            })
        });
    },

    post: async function(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json",
                },
                body: data
            }).then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch(error => {
                reject(error)
            })
        });
    }
}