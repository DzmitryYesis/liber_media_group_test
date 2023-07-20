export type RegistrationRequestBodyType = {
    ApiKey: string
    ApiPassword: string
    CampaignID: string
    FirstName: string
    LastName: string
    Email: string
    PhoneNumber: string
    Description: string
    Page: string
    IP: string
}

export function registrationRequest(
    body: RegistrationRequestBodyType
) {

    return fetch('https://tracker.pablo.partners/repost.php?act=register', {
        method: 'POST',
        body: JSON.stringify(body),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response: Response) => {
        const {status} = response;
        return Promise.resolve(response.json()).then((json) => {
            return {json, status};
        });
    });
}
