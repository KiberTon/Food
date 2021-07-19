const postData = async (URL, data) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(URL) {
    let res = await fetch(URL);

    if (!res.ok) {
        throw new Error(`Could not fetch ${URL}, status: ${res.status}`);
    }

    return await res.json();
}

export {
    postData
};
export {
    getResource
};