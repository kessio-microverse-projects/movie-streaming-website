const createApp = async (movieId) => {
    console.log(movieId);
    const formData = { item_id: "item20"}
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MqYDJtfDU0rHErulpT7W/likes', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
    })

    await response.text();  
}

export default createApp;