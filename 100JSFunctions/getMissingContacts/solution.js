function getMissingContacts(contactsMap) {
    const missingContactsMap = new Map();

    for (const user of contactsMap.keys()) {
        missingContactsMap.set(user, []);
    } 

    for (const currentUser of contactsMap.keys()) {
        for (const user of contactsMap.keys()) {
            const hasCurrentUserAsContact = contactsMap.get(user).includes(currentUser);
            if (hasCurrentUserAsContact === false && (user !== currentUser)) {
                missingContactsMap.get(user).push(currentUser);
            }
        }
    }

    return missingContactsMap;
}

export { getMissingContacts };
