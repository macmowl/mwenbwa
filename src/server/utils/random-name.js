const {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
} = require("unique-names-generator");

exports.genRandName = async () => {
    const randName = await uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
    });
    return randName;
};
