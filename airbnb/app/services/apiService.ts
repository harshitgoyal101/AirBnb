export const apiService = {
    get: async function (url: string, token?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const headers: Record<string, string> = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers
            }).then(response => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch(error => {
                reject(error)
            })
        });
    },

    post: async function(url: string, data: any, token?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const headers: Record<string, string> = {
                "Content-Type": "application/json", 
                "Accept": "application/json",
            };

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
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