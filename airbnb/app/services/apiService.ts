

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

    post: async function(url: string, data: any,accessToken?: string): Promise<any> {
     
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: data,
                headers: {
                    // "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>", 
                    // "Accept": "*/*",
                     "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`
                },
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