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
            })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(JSON.stringify(data));
                }
                return data;
            })
            .then((json) => {
                resolve(json);
            })
            .catch(error => {
                reject(error);
            });
        });
    },

    post: async function(url: string, data: any, token?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const headers: Record<string, string> = {
                "Accept": "application/json",
            };

            if (!(data instanceof FormData)) {
                headers["Content-Type"] = "application/json";
            }

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            // If data is FormData and contains amenities, ensure it's properly formatted
            if (data instanceof FormData) {
                const amenities = data.get('aminities');
                if (amenities) {
                    try {
                        // If amenities is a string (JSON), parse it to ensure it's valid
                        const parsedAmenities = typeof amenities === 'string' ? JSON.parse(amenities) : amenities;
                        // Ensure amenities is an array of IDs
                        if (Array.isArray(parsedAmenities)) {
                            data.set('aminities', JSON.stringify(parsedAmenities.map(a => a.id || a)));
                        }
                    } catch (e) {
                        console.error('Error processing amenities:', e);
                    }
                }
            }

            const body = data instanceof FormData ? data : JSON.stringify(data);

            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                headers,
                body: body
            })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(JSON.stringify(data));
                }
                return data;
            })
            .then((json) => {
                resolve(json);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}