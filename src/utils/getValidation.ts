import {Country, PhoneExample} from '../components/Registration/enum';

export const getValidation = (country?: string) => ({
    emailValidation: {
        required: true,
        validate: (value: string) => {
            const badValue =
                value.split('@').length !== 2 ||
                /[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.@]/.test(value);

            if (badValue) return 'Please enter a valid email address (example@email.com)';

            const name = value.split('@')[0];
            const domain = value.split('@')[1];

            const badName =
                /\W\W/.test(name) ||
                /\d+$/.test(name) ||
                !/^.{2,64}$/.test(name) ||
                /[^a-zA-Z0-9]/.test(name[0]) ||
                name.slice(name.lastIndexOf('.') + 1).length < 1;

            const badDomain =
                domain.length > 255 ||
                domain.split('.').length < 2 ||
                domain.split('.').length > 3;

            const domainFirstPart = domain.slice(0, domain.lastIndexOf('.'));
            const domainSecondPart = domain.slice(domain.lastIndexOf('.') + 1);

            const badDomainFirstPart =
                /^[0-9.]+$/.test(domainFirstPart) ||
                !/^[a-zA-Z0-9-.]{2,}$/.test(domainFirstPart) ||
                domainFirstPart.split('-').length > 2 ||
                domainFirstPart.startsWith('-') ||
                domainFirstPart.endsWith('-') ||
                domainFirstPart.split('').some((s) => s === '.');

            const badDomainSecondPart = !/^[a-z]{2,4}$/.test(domainSecondPart);

            const anyBad =
                badName || badDomain || badDomainFirstPart || badDomainSecondPart;

            return anyBad ? 'Please enter a valid email address (example@email.com)' : true;
        },
    },

    phoneValidation: {
        required: true,
        validate: (value: string) => {

            if (country === Country.UNITED_KINGDOM) {
                const currectPhone = /^\d{10}$/.test(value)

                return currectPhone ? true : `Please enter your Phone number. Example: ${PhoneExample.UNITED_KINGDOM}`
            } else if (country === Country.AUSTRIA) {
                const currectPhone = /^\d{9}$/.test(value)

                return currectPhone ? true : `Please enter your Phone number. Example: ${PhoneExample.AUSTRIA}`
            } else {
                const currectPhone = /^\d{10}$/.test(value)

                return currectPhone ? true : `Please enter your Phone number. Example: ${PhoneExample.CANADA}`
            }
        }
    },

    personalDataName: {
        required: true,
        validate: (value: string) => {
            value = value.trim();

            const badMaxLengthValue = value.length > 50;
            const badMinLengthValue = value.length < 2;
            const isNumber = /\d+/.test(value)

            if (badMinLengthValue || badMaxLengthValue) {
                return 'Value must be at least 2 and not more than 50 characters.';
            } else if (isNumber) {
                return 'The name must contain only letters.'
            } else return true;
        },
    }
});
