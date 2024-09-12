import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const uniqueNameGenerator = () => {
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); 
};

export default uniqueNameGenerator;